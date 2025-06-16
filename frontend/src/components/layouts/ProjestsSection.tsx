import { Container } from "../ui/Container";
import { PROJECTS } from "../../data";
import { Text } from "../ui/Text";
import { ProjectCard } from "../ui/ProjectCard";

export const ProjectsSection = () => {
  return (
    <Container classeName="my-16">
      <Text variant="title">Mes Projets</Text>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
};
