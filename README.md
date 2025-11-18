# 3D Interactive Portfolio

## Overview
This is a fully interactive 3D portfolio website built with Three.js. The website features animated 3D elements that respond to mouse movements and scroll actions, creating an immersive experience for visitors.

## Features
- Interactive 3D objects that respond to mouse hover and clicks
- Smooth camera transitions between sections
- Animated background with particle system
- Responsive design that works on various screen sizes
- Section-based navigation with visual cues
- Contact form for visitor inquiries

## Technologies Used
- Three.js for 3D rendering and animations
- GSAP (GreenSock Animation Platform) for smooth animations
- Vanilla JavaScript for DOM manipulation
- CSS3 for styling and animations

## How to Run

### Prerequisites
- Node.js installed on your system

### Running the Website
1. Open a terminal in the project directory
2. Run the following command to start the server:
   ```
   node server.js
   ```
3. Open your browser and navigate to `http://localhost:3000`

## Structure
- `index.html` - Main HTML structure
- `styles.css` - CSS styling
- `main.js` - Three.js implementation and interactive elements
- `server.js` - Simple Node.js server for local development

## Customization
To customize this portfolio with your own information:

1. Update the `resumeData` object in `main.js` with your personal information
2. Replace or modify the 3D objects in the `createObjects` methods
3. Adjust colors, animations, and styling in `styles.css`

## Browser Compatibility
This website works best in modern browsers that support WebGL, such as:
- Google Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Considerations
- The 3D rendering can be resource-intensive on lower-end devices
- Consider reducing particle count or disabling certain effects for better performance on mobile devices

## License
This project is available for personal and commercial use.