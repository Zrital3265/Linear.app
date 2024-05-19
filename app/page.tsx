import React from "react";
import Container from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
import { Button, IconWrapper } from "@/components/button";
import { ChevronIcon } from "@/components/icons/chevron";
import { HeroImage } from "@/components/heroimage";
import { Clients } from "@/components/clients";

export default function Homepage() {
  return (
    <>
      <Container className="overflow-visible py-[6.4rem] ">
        <Hero>
          <Button
            variant={"secondary"}
            size={"small"}
            className="animate-fade-in"
            href="/"
          >
            Linear 2024 Release – Built for scale <IconWrapper> → </IconWrapper>
          </Button>
          <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Linear is a better way
            <br className="hidden md:block" /> to build products
          </HeroTitle>
          <HeroSubtitle className="translate-y-[-1rem]  animate-fade-in opacity-0 [--animation-delay:400ms]">
            Meet the new standard for modern software development.
            <br className="hidden md:block" /> Streamline issues, sprints, and
            product roadmaps.
          </HeroSubtitle>
          <Button
            variant={"primary"}
            size={"large"}
            href="/"
            className="translate-y-[-1rem]  animate-fade-in text-md opacity-0 [--animation-delay:600ms]"
          >
            Get started
            <IconWrapper>
              <ChevronIcon />
            </IconWrapper>
          </Button>
          <HeroImage />
        </Hero>
      </Container>
      <Container>
        <Clients />
      </Container>
    </>
  );
}
