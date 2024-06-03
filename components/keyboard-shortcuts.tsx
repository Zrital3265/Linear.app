import { Button, IconWrapper } from "./button";
import { KeyboardIllustration } from "./illustration/keyboard";

export const KeyboardShortcuts = () => {
  return (
    <>
      <div className="mask-keyboard h-full w-full">
        <KeyboardIllustration />;
      </div>
      <div>
        <Button variant={"secondary"} href="/">
          <IconWrapper>C</IconWrapper>
          Create new issue
        </Button>
      </div>
    </>
  );
};
