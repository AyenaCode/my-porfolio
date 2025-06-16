import { Text } from "./Text";
import { Card } from "./card";
import { CustomLink } from "../layouts/Link";

type ServiceCardProps = {
  service: {
    id: number;
    title: string;
    description: string;
    link: string;
  };
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="px-5">
      <div className="flex justify-between align-middle">
        <Text variant="subtitle" className="text-2xl">
          {service.title}
        </Text>
        <span className="w-20 h-16 bg-amber-950 rounded-full"></span>
      </div>
      <Text className="my-5 text-center">{service.description} </Text>
      <CustomLink to={service.link}>En savoir plus...</CustomLink>
    </Card>
  );
};
