import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#052F72] text-gray-200 dark:bg-gray-900 rounded-se-[100px] ">
      <div className="w-full max-w-[1500px] mx-auto px-8 sm:px-6 lg:px-8 py-4 lg:py-6">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          logo
        </span>
        <div className="md:flex md:justify-between gap-10">
          <div className="mb-6 md:mb-0">
            <p className="max-w-lg py-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              vel dolorum, dolore, ad cupiditate odio aut, nesciunt consequuntur
              corrupti quis quo optio nulla ab ipsa minus sunt laudantium vero
              qui!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 lg:grid-cols-3 ">
            <div>
              <ul className="text-gray-200 dark:text-gray-400 font-medium flex md:flex-col flex-row justify-center gap-5 md:gap-3 ">
                <li className=" hover:scale-105">
                  <a href="">Home</a>
                </li>
                <li className=" hover:scale-110">
                  <a href="#about-us">About us</a>
                </li>
                <li className=" hover:scale-110">
                  <a href="#how-it-works">How it works</a>
                </li>
                <li className=" hover:scale-110">
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                GET IN TOUCH
              </h2>
              <div className="relative w-full max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md bg-[#052F72] border-white border-[1px] px-4 py-2 pr-24 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="absolute min-w-24 right-0.5 top-1/2 -translate-y-1/2 rounded-md bg-white  px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-300 transition-all duration-200"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center text-center mt-5">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
            © 2025 Momtathl . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
