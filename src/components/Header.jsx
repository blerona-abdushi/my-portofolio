import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full px-6 py-4">
      <nav className="flex items-center justify-center mx-auto rounded-lg space-x-8 py-3">
        <div className="hidden md:flex items-center space-x-10 gap-5">
          <Link to="/" className="text-gray-500 hover:text-purple-600 transition-colors">Home</Link>
          <Link to="/about" className="text-gray-500 hover:text-purple-600 transition-colors">About</Link>
          <Link to="/portfolio" className="text-gray-500 hover:text-purple-600 transition-colors">Portfolio</Link>
          <Link to="/contact" className="text-gray-500 hover:text-purple-600 transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
