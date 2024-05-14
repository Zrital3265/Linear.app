import React from "react";
import Container from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
import { Button, IconWrapper } from "@/components/button";
import { ChevronIcon } from "@/icons/chevron";
// import Image from "next/image";

const page = () => {
  return (
    <Container className="pt-[6.4rem] ">
      <Hero>
        <Button variant={"secondary"} size={"small"} className="" href="/">
          Linear 2024 Release – Built for scale <IconWrapper> → </IconWrapper>
        </Button>
        <HeroTitle>
          Linear is a better way
          <br className="hidden md:block" /> to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.
          <br className="hidden md:block" /> Streamline issues, sprints, and
          product roadmaps.
        </HeroSubtitle>
        <Button variant={"primary"} size={"medium"} href="/" className="">
          Get started{" "}
          <IconWrapper>
            <ChevronIcon></ChevronIcon>
          </IconWrapper>
        </Button>
        <img className="mt-[12.8rem]" src="/img/hero.webp" alt="hero image" />
      </Hero>
    </Container>
  );
};

export default page;
