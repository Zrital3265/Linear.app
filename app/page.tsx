import React from "react";
import Container from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
// import Image from "next/image";

const page = () => {
  return (
    <Container>
      <Hero>
        <HeroTitle>
          Linear is a better way
          <br /> to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.
          <br /> Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <img src="/img/image.png" alt="hero image" />
      </Hero>
    </Container>
  );
};

export default page;
