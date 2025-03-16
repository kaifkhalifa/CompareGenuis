import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <div className="mb-6">
            <h2 className="text-6xl font-extrabold text-primary-600 mb-2">404</h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h3>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              to="/"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Return to Home
            </Link>
            <Link
              to="/search"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Search Products
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need help? <Link to="/contact" className="font-medium text-primary-600 hover:text-primary-500">Contact Support</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
