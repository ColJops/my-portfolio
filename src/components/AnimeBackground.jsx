import animeBg from "../assets/gfx/animeback.jpg"; 

export default function AnimeBackground() {
  return (
    <>
      {/* 🖼️ TŁO */}
      <div
        className="fixed inset-0 -z-40"
        style={{
          backgroundImage: `url(${animeBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.6) contrast(1.1)",
        }}
      />

      {/* 🌌 OVERLAY (glow + gradient) */}
      <div className="fixed inset-0 -z-30 pointer-events-none animate-glowOverlay 
        bg-[radial-gradient(circle_at_70%_40%,rgba(34,211,238,0.12),transparent_60%),linear-gradient(to_top,rgba(10,10,15,0.9),rgba(10,10,15,0.3))]" />

      {/* ✨ DUST */}
      <div className="fixed inset-0 -z-20 pointer-events-none opacity-5 animate-dust 
        bg-[radial-gradient(white_1px,transparent_1px)] [background-size:80px_80px]" />
    </>
  );
}