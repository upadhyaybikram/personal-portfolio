import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import alImg from "@/public/al.png";
import auctionsliveImg from "@/public/auctionslive.png";
import propertycreditImg from "@/public/propertycredit.png";
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
    title: "Software Programmer (Internship) ",
    location: "Sydney, NSW",
    description:
      "I graduated after 2 years of studying. I immediately found an internship for 3 months and learned the concept of full stack development with Laravel, a PHP web application framework",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2021 to Dec 2021",
  },
  {
    title: "Junior Full Stack Developer",
    location: "Sydney, NSW",
    description:
      "I worked as a junior full stack developer for nearly 2 years using Laravel, REST API  and React. Worked on major projects  like Automated Contract Signing system, AWS Pinpoint Notification System and Multi Login System.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 to Oct 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Sydney, NSW ",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes Laravel, MySQL, React, Next.js, TypeScript, Bootstrap, Tailwind  and PostgreSQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Automated Contract Signing",
    description:
    "I worked as a full-stack developer on this project for nearly 1 year.",

    tags: ["Laravel", "MySQL", "Boostrap", "OneSpan API", "Framework7"],
    imageUrl: auctionsliveImg,
  },
  {
    title: "Push Notification",
    description:
      "Notification system for real estate agencies regarding chat enquiries of the property.It has features like number of conversation, enquiry type and conversation details.",
    tags: ["Laravel", "MySQL","Boostrap", "AWS Pinpoint"],
    imageUrl: alImg,
  },
  {
    title: "Admin Dashboard",
    description:
      "Simplified admin dashboard for real estate transactions, ensuring easy real-time monitoring on the existing SaaS platform.\n",
    tags: ["Next.js", "Typescript", "React Hook Form",  "PrimeReact", "PostgreSQL", "Supabase"],
    imageUrl: propertycreditImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Boostrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "Git",
] as const;
