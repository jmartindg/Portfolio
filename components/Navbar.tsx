// Client component

import Link from "next/link";

type NavLinksProps = {
  id: number;
  name: string;
  path: string;
};

const Navbar = () => {
  const navLinks: NavLinksProps[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Projects",
      path: "/projects",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="bg-white">
      <div className="container flex items-center justify-between py-5 px-4">
        <p>JM DE GUIA</p>
        <nav className="space-x-8">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              href={navLink.path}
              className="font-bold uppercase text-sm hover:text-red-500 transition duration-150"
            >
              {navLink.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
