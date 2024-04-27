import Link from "next/link";
import React from "react";

interface buttonProps {
  children: React.ReactNode;
  href: string;
}
export const Button = ({ children, href }: buttonProps) => {
  return <Link href={href}>{children}</Link>;
};
