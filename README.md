# Gentlerain.ai Clone - Web Development Assignment

A modern, interactive clone of [gentlerain.ai](https://gentlerain.ai) featuring parallax scrolling, smooth animations, and responsive design.

## Project Overview

This project replicates the key visual and interactive features of Gentlerain.ai, a platform for immersive skill-building through AI-powered role-play scenarios.

**Duration:** 3 Days | **Marks:** 100/100

## Features Implemented

### ✨ Key Features
- **Multi-layer Parallax Scrolling** - Smooth depth effect with layered images
- **Watery Header Animation** - Frosted glass effect navbar with smooth transitions
- **Horizontal Scroll Section** - GSAP-powered horizontal panel scrolling
- **Flip Cards** - Interactive cards with hover flip animations
- **Rotating Text Animation** - Dynamic text cycling (Practice, Upskill, Play, Improve)
- **Sticky Navigation** - Always-accessible navigation bar
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Scroll-Triggered Animations** - Elements animate as they enter viewport

### 📱 Sections
1. **Hero Section** - Parallax background with animated content
2. **Features Section** - Flip card showcase
3. **Product Section** - Product cards with hover effects
4. **Horizontal Scroll Section** - Interactive scrolling experience
5. **Business Section** - Services showcase
6. **Footer** - Copyright information

## Tech Stack

### Libraries & Tools
- **GSAP 3.12.2** - Animation library for smooth, performant animations
- **ScrollTrigger** - GSAP plugin for scroll-triggered animations
- **AOS (Animate On Scroll)** - Library for scroll animations
- **Rellax.js** - Lightweight parallax engine
- **HTML5 & CSS3** - Semantic markup and modern styling

### Key Technologies
- **CSS3 Features:** Backdrop filters, transforms, transitions, CSS Grid
- **JavaScript ES6+:** Arrow functions, template literals, event listeners
- **Responsive Design:** Mobile-first approach with media queries

## Project Structure

```
gentle-rain-clone/
├── index.html           # Main HTML file with semantic structure
├── styles/
│   └── style.css       # All styling and responsive design
├── scripts/
│   └── main.js         # Animation logic and interactivity
├── assets/
│   └── images/         # Parallax layers and visual assets
├── README.md           # This file
└── .gitignore         # Git ignore rules
```

## Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic web server (for local testing)
- Git (optional, for version control)

### Local Setup

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd gentle-rain-clone
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Python 2
   python -m SimpleHTTPServer 8000

   # Using Node.js (with http-server)
   npx http-server

   # Using VS Code Live Server extension
   # Right-click index.html > Open with Live Server
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8000`
   - Or use your preferred local server port

## File Descriptions

### index.html
- Semantic HTML5 structure
- External CDN links for GSAP, ScrollTrigger, AOS, and Rellax
- Organized sections with proper accessibility attributes
- Data attributes for animation configuration

### styles/style.css
- **1000+ lines** of organized, production-ready CSS
- Mobile-first responsive design
- Smooth transitions and animations
- Backdrop filter effects for modern browser support
- CSS Grid and Flexbox layouts
- Media queries for screen sizes: 768px and below

### scripts/main.js
- **80+ lines** of optimized JavaScript
- AOS initialization with custom settings
- Rellax parallax engine setup
- GSAP ScrollTrigger horizontal scroll implementation
- Rotating text animation with smooth easing
- Smooth scroll behavior for navigation links
- Proper event cleanup and memory management

## Animation Breakdown

### Parallax Layers
- Uses Rellax.js for smooth, GPU-accelerated parallax
- Three layers with different speed values (-3, -2, -1)
- Creates depth illusion as user scrolls

### Scroll Animations
- **AOS (Animate On Scroll)** triggers animations when elements enter viewport
- Fade-up, fade-down animations with staggered delays
- Smooth easing for natural motion

### Horizontal Scroll
- GSAP animates container horizontally as page scrolls vertically
- Pinned section keeps scroll area fixed during animation
- Smooth scrubbing synced with scroll position

### Text Rotation
- Cycles through 4 words every 2.5 seconds
- Smooth fade and translate animations
- GSAP's power easing for natural feel

## Responsive Design

### Breakpoints
- **Desktop:** 768px and above - Full features enabled
- **Mobile:** Below 768px - Optimized layout and touch-friendly
- **Tablet:** Intermediate scaling for mid-range devices

### Mobile Optimizations
- Reduced font sizes for better readability
- Adjusted padding and margins for smaller screens
- Optimized parallax opacity for mobile performance
- Horizontal scroll section height reduced on mobile
- Touch-friendly interactive elements with sufficient spacing

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Best performance |
| Firefox | ✅ Full | Excellent support |
| Safari | ✅ Full | Minor backdrop filter differences |
| Edge | ✅ Full | Chromium-based, full support |
| Mobile Safari | ✅ Good | Limited parallax on older devices |

## Performance Optimizations

1. **GPU Acceleration** - Using `transform` and `opacity` for animations
2. **Lazy Loading** - AOS delays animations until elements are visible
3. **Passive Event Listeners** - Smooth scrolling without blocking
4. **Minified External Libraries** - CDN-hosted production builds
5. **Efficient CSS Selectors** - Class-based targeting for fast DOM queries
6. **GSAP ScrollTrigger** - Optimized scroll-based calculations

## AI & Tool Usage Disclosure

### AI Tools Used
**GitHub Copilot (Claude Haiku 4.5)** - Used for:
- Code structure optimization and best practices
- CSS animation refinement and responsive design patterns
- JavaScript error handling and performance enhancements
- README documentation and project structure guidance
- HTML semantic improvements and accessibility features

### Specific AI Contributions
1. **Code Review & Optimization** - Refined GSAP animation timing and easing
2. **Bug Fixes** - Fixed duplicate navbar headers and HTML structure issues
3. **CSS Enhancements** - Added backdrop filter effects and modern animations
4. **Documentation** - Generated comprehensive README and code comments
5. **Mobile Optimization** - Responsive breakpoints and touch-friendly adjustments

### Pre-made Assets & Libraries
- **GSAP 3.12.2** - GreenSock Animation Platform (commercial license)
- **ScrollTrigger** - GSAP plugin included in animation library
- **AOS Library** - Animate On Scroll library
- **Rellax.js** - Lightweight parallax library
- **CDN Resources** - All libraries loaded from trusted CDNs

## Testing Checklist

- [x] HTML validates with no errors
- [x] CSS is responsive across breakpoints
- [x] JavaScript animations work smoothly
- [x] Parallax scrolling functions correctly
- [x] Flip cards hover effects responsive
- [x] Rotating text animates properly
- [x] Horizontal scroll section functions
- [x] Navigation links smooth scroll
- [x] Mobile layout optimized
- [x] Cross-browser compatibility verified

## Known Limitations & Future Enhancements

### Current Limitations
- Parallax images must be provided in `assets/images/` folder
- Requires JavaScript enabled for all animations
- Some animations may perform differently on very old browsers

### Future Enhancements
1. Dark mode support
2. Advanced analytics tracking
3. Performance monitoring
4. Additional animation effects
5. Accessibility ARIA labels expansion
6. Service worker for offline support

## Live Demo & Screen Recording

🌐 **Live Website:** [View Live Demo](https://gentle-rain-clone.vercel.app)

📹 **Screen Recording:** [Watch Demo Video](https://drive.google.com/file/d/1yzc34htuWpzyicgh8-7qRh868masIl6b/view?usp=sharing)

The screen recording showcases:
- Parallax scrolling animation
- Flip card hover effects
- Horizontal scroll section
- Sticky navigation
- Responsive mobile design

## Deployment

### Deploy to GitHub Pages
```bash
git add .
git commit -m "Deploy Gentlerain clone"
git push origin main
```
Then enable GitHub Pages in repository settings (main branch, / root).

### Deploy to Netlify
```bash
# Using Netlify CLI
netlify deploy --prod

# Or drag and drop folder to Netlify
```

### Deploy to Vercel
```bash
# Using Vercel CLI
vercel deploy --prod
```

## Credits & Attribution

- **Original Concept** - [Gentlerain.ai](https://gentlerain.ai)
- **360Learning** - Original platform provider
- **GreenSock** - GSAP animation library creators
- **AOS Library** - Animate On Scroll library
- **Rellax** - Parallax library creators

## License

This project is created for educational and assignment purposes. All external libraries retain their original licenses.

## Support & Questions

For issues, questions, or suggestions:
1. Check the code comments for implementation details
2. Review library documentation:
   - GSAP: https://greensock.com/docs/
   - AOS: https://github.com/michalsnik/aos
   - Rellax: https://github.com/imbrn/rellax

## Assignment Completion

✅ **HTML Structure** - 5+ sections with semantic markup
✅ **CSS Styling** - 1000+ lines of organized, responsive CSS
✅ **JavaScript** - Modern ES6+ with GSAP, AOS, and Rellax
✅ **Animations** - 2+ parallax effects, scroll triggers, flip cards
✅ **Responsiveness** - Mobile-first design with optimized layouts
✅ **Documentation** - Comprehensive README with AI disclosure
✅ **Code Quality** - Clean, commented, production-ready code

---

**Last Updated:** January 18, 2026
**Status:** Complete & Production Ready ✅
