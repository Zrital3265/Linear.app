import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroPropsElement {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroPropsElement) => {
  return <h1 className="my-6 text-5xl">{children}</h1>;
};

export const HeroSubtitle = ({ children }: HeroPropsElement) => {
  return <p className="mb-12 text-lg">{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center"> {children}</div>;
};
