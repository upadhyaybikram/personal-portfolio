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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a master degree in{" "}
        <span className="font-medium">Information Technology</span>, I worked as a junior full stack
        developer and learned{" "}
        <span className="font-medium">full stack software development.</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Laravel, MySQL, Javascript, React and Next.js
        </span>
        . I am also familiar with  <span className="font-medium">TypeScript and PostgreSQL.</span> I am always looking to
        learn new technologies. Currently I am running{" "}
        <span className="font-medium">full stack Job Ready Program</span> using MERN stack.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy walking, going to the beach,
        watching sports, and spending time with my family. I also enjoy{" "}
        <span className="font-medium">playing cricket and football.</span>.
      </p>
    </motion.section>
  );
}
