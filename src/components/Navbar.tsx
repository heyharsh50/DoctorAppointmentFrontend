import { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-900" />
              <span className="ml-2 text-xl font-bold text-blue-900">HealthCare</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900">Home</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-blue-900">Find Doctors</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-900">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-900">Contact</Link>
            <Link to="/login" className="text-blue-900 hover:text-blue-800 font-medium">Login</Link>
            <Link to="/register" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Home</Link>
            <Link to="/doctors" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Find Doctors</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-900">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Contact</Link>
            <Link to="/login" className="block px-3 py-2 text-blue-900 hover:text-blue-800 font-medium">Login</Link>
            <Link to="/register" className="block px-3 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;