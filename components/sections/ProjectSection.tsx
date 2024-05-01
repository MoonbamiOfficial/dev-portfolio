import Grid from "@components/common/Grid";
import Section from "@components/common/Section";
import Title from "@components/texts/Title";
import ProjectCard from "@components/ui/ProjectCard";
import LoadingSpinner from "@components/ux/LoadingSpinner";
import { useFetch } from "@hooks/useFetch";
import { ProjectType } from "@shared-types/project";

export default async function ProjectSection() {
  const { projects } = await useFetch("/api/projects");

  const renderProjects = () => {
    if (projects) {
      return projects.map((project: ProjectType) => (
        <ProjectCard
          key={project._id}
          _id={project._id}
          href={`projects/${encodeURIComponent(project._id)}`}
          ariaLabel={project.title}
          src={project.src}
          alt={project.alt}
          title={project.title}
          desc={project.desc}
          website={project.website}
          github={project.github}
        />
      ));
    } else return <LoadingSpinner />;
  };

  return (
    <Section id={"project"} contentStyles={"gap-[150px]"}>
      <Title
        name={"projects"}
        desc={
          "These are the projects I made all throughout my coding career. I am happy to present it to you."
        }
      />
      <Grid gridStyles="lg:grid-cols-2 premium:grid-cols-3 gap-[50px]">
        {renderProjects()}
      </Grid>
    </Section>
  );
}