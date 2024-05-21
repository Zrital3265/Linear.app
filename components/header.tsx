"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "@/components/icons/logo";
import Link from "next/link";
import Container from "./container";
import { Button } from "./button";
import { HamburgerIcon } from "@/components/icons/hamburger";
import classNames from "classnames";

export const Header = () => {
  // Effect to control scrolling behavior based on hamburgerMenuIsOpen state
  const [hamburgerMenuIsOpen, sethamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html !== undefined && html !== null) {
      html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
    }
  }, [hamburgerMenuIsOpen]);

  // Effect to handle closing hamburger menu on resize or orientation change
  useEffect(() => {
    const closeHamburgerNavigation = () => sethamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    //cleanup
    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [sethamburgerMenuIsOpen]);

  return (
    <header className="fixed left-0 top-0  flex w-full justify-evenly border-b border-transparent-white backdrop-blur-[12px]  ">
      <Container className="flex h-[var(--navigation-height)] ">
        {/* logo */}
        <Link className="flex items-center text-sm font-medium " href="/">
          <Logo className="mr-2 h-[1.8rem] w-[1.8rem]" />
          Linear
        </Link>

        {/* navbar  plus ham */}
        <div
          className={classNames(
            "flex items-center transition-[visibility] md:visible ",
            hamburgerMenuIsOpen ? "visible" : "delay-500 invisible",
          )}
        >
          <nav
            className={classNames(
              " fixed left-0 top-[var(--navigation-height)]  h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity  duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? " translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0",
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col overflow-hidden md:flex-row md:items-center [&_li]:border-b [&_li]:border-grey-dark  md:[&_li]:border-none",
                " [&_a:hover]:text-grey [&_a]:ml-11 [&_a]:flex [&_a]:h-[var(--navigation-height)] [&_a]:w-full [&_a]:items-center [&_a]:text-lg md:[&_a]:text-sm",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0",
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
        </div>

        {/* butttons */}
        <div className="ml-15 flex h-full flex-shrink-0 items-center  md:ml-10 ">
          <Link className="mx-6 text-sm md:mx-0 md:mr-8 " href="#">
            Log in
          </Link>
          <Button className="rounded-3xl" href="#" variant={"primary"}>
            Sign up
          </Button>
        </div>

        {/* ham */}
        <button
          className="ml-5 md:hidden"
          onClick={() => {
            // console.log("Current value of open:", hamburgerMenuIsOpen);
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
