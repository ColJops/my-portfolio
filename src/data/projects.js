import dungeonImg from "../assets/projects/dungeoncrawl.png";
import portfolioImg from "../assets/projects/portfolio.webp";
import legendImage from "../assets/projects/legends.png";
import fleetsImage from "../assets/projects/fleets.png";
import cybersecurityImage from "../assets/projects/cybersecurity.png";

export const projectStatusOrder = ["development", "updating", "completed"];

export const projects = [
  {
    id: 1,
    translationKey: "dungeonCrawl",
    status: "completed",
    link: "https://github.com/ColJops/DemoEngine",
    tech: ["Java", "JavaFX", "AI"],
    image: dungeonImg,
    github: {
      owner: "ColJops",
      repo: "DemoEngine",
    },
  },
  {
    id: 2,
    translationKey: "portfolio",
    status: "updating",
    link: "https://github.com/ColJops/my-portfolio",
    tech: ["React", "Tailwind CSS"],
    image: portfolioImg,
    github: {
      owner: "ColJops",
      repo: "my-portfolio",
    },
  },
  {
    id: 3,
    translationKey: "battleships",
    link: "https://github.com/ColJops/Battleships",
    tech: ["Python"],
    category: "course",
    github: {
      owner: "ColJops",
      repo: "Battleships",
    },
  },
  {
    id: 4,
    translationKey: "tvStories",
    link: "https://github.com/ColJops/tv_stories",
    tech: ["Python", "Flask"],
    category: "course",
    github: {
      owner: "ColJops",
      repo: "tv_stories",
    },
  },
  {
    id: 5,
    translationKey: "askMate",
    link: "https://github.com/ColJops/askmate",
    tech: ["Python", "Flask", "HTML", "CSS"],
    category: "course",
    github: {
      owner: "ColJops",
      repo: "askmate",
    },
  },
  {
    id: 6,
    translationKey: "supersprinter3000",
    link: "https://github.com/ColJops/supersprinter3000",
    tech: ["Java"],
    category: "course",
    github: {
      owner: "ColJops",
      repo: "supersprinter3000",
    },
  },
  {
    id: 7,
    translationKey: "elProyecteGrande",
    link: "https://github.com/ColJops/elproyectegrande",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    category: "course",
    github: {
      owner: "ColJops",
      repo: "elproyectegrande",
    },
  },
  {
    id: 8,
    translationKey: "legends",
    status: "development",
    link: "https://github.com/ColJops/legends",
    tech: [
      "Java 24+",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST API",
      "Tailwind CSS",
    ],
    image: legendImage,
    github: {
      owner: "ColJops",
      repo: "legends",
    },
  },
  {
    id: 9,
    translationKey: "fleets",
    link: "https://github.com/ColJops/Fleets",
    tech: ["Unity"],
    status: "development",
    image: fleetsImage,
    github: {
      owner: "ColJops",
      repo: "Fleets",
    },
  },
  {
    id: 10,
    translationKey: "cybersecurity",
    link: "https://github.com/ColJops/cybersecurity",
    tech: ["Cybersecurity"],
    status: "development",
    image: cybersecurityImage,
    github: {
      owner: "ColJops",
      repo: "cybersecurity",
    },
  },
];