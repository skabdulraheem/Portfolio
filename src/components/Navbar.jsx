import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60 text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            RAHEEM
          </h4>
        </div>

        {/* Desktop Menu */}
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li key={i} className="px-6 hover:text-orange-600">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}

            {/* Resume Button */}
            <li>
              <a
                href="https://drive.google.com/file/d/1tQvLg79pEQCab9mVGGQBVYbdrobNfLSY/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md shadow-md transition-transform duration-300 hover:bg-orange-700 hover:scale-105"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}

            {/* Resume Button in Mobile Menu */}
            <li>
              <a
                href="https://drive.google.com/file/d/1tQvLg79pEQCab9mVGGQBVYbdrobNfLSY/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-center text-sm font-semibold text-white bg-orange-500 rounded-md shadow-md transition-transform duration-300 hover:bg-ornage-700 hover:scale-105"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
