import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
interface buttonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
  className?: string;
}
const buttonClasses = cva("inline-flex items-center", {
  variants: {
    variant: {
      primary: [
        "bg-button-color text-white hover:text-shadow hover:shadow-primary transition-[box-shadow,text-shadow]",
        "[&_.icon-wrapper]:ml-1 ",
      ],
      secondary: [
        "text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
        " [&_.icon-wrapper]:bg-transparent-white [&_.icon-wrapper]:rounded-full [&_.icon-wrapper:last-child]:ml-2 [&_.icon-wrapper]:px-2 [&_.icon-wrapper:last-child]:-mr-2  [&_.icon-wrapper:first-child]:mr-2 [&_.icon-wrapper:first-child]:-ml-2 ",
      ],
      teritary: "",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-[12px] h-[32px]",
      large: "text-[17px] px-[17px] h-[50px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={classNames("icon-wrapper", className)}>{children}</span>;

export const Button = ({
  children,
  href,
  variant,
  size,
  className,
}: buttonProps) => {
  return (
    <Link className={buttonClasses({ variant, size, className })} href={href}>
      {children}
    </Link>
  );
};
