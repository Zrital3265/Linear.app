type featureProps = {
  children: React.ReactNode;
};

export const Features = ({ children }: featureProps) => {
  return (
    <section className=" flex flex-col items-center py-[12.8rem]">
      {children}
    </section>
  );
};

type FeaturesTitleProps = {
  children: React.ReactNode;
};

const FeaturesTitle = ({ children }: FeaturesTitleProps) => {
  return (
    <h2 className="text-gradient mb-11 text-center text-6xl md:text-8xl">
      {children}
    </h2>
  );
};

type MainFeatureProps = {
  image: string;
  text: string;
};

const MainFeature = ({ image, text }: MainFeatureProps) => {
  return (
    <div className="w-[78rem] max-w-[90%]">
      <div className="relative rounded-[14px] before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:[mask-composite:xor] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)]  after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,_255,_255,_0.15)] after:[mask:linear-gradient(black,transparent)]">
        <img src={image} className="h-auto w-full" />
      </div>
      <p className="mx-auto my-16 w-[80%] text-center text-4xl leading-tight text-white">
        {text}
      </p>
      <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
    </div>
  );
};

type FeatureGridProps = {
  features: {
    icon: React.FC;
    title: string;
    text: string;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div className="grid w-full grid-cols-3 gap-y-9 text-md text-primary-text">
      {features.map(({ title, text, icon: Icon }) => (
        <div
          className="w-[25.6rem] [&_svg]:mb-[2px] [&_svg]:mr-[6px] [&_svg]:inline [&_svg]:fill-white"
          key={title}
        >
          <Icon />
          <span className="text-white">{title}</span>
          {text}
        </div>
      ))}
    </div>
  );
};
type FeatureCardsProps = {
  features: {
    image: string;
    title: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return <div>Featurs Caeds.</div>;
};

Features.Main = MainFeature;
Features.Title = FeaturesTitle;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
