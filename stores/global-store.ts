import { defineStore } from "pinia";

interface socialsInterface {
  type: string;
  title: string;
  link: string;
}
interface languagesInterface {
  language: string;
  knowledge: 0 | 12.5 | 25 | 37.5 | 50 | 62.5 | 75 | 87.5 | 100;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Native";
}
interface projectsInterface {
  title: string;
  description: string;
  tech: string;
  links: {
    github: string;
    live: string;
  };
  color: string;
}

export const useGlobalStore = defineStore("global-store", () => {
  const avatar = ref<string>("/avatar.jpg");
  const firstName = ref<string>("Szymon");
  const lastName = ref<string>("Skałecki");
  const fullName = computed(() => `${firstName.value} ${lastName.value}`);
  const profession = ref<string>("Junior Full Stack Developer");
  const description = ref<string>(
    "I am a junior full stack developer and I believe that creativity knows no limits, and every pixel tells a story."
  );
  const socials = ref<socialsInterface[]>([
    {
      type: "GitHub",
      title: "/S1mon009",
      link: "https://github.com/s1mon009",
    },
    {
      type: "LinkedIn",
      title: "/Szymon Skałecki",
      link: "https://github.com/s1mon009",
    },
  ]);
  const resume = ref<string>("/resume.pdf");

  const skills = ref<string[]>([
    "Next.js",
    "React.js",
    "Vue.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "Node",
    "Express.js",
    "Git",
    "Redux",
    "React router",
    "Tanstack query",
    "Python",
    "Flask",
    "PHP",
    "jQuery",
    "Vite",
    "Vitest",
    "Cypress",
    "MongoDB",
    "Mongoose",
    "Supabase",
    "Postman",
    "Figma",
    "Gimp",
    "Canva",
    "Notion",
    "PostgreSQL",
    "SQL",
    "Netlify",
    "Vercel",
    "MUI",
    "Shadcn/ui",
    "NPM",
  ]);

  const languages = ref<languagesInterface[]>([
    { language: "Polish", knowledge: 100, level: "Native" },
    { language: "English", knowledge: 50, level: "B1" },
  ]);

  const information = ref<string[]>(["Cat. B driving license"]);

  const about = ref<string>(
    "I am a full stack developer with a passion for creating visual experiences that captivate and inspire. My adventure with design began just before university and I fell in love with the creative process of bringing ideas to life. | When I'm not designing, I'm exploring new technologies, practicing new skills, or indulging in my love of reading. I believe that creative inspiration can be found everywhere and I am always looking for new ways to expand my horizons."
  );

  const projects = ref<projectsInterface[]>([
    {
      title: "React-reuse",
      description:
        "🚀 React-Reuse: A collection of reusable React hooks and utilities to streamline development with React. Enhance your projects with modular, efficient, and well-tested code snippets that you can easily integrate into any application.",
      tech: "Next.js",
      links: {
        github: "https://github.com/S1mon009/react-reuse",
        live: "https://react-reuse.vercel.app/",
      },
      color: "bg-black",
    },
  ]);

  return {
    avatar,
    fullName,
    firstName,
    lastName,
    profession,
    description,
    resume,
    socials,
    skills,
    languages,
    information,
    about,
    projects,
  };
});
