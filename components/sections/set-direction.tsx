"use client";
import { Features } from "../features";
import {
  AirbyteIcon,
  FigmaIcon,
  FrontInterZenIcon,
  GitIcon,
  SentryIcon,
  SlackDiscIcon,
} from "../icons/workflows-icons.tsx";

export const SetDirection = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={
          <>
            Set direction
            <br />
            with Roadmaps
          </>
        }
        image="/roadmap.webp"
        text={
          <>
            <h2 className="mx-auto my-16 text-center text-lg leading-tight text-white md:w-[80%] md:text-nowrap md:text-3xl">
              Plan visually, collaborate in cross-team projects, and{" "}
              <br className="hidden md:inline" />
              make better decisions with progress insights{" "}
              <br className="hidden md:inline" />
              and project with fabolus <br className="hidden md:inline" />
              updates.
            </h2>
          </>
        }
      />
      <Features.Grid
        features={[
          {
            icon: GitIcon,
            title: "GitHub and GitLab.",
            text: "Prs with issues that close automatically.",
          },
          {
            icon: SlackDiscIcon,
            title: "Slack and Discord.",
            text: "Create issues and set up alerts.",
          },
          {
            icon: SentryIcon,
            title: "Sentry.",
            text: "Automatically create issues from code exceptions.",
          },
          {
            icon: AirbyteIcon,
            title: "Airbyte.",
            text: "Sync workspace data to external warehouses and databases.",
          },
          {
            icon: FrontInterZenIcon,
            title: "Front, Intercom, Zendesk.",
            text: "Keep a tight loop with your users.",
          },
          {
            icon: FigmaIcon,
            title: "Figma.",
            text: "Embed design files in issues and documents.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "./card-updates.webp",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[7%]",
            title: "Project updates",
            text: "Keep everyone up-to-date on the health and progress of projects.",
          },
          {
            image: "./card-roadmaps.webp",
            imageClassName: "top-[65%] md:top-[40%] w-full left-[5%]",
            title: "Focus on the image",
            text: "Explore projects in one view to identify the problems.",
          },
        ]}
      />
    </Features>
  );
};
