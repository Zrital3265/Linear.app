import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { Button, IconWrapper } from "@/components/button";
import { ChevronIcon } from "@/components/icons/chevron";
import { HeroImage } from "@/components/heroimage";

export const HomepageHeroText = () => (
  <Hero>
    <Button
      variant={"secondary"}
      size={"small"}
      className="animate-fade-in rounded-full"
      href="/"
    >
      <span>Linear 2024 Release – Built for scale</span>
      <IconWrapper> → </IconWrapper>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Linear is a better way
      <br className="hidden md:block" /> to build products
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem]  animate-fade-in leading-tight opacity-0 [--animation-delay:400ms]">
      Meet the new standard for modern software development.
      <br className="hidden md:block" /> Streamline issues, sprints, and product
      roadmaps.
    </HeroSubtitle>
    <Button
      variant={"primary"}
      size={"large"}
      href="/"
      className="translate-y-[-1rem] animate-fade-in rounded-xl font-normal opacity-0 [--animation-delay:600ms]"
    >
      Get started
      <IconWrapper>
        <ChevronIcon />
      </IconWrapper>
    </Button>
    <HeroImage />
  </Hero>
);
