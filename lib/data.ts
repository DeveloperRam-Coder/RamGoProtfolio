import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import crmImg from "@/public/crmImg.png";
import interviewPrepImg from "@/public/interviewPrepImg.png";
import interviewHavenImg from "@/public/interviewHavenImg.png";
import itPositionImg from "@/public/itPositionImg.png";
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
    title: "CRM for Tutor, Barber, Doctor, and Gym",
    description:
      "A role-based CRM application allowing tutors, barbers, doctors, and gyms to manage their clients, schedules, and services efficiently.",
    tags: [
      "Next.js",
      "Vite",
      "TypeScript",
      "ShadCN UI",
      "Tailwind",
      "Framer Motion",
    ],
    imageUrl: crmImg,
    projectUrl: "https://your-crm-project-url.com",
  },
  {
    title: "InterviewPrep",
    description:
      "A comprehensive interview scheduling platform with features like time-slot booking, reminders, and integrated candidate management.",
    tags: [
      "Next.js",
      "Vite",
      "TypeScript",
      "ShadCN UI",
      "Tailwind",
      "Framer Motion",
    ],
    imageUrl: interviewPrepImg,
    projectUrl: "https://interview-pro-vjon.vercel.app",
  },
  {
    title: "Interview Haven Landing Page",
    description:
      "A static website designed to promote an interview scheduling service, featuring a clean UI and engaging animations.",
    tags: [
      "Next.js",
      "Vite",
      "TypeScript",
      "ShadCN UI",
      "Tailwind",
      "Framer Motion",
    ],
    imageUrl: interviewHavenImg,
    projectUrl: "https://interview-prep-scheduler.vercel.app",
  },
  {
    title: "IT-Position-Guide",
    description:
      "A comprehensive dashboard showcasing different IT job roles with detailed insights into required skills, responsibilities, and career growth paths.",
    tags: [
      "Next.js",
      "Vite",
      "TypeScript",
      "ShadCN UI",
      "Tailwind",
      "Framer Motion",
    ],
    imageUrl: itPositionImg,
    projectUrl: "https://it-position-guide.vercel.app",
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
