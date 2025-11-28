# Parallax Scrolling with Next.js & GSAP

A beautiful parallax scrolling effect built with Next.js 15, React, GSAP ScrollTrigger, and Tailwind CSS.

## Features

- ✨ Smooth parallax scrolling effect with multiple layers
- 🚀 Built with Next.js 15 App Router
- 🎨 Styled with Tailwind CSS
- ⚡ Powered by GSAP ScrollTrigger for performant animations
- 📱 Fully responsive design
- 🖼️ Optimized image loading with Next.js Image component

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## Installation

1. **Install dependencies:**

```bash
npm install
```

This will install:
- Next.js 15
- React 18
- GSAP 3.12.5
- Tailwind CSS 3.4.15
- And all necessary dependencies

## Running the Project

1. **Start the development server:**

```bash
npm run dev
```

2. **Open your browser and navigate to:**

```
http://localhost:3000
```

3. **Scroll down to see the parallax effect in action!**

## Project Structure

```
gb/
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   ├── page.jsx            # Main page with parallax section
│   └── globals.css         # Global styles with Tailwind
├── components/
│   └── ParallaxSection.jsx # Parallax component with GSAP
├── images/
│   ├── Background.png      # Background parallax layer
│   └── Foreground.png      # Foreground parallax layer
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## How It Works

### ParallaxSection Component

The `ParallaxSection` component uses GSAP ScrollTrigger to create a multi-layered parallax effect:

1. **Background Layer**: Moves slower (y: 300px over scroll distance)
2. **Foreground Layer**: Moves faster (y: 150px over scroll distance)

This creates a depth illusion where foreground elements appear closer and move faster than background elements.

### Key Technologies

- **GSAP ScrollTrigger**: Handles scroll-based animations with hardware acceleration
- **Next.js Image**: Optimizes images for performance
- **Tailwind CSS**: Provides responsive, utility-first styling
- **React Hooks**: Uses `useEffect` and `useRef` for DOM manipulation

## Customization

### Adjusting Parallax Speed

In `components/ParallaxSection.jsx`, modify the `y` values:

```javascript
// Slower movement
gsap.to(background, {
  y: 300, // Change this value
  // ...
});

// Faster movement
gsap.to(foreground, {
  y: 150, // Change this value
  // ...
});
```

### Adding More Layers

To add additional parallax layers:

1. Add more images to the `images/` folder
2. Create new refs in the component
3. Add new GSAP animations with different `y` values and `scrub` speeds

### Debugging

Enable ScrollTrigger markers by setting `markers: true` in the GSAP config:

```javascript
scrollTrigger: {
  markers: true, // Shows start/end markers
  // ...
}
```

## Build for Production

```bash
npm run build
npm start
```

## Performance Tips

- Images are loaded with `priority` flag for above-the-fold content
- `willChange: 'transform'` is used for GPU acceleration
- ScrollTrigger's `scrub` property ensures smooth, performant animations
- Next.js Image component handles automatic optimization

## Browser Support

Works in all modern browsers that support:
- CSS Grid & Flexbox
- ES6+ JavaScript
- CSS Custom Properties

## License

MIT

## Credits

Built with ❤️ using Next.js, GSAP, and Tailwind CSS.
