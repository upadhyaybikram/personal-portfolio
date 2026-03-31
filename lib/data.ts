import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineWork } from "react-icons/md";
import auctionsliveImg from "@/public/auctionslive.png";
import hpxImg from "@/public/hpx.png";
import kangamallImg from "@/public/rmtdev.png";
import mubbooImg from "@/public/wordanalytics.png";

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
    title: "Software Programmer Intern",
    location: "AuctionTech · Sydney, NSW",
    description:
      "Completed a 3-month internship immediately after graduating, building a foundation in full stack development with Laravel. Delivered responsive UIs, prototyped features under Agile/Scrum, and conducted API research using Postman.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2021 – Dec 2021",
  },
  {
    title: "Junior Full Stack Developer",
    location: "AuctionTech · Sydney, NSW",
    description:
      "Worked across 5 projects in a team of 6, delivering an automated contract signing system with the OneSpan API (20% subscriber growth, 30% faster processing), an AWS Pinpoint push notification system for real estate agencies, and a Next.js TypeScript admin dashboard. Achieved 80% PHPUnit test coverage.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 – Oct 2023",
  },
  {
    title: "Full Stack Engineer",
    location: "HPX Group · Remote",
    description:
      "Delivered contract projects including an In-App Notification System using the TALL stack (Tailwind, Alpine.js, Laravel, Livewire), an Online Stream Leasing System, and automated role-based login testing.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 – Aug 2024",
  },
  {
    title: "Software Engineer",
    location: "Outlier · Sydney, NSW",
    description:
      "Collaborated on AI model evaluation and code quality projects, applying expertise in TypeScript and full stack development to assess and improve generative AI outputs across various technical domains.",
    icon: React.createElement(MdOutlineWork),
    date: "Sep 2024 – Sep 2025",
  },
  {
    title: "Freelance Full Stack Developer",
    location: "Self-employed · Sydney, NSW",
    description:
      "Contracted by an early-stage founder to architect and build two production-grade platforms: KangaMall (headless multi-vendor ecommerce on MedusaJS v2 with Stripe Connect, Algolia, and Turborepo monorepo) and Mubboo AI (AI-powered discovery platform on AWS Lambda, AWS Bedrock, pgvector, and DynamoDB).",
    icon: React.createElement(FaReact),
    date: "Oct 2025 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "KangaMall – Headless Ecommerce Platform",
    description:
      "Multi-vendor marketplace built on MedusaJS v2 with custom modules for sellers, commissions, Stripe Connect payments, Algolia search, and a Dropshipzone supplier sync engine. Turborepo monorepo spanning a Next.js 15 storefront and Vite vendor admin panel.",
    tags: ["MedusaJS v2", "Next.js 15", "TypeScript", "Stripe Connect", "Algolia", "PostgreSQL", "Turborepo", "Railway"],
    imageUrl: kangamallImg,
  },
  {
    title: "Mubboo AI – AI Discovery Platform",
    description:
      "AI-powered local discovery platform with a serverless affiliate query pipeline on AWS Lambda, multi-model AWS Bedrock reasoning (Amazon Nova, Claude Haiku), pgvector RAG knowledge base, and real-time WebSocket chat. Infrastructure provisioned with AWS CDK.",
    tags: ["Next.js 14", "AWS Lambda", "AWS Bedrock", "pgvector", "PostgreSQL", "DynamoDB", "Redis", "AWS CDK"],
    imageUrl: mubbooImg,
  },
  {
    title: "Automated Contract Signing",
    description:
      "Delivered an end-to-end automated contract signing system using the OneSpan e-signature API integrated with a Laravel backend, resulting in a 20% increase in subscribers and a 30% reduction in contract processing time.",
    tags: ["Laravel", "MySQL", "Bootstrap", "OneSpan API", "Framework7", "REST API"],
    imageUrl: auctionsliveImg,
  },
  {
    title: "In-App Notification System",
    description:
      "Built a real-time in-app notification system using the TALL stack for a SaaS platform, delivering instant alerts to users and boosting engagement. Implemented with Laravel event broadcasting and Livewire reactive components.",
    tags: ["Tailwind CSS", "Alpine.js", "Laravel", "Livewire", "MySQL", "WebSocket"],
    imageUrl: hpxImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "PHP",
  "SQL",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Zustand",
  "Framer Motion",
  "Vite",
  "Node.js",
  "Laravel",
  "MedusaJS",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "DynamoDB",
  "MongoDB",
  "Drizzle ORM",
  "MikroORM",
  "AWS Lambda",
  "AWS CDK",
  "AWS Bedrock",
  "API Gateway",
  "S3",
  "EventBridge",
  "Stripe",
  "Algolia",
  "Auth.js",
  "REST API",
  "Git",
  "Docker",
  "Linux",
  "Agile / Scrum",
] as const;
