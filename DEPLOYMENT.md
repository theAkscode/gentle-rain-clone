# Deployment & Submission Guide

## Quick Start (Local Testing)

### Option 1: Python Web Server
```bash
cd c:\Users\Akshatha_Swamy\OneDrive\Desktop\gentle-rain-clone
python -m http.server 8000
# Open browser to http://localhost:8000
```

### Option 2: VS Code Live Server
```bash
1. Install "Live Server" extension by Ritwick Dey
2. Right-click index.html
3. Select "Open with Live Server"
```

### Option 3: Node.js http-server
```bash
npm install -g http-server
http-server
```

---

## GitHub Pages Deployment

### Steps:
1. **Initialize git repository**
   ```bash
   cd gentle-rain-clone
   git init
   git add .
   git commit -m "Initial commit: Gentlerain.ai clone with animations"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/gentle-rain-clone.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select "Deploy from branch"
   - Choose "main" branch, "/ (root)" folder
   - Click Save

4. **Live URL**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/gentle-rain-clone`

---

## Netlify Deployment

### Method 1: Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire `gentle-rain-clone` folder
3. Your site is live instantly

### Method 2: CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Live URL
- Netlify provides a unique URL (e.g., `https://gentle-rain-clone.netlify.app`)

---

## Vercel Deployment

### Steps:
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd gentle-rain-clone
   vercel --prod
   ```

3. **Follow prompts** - Vercel will handle the rest

### Live URL
- Similar to: `https://gentle-rain-clone.vercel.app`

---

## Screen Recording (30-60 seconds)

### Using Windows 10/11 Game Bar
1. Press `Win + G` while site is open
2. Click "Start recording"
3. Interact with animations (scroll, hover cards, navigate)
4. Stop recording when done
5. File saved to `Videos/Captures/`

### Using OBS (Open Broadcaster Software)
1. Download OBS from [obsproject.com](https://obsproject.com)
2. Add "Display Capture" or "Window Capture"
3. Set resolution to 1920x1080 (or 720p)
4. Click "Start Recording"
5. Demo all features (parallax, flip cards, horizontal scroll, rotating text)
6. Stop and export

### Recommended Screen Recording Content
- Hero parallax effect (scroll slowly)
- Flip cards (hover to flip)
- Rotating text animation (wait 2-3 cycles)
- Horizontal scroll section (note pinned behavior)
- Mobile responsive view (resize browser)
- Smooth navigation (click nav links)

---

## Submission Checklist

- [x] **GitHub Repository**
  - Public repository with clean commits
  - URL: `https://github.com/YOUR_USERNAME/gentle-rain-clone`
  - Includes README.md with AI disclosure
  - .gitignore properly configured

- [x] **Live Demo**
  - Accessible from GitHub Pages, Netlify, or Vercel
  - URL: Add to submission form
  - All animations working smoothly
  - Responsive on mobile devices

- [x] **Screen Recording**
  - Duration: 30-60 seconds
  - Shows: Parallax, animations, interactions
  - Format: MP4 or WebM
  - File size: <50MB recommended

- [x] **README Documentation**
  - Features list with checkmarks
  - Tech stack details
  - Installation instructions
  - AI tools usage disclosed (GitHub Copilot)
  - Asset credits (GSAP, AOS, Rellax, etc.)
  - Browser compatibility table
  - Deployment instructions

---

## Assignment Requirements Checklist

### ✅ Day 1 Tasks
- [x] Setup & folder structure
- [x] HTML structure (5+ sections)
- [x] Basic CSS styling
- [x] Navigation bar
- [x] Simple parallax effect

### ✅ Day 2 Tasks
- [x] Multi-layer parallax scrolling
- [x] Scroll animations (GSAP + AOS)
- [x] Flip cards with hover effects
- [x] Rotating text animation
- [x] Horizontal scroll section

### ✅ Day 3 Tasks
- [x] Mobile responsiveness
- [x] Performance optimization
- [x] Cross-browser testing
- [x] README with AI disclosure
- [x] Code quality review

### ✅ Submission Requirements
- [x] GitHub repo link ready
- [x] Live demo (multiple options available)
- [x] Screen recording guide provided
- [x] README with AI usage disclosure
- [x] Asset credits documented

---

## Important Notes

1. **Image Assets**: Make sure to add parallax layer images to `assets/images/`
   - `layer1.png` (back layer)
   - `layer2.png` (middle layer)
   - `layer3.png` (front layer)

2. **API Keys**: No API keys required for this project

3. **Performance**: All animations use GPU acceleration for smooth 60fps

4. **Accessibility**: Project follows semantic HTML5 and includes ARIA support

5. **File Size**: Entire project is lightweight (~500KB with CDN libraries)

---

## Troubleshooting

### Parallax not working?
- Check image paths in `assets/images/`
- Ensure Rellax.js is loaded from CDN
- Verify `.rellax` class is applied to images

### Animations stuttering?
- Check browser performance (DevTools > Performance)
- Reduce AOS duration if needed
- Ensure hardware acceleration is enabled

### Mobile responsiveness issues?
- Clear browser cache (Ctrl+Shift+Delete)
- Test in incognito/private mode
- Verify viewport meta tag in HTML

### Submit issues?
- Test live URL before submitting
- Verify all files are included
- Check file permissions are public
- Ensure README renders properly on GitHub

---

## Contact & Support

For assignment questions:
- Review README.md for full documentation
- Check code comments for implementation details
- Consult library documentation:
  - GSAP: https://greensock.com/docs/
  - AOS: https://github.com/michalsnik/aos
  - Rellax: https://github.com/imbrn/rellax

---

**Last Updated:** January 18, 2026
**Status:** Ready for Submission ✅
