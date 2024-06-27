"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { Button, IconWrapper } from "./button";
import { KeyboardIllustration } from "./illustration/keyboard";

const shortcuts = [
  { text: "Assign issue to me", keys: "i" },
  { text: "Opens command line", keys: "⌘k" },
  { text: "Assign issue to", keys: "a" },
  { text: "Change issue status", keys: "s" },
  { text: "Set issue priority", keys: "p" },
  { text: "Add issue labels", keys: "l" },
  { text: "Set due date", keys: "⇧d" },
  { text: "Set parent issue", keys: "⇧⌘p" },
  { text: "Add sub-issue", keys: "⇧⌘o" },
  { text: "Create new issue", keys: "c" },
  { text: "Create new issue from template", keys: "⌥c" },
  { text: "Move to project", keys: "⇧p" },
];

export const KeyboardShortcuts = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const illustrationWrapperRef = useRef<HTMLDivElement>(null);
  const activeShortcutIndex = useRef(0);

  const timeoutRef = useRef<NodeJS.Timeout>();

  const scheduleTimeout = () => {
    timeoutRef.current = setTimeout(gotoNextShortcut, 2100);
  };
  useEffect(() => {
    scheduleTimeout();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const gotoShortcut = (index: number) => {
    clearTimeout(timeoutRef.current);
    if (!wrapperRef.current) return;

    const shortcut = wrapperRef.current.querySelector<HTMLButtonElement>(
      `button:nth-child(${index + 1}`
    );
    if (!shortcut) return;

    wrapperRef.current.scrollTo({
      left: shortcut.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: "smooth",
    });

    if (!illustrationWrapperRef.current) return;
    //clean the befoe active class
    illustrationWrapperRef.current
      .querySelectorAll(".active")
      .forEach((element) => element.classList.remove("active"));

    const keys = shortcut.dataset.keys || "";
    const keyArrays = keys.split("");
    const keyElements = keyArrays.map((key) =>
      illustrationWrapperRef.current?.querySelector(`[data-key="${key}"]`)
    );
    keyElements.forEach((element) => element?.classList.add("active"));
    activeShortcutIndex.current = index;
    scheduleTimeout();
  };

  const gotoNextShortcut = () => {
    gotoShortcut((activeShortcutIndex.current + 1) % shortcuts.length);
  };
  const onShortcutButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    gotoShortcut(Number(event.currentTarget.dataset.index));
  };

  return (
    <>
      <div ref={illustrationWrapperRef} className="mask-keyboard h-full w-full">
        <KeyboardIllustration />
      </div>
      <div className="my-7 min-h-[4rem] w-full overflow-hidden">
        <div
          ref={wrapperRef}
          className="mask-shortcutkeys flex min-h-[4rem] max-w-full snap-x snap-mandatory gap-2 overflow-auto whitespace-nowrap pb-8"
        >
          {shortcuts.map((shortcut, index) => (
            <Button
              className="snap-center rounded-full first:ml-[50vw] last:mr-[50vw]"
              key={shortcut.text}
              data-index={index}
              data-keys={shortcut.keys}
              onClick={onShortcutButtonClick}
              variant="secondary"
            >
              <span>{shortcut.text}</span>
              <IconWrapper className="uppercase">{shortcut.keys}</IconWrapper>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
