/**
 * This script creates static image files for all products
 * It requires node-canvas to be installed:
 * npm install canvas
 * 
 * Run with: node create-static-images.js
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create the products directory if it doesn't exist
const productsDir = path.join(__dirname, '../public/images/products');
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

// List of products to create images for
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

// Category colors
const categoryColors = {
  smartphone: '#3498db',
  laptop: '#2ecc71',
  headphone: '#9b59b6',
  tv: '#e74c3c',
  camera: '#f39c12',
  other: '#1abc9c'
};

// Category icons (simple shapes)
const drawCategoryIcon = (ctx, category, x, y, size) => {
  ctx.strokeStyle = categoryColors[category] || '#333';
  ctx.lineWidth = 3;
  
  switch (category) {
    case 'smartphone':
      // Draw smartphone outline
      ctx.beginPath();
      ctx.roundRect(x - size/3, y - size/2, size*2/3, size, size/10);
      ctx.stroke();
      // Draw home button
      ctx.beginPath();
      ctx.arc(x, y + size/3, size/15, 0, Math.PI * 2);
      ctx.stroke();
      break;
      
    case 'laptop':
      // Draw laptop screen
      ctx.beginPath();
      ctx.moveTo(x - size/2, y - size/4);
      ctx.lineTo(x + size/2, y - size/4);
      ctx.lineTo(x + size/2, y + size/8);
      ctx.lineTo(x - size/2, y + size/8);
      ctx.closePath();
      ctx.stroke();
      // Draw laptop base
      ctx.beginPath();
      ctx.moveTo(x - size*0.6, y + size/8);
      ctx.lineTo(x + size*0.6, y + size/8);
      ctx.lineTo(x + size*0.5, y + size/4);
      ctx.lineTo(x - size*0.5, y + size/4);
      ctx.closePath();
      ctx.stroke();
      break;
      
    case 'headphone':
      // Draw headphone cups
      ctx.beginPath();
      ctx.arc(x - size/3, y, size/5, Math.PI/2, Math.PI * 3/2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + size/3, y, size/5, -Math.PI/2, Math.PI/2);
      ctx.stroke();
      // Draw headband
      ctx.beginPath();
      ctx.arc(x, y - size/2, size/2, 0, Math.PI);
      ctx.stroke();
      break;
      
    case 'tv':
      // Draw TV screen
      ctx.beginPath();
      ctx.rect(x - size/2, y - size/3, size, size*2/3);
      ctx.stroke();
      // Draw TV stand
      ctx.beginPath();
      ctx.moveTo(x - size/4, y + size/3);
      ctx.lineTo(x + size/4, y + size/3);
      ctx.lineTo(x, y + size/2);
      ctx.closePath();
      ctx.stroke();
      break;
      
    case 'camera':
      // Draw camera body
      ctx.beginPath();
      ctx.roundRect(x - size/2, y - size/4, size, size/2, size/20);
      ctx.stroke();
      // Draw lens
      ctx.beginPath();
      ctx.arc(x, y, size/5, 0, Math.PI * 2);
      ctx.stroke();
      // Draw flash
      ctx.beginPath();
      ctx.rect(x - size/4, y - size/3, size/2, size/10);
      ctx.stroke();
      break;
      
    default:
      // Draw generic icon
      ctx.beginPath();
      ctx.arc(x, y, size/3, 0, Math.PI * 2);
      ctx.stroke();
  }
};

// Function to create an image for a product
const createProductImage = (product, variant = 0) => {
  const canvas = createCanvas(800, 800);
  const ctx = canvas.getContext('2d');
  
  // Fill background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw border
  ctx.strokeStyle = '#dddddd';
  ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
  
  // Draw category icon
  drawCategoryIcon(ctx, product.category, canvas.width / 2, canvas.height / 2 - 100, 200);
  
  // Draw product name
  ctx.fillStyle = '#333333';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Add variant indicator if not the main image
  let displayName = product.name;
  if (variant > 0) {
    displayName += ` - View ${variant}`;
  }
  
  // Wrap text if needed
  const words = displayName.split(' ');
  const lines = [];
  let currentLine = words[0];
  
  for (let i = 1; i < words.length; i++) {
    const testLine = currentLine + ' ' + words[i];
    const metrics = ctx.measureText(testLine);
    
    if (metrics.width < canvas.width - 100) {
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = words[i];
    }
  }
  lines.push(currentLine);
  
  // Draw each line
  const lineHeight = 50;
  const startY = canvas.height / 2 + 100;
  
  lines.forEach((line, index) => {
    ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
  });
  
  // Create filename based on product name
  const filename = product.name.toLowerCase().replace(/\s+/g, '-');
  const variantSuffix = variant > 0 ? `-${variant}` : '';
  const outputPath = path.join(productsDir, `${filename}${variantSuffix}.jpg`);
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputPath, buffer);
  
  console.log(`Created image: ${outputPath}`);
};

// Create images for all products
const createAllImages = () => {
  console.log('Creating images for all products...');
  
  products.forEach(product => {
    // Create main image and 3 variants
    for (let i = 0; i < 4; i++) {
      createProductImage(product, i);
    }
  });
  
  console.log('All images created successfully!');
};

// Run the script
createAllImages(); 