import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 bg-gradient-to-r from-black via-[#0b0014] to-purple-900/40 backdrop-blur-xl shadow-lg border-b border-white/10">
      
      <nav className="flex items-center justify-center md:justify-center mx-auto rounded-xl py-3 relative">

        {/* DESKTOP MENU – KODI YT (I PAPREKUR) */}
        <div className="hidden md:flex items-center space-x-10">

          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="
                relative text-gray-300 font-medium tracking-wide
                transition duration-300
                hover:text-purple-400
                group
              "
            >
              {item}

              {/* underline animation */}
              <span
                className="
                  absolute left-0 -bottom-1 w-0 h-[2px]
                  bg-gradient-to-r from-purple-400 to-purple-600
                  transition-all duration-300
                  group-hover:w-full
                "
              ></span>
            </Link>
          ))}

        </div>

        {/* MOBILE ICON (SHTESË, nuk prek desktop) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute right-6 text-white"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-6 pb-6">
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 text-lg font-medium hover:text-purple-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}

    </header>
  );
};

export default Header;
