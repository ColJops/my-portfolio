export default function Projects() {
  const projects = [
    {
      name: "Dungeon Crawl",
      desc: "Gra RPG napisana w Javie z systemem zapisu i AI przeciwników",
      link: "#",
    },
    {
      name: "Portfolio",
      desc: "Nowoczesna strona w React + Tailwind",
      link: "#",
    },
  ];

  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projekty</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-zinc-400 mt-2">{p.desc}</p>

            <a
              href={p.link}
              className="inline-block mt-4 text-cyan-400 hover:underline"
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}