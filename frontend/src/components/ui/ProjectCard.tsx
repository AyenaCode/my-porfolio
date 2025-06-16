import { Text } from "./Text";
import { CustomLink } from "../layouts/Link";
import { Card } from "./card";

type ProjectCardProps = {
  project: {
    id: number;
    title: string;
    image: string;
    link: string;
  };
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <div className="flex justify-between align-middle">
        <Text variant="subtitle" className="text-2xl">
          {project.title}
        </Text>
        <span className="w-20 h-16 bg-amber-950 rounded-full"></span>
      </div>
      <Text className="my-5 text-center"> {project.image} </Text>
      <CustomLink to={project.link}>En savoir plus...</CustomLink>
    </Card>
  );
};
