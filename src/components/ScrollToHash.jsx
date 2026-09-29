import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map());

  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    const saved = positions.current.get(location.key);
    let hash = location.hash.slice(1);
    try { hash = decodeURIComponent(hash); } catch { /* Keep malformed anchors literal. */ }
    const restore = () => {
      if (navigationType === "POP" && saved) {
        window.scrollTo({ left: saved.x, top: saved.y, behavior: "instant" });
      } else if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "instant", block: "start" });
      } else {
        window.scrollTo({ left: 0, top: 0, behavior: "instant" });
      }
    };
    restore();
    // Retry as images and animated route content change the scroll height.
    const observer = new ResizeObserver(restore);
    observer.observe(document.body);
    const stopRestoring = () => observer.disconnect();
    window.addEventListener("wheel", stopRestoring, { passive: true });
    window.addEventListener("touchstart", stopRestoring, { passive: true });
    window.addEventListener("keydown", stopRestoring);
    const timeout = window.setTimeout(stopRestoring, 1500);
    const positionsMap = positions.current;
    const remember = () => positionsMap.set(location.key, { x: window.scrollX, y: window.scrollY });
    remember();
    window.addEventListener("scroll", remember, { passive: true });
    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
      window.removeEventListener("scroll", remember);
      window.removeEventListener("wheel", stopRestoring);
      window.removeEventListener("touchstart", stopRestoring);
      window.removeEventListener("keydown", stopRestoring);
    };
  }, [location.key, location.hash, navigationType]);

  return null;
}
