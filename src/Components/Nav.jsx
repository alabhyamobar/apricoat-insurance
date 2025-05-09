import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ScrollProvider } from "../Context/ScrollContext";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const {
    homeRef,
    aboutRef,
    serviceRef,
    contactRef,
    testimonialRef,
    scrollToView,
  } = useContext(ScrollProvider);

  const [isOpen, setIsOpen] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isSamsung, setIsSamsung] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    );
    setIsSamsung(/Samsung|SM-/.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "");
      const refMap = {
        home: homeRef,
        about: aboutRef,
        services: serviceRef,
        testimonials: testimonialRef,
        contact: contactRef,
      };
      const targetRef = refMap[hash];
      if (targetRef && targetRef.current) {
        setTimeout(() => {
          scrollToView(targetRef);
        }, 100);
      }
    }

    return () => {
      if (isIOS) document.body.style.overflow = "auto";
    };
  }, [location.hash]);

  const navItems = [
    { label: "Home", ref: homeRef, hash: "home" },
    { label: "About", ref: aboutRef, hash: "about" },
    { label: "Services", ref: serviceRef, hash: "services" },
    { label: "Testimonials", ref: testimonialRef, hash: "testimonials" },
  ];

  const handleNav = (ref, hash) => {
    setIsOpen(false);
    if (isIOS) document.body.style.overflow = "auto";

    if (isHome) {
      scrollToView(ref);
    } else {
      navigate(`/#${hash}`);
    }
  };

  const toggleMenu = () => {
    const willOpen = !isOpen;
    setIsOpen(willOpen);
    if (isIOS) {
      document.body.style.overflow = willOpen ? "hidden" : "auto";
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md ${
        isIOS ? "supports-ios:pb-safe" : ""
      }`}
    >
      <div
        className={`w-full px-4 sm:px-5 mx-auto max-w-screen-xl flex justify-between items-center ${
          isSamsung ? "py-2.5" : "py-3"
        } md:py-4`}
      >
        <div className="text-xl md:text-2xl font-bold text-blue-500">
          Apricoat Insurance
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.ref, item.hash)}
              className="text-gray-800 hover:text-blue-500 text-sm lg:text-base font-medium transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}

          <Link to="/apricoat-insurance/contact">
            <button className="text-gray-800 hover:text-blue-500 text-sm lg:text-base font-medium transition-colors duration-200">
              Contact Us
            </button>
          </Link>

          <Link to="/apricoat-insurance/quotes">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors duration-200">
              Get Quotes
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isIOS ? "active:bg-gray-100" : ""
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden px-5 py-3 flex flex-col items-start gap-1 overflow-y-auto ${
          isIOS ? "pb-[env(safe-area-inset-bottom)]" : ""
        }`}
        style={{
          WebkitOverflowScrolling: isSamsung ? "touch" : "auto",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNav(item.ref, item.hash)}
            className={`text-gray-800 hover:text-blue-500 text-lg font-medium w-full text-left py-3 px-3 rounded-md ${
              isIOS ? "active:bg-gray-100" : "active:bg-blue-50"
            }`}
          >
            {item.label}
          </button>
        ))}

        <Link to="/apricoat-insurance/contact">
          <button
            onClick={() => {
              setIsOpen(false);
              if (isIOS) document.body.style.overflow = "auto";
            }}
            className={`text-gray-800 hover:text-blue-500 text-lg font-medium w-full text-left py-3 px-3 rounded-md ${
              isIOS ? "active:bg-gray-100" : "active:bg-blue-50"
            }`}
          >
            Contact Us
          </button>
        </Link>

        <Link to="/apricoat-insurance/quotes">
          <button
            onClick={() => {
              setIsOpen(false);
              if (isIOS) document.body.style.overflow = "auto";
            }}
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-md font-semibold transition-colors duration-200"
          >
            Get Quotes
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
