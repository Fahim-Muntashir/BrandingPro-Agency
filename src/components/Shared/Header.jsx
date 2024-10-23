import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import BookCall from "../ui/bookCall";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="container mx-auto flex justify-between items-center py-2 mt-5 px-6">
          {/* Logo */}
          <div>
            <img
              src="../public/assets/logo.svg"
              alt="Logo"
              width={200}
              className="object-cover"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex font-semibold text-[19px] space-x-6">
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Service
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              About us
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Service
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              Contact
            </a>
          </nav>

          {/* Button and Mobile Menu Icon */}
          <div className="flex items-center space-x-4">
            <BookCall></BookCall>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Side Navigation */}
      <div
        ref={sidebarRef} // Attach ref here
        className={`fixed top-0 left-0 h-full w-2/3 bg-gray-700 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <IoMdClose size={30} />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <a
            href="#"
            className="block py-2 hover:text-gray-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 hover:text-gray-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 hover:text-gray-400 transition duration-300"
          >
            Service
          </a>
          <a
            href="#"
            className="block py-2 hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
