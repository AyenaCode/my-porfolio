import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  variant?: "header" | "title" | "subtitle";
  className?: string;
};

export const Text = ({ children, variant, className }: TextProps) => {
  switch (variant) {
    case "header":
      return (
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold ${className}`}
        >
          {children}
        </h1>
      );
    case "title":
      return (
        <h2 className={`text-3xl text-center font-semibold pb-5 ${className}`}>
          {children}
        </h2>
      );
    case "subtitle":
      return (
        <h3 className={`text-xl text-center font-semibold ${className}`}>
          {children}
        </h3>
      );
    default:
      return (
        <p className={`text-muted-foreground ${className}`}>{children} </p>
      );
  }
};
