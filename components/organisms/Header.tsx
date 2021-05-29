import Link from "next/link";
import React from "react";
import { ActiveLink } from "../atoms/ActiveLink";

export const Header = () => {
  const menu: { href: string; text: string }[] = [];
  menu.push({
    href: "/",
    text: "Workshop",
  });

  menu.push({
    href: "/",
    text: "Flow chart",
  });

  menu.push({
    href: "/",
    text: "Homework tool",
  });

  menu.push({
    href: "/advice",
    text: "Advice",
  });

  menu.push({
    href: "/",
    text: "Portfolios",
  });

  return (
    <div className="p-5 flex flex-row justify-center fixed text-gray-200 bg-gray-700 bg-opacity-80 w-full">
      <div className=" space-x-8 flex flex-row flex-wrap items-center w-full max-w-screen-xl justify-center">
        <Link href="/">
          <a className="flex-none text-5xl">CSC</a>
        </Link>

        <div className="flex flex-1 items-center justify-end">
          <div className="space-x-16 flex flex-1 mr-8 font-semibold justify-center">
            <ul className="flex flex-none justify-center space-x-8">
              {menu.map(({ href, text }) => (
                <li key={text} className="relative">
                  <ActiveLink
                    href={href}
                    activeClassName="border-b-2 border-denim-500 hover:border-peach-500"
                  >
                    <a className="py-1 font-normal hover:text-gray-400 transition-all duration-300">
                      {text}
                    </a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
