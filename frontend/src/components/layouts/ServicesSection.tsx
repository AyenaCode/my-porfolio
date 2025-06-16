import { Container } from "../ui/Container";
import { SERVICES } from "../../data";
import { ServiceCard } from "../ui/ServiceCard";
import { Text } from "../ui/Text";

export const ServicesSection = () => {
  return (
    <Container>
      <Text variant="title">Mes services</Text>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Container>
  );
};
