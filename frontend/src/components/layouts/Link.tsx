import React from "react";
import { Link, type LinkProps } from "react-router";

type CustomLink = LinkProps & {
  className?: string;
};

export const CustomLink = ({ className, ...rest }: CustomLink) => {
  return (
    <Link
      {...rest}
      className={`text-accent-foreground text-center hover:bg-accent hover:scale-105 transition-all rounded px-2 ${className}`}
    />
  );
};
