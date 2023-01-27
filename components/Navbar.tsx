"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Logo from "../public/logo.png";

type NavLinksProps = {
  id: number;
  name: string;
  path: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const githubLink: string = "https://github.com/jmartindg";
  const linkedinLink: string = "https://www.linkedin.com/in/john-martin-de-guia-b788b7205/";

  const navLinks: NavLinksProps[] = [
    {
      id: 1,
      name: "Home",
      path: "#home",
    },
    {
      id: 2,
      name: "About",
      path: "#about",
    },
    {
      id: 3,
      name: "Projects",
      path: "#projects",
    },
    {
      id: 4,
      name: "Contact",
      path: "#contact",
    },
  ];

  return (
    <header className="fixed inset-x-0 z-50 bg-white">
      <div className="container flex items-center justify-between py-6 px-4">
        <Image src={Logo} alt="Logo" />
        <nav className="hidden space-x-8 md:flex">
          {navLinks.map((navLink) => (
            <a
              key={navLink.id}
              href={navLink.path}
              className="text-sm font-bold uppercase transition duration-150 hover:text-red-500"
            >
              {navLink.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose size={25} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="container flex flex-col px-4 pt-4 pb-10">
          {navLinks.map((navLink) => (
            <a
              key={navLink.id}
              href={navLink.path}
              onClick={() => setIsOpen(!isOpen)}
              className="rounded py-4 text-sm font-bold uppercase transition duration-150 hover:bg-red-500 hover:pl-4 hover:text-white"
            >
              {navLink.name}
            </a>
          ))}

          <div className="mt-5 flex items-center space-x-4">
            <a href={githubLink} className="transition duration-150 hover:text-red-600">
              <FaGithub size={25} target="_blank" />
            </a>
            <a href={linkedinLink} className="transition duration-150 hover:text-red-600">
              <FaLinkedin size={25} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
