import { useEffect, useRef } from "react";

export default function MatrixRain({ side = "left" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    const fontSize = 16;
    let drops = [];

    const chars = "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let raf = null;
    let frame = 0;

    const draw = () => {
      frame++;

      // 🔥 SPOWOLNIENIE (kluczowe)
      if (frame % 2 !== 0) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];

        // 🔥 CYAN + PURPLE MIX
        ctx.fillStyle = Math.random() > 0.9
          ? "#a855f7"   // purple
          : "#22d3ee";  // cyan

        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > h && Math.random() > 0.985) {
          drops[i] = 0;
        }

        drops[i] += 0.6; // 🔥 WOLNIEJSZE OPADANIE
      }

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      if (raf !== null) cancelAnimationFrame(raf);
      raf = null;
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      drops = Array(Math.ceil(w / fontSize)).fill(1);
      frame = 0;
      if (w > 0 && h > 0 && !document.hidden) {
        raf = requestAnimationFrame(draw);
      }
    };

    const observer = new ResizeObserver(onResize);
    observer.observe(canvas);
    document.addEventListener("visibilitychange", onResize);
    onResize();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onResize);
    };
  }, []);

  return (
    <div
      className={`hidden xl:block fixed top-0 ${
        side === "left" ? "left-0" : "right-0"
      } h-full w-[160px] pointer-events-none`}
    >
      {/* 🔥 GRADIENT FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      {/* 🔥 CANVAS */}
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-25 blur-[0.5px]"
      />
    </div>
  );
}
