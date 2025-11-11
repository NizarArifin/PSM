# PSM Website - Documentation

## 📋 Overview

Website PSM (Pengembang Sistem Manajemen) - Professional management consulting company website with modern design, responsive layout, and interactive animations.

## 🏗️ Project Structure

```
!PSM Web/
├── index-new.html              # Main landing page (NEW VERSION - USE THIS)
├── index.html.backup          # Original backup
├── about-us.html              # About Us page
├── contact-us.html            # Contact page with form
├── business-system-development.html  # BSD service page
├── components/                # Reusable HTML components
│   ├── navigation.html
│   └── footer.html
├── css/                       # Modular CSS files
│   ├── main.css              # Main stylesheet (imports all others)
│   ├── variables.css         # CSS variables & design tokens
│   ├── reset.css             # Reset & base styles
│   ├── components.css        # Reusable components
│   ├── animations.css        # Animation keyframes
│   └── responsive.css        # Media queries
├── js/                        # JavaScript files
│   ├── main.js               # Main functionality
│   └── carousel.js           # Carousel component
├── img/                       # Image assets
├── Content/                   # Design references
│   └── asset/                # Service icons & content
└── image/                     # Original images (backup)
```

## 🎨 Features Implemented

### ✅ Completed Features:

1. **Responsive Design** - Works on desktop, tablet, and mobile
2. **Modern Navigation** - Sticky navbar with dropdown menus
3. **Smooth Animations** - Scroll-triggered animations and hover effects
4. **Mobile Menu** - Hamburger menu for mobile devices
5. **Article Carousel** - Draggable carousel for articles
6. **Testimonials** - Scrollable testimonial section
7. **Work Culture Accordion** - Expandable content cards
8. **Contact Form** - With validation
9. **Back to Top Button** - Smooth scroll to top
10. **SEO Optimized** - Meta tags and semantic HTML

### 🎯 Interactive Elements:

- Dropdown navigation menu for services
- Mobile hamburger menu
- Smooth scroll navigation
- Hover effects on cards and buttons
- Scroll-triggered animations (fade in, slide in)
- Carousel with drag/swipe support
- Form validation
- Work culture accordion

## 📱 Responsive Breakpoints

- **Desktop Wide**: 1440px+
- **Desktop**: 1024px - 1439px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎨 Color Palette

```css
Primary Navy: #051c2c
Primary Blue: #2251ff
Light Blue: #0084d1
Dark Background: #031119
Light Background: #fbfbfd
White: #ffffff
Black: #000000
```

## 📄 Pages Created

### ✅ Complete Pages:

1. **index-new.html** - Landing page with all sections
2. **about-us.html** - About PSM page
3. **contact-us.html** - Contact form page
4. **business-system-development.html** - Service page template

### 🔄 To Be Created (Use Templates Below):

5. **system-innovation-technology.html** - Copy from business-system-development.html
6. **implementation-mentoring.html** - Copy from business-system-development.html
7. **fat-consultant.html** - Copy from business-system-development.html

## 🛠️ How to Create Additional Service Pages

1. Copy `business-system-development.html`
2. Rename to the service name (e.g., `fat-consultant.html`)
3. Update the following:
   - `<title>` tag
   - `<meta description>` tag
   - Hero title and description
   - Service icon path (`Content/asset/[SERVICE].png`)
   - Content sections (benefits, process, etc.)
   - Active navigation link styling

## 🚀 How to Use

### Starting Point:

Use **`index-new.html`** as your main page (rename to `index.html` when ready to deploy)

### CSS Import Order (in main.css):

```css
@import url("variables.css"); /* 1. Variables first */
@import url("reset.css"); /* 2. Reset & base */
@import url("components.css"); /* 3. Components */
@import url("animations.css"); /* 4. Animations */
@import url("responsive.css"); /* 5. Responsive last */
```

### JavaScript Files:

Load in this order:

```html
<script src="js/main.js"></script>
<!-- Core functionality -->
<script src="js/carousel.js"></script>
<!-- Carousel only -->
```

## 🎬 Animation Classes

Add these classes to elements for animations:

```html
<!-- Scroll-triggered animations -->
<div class="entrance-element">...</div>
<div class="scroll-animate">...</div>

<!-- Hover effects -->
<div class="hover-lift">...</div>
<div class="hover-scale">...</div>
<div class="hover-glow">...</div>

<!-- Fade animations -->
<div class="animate-fade-in">...</div>
<div class="animate-fade-in-up">...</div>
<div class="animate-fade-in-down">...</div>
```

## 📋 TODO List

### Service Pages (Use business-system-development.html as template):

- [ ] Create `system-innovation-technology.html`
- [ ] Create `implementation-mentoring.html`
- [ ] Create `fat-consultant.html`

### Content Updates Needed:

- [ ] Replace placeholder images in Impact section
- [ ] Add real client logos in Clients section
- [ ] Update testimonials with real data
- [ ] Add actual office address in footer map
- [ ] Update company phone/email if needed

### Optional Enhancements:

- [ ] Add news/blog detail page
- [ ] Add Shop page (if needed)
- [ ] Connect contact form to backend/email service
- [ ] Add Google Analytics
- [ ] Add chat widget (if needed)
- [ ] Add social media links

## 🔧 Customization Guide

### Changing Colors:

Edit `css/variables.css`:

```css
:root {
  --color-primary-navy: #051c2c;
  --color-primary-blue: #2251ff;
  --color-primary-light-blue: #0084d1;
}
```

### Changing Fonts:

Edit `css/variables.css`:

```css
:root {
  --font-primary: "Montserrat", sans-serif;
}
```

### Changing Spacing:

Edit `css/variables.css`:

```css
:root {
  --spacing-xl: 80px;
  --spacing-lg: 50px;
  --spacing-md: 30px;
}
```

## 📱 Testing Checklist

### Desktop (1440px+):

- [ ] Navigation works properly
- [ ] All sections display correctly
- [ ] Animations trigger on scroll
- [ ] Hover effects work
- [ ] Forms submit properly

### Tablet (768px - 1023px):

- [ ] Layout adapts properly
- [ ] Images resize correctly
- [ ] Navigation remains accessible

### Mobile (320px - 767px):

- [ ] Hamburger menu works
- [ ] All content is readable
- [ ] Touch interactions work
- [ ] Forms are usable
- [ ] Images load correctly

## 🐛 Known Issues & Solutions

### Issue: Carousel not working

**Solution**: Make sure both `main.js` and `carousel.js` are loaded

### Issue: Animations not triggering

**Solution**: Check if elements have `entrance-element` or `scroll-animate` classes

### Issue: Mobile menu not closing

**Solution**: Ensure `main.js` is loaded and no JavaScript errors in console

### Issue: Images not loading

**Solution**: Check image paths are correct (should be `img/` not `image/`)

## 📞 Support

For questions or issues:

- Email: office@psm-manajemen.com
- Phone: +62 821-1543-2434

## 📄 License

© 2023 PSM - Pengembang Sistem Manajemen. All Rights Reserved.

---

**Last Updated**: November 2025
**Version**: 1.0
**Status**: Production Ready (after completing TODO list)
