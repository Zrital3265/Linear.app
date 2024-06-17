"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features-icons.tsx";

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Build momentum
            <br />
            with Cycles
          </>
        }
        image="/cycles.webp"
        text={
          <>
            <h2 className="mx-auto my-16 text-center text-lg leading-tight text-white md:w-[80%] md:text-nowrap md:text-3xl">
              Cycles focus team on what work should happen next,{" "}
              <br className="hidden md:inline" />
              routine to maintain velocity make{" "}
              <br className="hidden md:inline" />
              meaningful progress and
              <br className="hidden md:inline" /> bestowal.
            </h2>
          </>
        }
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Automatic tracking.",
            text: "Any started issues are added to the current cycle.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Scheduled already .",
            text: "Unfinished work rolls over to the next cycle automatically.",
          },
          {
            icon: WorkflowsIcon,
            title: "Fully configurable.",
            text: "Define start date, end date, duration and more.",
          },
          {
            icon: CustomViewsIcon,
            title: "Delay Prediction.",
            text: "Get warnings for at-risk cycles sooner than ever.",
          },
          {
            icon: DiscussionIcon,
            title: "Scope creep.",
            text: "Understand which issues are added mid-cycle.",
          },
          {
            icon: IssuesIcon,
            title: "Be prepared.",
            text: "Schedule work in advance with upcoming cycles.",
          },
        ]}
      />
    </Features>
  );
};
