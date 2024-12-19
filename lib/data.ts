import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern",
    location: "Amlino",
    description:
      "As an intern at Amlino, I worked on frontend development tasks, learning and applying modern web development techniques. I contributed to small projects, collaborating with the team to enhance the user interface and improve the overall user experience of web applications. This role provided me with valuable hands-on experience in React and front-end technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2023 - May 2024",
  },

  {
    title: "Software Developer",
    location: "Amlino",
    description:
      "In my full-time role as a Software Developer, I am responsible for both frontend and backend development. I work on designing and implementing scalable web applications, integrating RESTful APIs, and ensuring optimal performance and responsiveness. With a strong focus on React and Node.js, I contribute to creating seamless user experiences while maintaining robust server-side logic and databases.",
    icon: React.createElement(FaReact),
    date: "May 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Bootstrap"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "SQL",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  // MEAN Developer Skills
  "MongoDB",
  "Angular",

  // MERN Developer Skills
  "MongoDB",
  "Express",
  "React",
  "Next.js",

  // .NET Developer Skills
  ".NET",
  "C#",
  "ASP.NET",
  "Entity Framework",
  "SQL Server",
] as const;
