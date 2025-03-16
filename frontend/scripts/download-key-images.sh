#!/bin/bash

# Script to download key product images for CompareGenius

# Create the images directory if it doesn't exist
mkdir -p public/images/products

# Change to the images directory
cd public/images/products

# Samsung Galaxy S24 Ultra
echo "Downloading Samsung Galaxy S24 Ultra images..."
curl -o samsung-galaxy-s24-ultra.jpg "https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-s928-sm-s928bzegbtu-thumb-539573376" -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"

# Create a simple placeholder for Samsung Galaxy S24 Ultra
if [ ! -s samsung-galaxy-s24-ultra.jpg ]; then
  echo "Creating placeholder for Samsung Galaxy S24 Ultra..."
  echo '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" fill="#f8f9fa"/><g fill="#333"><text x="400" y="400" font-family="Arial" font-size="40" text-anchor="middle">Samsung Galaxy S24 Ultra</text><rect x="300" y="200" width="200" height="400" rx="20" stroke="#333" stroke-width="4" fill="none"/><circle cx="400" cy="550" r="20" stroke="#333" stroke-width="4" fill="none"/></g></svg>' > samsung-galaxy-s24-ultra.svg
  
  # Convert SVG to JPG if possible
  if command -v convert &> /dev/null; then
    convert samsung-galaxy-s24-ultra.svg samsung-galaxy-s24-ultra.jpg
    cp samsung-galaxy-s24-ultra.jpg samsung-galaxy-s24-ultra-1.jpg
    cp samsung-galaxy-s24-ultra.jpg samsung-galaxy-s24-ultra-2.jpg
    cp samsung-galaxy-s24-ultra.jpg samsung-galaxy-s24-ultra-3.jpg
    rm samsung-galaxy-s24-ultra.svg
  else
    # If ImageMagick is not available, keep the SVG
    cp samsung-galaxy-s24-ultra.svg samsung-galaxy-s24-ultra.jpg
    cp samsung-galaxy-s24-ultra.svg samsung-galaxy-s24-ultra-1.jpg
    cp samsung-galaxy-s24-ultra.svg samsung-galaxy-s24-ultra-2.jpg
    cp samsung-galaxy-s24-ultra.svg samsung-galaxy-s24-ultra-3.jpg
  fi
fi

# Create a simple text file with instructions
echo "Creating instructions file..."
cat > README.txt << 'EOL'
Product Image Instructions:

1. If you're seeing placeholder images or missing images, you can:
   - Open the create-fallback-images.html file in your browser
   - Generate custom placeholder images for each product
   - Save them with the correct filenames

2. For real product images, you can:
   - Download official product images from manufacturer websites
   - Rename them according to the naming convention:
     * Main image: product-name.jpg (e.g., samsung-galaxy-s24-ultra.jpg)
     * Additional views: product-name-1.jpg, product-name-2.jpg, etc.

3. Place all images in this directory (frontend/public/images/products/)

4. Restart your development server to see the changes
EOL

echo "Key images downloaded or created successfully!" 