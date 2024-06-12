"use client";
import { use, useEffect, useMemo, useRef, useState } from "react";
import {
  AssignToIcon,
  BacklogIcon,
  ChangeStatusIcon,
  InProgressIcon,
  LabelIcon,
  PersonIcon,
  TodoIcon,
  DoneIcon,
  ChangePriorityIcon,
  NoPriorityIcon,
  UrgentIcon,
  HighIcon,
  MediumIcon,
  LowIcon,
  AddLabels,
} from "./icons/command-bar-icon";
import classNames from "classnames";

const commandOptions = [
  {
    label: "Assign to ...",
    icon: AssignToIcon,
    subOptions: [
      { label: "Zri", icon: PersonIcon },
      { label: "Sandy", icon: PersonIcon },
      { label: "Kritan", icon: PersonIcon },
    ],
  },
  {
    label: "Change status",
    icon: ChangeStatusIcon,
    subOptions: [
      { label: "Backlog", icon: BacklogIcon },
      { label: "To Do", icon: TodoIcon },
      { label: "In Progress", icon: InProgressIcon },
      { label: "Done", icon: DoneIcon },
    ],
  },
  {
    label: "Change priority",
    icon: ChangePriorityIcon,
    subOptions: [
      { label: "No Priority", icon: NoPriorityIcon },
      { label: "Urgent", icon: UrgentIcon },
      { label: "High", icon: HighIcon },
      { label: "Medium", icon: MediumIcon },
      { label: "Low", icon: LowIcon },
    ],
  },
  {
    label: "Add labels",
    icon: AddLabels,
    subOptions: [
      { label: "Bug", icon: () => <LabelIcon type="bug" /> },
      { label: "Feature", icon: () => <LabelIcon type="feature" /> },
      { label: "Improvement", icon: () => <LabelIcon type="improvement" /> },
    ],
  },
] as const;

export const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleCommandMenu = (event: MouseEvent) => {
      if (!commandMenuRef.current) return;
      const isMenuButton =
        event.target instanceof Element &&
        event.target.classList.contains("command-menu-button");

      //true is if the click is outside and false if inside
      const pressedOutside =
        !isMenuButton &&
        !commandMenuRef.current?.contains(event.target as Node);
      setOpened(pressedOutside ? false : true);
    };
    window.addEventListener("click", toggleCommandMenu);

    return () => window.removeEventListener("click", toggleCommandMenu);
  }, []);

  const currentOptions = useMemo(() => {
    const options =
      selectedOption === null
        ? commandOptions
        : commandOptions[selectedOption].subOptions;

    return options;
  }, [selectedOption]);

  useEffect(() => {
    if (!commandMenuRef.current) return;
    commandMenuRef.current.classList.remove("animate-bounce");
    commandMenuRef.current.clientWidth;
    commandMenuRef.current.classList.add("animate-bounce");
  }, [selectedOption]);

  return (
    <div className={classNames(opened && "opened")} ref={commandMenuRef}>
      <div
        ref={commandMenuRef}
        className={classNames(
          "absolute left-[calc(50%+7.5rem)] flex w-[80vw] max-w-[53rem] -translate-x-1/2 flex-col items-start rounded-xl border border-transparent-white bg-transparent-white shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity] md:left-1/2 ",
          opened &&
            "opened translate-y-[12.8rem] opacity-100 md:translate-y-[2.4rem]",
          !opened && "translate-y-[12.8rem] opacity-60",
        )}
      >
        <span className="ml-4 mt-2 bg-white/5 px-2 text-xs leading-10 text-white/50">
          LIN-111 Walkway lighting{" "}
        </span>
        <input
          placeholder="Type a command or search..."
          className="w-full bg-transparent p-5 text-lg outline-none"
        />
        <div className="flex w-full flex-col text-sm text-off-white">
          {currentOptions.map(
            ({ label, icon: Icon, ...subOptionMenuitems }, index) => (
              <button
                key={label}
                onClick={(event) => {
                  const clickedRootItem = "subOptions" in subOptionMenuitems;
                  setSelectedOption(clickedRootItem ? index : null);

                  if (!clickedRootItem) {
                    setOpened(false);
                    //we stopping the propagation to make sure that click event wont get bubbled up to the window
                    //and trigger toggleCommandMenu and this should be prevented in prder to make sure that the menu dont get reopened.
                    event.stopPropagation();
                  }
                }}
                className="command-menu-button flex h-[4.6rem]  items-center gap-3 px-5 first:bg-white/[0.15] hover:bg-white/[0.05]"
              >
                <Icon />
                {label}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
};
