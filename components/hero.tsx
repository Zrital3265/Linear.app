import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroPropsElement {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroPropsElement) => {
  return <h1 className="text-5xl my-6">{children}</h1>;
};

export const HeroSubtitle = ({ children }: HeroPropsElement) => {
  return <p className="text-lg mb-12">{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center"> {children}</div>;
};
