export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-[80vh] px-6">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Tworzę <span className="text-cyan-400">nowoczesne aplikacje</span>
      </h1>

      <p className="mt-6 text-zinc-400 max-w-xl">
        React • Java • Game Dev  
        Aktualnie rozwijam projekt Dungeon Crawl.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-lg font-medium">
          Zobacz projekty
        </button>

        <button className="px-6 py-3 border border-zinc-700 hover:border-cyan-400 transition rounded-lg">
          Kontakt
        </button>
      </div>
    </section>
  );
}