// This script creates a simple image for the Samsung Galaxy S24 Ultra
// Run it in the browser console

function createS24UltraImage() {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 800;
  document.body.appendChild(canvas);
  
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
  
  // Convert canvas to image
  const dataUrl = canvas.toDataURL('image/jpeg');
  
  // Create download link
  const downloadLink = document.createElement('a');
  downloadLink.href = dataUrl;
  downloadLink.download = 'samsung-galaxy-s24-ultra.jpg';
  downloadLink.textContent = 'Download Image';
  downloadLink.style.display = 'block';
  downloadLink.style.margin = '20px auto';
  downloadLink.style.textAlign = 'center';
  downloadLink.style.padding = '10px';
  downloadLink.style.backgroundColor = '#4CAF50';
  downloadLink.style.color = 'white';
  downloadLink.style.textDecoration = 'none';
  downloadLink.style.borderRadius = '4px';
  downloadLink.style.width = '200px';
  
  document.body.appendChild(downloadLink);
  
  // Remove canvas from document
  document.body.removeChild(canvas);
  
  return {
    dataUrl,
    downloadLink
  };
}

// Call this function in the browser console to create the image
// createS24UltraImage(); 