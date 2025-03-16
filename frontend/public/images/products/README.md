# Product Images Directory

This directory contains all product images used in the CompareGenius application.

## Image Naming Convention

Images should follow this naming convention:
- Main product image: `product-name.jpg` (e.g., `iphone-15-pro-max.jpg`)
- Additional product images: `product-name-1.jpg`, `product-name-2.jpg`, etc.

## Image Requirements

- Use JPG or PNG format
- Recommended size: 800x800 pixels for main images
- Keep file sizes under 200KB for optimal performance
- Use a white or transparent background for consistent product display
- Ensure images are high quality and accurately represent the product

## Adding New Images

1. Place your product images in this directory following the naming convention
2. Update the product data in `frontend/src/data/mockProducts.js` or `frontend/src/data/mockProductsPart2.js` to reference the new images
3. For each product, update both the `image` property (main image) and the `images` array (all images including the main one)

## Example Product Data

```javascript
{
  id: "1",
  name: 'iPhone 15 Pro Max',
  // ... other product properties ...
  image: '/images/products/iphone-15-pro-max.jpg',
  images: [
    '/images/products/iphone-15-pro-max-1.jpg',
    '/images/products/iphone-15-pro-max-2.jpg',
    '/images/products/iphone-15-pro-max-3.jpg',
  ],
  // ... other product properties ...
}
``` 