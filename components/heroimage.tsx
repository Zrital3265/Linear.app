"use client";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  // console.log(inView);

  return (
    <div ref={ref} className=" mt-[12.8rem]  [perspective:2000px] ">
      <div
        className={classNames(
          "relative rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:bg-hero-glow before:absolute before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(120px)]",
          inView && "before:animate-image-glow",
        )}
      >
        <img className="relative z-10" src="/img/hero.webp" alt="hero image" />
      </div>
    </div>
  );
};
