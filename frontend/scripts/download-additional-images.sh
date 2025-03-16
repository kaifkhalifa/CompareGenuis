#!/bin/bash

# Script to download additional sample product images for CompareGenius

# Change to the images directory
cd ../public/images/products

# Download sample images for MacBook Pro
echo "Downloading MacBook Pro images..."
curl -o macbook-pro-16.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1671304673202"
curl -o macbook-pro-16-1.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1671304673202"
curl -o macbook-pro-16-2.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-keyboard-gallery-1-202301?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1670959891543"
curl -o macbook-pro-16-3.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-gallery-1-202301?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1670959891544"

# Download sample images for Sony WH-1000XM5
echo "Downloading Sony WH-1000XM5 images..."
curl -o sony-wh-1000xm5.jpg "https://electronics.sony.com/image/a3c9d1a0d3d2a5c6c9a3c9d1a0d3d2a5c6c9/WH-1000XM5_Product_Black_wo-logo_1?$productPage$&fmt=png-alpha"
curl -o sony-wh-1000xm5-1.jpg "https://electronics.sony.com/image/a3c9d1a0d3d2a5c6c9a3c9d1a0d3d2a5c6c9/WH-1000XM5_Product_Black_wo-logo_1?$productPage$&fmt=png-alpha"
curl -o sony-wh-1000xm5-2.jpg "https://electronics.sony.com/image/a3c9d1a0d3d2a5c6c9a3c9d1a0d3d2a5c6c9/WH-1000XM5_Product_Black_wo-logo_2?$productPage$&fmt=png-alpha"
curl -o sony-wh-1000xm5-3.jpg "https://electronics.sony.com/image/a3c9d1a0d3d2a5c6c9a3c9d1a0d3d2a5c6c9/WH-1000XM5_Product_Black_wo-logo_3?$productPage$&fmt=png-alpha"

# Download sample images for AirPods Pro 2
echo "Downloading AirPods Pro 2 images..."
curl -o airpods-pro-2.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660803972361"
curl -o airpods-pro-2-1.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660803972361"
curl -o airpods-pro-2-2.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV1?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660803974361"
curl -o airpods-pro-2-3.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV4?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660803972356"

# Create placeholder images for products without real images
echo "Creating placeholder images for other products..."
for product in dell-xps-15 google-pixel-8-pro samsung-galaxy-s23-plus echo-show-10 philips-hue ninja-foodi vitamix-a3500 samsung-qn90c sony-a7-iv canon-r6-ii peloton-bike-plus garmin-forerunner-965 herman-miller-embody article-sven-sofa dyson-airwrap la-mer; do
  # Create a simple colored placeholder with product name
  convert -size 800x800 xc:white -fill black -pointsize 40 -gravity center -annotate 0 "$product" $product.jpg
  convert -size 800x800 xc:white -fill black -pointsize 40 -gravity center -annotate 0 "$product - 1" $product-1.jpg
  convert -size 800x800 xc:white -fill black -pointsize 40 -gravity center -annotate 0 "$product - 2" $product-2.jpg
  convert -size 800x800 xc:white -fill black -pointsize 40 -gravity center -annotate 0 "$product - 3" $product-3.jpg
done

echo "Additional sample images downloaded successfully!" 