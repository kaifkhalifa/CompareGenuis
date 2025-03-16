import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';

const SearchResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  const categoryFilter = queryParams.get('category') || '';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    brands: [],
    rating: 0,
  });
  const [sortOption, setSortOption] = useState('relevance');

  // Mock product data - in a real app, this would come from an API
  const mockProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      image: '/images/products/iphone-15-pro-max.jpg',
      description: 'Apple\'s flagship smartphone with A17 Pro chip, 48MP camera system, and titanium design.',
      price: 1099,
      rating: 4.8,
      reviewCount: 1243,
      brand: 'Apple',
      category: 'Smartphones',
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      image: '/images/products/iphone-15-pro.jpg',
      description: 'Powerful A17 Pro chip, amazing camera capabilities, and premium build quality.',
      price: 999,
      rating: 4.7,
      reviewCount: 982,
      brand: 'Apple',
      category: 'Smartphones',
    },
    {
      id: 3,
      name: 'iPhone 15',
      image: '/images/products/iphone-15.jpg',
      description: 'A16 Bionic chip, improved camera system, and all-day battery life.',
      price: 799,
      rating: 4.6,
      reviewCount: 756,
      brand: 'Apple',
      category: 'Smartphones',
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 Ultra',
      image: '/images/products/samsung-galaxy-s24-ultra.jpg',
      description: 'Samsung\'s premium smartphone with Snapdragon 8 Gen 3, 200MP camera, and S Pen support.',
      price: 1199,
      rating: 4.7,
      reviewCount: 892,
      brand: 'Samsung',
      category: 'Smartphones',
    },
    {
      id: 5,
      name: 'Samsung Galaxy S23+',
      image: '/images/products/samsung-galaxy-s23-plus.jpg',
      description: 'Powerful performance, excellent camera system, and premium design.',
      price: 999,
      rating: 4.5,
      reviewCount: 654,
      brand: 'Samsung',
      category: 'Smartphones',
    },
    {
      id: 6,
      name: 'Google Pixel 8 Pro',
      image: '/images/products/google-pixel-8-pro.jpg',
      description: 'Google\'s flagship with Tensor G3 chip, advanced AI features, and exceptional camera.',
      price: 999,
      rating: 4.6,
      reviewCount: 543,
      brand: 'Google',
      category: 'Smartphones',
    },
    {
      id: 7,
      name: 'MacBook Pro M3',
      image: '/images/products/macbook-pro-16.jpg',
      description: 'Apple\'s powerful laptop with M3 chip, stunning display, and all-day battery life.',
      price: 1999,
      rating: 4.8,
      reviewCount: 432,
      brand: 'Apple',
      category: 'Laptops',
    },
    {
      id: 8,
      name: 'Sony WH-1000XM5',
      image: '/images/products/sony-wh-1000xm5.jpg',
      description: 'Industry-leading noise cancellation, exceptional sound quality, and long battery life.',
      price: 349,
      rating: 4.9,
      reviewCount: 876,
      brand: 'Sony',
      category: 'Headphones',
    },
  ];

  // Filter and sort products based on search query and filters
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filteredProducts = [...mockProducts];
      
      // Filter by search query
      if (searchQuery) {
        filteredProducts = filteredProducts.filter(product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      // Filter by category
      if (categoryFilter) {
        filteredProducts = filteredProducts.filter(product => 
          product.category.toLowerCase() === categoryFilter.toLowerCase()
        );
      }
      
      // Filter by price range
      filteredProducts = filteredProducts.filter(product => 
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
      
      // Filter by brands
      if (filters.brands.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
          filters.brands.includes(product.brand)
        );
      }
      
      // Filter by rating
      if (filters.rating > 0) {
        filteredProducts = filteredProducts.filter(product => 
          product.rating >= filters.rating
        );
      }
      
      // Sort products
      switch (sortOption) {
        case 'price-low-high':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high-low':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filteredProducts.sort((a, b) => b.rating - a.rating);
          break;
        case 'relevance':
        default:
          // Keep default order (relevance)
          break;
      }
      
      setProducts(filteredProducts);
      setLoading(false);
    }, 800);
  }, [searchQuery, categoryFilter, filters, sortOption]);

  // Available brands for filtering
  const availableBrands = ['Apple', 'Samsung', 'Google', 'Sony', 'Bose', 'Dell', 'HP'];

  // Handle filter changes
  const handleBrandFilterChange = (brand) => {
    setFilters(prev => {
      const updatedBrands = prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand];
      
      return {
        ...prev,
        brands: updatedBrands
      };
    });
  };

  const handleRatingFilterChange = (rating) => {
    setFilters(prev => ({
      ...prev,
      rating
    }));
  };

  const handlePriceRangeChange = (range) => {
    setFilters(prev => ({
      ...prev,
      priceRange: range
    }));
  };

  const handleSearch = (query) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleCompareClick = (productId) => {
    // In a real app, you would add this product to a comparison list
    // For now, we'll just navigate to a comparison page with this product
    navigate(`/compare?products=${productId}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} value={searchQuery} />
        </div>

        {/* Search results header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {searchQuery ? `Search results for "${searchQuery}"` : 
             categoryFilter ? `${categoryFilter}` : 'All Products'}
          </h1>
          <p className="text-gray-600 mt-1">
            {loading ? 'Searching...' : `${products.length} products found`}
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Filters sidebar */}
          <div className="w-full md:w-64 mb-6 md:mb-0 md:mr-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="font-bold text-lg mb-4">Filters</h2>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Price Range</h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="100"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceRangeChange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600">
                    ${filters.priceRange[0]} - ${filters.priceRange[1]}
                  </span>
                </div>
              </div>
              
              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Brand</h3>
                <div className="space-y-2">
                  {availableBrands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <input
                        id={`brand-${brand}`}
                        type="checkbox"
                        checked={filters.brands.includes(brand)}
                        onChange={() => handleBrandFilterChange(brand)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Rating Filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <div key={rating} className="flex items-center">
                      <input
                        id={`rating-${rating}`}
                        type="radio"
                        name="rating"
                        checked={filters.rating === rating}
                        onChange={() => handleRatingFilterChange(rating)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-gray-700 flex items-center">
                        {rating}+ 
                        <div className="flex ml-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort options */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-500">
                {products.length} products
              </div>
              <div>
                <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="text-sm border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <div 
                      className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 cursor-pointer"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-center object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 
                        className="text-lg font-medium text-gray-900 mb-1 cursor-pointer hover:text-primary-600"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                        {product.description}
                      </p>
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
                          ({product.reviewCount})
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="font-bold text-lg text-gray-900">${product.price}</div>
                        <button
                          onClick={() => handleCompareClick(product.id)}
                          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                        >
                          + Compare
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setFilters({
                      priceRange: [0, 2000],
                      brands: [],
                      rating: 0,
                    });
                    setSortOption('relevance');
                    navigate('/search');
                  }}
                  className="btn-primary"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
