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
        I&apos;m a{" "}
        <span className="font-medium">Full Stack Developer based in Sydney</span>{" "}
        with 5+ years of experience building production-grade web platforms
        across SaaS, ecommerce, and AI verticals. My current focus is
        architecting{" "}
        <span className="font-medium">
          AI-powered applications and headless ecommerce systems
        </span>{" "}
        — from database design and backend APIs all the way through to frontend
        and cloud deployment.
      </p>

      <p className="mb-3">
        I work across the full delivery cycle:{" "}
        <span className="font-medium">
          Next.js, Node.js, Laravel, MedusaJS, AWS Lambda, AWS Bedrock,
          PostgreSQL, and Redis
        </span>{" "}
        are my daily tools. I&apos;ve built multi-vendor marketplace platforms,
        serverless affiliate pipelines with multi-model AI reasoning, and
        real-time chat systems — writing infrastructure as code with AWS CDK and
        shipping to production on Railway and Vercel.
      </p>

      <p className="mb-3">
        <span className="italic">What drives me</span> is the problem-solving
        side of engineering — taking a complex idea and turning it into a clean,
        scalable system.{" "}
        <span className="font-medium">
          I&apos;m open to freelance projects and full-time opportunities
        </span>{" "}
        anywhere in the world, and I especially enjoy working with early-stage
        founders who need someone to own the technical side end-to-end.
      </p>

      <p>
        <span className="italic">Outside of code</span>, I enjoy walking,
        heading to the beach, watching cricket, and spending time with my
        family.
      </p>
    </motion.section>
  );
}
