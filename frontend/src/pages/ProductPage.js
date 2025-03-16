import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProducts } from '../data';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // In a real app, this would come from an API
  // Using our expanded product database imported from data directory
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
      images: [
        '/images/products/iphone-15-pro-max-1.jpg',
        '/images/products/iphone-15-pro-max-2.jpg',
        '/images/products/iphone-15-pro-max-3.jpg',
      ],
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
      reviews: [
        {
          id: 1,
          user: 'TechEnthusiast',
          rating: 5,
          date: '2025-02-15',
          title: 'Best iPhone Ever',
          content: 'The iPhone 15 Pro Max is a significant upgrade over previous models. The A17 Pro chip is blazing fast, and the camera system is outstanding. Battery life is excellent, easily lasting a full day of heavy use.',
        },
        {
          id: 2,
          user: 'MobilePhotographer',
          rating: 4,
          date: '2025-02-10',
          title: 'Amazing Camera, But Pricey',
          content: 'The camera system on this phone is incredible. The 48MP main sensor captures stunning detail, and the telephoto lens is perfect for portraits. My only complaint is the high price tag, but if photography is important to you, it\'s worth the investment.',
        },
        {
          id: 3,
          user: 'DailyUser',
          rating: 5,
          date: '2025-01-28',
          title: 'Solid Upgrade',
          content: 'Coming from an iPhone 12, this is a massive improvement in every way. The display is gorgeous, performance is top-notch, and the battery life is significantly better. The titanium design also feels premium in hand.',
        },
      ],
      similarProducts: [2, 4, 6],
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
      images: [
        'https://placehold.co/600x400?text=iPhone+15+Pro+1',
        'https://placehold.co/600x400?text=iPhone+15+Pro+2',
        'https://placehold.co/600x400?text=iPhone+15+Pro+3',
      ],
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
      reviews: [
        {
          id: 1,
          user: 'CompactPhoneLover',
          rating: 5,
          date: '2025-02-20',
          title: 'Perfect Size with Pro Features',
          content: 'I love that I can get all the Pro features without having to use the Max size. This phone fits perfectly in my hand and pocket while still delivering top-tier performance and camera quality.',
        },
        {
          id: 2,
          user: 'TechReviewer',
          rating: 4,
          date: '2025-02-05',
          title: 'Great Phone, Battery Could Be Better',
          content: 'The iPhone 15 Pro is an excellent device with cutting-edge features, but the battery life is just average. Heavy users might need to charge during the day.',
        },
      ],
      similarProducts: [1, 3, 4],
    },
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundProduct = allProducts.find(p => p.id === id);
      if (foundProduct) {
        // Ensure product has images array
        if (!foundProduct.images && foundProduct.image) {
          foundProduct.images = [foundProduct.image];
        }
        setProduct(foundProduct);
      }
      setLoading(false);
    }, 800);
  }, [id]);

  // Product image gallery
  const renderImageGallery = () => {
    if (!product || !product.images || product.images.length === 0) {
      return (
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">No image available</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="w-full h-80 overflow-hidden rounded-lg">
          <img 
            src={product.images[selectedImageIndex]} 
            alt={product.name} 
            className="w-full h-full object-contain"
          />
        </div>
        {product.images.length > 1 && (
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((img, index) => (
              <div 
                key={index}
                className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${selectedImageIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={img} 
                  alt={`${product.name} thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <button onClick={() => navigate('/')} className="text-gray-500 hover:text-gray-700">
                Home
              </button>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <button onClick={() => navigate(`/search?category=${product.category}`)} className="ml-2 text-gray-500 hover:text-gray-700">
                {product.category}
              </button>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-900 font-medium">{product.name}</span>
            </li>
          </ol>
        </nav>

        {/* Product Overview */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              {renderImageGallery()}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-500 mb-4">By {product.brand}</p>
              
              <div className="flex items-center mb-4">
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
                <span className="text-gray-600 ml-2">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900">${product.price}</p>
                <p className="text-sm text-gray-500 mt-1">Free shipping on orders over $35</p>
              </div>
              
              <div className="flex space-x-4 mb-6">
                <button className="btn-primary flex-1 py-3">
                  Buy Now
                </button>
                <button 
                  className="btn-secondary flex-1 py-3"
                  onClick={() => navigate(`/compare?products=${product.id}`)}
                >
                  Compare
                </button>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                    <li key={key} className="flex items-start">
                      <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">
                        <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex overflow-x-auto">
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-primary-500 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'specs'
                    ? 'border-b-2 border-primary-500 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'reviews'
                    ? 'border-b-2 border-primary-500 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Overview</h2>
                <p className="text-gray-700 mb-6">{product.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Pros</h3>
                    <ul className="space-y-2">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Cons</h3>
                    <ul className="space-y-2">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-medium text-primary-900 mb-2">AI Summary</h3>
                  <p className="text-primary-800">
                    The {product.name} is a high-end smartphone with excellent performance, camera quality, and build materials. It's ideal for users who prioritize premium features and are invested in the Apple ecosystem. However, the high price point may be a barrier for budget-conscious consumers.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'specs' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                  <dl>
                    {Object.entries(product.specs).map(([key, value], index) => (
                      <div key={key} className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <dt className="text-sm font-medium text-gray-500">{key.charAt(0).toUpperCase() + key.slice(1)}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                  <button className="btn-primary">Write a Review</button>
                </div>
                
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="text-5xl font-bold text-gray-900">{product.rating}</div>
                      <div className="flex mt-1">
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
                      <div className="text-sm text-gray-500 mt-1">{product.reviewCount} reviews</div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((star) => {
                        // Calculate percentage (mock data)
                        const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2;
                        return (
                          <div key={star} className="flex items-center mb-1">
                            <div className="text-sm text-gray-600 w-8">{star} ★</div>
                            <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full">
                              <div
                                className="h-2 bg-yellow-400 rounded-full"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <div className="text-sm text-gray-600 w-8">{percentage}%</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-lg font-medium text-gray-900">{review.title}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-5 w-5 ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-3">
                        By {review.user} on {review.date}
                      </div>
                      <p className="text-gray-700">{review.content}</p>
                      <div className="mt-4 flex items-center space-x-4">
                        <button className="text-sm text-gray-500 flex items-center">
                          <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                          Helpful (12)
                        </button>
                        <button className="text-sm text-gray-500">Report</button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button className="btn-secondary">Load More Reviews</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
