"use client";
import classNames from "classnames";
import Container from "./container";
import { useInView } from "react-intersection-observer";

type FeatureProps = {
  children: React.ReactNode;
  color: string;
  colorDark: string;
};

export const Features = ({ children, color, colorDark }: FeatureProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      ref={ref}
      className={classNames(
        "relative flex flex-col items-center overflow-x-clip py-[12.8rem] before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[background-position:1%_0%,99%_0%] before:[background-size:50%_100%,50%_100%] before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)]  after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent)]",
        inView &&
          "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
        !inView && "before:rotate-180 before:opacity-40"
      )}
      style={
        {
          "--feature-color-dark": colorDark,
          "--feature-color": color,
        } as React.CSSProperties
      }
    >
      <div className="mb-10 mt-[22rem] w-full md:mb-[12.8rem] md:mt-[25.2rem]">
        {children}
      </div>
    </section>
  );
};

type MainFeatureProps = {
  image?: string;
  text: React.ReactNode;
  title: React.ReactNode;
  imageSize?: "small" | "large";
};

const MainFeature = ({
  image,
  text,
  title,
  imageSize = "small",
}: MainFeatureProps) => {
  return (
    <>
      <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]">
        <Container
          className={classNames(
            " max-w-[90%] text-center",
            imageSize === "small" ? "w-[78rem]" : "w-[102.4rem]"
          )}
        >
          <h2 className="text-gradient mb-11 translate-y-[40%] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:text-8xl [.is-visible_&]:translate-y-0 ">
            {title}
          </h2>
          <div className="relative rounded-[14px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.01)_100%)] before:[mask-composite:xor] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] after:pointer-events-none  after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,_255,_255,_0.15)] after:[mask:linear-gradient(black,transparent)]">
            <img src={image} className="h-auto w-full" />
          </div>
        </Container>
        <Container className="w-[78rem] max-w-[90%] text-center">
          {text}
          <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
        </Container>
      </div>
    </>
  );
};

type FeatureGridProps = {
  features: {
    icon: React.ElementType;
    title: string;
    text: React.ReactNode;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <Container>
      <div className="mb-[14rem] grid w-full   grid-cols-2 place-items-center gap-y-9 text-sm text-primary-text md:mb-[14rem] md:grid-cols-3 md:text-md">
        {features.map(({ title, text, icon: Icon }) => (
          <div
            className="max-w-[25.6rem] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mb-[2px] md:[&_svg]:mr-[6px] md:[&_svg]:inline"
            key={title}
          >
            <Icon />
            <span className="block text-white md:inline">{title}</span>
            <div className="">{text}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};
type FeatureCardsProps = {
  features: {
    image: string;
    imageClassName: string;
    title: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <Container>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {features.map(({ title, text, image, imageClassName }) => (
          <div
            className="relative aspect-[1.1/1] overflow-hidden rounded-[2.4rem] border border-transparent-white bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] px-8 py-6 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient after:pointer-events-none md:rounded-[4.8rem] md:p-14"
            key={title}
          >
            <h3 className="mb-2 text-2xl text-white  ">{title}</h3>
            <p className="max-w-[31rem] text-md text-primary-text">{text}</p>
            <img
              className={classNames("absolute max-w-none", imageClassName)}
              src={image}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

Features.Main = MainFeature;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
