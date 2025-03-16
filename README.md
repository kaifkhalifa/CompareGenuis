# CompareGenius

CompareGenius is a web application that allows users to compare products across different categories. It provides detailed product information, specifications, and user reviews to help make informed purchasing decisions.

## Features

- Browse products by category
- View detailed product information and specifications
- Compare multiple products side by side
- Read user reviews and ratings
- Search for specific products

## Project Structure

The project is organized as follows:

- `frontend/`: Contains the React frontend application
  - `public/`: Static assets including product images
  - `src/`: Source code for the React application
    - `components/`: Reusable UI components
    - `data/`: Mock product data
    - `pages/`: Page components
    - `styles/`: CSS and styling files

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/CompareGenius.git
   cd CompareGenius
   ```

2. Install dependencies:
   ```
   cd frontend
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Product Images

The application uses a combination of real product images and SVG fallbacks:

- Real product images are stored in `frontend/public/images/products/`
- SVG fallback images are used when real images are not available
- A test page for SVG images is available at `frontend/public/images/products/test-svg-images.html`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All product information is for demonstration purposes only
- Product images are sourced from manufacturer websites or generated as SVG fallbacks
