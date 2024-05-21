import React from "react";
import Container from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
import { Button, IconWrapper } from "@/components/button";
import { ChevronIcon } from "@/components/icons/chevron";
import { HeroImage } from "@/components/heroimage";
import { Clients } from "@/components/clients";
import { StarsIllustration } from "@/components/stars";
import classNames from "classnames";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem]  md:pb-[25.6rem]">
        <Container className=" py-[6.4rem]">
          <Hero>
            <Button
              variant={"secondary"}
              size={"small"}
              className="animate-fade-in"
              href="/"
            >
              Linear 2024 Release – Built for scale{" "}
              <IconWrapper> → </IconWrapper>
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
        <div
          className={classNames(
            " mask-radial-faded relative my-[-12.8rem] h-[60rem] overflow-hidden",
            "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]  ",
            // "after:absolute after:-left-1/2 after:bottom-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-b after:border-[rgba(120,_119,_198,_0.4)] after:bg-background",
            "after:absolute after:-left-1/2 after:top-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background",
          )}
        >
          <StarsIllustration />
        </div>
      </div>
    </>
  );
}
