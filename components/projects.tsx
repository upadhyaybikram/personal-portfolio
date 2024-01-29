"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

    function getProjectUrl(project:{title: string}) {
        const title = project.title.toLowerCase();
        if(title.includes('admin')){
            return "https://property.credit/";
        } else {
            return "https://auctionslive.com/";
        }
    }

    return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
            <Link key={index} href={getProjectUrl(project)} passHref target="_blank">
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
            </Link>
        ))}
      </div>
    </section>
  );
}
