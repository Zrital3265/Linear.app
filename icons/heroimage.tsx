"use client";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  console.log(inView);

  return (
    <div
      ref={ref}
      className=" mt-[12.8rem] overflow-hidden [perspective:2000px] "
    >
      <div
        className={classNames(
          "rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient transition-transform ",
          inView ? "transform-none" : "[transform:rotateX(25deg)]",
        )}
      >
        <img className="" src="/img/hero.webp" alt="hero image" />
      </div>
    </div>
  );
};
