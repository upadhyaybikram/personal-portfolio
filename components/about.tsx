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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a master degree in{" "}
        <span className="font-medium">Information Technology</span>, I worked as a junior full stack
        developer and learned{" "}
        <span className="font-medium">full stack software development.</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        are{" "}
        <span className="font-medium">
          Laravel, Javascript, MySQL, MongoDB, Express, React, Node and Next.js
        </span>
        . I am also familiar with  <span className="font-medium">TypeScript and PostgreSQL.</span> I am always looking to
        learn new technologies. Currently, I have got client from various country and starting a new service of {" "}
        <span className="font-medium">Job Ready Program</span> focusing on students who are looking to land their first job in tech industry.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy walking, going to the beach,
        watching sports, and spending time with my family. My favourite sport is{" "}
        <span className="font-medium">cricket which I play on weekends</span>.
      </p>
    </motion.section>
  );
}
