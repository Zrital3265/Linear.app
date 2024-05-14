import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroPropsElement {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroPropsElement) => {
  return (
    <h1 className="text-gradient my-6 text-6xl md:text-8xl">{children}</h1>
  );
};

export const HeroSubtitle = ({ children }: HeroPropsElement) => {
  return (
    <p className="mb-12 text-lg text-primary-text md:text-xl">{children}</p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center"> {children}</div>;
};
