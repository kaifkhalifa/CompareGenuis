import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../search/SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (query) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="sr-only">CompareGenius</span>
              <svg 
                className="h-8 w-auto sm:h-10 text-primary-600" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-primary-900">CompareGenius</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/categories" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Categories
            </Link>
            <Link to="/trending" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Trending
            </Link>
            <Link to="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blog
            </Link>
            <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
          </nav>

          {/* Desktop search and sign in */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="w-full max-w-xs mr-4">
              <SearchBar onSearch={handleSearch} />
            </div>
            <Link to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </Link>
            <Link
              to="/register"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/" className="flex items-center">
                    <span className="sr-only">CompareGenius</span>
                    <svg 
                      className="h-8 w-auto text-primary-600" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
                    </svg>
                    <span className="ml-2 text-xl font-bold text-primary-900">CompareGenius</span>
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <div className="w-full">
                  <SearchBar onSearch={handleSearch} />
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link to="/categories" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Categories
                </Link>
                <Link to="/trending" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Trending
                </Link>
                <Link to="/blog" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </Link>
                <Link to="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  About
                </Link>
              </div>
              <div>
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary-600 hover:text-primary-500">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
