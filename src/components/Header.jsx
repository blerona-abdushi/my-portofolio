import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-gradient-to-r from-black via-[#0b0014] to-purple-900/40 backdrop-blur-xl shadow-lg border-b border-white/10">
      <nav className="flex items-center justify-center mx-auto rounded-xl py-3">
        <div className="hidden md:flex items-center space-x-10">

          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="
                relative text-gray-300 font-medium tracking-wide
                transition duration-300
                hover:text-purple-400
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
      </nav>
    </header>
  );
};

export default Header;
