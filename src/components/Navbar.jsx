import React from "react";
import logo from "../assets/logo.svg";
import { FaGithub } from "react-icons/fa";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 h-16" src={logo} alt="Humphrey David logo" />
      </div>
      <div className="flex items-center gap-6">
        <ul className="hidden gap-6 text-sm tracking-wide md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-purple-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/pyhumph"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="text-2xl transition-colors hover:text-purple-500"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
