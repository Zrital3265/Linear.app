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
    <header className="fixed  left-0 top-0 flex w-full  justify-evenly  border-b  border-transparent-white backdrop-blur-[12px] ">
      <Container className="flex h-[var(--navigation-height)] ">
        {/* logo */}
        <Link className=" flex items-center text-md font-medium" href="/">
          <Logo className=" mr-2 h-[1.8rem] w-[1.8rem] " />
          Linear
        </Link>

        {/* navbar  plus ham */}
        <div
          className={classNames(
            "flex items-center transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible  " : "invisible delay-500",
          )}
        >
          <nav
            className={classNames(
              " fixed left-0 top-[var(--navigation-height)] h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background  transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:bg-transparent md:opacity-100",
              hamburgerMenuIsOpen ? "opacity-100" : "opacity-0",
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col overflow-hidden md:flex-row md:items-center [&_li]:border-b [&_li]:border-grey-dark  md:[&_li]:border-none",
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
        </div>
        {/* butttons */}
        <div className="ml-15 flex h-full flex-shrink-0 items-center  md:ml-10 ">
          <Link className="mx-6 text-sm md:mx-0 md:mr-8 " href="#">
            Log in
          </Link>
          <Button className="" href="#" variant={"primary"}>
            Sign up
          </Button>
        </div>

        {/* ham */}
        <button
          className="ml-5 md:hidden"
          onClick={() => {
            // console.log("Current value of open:", hamburgerMenuIsOpen);
            sethamburgerMenuIsOpen((open) => !open);
            ``;
          }}
        >
          <span className="sr-only">Toggle Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
