import classNames from "classnames";
import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroPropsElement {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroPropsElement) => {
  return (
    <h1
      className={classNames(
        "text-gradient my-6 text-6xl md:text-8xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroPropsElement) => {
  return (
    <p
      className={classNames(
        "mb-12 text-lg text-primary-text md:text-xl",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center"> {children}</div>;
};
