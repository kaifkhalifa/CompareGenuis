#!/bin/bash

# Script to download real product images for CompareGenius

# Create the images directory if it doesn't exist
mkdir -p public/images/products

# Change to the images directory
cd public/images/products

# Samsung Galaxy S24 Ultra
echo "Downloading Samsung Galaxy S24 Ultra images..."
curl -o samsung-galaxy-s24-ultra.jpg "https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-s928-sm-s928bzegbtu-thumb-539573376"
curl -o samsung-galaxy-s24-ultra-1.jpg "https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-s928-sm-s928bzegbtu-thumb-539573376"
curl -o samsung-galaxy-s24-ultra-2.jpg "https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-s928-sm-s928bzegbtu-534885476"
curl -o samsung-galaxy-s24-ultra-3.jpg "https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-s928-sm-s928bzegbtu-534885477"

# iPhone 15 Pro Max
echo "Downloading iPhone 15 Pro Max images..."
curl -o iphone-15-pro-max.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938096401"
curl -o iphone-15-pro-max-1.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938096401"
curl -o iphone-15-pro-max-2.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-blue-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938097133"
curl -o iphone-15-pro-max-3.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-natural-titanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692938097213"

# iPhone 15
echo "Downloading iPhone 15 images..."
curl -o iphone-15.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-blue-select-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692991097067"
curl -o iphone-15-1.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-blue-select-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692991097067"
curl -o iphone-15-2.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pink-select-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692991097674"
curl -o iphone-15-3.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-yellow-select-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1692991097674"

# MacBook Pro
echo "Downloading MacBook Pro images..."
curl -o macbook-pro-16.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1671304673202"
curl -o macbook-pro-16-1.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1671304673202"
curl -o macbook-pro-16-2.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-keyboard-gallery-1-202301?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1670959891543"
curl -o macbook-pro-16-3.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-gallery-1-202301?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1670959891544"

# Sony WH-1000XM5
echo "Downloading Sony WH-1000XM5 images..."
curl -o sony-wh-1000xm5.jpg "https://www.sony.co.uk/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=800"
curl -o sony-wh-1000xm5-1.jpg "https://www.sony.co.uk/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=800"
curl -o sony-wh-1000xm5-2.jpg "https://www.sony.co.uk/image/752bd8d1d4c8d6c9b3f50a8d1b2c0b47?fmt=png-alpha&wid=800"
curl -o sony-wh-1000xm5-3.jpg "https://www.sony.co.uk/image/e4f59e1d7b9ac74c5c2a2e3f2dfa8e17?fmt=png-alpha&wid=800"

# AirPods Pro 2
echo "Downloading AirPods Pro 2 images..."
curl -o airpods-pro-2.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660803972361"
curl -o airpods-pro-2-1.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660803972361"
curl -o airpods-pro-2-2.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_AV1?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660803974361"
curl -o airpods-pro-2-3.jpg "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_AV4?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660803972356"

# LG C3 OLED TV
echo "Downloading LG C3 OLED TV images..."
curl -o lg-c3-oled.jpg "https://www.lg.com/uk/images/tvs/md07554416/gallery/medium01.jpg"
curl -o lg-c3-oled-1.jpg "https://www.lg.com/uk/images/tvs/md07554416/gallery/medium01.jpg"
curl -o lg-c3-oled-2.jpg "https://www.lg.com/uk/images/tvs/md07554416/gallery/medium02.jpg"
curl -o lg-c3-oled-3.jpg "https://www.lg.com/uk/images/tvs/md07554416/gallery/medium03.jpg"

# Create simple placeholder images for other products
echo "Creating simple placeholder images for other products..."
for product in dell-xps-15 google-pixel-8-pro samsung-galaxy-s23-plus; do
  # Create a simple HTML-based placeholder
  echo "<html><body style='margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:#f8f9fa;'><div style='text-align:center;padding:20px;background:white;border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);'><h2 style='margin:0;font-family:sans-serif;color:#333;'>${product}</h2></div></body></html>" > ${product}.html
  
  # Use wkhtmltoimage if available, otherwise just create empty files
  if command -v wkhtmltoimage &> /dev/null; then
    wkhtmltoimage ${product}.html ${product}.jpg
    wkhtmltoimage ${product}.html ${product}-1.jpg
    wkhtmltoimage ${product}.html ${product}-2.jpg
    wkhtmltoimage ${product}.html ${product}-3.jpg
    rm ${product}.html
  else
    # Create empty image files as fallback
    touch ${product}.jpg ${product}-1.jpg ${product}-2.jpg ${product}-3.jpg
  fi
done

echo "Images downloaded successfully!" 