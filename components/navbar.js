import React from "react";
import LoginButton from './login'

export default function Navbar() {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3 content-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase text-green border-2 border-brown px-4 py-0.5"
            href="#pablo"
          >
            Hikes
          </a>
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase text-green border-2 border-brown px-4 py-0.5"
            href="#pablo"
          >
            Home
          </a>
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase text-green border-2 border-brown px-4 py-0.5"
            href="#pablo"
          >
            Help
          </a>
        </div>
      </nav>
    </>
  );
}