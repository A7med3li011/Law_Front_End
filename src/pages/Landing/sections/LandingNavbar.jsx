import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect active section
      const sections = ["hero", "features", "about-us", "faq"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NavLink component for consistent styling
  const NavLink = ({ to, children }) => (
    <a
      href={`#${to}`}
      className={`relative text-gray-700 hover:text-blue-600 font-medium transition-colors ${
        activeSection === to ? "text-blue-600" : ""
      }`}
      onClick={() => {
        setIsMenuOpen(false);
        setActiveSection(to);
      }}
    >
      {children}
      {activeSection === to && (
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary origin-left animate-scale-x"></span>
      )}
    </a>
  );

  // MobileNavLink component for mobile menu
  const MobileNavLink = ({ to, children }) => (
    <Link
      to={`#${to}`}
      className={`block py-2 px-4 rounded transition-colors ${
        activeSection === to
          ? "bg-blue-50 text-blue-600 font-medium"
          : "text-gray-700 hover:text-blue-600"
      }`}
      onClick={() => {
        setIsMenuOpen(false);
        setActiveSection(to);
      }}
    >
      {children}
    </Link>
  );

  return (
    <div className="relative overflow-x-hidden">
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 
          bg-white ${
            isScrolled ? "shadow-md py-2" : "md:bg-transparent md:py-4 py-2"
          } 
          flex items-center justify-between px-4`}
      >
        <div>
          {/* <img src="/logo.png" alt="logo" className="h-10" /> */}
          <h1>LOGO</h1>
        </div>

        <ul className="hidden md:flex space-x-8">
          <li className="py-2">
            <NavLink to="faq">الاسئلة الشائعة</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="about-us">من نحن</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="features">الخدمات</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="hero">الصفحة الرئيسية</NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="hidden md:block bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow"
          >
            تسجيل
          </button>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed top-10 left-0 w-full bg-white shadow-lg py-4 px-6 z-[100]">
          <ul className="space-y-2">
            <li>
              <MobileNavLink to="hero">الصفحة الرئيسية</MobileNavLink>
            </li>
            <li>
              <MobileNavLink to="features">الخدمات</MobileNavLink>
            </li>
            <li>
              <MobileNavLink to="about-us">من نحن</MobileNavLink>
            </li>
            <li>
              <MobileNavLink to="faq">الاسئلة الشائعة</MobileNavLink>
            </li>
            <li className="mt-4">
              <button
                onClick={() => {
                  navigate("/home");
                }}
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 rounded-lg transition-all duration-300"
              >
                تسجيل
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Add this to your Tailwind config or CSS file */}
      <style jsx global>{`
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-scale-x {
          animation: scaleX 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
