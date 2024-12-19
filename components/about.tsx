"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        After completing my B.Tech in{" "}
        <span className=" text-indigo-600">Computer Science</span>, I decided to
        dive deeper into programming. I enrolled in a{" "}
        <span className=" text-teal-600">coding bootcamp</span> where I mastered{" "}
        <span className=" text-teal-600">full-stack web development</span>.{" "}
        <span className="italic text-gray-700 dark:text-gray-200">
          Problem-solving
        </span>{" "}
        is what excites me the most about programming. There's nothing quite
        like the satisfaction of finding a solution to a complex problem. My
        primary tech stack includes{" "}
        <span className="font-medium text-indigo-600">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Bootstrap. I'm always exploring
        new technologies, constantly leveling up my skills. Currently, I am
        looking for a{" "}
        <span className=" text-indigo-600">full-time position</span> as a
        software developer.
      </p>

      <p className="">
        <span className="italic text-gray-700 dark:text-gray-200">
          When I'm not coding
        </span>
        , I enjoy playing <span className=" text-teal-600">video games</span>,{" "}
        <span className=" text-teal-600">watching movies</span>, and spending
        time with my dog. I also have a passion for{" "}
        <span className=" text-teal-600">learning new things</span>. Right now,
        I'm delving into{" "}
        <span className=" text-indigo-600">history and philosophy</span>. On the
        side, I am also{" "}
        <span className=" text-teal-600">learning to play the guitar</span>.
      </p>
    </motion.section>
  );
}
