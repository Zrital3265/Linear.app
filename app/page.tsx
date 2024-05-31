import React from "react";
import "../styles/global.css";
import Container from "../components/container";
import { Clients } from "@/components/sections/clients";
import { StarsIllustration } from "@/components/stars";
import { HomepageHeroText } from "@/components/sections/homepage-herot-text";
import { UnlikeAnyTools } from "@/components/sections/unlike-any-tools";
import classNames from "classnames";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[25.6rem] md:pb-[25.6rem]">
        <Container className=" pt-[6.4rem]">
          <HomepageHeroText />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          " mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem]  overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]  ",
          // "after:absolute after:-left-1/2 after:bottom-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-b after:border-[rgba(120,_119,_198,_0.4)] after:bg-background",
          "after:absolute after:-left-1/2 after:top-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background",
        )}
      >
        <StarsIllustration />
      </div>
      <UnlikeAnyTools />
    </>
  );
}
