import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  classeName?: string;
};

/**
 * @returns  Une section | un card conditionné par le props Card
 */
export const Container = ({ children, classeName }: ContainerProps) => {
  return (
    <section className={`max-w-7xl mx-auto px-5 ${classeName}`}>
      {children}
    </section>
  );
};
