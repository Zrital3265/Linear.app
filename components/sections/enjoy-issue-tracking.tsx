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

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Issue tracking
            <br />
            you&apos;ll enjoy using
          </>
        }
        image="/issues.avif"
        text={
          <>
            <h2 className="mx-auto my-16 text-center text-lg leading-tight text-white md:w-[80%] md:text-nowrap md:text-3xl">
              Create tasks in seconds, discuss issues in context,
              <br className="hidden md:inline" /> and breeze through your work
              in views <br className="hidden md:inline" /> tailored to you and
              your <br className="hidden md:inline" /> team.
            </h2>
          </>
        }
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Parent and sub-issues.",
            text: "Break larger takss into smaller issues.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Automated backlog.",
            text: "Linear will auto-close and auto-archive issues.",
          },
          {
            icon: WorkflowsIcon,
            title: "Custom workflows.",
            text: "Define unique issue states for teams.",
          },
          {
            icon: CustomViewsIcon,
            title: "Filters and custom POV.",
            text: "See only what's relevant for yourself.",
          },
          {
            icon: DiscussionIcon,
            title: "Discussion.",
            text: "Collaborate on issues without losing context.",
          },
          {
            icon: IssuesIcon,
            title: "Issue templates.",
            text: "Guide your team to write effectively.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-board.webp",
            imageClassName: "top-[45%] w-[200%]",
            title: "List and board",
            text: "Switch between list and board layout to view work from POV.",
          },
          {
            image: "/card-views.webp",
            imageClassName: "left-[24px] w-[110%] md:top-[34%] top-[50%]",
            title: "Make it yours",
            text: "Quickly apply operators to refine your issue lists and  custom views.",
          },
        ]}
      />
    </Features>
  );
};
