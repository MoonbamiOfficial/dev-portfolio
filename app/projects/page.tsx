import { Metadata } from "next";
import { useFetch } from "@hooks/useFetch";
import { ProjectType } from "@shared-types/project";
import dynamic from "next/dynamic";
import Title from "@components/texts/Title";
import LoadingSpinner from "@components/ux/LoadingSpinner";
import Section from "@components/common/Section";
import BackToTop from "@components/buttons/BackToTop";
import ProjectCard from "@components/ui/ProjectCard";
import Grid from "@components/common/Grid";

const Footer = dynamic(() => import("@components/footer/Footer"));

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const { projects } = await useFetch("/api/projects");
  return (
    <>
      <div className="container relative">
        <BackToTop id={"#project"} />
        <Section id={"project"} contentStyles={"gap-[150px]"}>
          <Title
            name={"projects"}
            desc={
              "These are the projects I made all throughout my coding career. I am happy to present it to you."
            }
          />
          <Grid gridStyles="lg:grid-cols-2 premium:grid-cols-3 gap-[50px]">
            {projects ? (
              projects.map((project: ProjectType) => (
                <ProjectCard
                  key={project._id}
                  _id={project._id}
                  href={`projects/${project._id}`}
                  ariaLabel={project.title}
                  src={project.src}
                  alt={project.alt}
                  title={project.title}
                  desc={project.desc}
                  website={project.website}
                  github={project.github}
                />
              ))
            ) : (
              <LoadingSpinner />
            )}
          </Grid>
        </Section>
      </div>
      <Footer />
    </>
  );
}
