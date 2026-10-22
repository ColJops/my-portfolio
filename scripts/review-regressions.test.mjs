import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import vm from "node:vm";
import { nextVisitCount, supportedLanguage } from "../src/utils/storage.js";
import { translations } from "../src/i18n/translations.js";

const source = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("new routes start at top, POP restores positions, and contact anchors scroll", () => {
  const effects = [], listeners = new Map(), positions = { current: new Map() };
  let location = { key: "list", hash: "" }, navigationType = "PUSH", anchorCalls = 0;
  const window = {
    history: { scrollRestoration: "auto" }, scrollX: 0, scrollY: 600,
    scrollTo({ left, top }) { this.scrollX = left; this.scrollY = top; },
    addEventListener(name, fn) { listeners.set(name, fn); },
    removeEventListener(name) { listeners.delete(name); },
    setTimeout() { return 1; }, clearTimeout() {},
  };
  const context = vm.createContext({
    window, useRef: () => positions, useLayoutEffect: (fn) => effects.push(fn),
    useLocation: () => location, useNavigationType: () => navigationType,
    ResizeObserver: class { observe() {} disconnect() {} },
    document: { body: {}, getElementById: (id) => id === "kontakt" ? { scrollIntoView() { anchorCalls++; } } : null },
  });
  vm.runInContext(source("src/components/ScrollToHash.jsx").replace(/^import .*;\r?\n/gm, "").replace("export default ", ""), context);
  const render = () => { effects.length = 0; vm.runInContext("ScrollToHash()", context); return effects[1](); };
  let cleanup = render();
  assert.equal(window.scrollY, 0);
  window.scrollY = 700; listeners.get("scroll")();
  // The new, shorter document may clamp scroll before effect cleanup.
  window.scrollY = 50; cleanup();
  location = { key: "details", hash: "" }; cleanup = render();
  assert.equal(window.scrollY, 0);
  cleanup(); location = { key: "list", hash: "" }; navigationType = "POP"; cleanup = render();
  assert.equal(window.scrollY, 700);
  cleanup(); location = { key: "contact", hash: "#kontakt" }; navigationType = "PUSH"; cleanup = render();
  assert.equal(anchorCalls, 1);
  cleanup();
});

test("storage access and writes may throw without breaking state; visits count once", () => {
  for (const mode of ["access", "read", "write", "normal"]) {
    let writes = 0;
    const storage = {
      getItem() { if (mode === "read") throw Error("SecurityError"); return "4"; },
      setItem() { writes++; if (mode === "write") throw Error("QuotaExceededError"); },
    };
    const window = { get localStorage() { if (mode === "access") throw Error("SecurityError"); return storage; } };
    const context = vm.createContext({ window });
    vm.runInContext(source("src/utils/storage.js").replaceAll("export ", ""), context);
    vm.runInContext(source("src/utils/visits.js").replace(/^import .*;\r?\n/, "").replace("export ", ""), context);
    assert.equal(vm.runInContext("visits", context), ["read", "access"].includes(mode) ? 1 : 5);
    for (let i = 0; i < 3; i++) vm.runInContext("visits", context);
    assert.equal(writes, mode === "access" ? 0 : 1);
  }
});

test("invalid persisted values fall back to supported language and a finite visit count", () => {
  for (const value of [null, "de", "", "EN"]) assert.equal(supportedLanguage(value), "pl");
  assert.equal(supportedLanguage("en"), "en");
  for (const value of ["NaN", "Infinity", "-1", "1.5", "garbage", String(Number.MAX_SAFE_INTEGER)]) {
    assert.equal(nextVisitCount(value), 1);
  }
  assert.equal(nextVisitCount("4"), 5);
});

test("all literal translation references exist in PL and EN", () => {
  const walk = (dir) => readdirSync(new URL(`../${dir}`, import.meta.url), { withFileTypes: true })
    .flatMap((entry) => entry.isDirectory() ? walk(`${dir}/${entry.name}`) : [`${dir}/${entry.name}`]);
  for (const path of walk("src").filter((path) => /\.[jt]sx?$/.test(path))) {
    for (const [, key] of source(path).matchAll(/\bt\("([^"]+)"\)/g)) {
      for (const lang of ["pl", "en"]) assert.notEqual(key.split(".").reduce((o, k) => o?.[k], translations[lang]), undefined, `${lang}: ${key}`);
    }
  }
});

test("MatrixRain starts after becoming visible and stops when hidden or unmounted", () => {
  let effect, resize, cleanup, drawings = 0, nextId = 0;
  const frames = new Map();
  const canvas = { offsetWidth: 0, offsetHeight: 0, getContext: () => ({ fillRect() {}, fillText() { drawings++; } }) };
  const context = vm.createContext({
    useRef: () => ({ current: canvas }), useEffect: (fn) => { effect = fn; },
    document: { hidden: false, addEventListener() {}, removeEventListener() {} },
    ResizeObserver: class { constructor(fn) { resize = fn; } observe() {} disconnect() {} },
    requestAnimationFrame(fn) { frames.set(++nextId, fn); return nextId; },
    cancelAnimationFrame(id) { frames.delete(id); },
  });
  const component = source("src/components/MatrixRain.jsx").replace(/^import .*;\r?\n/, "").replace("export default ", "");
  vm.runInContext(component.slice(0, component.lastIndexOf("  return (")) + "}\nMatrixRain({});", context);
  cleanup = effect();
  assert.equal(frames.size, 0);
  canvas.offsetWidth = 160; canvas.offsetHeight = 900; resize();
  for (let i = 0; i < 10; i++) { const [id, fn] = frames.entries().next().value; frames.delete(id); fn(); }
  assert.ok(drawings > 0);
  canvas.offsetWidth = 0; canvas.offsetHeight = 0; resize();
  assert.equal(frames.size, 0);
  canvas.offsetWidth = 160; canvas.offsetHeight = 900; resize();
  assert.equal(frames.size, 1);
  cleanup(); assert.equal(frames.size, 0);
});
