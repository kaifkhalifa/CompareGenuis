import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';

const HomePage = () => {
  const navigate = useNavigate();
  
  const handleSearch = (query) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  // Popular categories
  const categories = [
    { id: 1, name: 'Smartphones', icon: '📱' },
    { id: 2, name: 'Laptops', icon: '💻' },
    { id: 3, name: 'Headphones', icon: '🎧' },
    { id: 4, name: 'Smart Watches', icon: '⌚' },
    { id: 5, name: 'Cameras', icon: '📷' },
    { id: 6, name: 'TVs', icon: '📺' },
    { id: 7, name: 'Gaming', icon: '🎮' },
    { id: 8, name: 'Smart Home', icon: '🏠' },
  ];

  // Trending products
  const trendingProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      image: 'https://placehold.co/300x300?text=iPhone+15',
      rating: 4.8,
      reviewCount: 1243,
      price: '$1,099',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      image: 'https://placehold.co/300x300?text=Galaxy+S23',
      rating: 4.7,
      reviewCount: 982,
      price: '$1,199',
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      image: 'https://placehold.co/300x300?text=Sony+WH-1000XM5',
      rating: 4.9,
      reviewCount: 756,
      price: '$349',
    },
    {
      id: 4,
      name: 'MacBook Pro M3',
      image: 'https://placehold.co/300x300?text=MacBook+Pro',
      rating: 4.8,
      reviewCount: 543,
      price: '$1,999',
    },
  ];

  // Recent comparisons
  const recentComparisons = [
    {
      id: 1,
      title: 'iPhone 15 Pro vs Samsung Galaxy S23 Ultra',
      image1: 'https://placehold.co/150x150?text=iPhone+15',
      image2: 'https://placehold.co/150x150?text=Galaxy+S23',
      views: '12.5K',
    },
    {
      id: 2,
      title: 'Sony WH-1000XM5 vs Bose QuietComfort Ultra',
      image1: 'https://placehold.co/150x150?text=Sony+WH-1000XM5',
      image2: 'https://placehold.co/150x150?text=Bose+QC+Ultra',
      views: '8.3K',
    },
    {
      id: 3,
      title: 'MacBook Pro M3 vs Dell XPS 15',
      image1: 'https://placehold.co/150x150?text=MacBook+Pro',
      image2: 'https://placehold.co/150x150?text=Dell+XPS',
      views: '6.7K',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 right-0 transform translate-y-1/2"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 192L48 176C96 160 192 128 288 128C384 128 480 160 576 186.7C672 213 768 235 864 224C960 213 1056 171 1152 160C1248 149 1344 171 1392 181.3L1440 192V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V192Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Compare Products with AI-Powered Insights
          </h1>
          <p className="mt-6 text-xl text-white opacity-90 max-w-2xl mx-auto">
            Make smarter purchasing decisions with CompareGenius. Get side-by-side comparisons, expert reviews, and AI-generated insights.
          </p>
          <div className="mt-10 max-w-xl mx-auto">
            <SearchBar onSearch={handleSearch} size="large" placeholder="Search for products to compare (e.g., iPhone 15, Budget Laptops)" />
          </div>
          <div className="mt-4 text-sm text-white opacity-75">
            Popular searches: iPhone 15 Pro, Samsung Galaxy S23, Wireless Earbuds, Gaming Laptops
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 text-center cursor-pointer"
              onClick={() => navigate(`/search?category=${encodeURIComponent(category.name)}`)}
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Trending Products</h2>
          <button
            onClick={() => navigate('/trending')}
            className="text-primary-600 hover:text-primary-800 font-medium"
          >
            View all
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                <div className="font-bold text-lg text-gray-900">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Comparisons Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Comparisons</h2>
          <button
            onClick={() => navigate('/comparisons')}
            className="text-primary-600 hover:text-primary-800 font-medium"
          >
            View all
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentComparisons.map((comparison) => (
            <div
              key={comparison.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 cursor-pointer"
              onClick={() => navigate(`/compare?products=${comparison.id}`)}
            >
              <div className="flex justify-center items-center mb-4 space-x-4">
                <img
                  src={comparison.image1}
                  alt="Product 1"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="text-lg font-bold text-gray-500">VS</div>
                <img
                  src={comparison.image2}
                  alt="Product 2"
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
                {comparison.title}
              </h3>
              <div className="text-sm text-gray-500 text-center">
                {comparison.views} views
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose CompareGenius</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 inline-flex mx-auto mb-4">
              <svg className="h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Comparisons</h3>
            <p className="text-gray-600">
              Side-by-side product comparisons with detailed specifications, pricing, and user reviews from multiple sources.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 inline-flex mx-auto mb-4">
              <svg className="h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Insights</h3>
            <p className="text-gray-600">
              Our advanced AI analyzes thousands of reviews and expert opinions to provide you with unbiased product insights.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 inline-flex mx-auto mb-4">
              <svg className="h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Price Tracking</h3>
            <p className="text-gray-600">
              Track price history and get alerts when products go on sale, ensuring you always get the best deal.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-6">
            Subscribe to our newsletter for the latest product comparisons, reviews, and tech news.
          </p>
          <form className="sm:flex justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
