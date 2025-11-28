# 🚀 Quick Start Guide

## Your Next.js Parallax Project is Ready!

All dependencies have been installed and your project structure is complete.

## ⚡ Start the Development Server

Run this command to start your project:

```bash
npm run dev
```

Then open your browser to: **http://localhost:3000**

## 📁 Project Files Created

### Core Application
- ✅ `app/page.jsx` - Main page with hero section and parallax
- ✅ `app/layout.jsx` - Root layout configuration
- ✅ `app/globals.css` - Global styles with Tailwind

### Components
- ✅ `components/ParallaxSection.jsx` - Parallax component with GSAP ScrollTrigger

### Configuration
- ✅ `package.json` - Dependencies (Next.js, React, GSAP, Tailwind)
- ✅ `tailwind.config.js` - Tailwind CSS configuration
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `next.config.js` - Next.js configuration

### Images
- ✅ `public/images/Background.png` - Background parallax layer
- ✅ `public/images/Foreground.png` - Foreground parallax layer

## 🎨 What You'll See

1. **Hero Section** - Gradient hero with animated scroll indicator
2. **Parallax Section** - Two-layer parallax effect (150vh height)
   - Background layer moves at 300px over scroll distance
   - Foreground layer moves at 150px over scroll distance
3. **Content Section** - Information about the technologies used
4. **Footer** - Simple footer with credits

## 🔧 Key Features Implemented

✅ **Next.js 15 with App Router** - Latest Next.js features
✅ **GSAP ScrollTrigger** - Registered in useEffect hook
✅ **Multi-layer Parallax** - Different z-indexes and scroll speeds
✅ **Responsive Design** - Works on all screen sizes
✅ **Tailwind CSS** - Utility-first styling
✅ **Next.js Image** - Optimized image loading
✅ **Smooth Animations** - Hardware-accelerated transforms

## 🎯 How the Parallax Works

The `ParallaxSection` component:
1. Uses `useRef` to reference DOM elements
2. Registers GSAP ScrollTrigger plugin in `useEffect`
3. Creates separate animations for each layer:
   - **Background**: `scrub: 1` (slower, smoother)
   - **Foreground**: `scrub: 0.5` (faster response)
4. Cleans up ScrollTrigger instances on unmount

## 🎨 Customization Tips

### Change Parallax Speed
Edit `components/ParallaxSection.jsx`:
```javascript
// Slower movement (increase value)
gsap.to(background, { y: 400, ... });

// Faster movement (decrease value)
gsap.to(foreground, { y: 100, ... });
```

### Add More Layers
1. Add new image to `public/images/`
2. Create new ref in component
3. Add GSAP animation with unique speed

### Debug Mode
Enable markers to see ScrollTrigger points:
```javascript
scrollTrigger: {
  markers: true, // Shows start/end points
  ...
}
```

## 📦 Installed Packages

- **next**: ^15.0.0
- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **gsap**: ^3.12.5
- **tailwindcss**: ^3.4.15
- **autoprefixer**: ^10.4.20
- **postcss**: ^8.4.49

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🐛 Troubleshooting

**Images not loading?**
- Check that images are in `public/images/` folder
- Verify image paths start with `/images/` (not `./images/`)

**Parallax not working?**
- Make sure you're using a 'use client' directive in ParallaxSection.jsx
- Check browser console for GSAP errors
- Enable `markers: true` to debug ScrollTrigger

**Scroll feels janky?**
- Ensure `willChange: 'transform'` is set on animated elements
- Check that GSAP `scrub` values are between 0.5-1.5 for smoothness

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Ready to go!** Run `npm run dev` and start scrolling! 🎉
