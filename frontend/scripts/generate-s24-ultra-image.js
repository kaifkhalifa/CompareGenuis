// This script generates an image for the Samsung Galaxy S24 Ultra using Node.js and Canvas
// To run this script:
// 1. Install dependencies: npm install canvas fs
// 2. Run: node scripts/generate-s24-ultra-image.js

const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const imageDir = path.join(__dirname, '../public/images/products');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

// Create canvas
const canvas = createCanvas(800, 800);
const ctx = canvas.getContext('2d');

// Fill background
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw border
ctx.strokeStyle = '#dddddd';
ctx.lineWidth = 4;
ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

// Draw phone outline
const x = canvas.width / 2;
const y = canvas.height / 2 - 50;
const phoneWidth = 200;
const phoneHeight = 400;

ctx.fillStyle = '#222222';
ctx.strokeStyle = '#333333';
ctx.lineWidth = 4;

// Draw phone body
ctx.beginPath();
ctx.roundRect(x - phoneWidth/2, y - phoneHeight/2, phoneWidth, phoneHeight, 20);
ctx.fill();
ctx.stroke();

// Draw phone screen
ctx.fillStyle = '#111111';
ctx.beginPath();
ctx.roundRect(x - phoneWidth/2 + 10, y - phoneHeight/2 + 10, phoneWidth - 20, phoneHeight - 20, 10);
ctx.fill();

// Draw camera module
ctx.fillStyle = '#333333';
ctx.beginPath();
ctx.roundRect(x - phoneWidth/2 + 20, y - phoneHeight/2 + 20, 40, 120, 10);
ctx.fill();

// Draw camera lenses
ctx.fillStyle = '#111111';
ctx.strokeStyle = '#444444';
ctx.lineWidth = 2;

// Camera lens 1
ctx.beginPath();
ctx.arc(x - phoneWidth/2 + 40, y - phoneHeight/2 + 40, 12, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Camera lens 2
ctx.beginPath();
ctx.arc(x - phoneWidth/2 + 40, y - phoneHeight/2 + 70, 12, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Camera lens 3
ctx.beginPath();
ctx.arc(x - phoneWidth/2 + 40, y - phoneHeight/2 + 100, 12, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Draw product name
ctx.fillStyle = '#333333';
ctx.font = 'bold 40px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Samsung Galaxy S24 Ultra', x, y + phoneHeight/2 + 80);

// Draw brand name
ctx.fillStyle = '#666666';
ctx.font = '24px Arial';
ctx.fillText('Samsung', x, y + phoneHeight/2 + 120);

// Save main image
const mainImagePath = path.join(imageDir, 'samsung-galaxy-s24-ultra.jpg');
const mainBuffer = canvas.toBuffer('image/jpeg');
fs.writeFileSync(mainImagePath, mainBuffer);
console.log(`Created main image: ${mainImagePath}`);

// Create variant images with different colors
const colors = ['#1a237e', '#004d40', '#b71c1c']; // Deep blue, dark green, dark red
const variantNames = ['samsung-galaxy-s24-ultra-1.jpg', 'samsung-galaxy-s24-ultra-2.jpg', 'samsung-galaxy-s24-ultra-3.jpg'];

colors.forEach((color, index) => {
  // Reset canvas
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#dddddd';
  ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
  
  // Draw phone with different color
  ctx.fillStyle = color;
  ctx.strokeStyle = '#333333';
  ctx.lineWidth = 4;
  
  // Draw phone body
  ctx.beginPath();
  ctx.roundRect(x - phoneWidth/2, y - phoneHeight/2, phoneWidth, phoneHeight, 20);
  ctx.fill();
  ctx.stroke();
  
  // Draw phone screen
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.roundRect(x - phoneWidth/2 + 10, y - phoneHeight/2 + 10, phoneWidth - 20, phoneHeight - 20, 10);
  ctx.fill();
  
  // Draw camera module
  ctx.fillStyle = '#333333';
  ctx.beginPath();
  ctx.roundRect(x - phoneWidth/2 + 20, y - phoneHeight/2 + 20, 40, 120, 10);
  ctx.fill();
  
  // Draw camera lenses
  ctx.fillStyle = '#111111';
  ctx.strokeStyle = '#444444';
  ctx.lineWidth = 2;
  
  // Camera lenses
  [40, 70, 100].forEach(yOffset => {
    ctx.beginPath();
    ctx.arc(x - phoneWidth/2 + 40, y - phoneHeight/2 + yOffset, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  
  // Draw product name
  ctx.fillStyle = '#333333';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Samsung Galaxy S24 Ultra', x, y + phoneHeight/2 + 80);
  
  // Draw variant name
  ctx.fillStyle = '#666666';
  ctx.font = '24px Arial';
  ctx.fillText(`Samsung - Variant ${index + 1}`, x, y + phoneHeight/2 + 120);
  
  // Save variant image
  const variantPath = path.join(imageDir, variantNames[index]);
  const variantBuffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(variantPath, variantBuffer);
  console.log(`Created variant image: ${variantPath}`);
});

console.log('All images created successfully!'); 