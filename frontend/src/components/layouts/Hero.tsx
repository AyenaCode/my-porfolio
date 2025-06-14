import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] text-center py-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Développeur Full-Stack freelance
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-6 px-5">
        Spécialisé Spring Boot & React/React Native, j’aide les équipes tech à
        structurer, fiabiliser et faire évoluer leurs apps web & mobiles.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button link route="/app" varient="primary">
          voir mes services
        </Button>
        <Button link varient="outline">
          Me contacter
        </Button>
      </div>
    </section>
  );
};
