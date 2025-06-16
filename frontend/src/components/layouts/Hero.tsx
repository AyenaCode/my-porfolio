import { Link } from "react-router";
import { Button } from "../ui/Button";
import { Text } from "../ui/Text";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] text-center px-5">
      <Header />
      <Text variant="header" className="pt-24">
        Développeur Full-Stack freelance
      </Text>
      <Text className="my-8 md:text-2xl text-lg">
        Spécialisé Spring Boot & React/React Native, j’aide les équipes tech à
        structurer, fiabiliser et faire évoluer leurs apps web & mobiles.
      </Text>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button>
          <Link to="#" className="py-2">
            Voir mes services
          </Link>
        </Button>
        <Button variant="outline">
          <Link to="#" className="py-2">
            Me contacter
          </Link>
        </Button>
      </div>
    </section>
  );
};
