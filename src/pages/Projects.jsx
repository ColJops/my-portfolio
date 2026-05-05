import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const mainProjects = projects.filter(p => p.category !== "course");
  const courseProjects = projects.filter(p => p.category === "course");

  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      {/* 🔥 MOJE PROJEKTY */}
      <h2 className="text-2xl font-semibold mb-6">Moje projekty</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {mainProjects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>

      {/* 🔥 SEPARATOR */}
      <div className="my-16 border-t border-zinc-800"></div>

      {/* 🔥 KURS */}
      <h2 className="text-2xl font-semibold mb-6 text-zinc-400">
        Projekty z kursu Full Stack Web Developer
      </h2>

      <div className="grid md:grid-cols-2 gap-6 opacity-80">
        {courseProjects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}