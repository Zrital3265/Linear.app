import React from "react";
import Container from "./container";
import Link from "next/link";
import { Logo } from "@/icons/logo";
import { TwitterIcon } from "@/icons/twitter";
import { SlackIcon } from "@/icons/slack";
import { GithubIcon } from "@/icons/github";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integration", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brands", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "Github", href: "#" },
    ],
  },
];
export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
      <Container className="flex flex-col justify-between md:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-grey">
              <Logo className="mr-4 h-4 w-4" /> Linear -Desigined worldwide
            </div>
            <div className="mt-auto flex space-x-4 text-grey">
              <TwitterIcon />
              <SlackIcon />
              <GithubIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map(
            (
              column,
              columnIndex, // Add "columnIndex" as the key prop
            ) => (
              <div
                key={columnIndex}
                className=" mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
              >
                <h3 className="mb-3 font-medium">{column.title}</h3>
                <ul>
                  {column.links.map(
                    (
                      link,
                      linkIndex, // Add "linkIndex" as the key prop
                    ) => (
                      <li key={linkIndex} className="[&_a]:last:mb-0">
                        <Link
                          className="mb-3 block text-grey transition-colors hover:text-white"
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ),
          )}
        </div>
      </Container>
    </footer>
  );
};
