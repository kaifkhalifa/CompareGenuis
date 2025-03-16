#!/bin/bash

# Script to download sample product images for CompareGenius

# Create the images directory if it doesn't exist
mkdir -p ../public/images/products

# Change to the images directory
cd ../public/images/products

# Download sample images for iPhone 15 Pro Max
echo "Downloading iPhone 15 Pro Max images..."
curl -o iphone-15-pro-max.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938096401"
curl -o iphone-15-pro-max-1.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938096401"
curl -o iphone-15-pro-max-2.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-hero-titanium-blue?wid=800&hei=800&fmt=png-alpha&.v=1693086290392"
curl -o iphone-15-pro-max-3.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-natural-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938089489"

# Download sample images for iPhone 15 Pro
echo "Downloading iPhone 15 Pro images..."
curl -o iphone-15-pro.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-blue-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938089483"
curl -o iphone-15-pro-1.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-blue-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938089483"
curl -o iphone-15-pro-2.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-white-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938089488"
curl -o iphone-15-pro-3.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-natural-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938089489"

# Download sample images for iPhone 15
echo "Downloading iPhone 15 images..."
curl -o iphone-15.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692991097067"
curl -o iphone-15-1.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692991097067"
curl -o iphone-15-2.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692991097674"
curl -o iphone-15-3.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-yellow-select-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692991097674"

# Download sample images for Samsung Galaxy S24 Ultra
echo "Downloading Samsung Galaxy S24 Ultra images..."
curl -o samsung-galaxy-s24-ultra.jpg "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-ultra-s928-sm-s928bzkcmea-thumb-539573361"
curl -o samsung-galaxy-s24-ultra-1.jpg "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-ultra-s928-sm-s928bzkcmea-thumb-539573361"
curl -o samsung-galaxy-s24-ultra-2.jpg "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-ultra-s928-sm-s928bzkgmea-thumb-539573376"
curl -o samsung-galaxy-s24-ultra-3.jpg "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-ultra-s928-sm-s928bzwcmea-thumb-539573391"

# Download sample images for LG C3 OLED TV
echo "Downloading LG C3 OLED TV images..."
curl -o lg-c3-oled.jpg "https://www.lg.com/us/images/tvs/md08000431/gallery/desktop-01.jpg"
curl -o lg-c3-oled-1.jpg "https://www.lg.com/us/images/tvs/md08000431/gallery/desktop-01.jpg"
curl -o lg-c3-oled-2.jpg "https://www.lg.com/us/images/tvs/md08000431/gallery/desktop-02.jpg"
curl -o lg-c3-oled-3.jpg "https://www.lg.com/us/images/tvs/md08000431/gallery/desktop-03.jpg"

echo "Sample images downloaded successfully!" 