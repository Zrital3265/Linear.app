import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroPropsElement {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroPropsElement) => {
  return <h1 className="md:text-8xl text-6xl my-6">{children}</h1>;
};

export const HeroSubtitle = ({ children }: HeroPropsElement) => {
  return (
    <p className="md:text-xl text-primary-text mb-12 text-lg">{children}</p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center"> {children}</div>;
};
