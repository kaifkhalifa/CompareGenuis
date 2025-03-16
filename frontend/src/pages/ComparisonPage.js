import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';
import { allProducts } from '../data';

const ComparisonPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productIds = queryParams.get('products') ? queryParams.get('products').split(',') : [];
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  // In a real app, this would come from an API call
  // We're using our mock data imported from the data directory
  const mockProducts = [
    {
      id: "1",
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      category: 'Smartphones',
      description: 'Apple\'s flagship smartphone with A17 Pro chip, 48MP camera system, and titanium design.',
      price: 1099,
      rating: 4.8,
      reviewCount: 1243,
      image: '/images/products/iphone-15-pro-max.jpg',
      specs: {
        processor: 'A17 Pro',
        ram: '8GB',
        storage: '256GB/512GB/1TB',
        display: '6.7-inch Super Retina XDR',
        camera: '48MP main, 12MP ultrawide, 12MP telephoto',
        battery: '4,422 mAh',
        os: 'iOS 17',
        dimensions: '159.9 x 76.7 x 8.25 mm',
        weight: '221g',
      },
      pros: [
        'Exceptional performance with A17 Pro chip',
        'Outstanding camera system',
        'Premium titanium build quality',
        'Excellent battery life',
        'iOS ecosystem and long-term software support',
      ],
      cons: [
        'Expensive compared to competitors',
        'No USB-C fast charging beyond 27W',
        'Limited customization options',
        'No charger included in the box',
      ],
    },
    {
      id: "2",
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      category: 'Smartphones',
      description: 'Powerful A17 Pro chip, amazing camera capabilities, and premium build quality.',
      price: 999,
      rating: 4.7,
      reviewCount: 982,
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-blue-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938097214',
      specs: {
        processor: 'A17 Pro',
        ram: '8GB',
        storage: '128GB/256GB/512GB/1TB',
        display: '6.1-inch Super Retina XDR',
        camera: '48MP main, 12MP ultrawide, 12MP telephoto',
        battery: '3,274 mAh',
        os: 'iOS 17',
        dimensions: '146.6 x 70.6 x 8.25 mm',
        weight: '187g',
      },
      pros: [
        'Powerful A17 Pro chip',
        'Excellent camera system',
        'Premium titanium build',
        'Compact size',
        'iOS ecosystem',
      ],
      cons: [
        'Expensive',
        'Battery life could be better',
        'No charger in box',
        'Limited customization',
      ],
    },
    {
      id: "3",
      name: 'iPhone 15',
      brand: 'Apple',
      category: 'Smartphones',
      description: 'A16 Bionic chip, improved camera system, and all-day battery life.',
      price: 799,
      rating: 4.6,
      reviewCount: 756,
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692923781972',
      specs: {
        processor: 'A16 Bionic',
        ram: '6GB',
        storage: '128GB/256GB/512GB',
        display: '6.1-inch Super Retina XDR',
        camera: '48MP main, 12MP ultrawide',
        battery: '3,349 mAh',
        os: 'iOS 17',
        dimensions: '147.6 x 71.6 x 7.80 mm',
        weight: '171g',
      },
      pros: [
        'Excellent performance',
        'Great camera system',
        'Solid battery life',
        'Premium design',
        'iOS ecosystem',
      ],
      cons: [
        'No ProMotion display',
        'No telephoto camera',
        'No charger in box',
        'Limited customization',
      ],
    },
    {
      id: "4",
      name: 'Samsung Galaxy S23 Ultra',
      brand: 'Samsung',
      category: 'Smartphones',
      description: 'Samsung\'s premium smartphone with Snapdragon 8 Gen 2, 200MP camera, and S Pen support.',
      price: 1199,
      rating: 4.7,
      reviewCount: 892,
      image: 'https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/gallery/cream/01-DM3-Cream-PDP-1600x1200.jpg',
      specs: {
        processor: 'Snapdragon 8 Gen 2',
        ram: '12GB',
        storage: '256GB/512GB/1TB',
        display: '6.8-inch Dynamic AMOLED 2X',
        camera: '200MP main, 12MP ultrawide, 10MP telephoto (3x), 10MP telephoto (10x)',
        battery: '5,000 mAh',
        os: 'Android 13, One UI 5.1',
        dimensions: '163.4 x 78.1 x 8.9 mm',
        weight: '234g',
      },
      pros: [
        'Exceptional camera system with 200MP main sensor',
        'S Pen functionality',
        'Excellent display',
        'Powerful performance',
        'Long battery life',
      ],
      cons: [
        'Expensive',
        'Large and heavy',
        'Slower charging than some competitors',
        'Learning curve for full feature utilization',
      ],
    },
  ];

  useEffect(() => {
    // Simulate API call to fetch product details
    setLoading(true);
    setTimeout(() => {
      if (productIds.length > 0) {
        const productsToCompare = mockProducts.filter(product => 
          productIds.includes(product.id)
        );
        setProducts(productsToCompare);
      }
      setLoading(false);
    }, 800);
  }, [productIds]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchLoading(true);
    
    // Simulate API search
    setTimeout(() => {
      const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setSearchLoading(false);
    }, 500);
  };

  const addProductToComparison = (product) => {
    if (!productIds.includes(product.id)) {
      const newProductIds = [...productIds, product.id];
      navigate(`/compare?products=${newProductIds.join(',')}`);
      setShowAddProductModal(false);
    }
  };

  const removeProductFromComparison = (productId) => {
    const newProductIds = productIds.filter(id => id !== productId);
    if (newProductIds.length > 0) {
      navigate(`/compare?products=${newProductIds.join(',')}`);
    } else {
      navigate('/');
    }
  };

  // Get all unique spec keys from all products
  const allSpecKeys = products.length > 0 
    ? [...new Set(products.flatMap(product => Object.keys(product.specs)))]
    : [];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Products to Compare</h2>
          <p className="text-gray-600 mb-6">Please select at least one product to start a comparison.</p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Product Comparison</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6 flex justify-between items-center border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Comparing {products.length} Products</h2>
            <button
              onClick={() => setShowAddProductModal(true)}
              className="btn-primary"
            >
              Add Product
            </button>
          </div>
          
          {/* Product Comparison Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                    Feature
                  </th>
                  {products.map(product => (
                    <th key={product.id} className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex flex-col items-center">
                        <div className="relative w-48 h-48 mb-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://via.placeholder.com/400x400?text=Product+Image+Not+Available';
                            }}
                          />
                        </div>
                        <span>{product.name}</span>
                        <button
                          onClick={() => removeProductFromComparison(product.id)}
                          className="mt-2 text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Price */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    Price
                  </td>
                  {products.map(product => (
                    <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      <span className="font-bold text-lg">${product.price}</span>
                    </td>
                  ))}
                </tr>
                
                {/* Rating */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    Rating
                  </td>
                  {products.map(product => (
                    <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      <div className="flex items-center justify-center">
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
                        <span className="ml-2">{product.rating} ({product.reviewCount})</span>
                      </div>
                    </td>
                  ))}
                </tr>
                
                {/* Brand */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    Brand
                  </td>
                  {products.map(product => (
                    <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {product.brand}
                    </td>
                  ))}
                </tr>
                
                {/* Specifications */}
                {allSpecKeys.map(specKey => (
                  <tr key={specKey}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                      {specKey.charAt(0).toUpperCase() + specKey.slice(1)}
                    </td>
                    {products.map(product => (
                      <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        {product.specs[specKey] || '-'}
                      </td>
                    ))}
                  </tr>
                ))}
                
                {/* Pros */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    Pros
                  </td>
                  {products.map(product => (
                    <td key={product.id} className="px-6 py-4 text-sm text-gray-500">
                      <ul className="list-disc pl-5 space-y-1">
                        {product.pros.map((pro, index) => (
                          <li key={index}>{pro}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                
                {/* Cons */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    Cons
                  </td>
                  {products.map(product => (
                    <td key={product.id} className="px-6 py-4 text-sm text-gray-500">
                      <ul className="list-disc pl-5 space-y-1">
                        {product.cons.map((con, index) => (
                          <li key={index}>{con}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                
                {/* View Product */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    Actions
                  </td>
                  {products.map(product => (
                    <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="btn-primary"
                      >
                        View Product
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* AI Insights */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">AI-Powered Insights</h2>
          </div>
          <div className="p-6">
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-primary-900 mb-4">Key Differences</h3>
              <ul className="space-y-3">
                {products.length === 2 && (
                  <>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-800">
                        <strong>{products[0].name}</strong> {products[0].price > products[1].price ? 'is more expensive' : 'is less expensive'} than <strong>{products[1].name}</strong> by ${Math.abs(products[0].price - products[1].price)}.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-800">
                        <strong>{products[0].name}</strong> has a {products[0].specs.display.split('-')[0]} display, while <strong>{products[1].name}</strong> has a {products[1].specs.display.split('-')[0]} display.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-primary-800">
                        <strong>{products[0].name}</strong> {products[0].specs.battery > products[1].specs.battery ? 'has a larger battery' : 'has a smaller battery'} compared to <strong>{products[1].name}</strong>.
                      </span>
                    </li>
                  </>
                )}
                {products.length > 2 && (
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-primary-800">
                      These products range in price from ${Math.min(...products.map(p => p.price))} to ${Math.max(...products.map(p => p.price))}, with <strong>{products.sort((a, b) => a.price - b.price)[0].name}</strong> being the most affordable option.
                    </span>
                  </li>
                )}
              </ul>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recommendation</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  {products.length === 2 ? (
                    <>
                      Based on the comparison, <strong>{products[0].rating > products[1].rating ? products[0].name : products[1].name}</strong> offers better overall value considering its features, performance, and user ratings.
                      
                      {products[0].price < products[1].price ? (
                        <> However, if budget is a concern, <strong>{products[0].name}</strong> is more affordable while still offering excellent features.</>
                      ) : (
                        <> However, if budget is a concern, <strong>{products[1].name}</strong> is more affordable while still offering excellent features.</>
                      )}
                    </>
                  ) : (
                    <>
                      Based on the comparison of these {products.length} products, <strong>{products.sort((a, b) => b.rating - a.rating)[0].name}</strong> stands out with the highest user rating and offers the best overall package of features and performance.
                      
                      For the best value for money, consider <strong>{products.sort((a, b) => (b.rating / b.price) - (a.rating / a.price))[0].name}</strong>, which balances quality and price effectively.
                    </>
                  )}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-500">AI-generated recommendation based on product specifications and user reviews</span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                    See Full Analysis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Add Product to Comparison
                    </h3>
                    <div className="mt-2">
                      <SearchBar onSearch={handleSearch} placeholder="Search for a product to add..." />
                      
                      {searchLoading ? (
                        <div className="flex justify-center items-center h-32">
                          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
                        </div>
                      ) : searchQuery && searchResults.length > 0 ? (
                        <div className="mt-4 max-h-60 overflow-y-auto">
                          {searchResults.map(product => (
                            <div 
                              key={product.id}
                              className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-200"
                              onClick={() => addProductToComparison(product)}
                            >
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-12 h-12 object-cover rounded-md mr-4"
                              />
                              <div>
                                <h4 className="font-medium text-gray-900">{product.name}</h4>
                                <p className="text-sm text-gray-500">{product.brand} • ${product.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : searchQuery ? (
                        <div className="text-center py-8 text-gray-500">
                          No products found matching "{searchQuery}"
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowAddProductModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;
