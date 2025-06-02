import React from "react";
import { Link } from "react-router-dom";

export default function LandingNavbar() {
  return (
    <div className="relative overflow-x-hidden">
      {/* النافبار */}
     
      <nav className="fixed w-full top-0 z-50 bg-white flex items-center justify-between px-4 py-2">
        {/* logo in the left */}
        <div>
          <img src="/logo.png" alt="logo" className="h-12" />
        </div>
        
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="home"
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="services"
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="about-us"
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="contact-us"
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* زر الدخول والتسجيل ي */}
        <div className="flex items-center relative h-24">
          
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 relative z-10 shadow-lg ml-auto mr-4">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}