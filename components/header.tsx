"use client";
import React, { useState } from "react";
import { Logo } from "@/icons/logo";
import Link from "next/link";
import Container from "./container";
import { Button } from "./button";
import { HamburgerIcon } from "@/icons/hamburger";
import classNames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, sethamburgerMenuIsOpen] = useState(false);
  return (
    <header className="fixed left-0 top-0 flex w-full justify-evenly border-b  border-transparent-white backdrop-blur-[12px] ">
      <Container className="flex h-[var(--navigation-height)] ">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        <nav
          className={classNames(
            " fixed left-0 top-[var(--navigation-height)] h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background md:block",
            hamburgerMenuIsOpen ? "" : "hidden",
          )}
        >
          <ul
            className={classNames(
              " [&_li]:border-grey-dark  flex h-full flex-col md:flex-row md:items-center [&_li]:border-b  ",
              " [&_a:hover]:text-grey [&_a]:ml-11 [&_a]:flex [&_a]:h-[var(--navigation-height)] [&_a]:w-full [&_a]:items-center [&_a]:text-md md:[&_a]:text-sm",
            )}
          >
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Customer</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Changelog</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Integration</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>
        <div className="ml-11 flex h-full flex-shrink-0  items-center">
          <Link className="mr-9 text-sm" href="#">
            Log in
          </Link>
          <Button className="" href="#" variant={"primary"}>
            Sign up
          </Button>
        </div>
        <button
          className="ml-10"
          onClick={() => {
            console.log("Current value of open:", hamburgerMenuIsOpen);
            sethamburgerMenuIsOpen((open) => !open);
          }}
        >
          <span className="sr-only">Toggle Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
