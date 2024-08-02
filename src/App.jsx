import React, { useState } from "react";
import Chat from "./chat";

const MenuIcon = () => (
  <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    className="w-7 h-7 m-5"
    aria-label="Menu"
  >
    <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 21 21"
    fill="currentColor"
    className="w-7 h-7 m-5"
    aria-label="Close"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(2 2)"
    >
      <path d="M16.5 8.5 A8 8 0 0 1 8.5 16.5 A8 8 0 0 1 0.5 8.5 A8 8 0 0 1 16.5 8.5 z" />
      <path d="M5.5 5.5l6 6M11.5 5.5l-6 6" />
    </g>
  </svg>
);

export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-between items-center p-3">
        <h1 className="text-green-400 text-[30px] font-[Poppins] font-normal">
        </h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:flex`}>
        <nav>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 p-5 w-full">
            <li>
              <a
                href="/"
                className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/skills"
                className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/experience"
                className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Chat />
    </div>
  );
}