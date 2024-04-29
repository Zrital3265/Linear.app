import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";

interface buttonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}
const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: "bg-primary-gradient",
      secondary: "",
      teritary: "",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Button = ({ children, href, variant, size }: buttonProps) => {
  return (
    <Link className={buttonClasses({ variant, size })} href={href}>
      {children}
    </Link>
  );
};
