// This script generates fallback images for all products
// Run it in the browser console after opening create-fallback-images.html

const products = [
  { name: 'Samsung Galaxy S24 Ultra', category: 'smartphone' },
  { name: 'iPhone 15 Pro Max', category: 'smartphone' },
  { name: 'iPhone 15 Pro', category: 'smartphone' },
  { name: 'iPhone 15', category: 'smartphone' },
  { name: 'Samsung Galaxy S23+', category: 'smartphone' },
  { name: 'Google Pixel 8 Pro', category: 'smartphone' },
  { name: 'MacBook Pro 16-inch', category: 'laptop' },
  { name: 'Dell XPS 15', category: 'laptop' },
  { name: 'Sony WH-1000XM5', category: 'headphone' },
  { name: 'Apple AirPods Pro 2', category: 'headphone' },
  { name: 'LG C3 65-inch OLED TV', category: 'tv' },
  { name: 'Samsung QN90C 65-inch Neo QLED TV', category: 'tv' },
  { name: 'Sony Alpha a7 IV', category: 'camera' },
  { name: 'Canon EOS R6 Mark II', category: 'camera' },
  { name: 'Peloton Bike+', category: 'other' },
  { name: 'Garmin Forerunner 965', category: 'other' },
  { name: 'Herman Miller Embody Chair', category: 'other' },
  { name: 'Article Sven Sofa', category: 'other' },
  { name: 'Dyson Airwrap Complete', category: 'other' },
  { name: 'La Mer Crème de la Mer', category: 'other' }
];

// Function to generate and download an image for a product
function generateProductImage(product, index) {
  return new Promise(resolve => {
    setTimeout(() => {
      // Set form values
      document.getElementById('product-name').value = product.name;
      document.getElementById('category').value = product.category;
      
      // Generate the image
      document.getElementById('generate-btn').click();
      
      // Get the download link
      const downloadLink = document.getElementById('download-link');
      
      // Create a temporary link to trigger download
      const tempLink = document.createElement('a');
      tempLink.href = downloadLink.href;
      
      // Create filename based on product name
      const filename = product.name.toLowerCase().replace(/\s+/g, '-');
      
      // Set different filenames for variants
      const variants = [
        `${filename}.jpg`,
        `${filename}-1.jpg`,
        `${filename}-2.jpg`,
        `${filename}-3.jpg`
      ];
      
      tempLink.download = variants[0];
      tempLink.click();
      
      console.log(`Generated image for ${product.name} (${index + 1}/${products.length})`);
      resolve();
    }, index * 500); // Delay each generation to avoid browser issues
  });
}

// Generate images for all products
async function generateAllImages() {
  console.log('Starting image generation for all products...');
  
  for (let i = 0; i < products.length; i++) {
    await generateProductImage(products[i], i);
  }
  
  console.log('All images generated!');
}

// Call this function in the browser console to generate all images
// generateAllImages(); 