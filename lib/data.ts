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
    description: "Worked on frontend development tasks, learning the ropes of web development and contributing to small projects.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2021 - Aug 2021",
  },
  {
    title: "Junior Developer",
    location: "Amlino",
    description: "Assisted in developing and maintaining web applications, fixing bugs, and implementing new features.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2021 - Dec 2021",
  },
  {
    title: "Senior Developer",
    location: "Amlino",
    description: "Led a team of developers, designed and architected scalable web applications, and mentored junior developers.",
    icon: React.createElement(FaReact),
    date: "Jan 2022 - Dec 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Amlino",
    description: "Responsible for both frontend and backend development, integrating RESTful APIs, and ensuring the application's performance and responsiveness.",
    icon: React.createElement(FaReact),
    date: "Jan 2023 - present",
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
