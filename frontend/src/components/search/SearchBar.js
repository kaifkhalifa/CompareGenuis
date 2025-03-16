import React, { useState, useEffect, useRef } from 'react';

const SearchBar = ({ onSearch, size = 'default', placeholder = 'Search for products...' }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // Mock suggestions - in a real app, these would come from an API
  const mockSuggestions = [
    { id: 1, text: 'iPhone 15 Pro Max' },
    { id: 2, text: 'Samsung Galaxy S23 Ultra' },
    { id: 3, text: 'Google Pixel 8 Pro' },
    { id: 4, text: 'MacBook Pro M3' },
    { id: 5, text: 'Sony WH-1000XM5' },
    { id: 6, text: 'Best budget laptops' },
    { id: 7, text: 'Wireless earbuds under $100' },
    { id: 8, text: '4K TVs with HDMI 2.1' }
  ];

  useEffect(() => {
    // Close suggestions when clicking outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.length > 1) {
      setIsLoading(true);
      // Simulate API call delay
      const timer = setTimeout(() => {
        const filtered = mockSuggestions.filter(item => 
          item.text.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered);
        setIsLoading(false);
        setShowSuggestions(true);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.text);
    onSearch(suggestion.text);
    setShowSuggestions(false);
  };

  const inputClasses = size === 'large' 
    ? 'search-input py-4 text-xl' 
    : 'search-input';

  return (
    <div className="relative w-full" ref={searchRef}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            className={inputClasses}
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length > 1 && setShowSuggestions(true)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-primary-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      {/* Suggestions dropdown */}
      {showSuggestions && (
        <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md overflow-hidden">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading...</div>
          ) : suggestions.length > 0 ? (
            <ul className="max-h-60 overflow-auto">
              {suggestions.map((suggestion) => (
                <li 
                  key={suggestion.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.text}
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
