import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/climange-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="group"
              onClick={() => setIsOpen(false)}
            >
              <img
                className="h-18 w-auto transition-transform duration-300 group-hover:scale-105"
                src={logo}
                alt="Climange Logo"
              />
            </Link>
          </div>

          {/* Desktop navigation - centered and with more spacing on larger screens */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-4 lg:space-x-8 xl:space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-2 py-2 text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  } transition-all duration-200`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-current transition-all duration-300" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100/30 dark:hover:bg-gray-800/30 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm`}>
        <div className="px-4 pb-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-2.5 px-3 rounded-lg text-base font-medium ${
                location.pathname === link.path
                  ? 'bg-gray-100/50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100'
                  : 'text-gray-600 hover:bg-gray-100/30 dark:text-gray-400 dark:hover:bg-gray-800/30'
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;