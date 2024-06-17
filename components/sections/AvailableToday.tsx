import { Button, IconWrapper } from "../button";
import Container from "../container";
import { ChevronIcon } from "../icons/chevron";

export const AvailableToday = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-10 pb-16 text-center">
        <img
          src="/availableToday.webp"
          alt="Linear app icon"
          className="h-[12.8rem] w-[12.8rem]"
        />
        <h1 className="text-gradient md:text-7.5xl text-5xl leading-tight">
          Built for the future.
          <br className="block md:inline" />
          Available today.
        </h1>
        <div className="flex gap-[1.6rem]">
          <Button
            type="button"
            variant="primary"
            size="large"
            className="rounded-xl"
          >
            Get started
            <IconWrapper>
              <ChevronIcon />
            </IconWrapper>
          </Button>
        </div>
      </div>
    </Container>
  );
};
