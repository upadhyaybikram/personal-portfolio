import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import alImg from "@/public/al.png";
import auctionsliveImg from "@/public/auctionslive.png";
import propertycreditImg from "@/public/propertycredit.png";
import hpxImg from "@/public/hpx.png";
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
    title: "Full Stack Engineer",
    location: "Work from Home",
    description:
      "I worked as a full stack engineer on contract basis. Worked on projects like In App Notification System, Online Stream Leasing System and Automated Test for Role Based Loging System",
    icon: React.createElement(CgWorkAlt), 
    date: "Feb 2024 to Aug 2024",
  },
  {
    title: "FreeLance Software Engineer, AI/ML Engineer",
    location: "Sydney, NSW ",
    description:
      "Collaborating on different projects to develop cutting-edge generative AI solutions and innovative technology products.",
    icon: React.createElement(FaReact),
    date: "Sep 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "In-App Notification System",
    description:
    "Built a real-time notification system using the TALL stack to boost user engagement",
    tags: ["Tailwind CSS, Alpine.js, Laravel and Livewire"],
    imageUrl: hpxImg,

  },
  {
    title: "Automated Contract Signing",
    description:
    "Developed an automated contract signing solution, enhancing efficiency and security over a year-long project.",

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
      "Simplified admin dashboard for real estate transactions usng MERN stack, ensuring easy real-time monitoring on the existing SaaS platform.\n",
    tags: ["MongoDB", "Express", "React", "Node"],
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
  "MongoDB",
  "Express",
  "React",
  "Node",
  "Next.js",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "Git",
] as const;
