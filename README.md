# ILM SEEKER - Islamic Children's Education Website

A complete multi-page website for **ILM SEEKER**, an Islamic children's online education academy offering courses, a product store, blog articles, and teacher profiles.

## 🌟 Features

### Design System
- **Color Palette**: Islamic green (#1A6B45), professional whites and grays, with decorative pastels
- **Typography**: Nunito for headings, DM Sans for body text
- **Responsive**: Fully responsive design for desktop, tablet, and mobile
- **Animations**: Smooth micro-animations and hover effects throughout

### Pages Implemented

1. **Home Page (`index.html`)**
   - Hero section with floating course card
   - Set career goals section with course categories
   - Featured courses showcase
   - Free learning resources
   - Meet our teachers section
   - Latest articles/blog
   - Contact form

2. **Courses Page (`courses.html`)**
   - Filter tabs for course categories
   - 3-column responsive course grid
   - Pagination controls
   - Course cards with pricing and info

3. **Single Course Page (`course-single.html`)**
   - Two-panel layout (main content + sidebar)
   - Course modules with accordion
   - Instructor profile
   - Reviews section
   - Tabbed interface
   - Sticky sidebar with video preview and pricing

4. **Shop/Store Page (`shop.html`)**
   - Hero banner with discount promotion
   - Filter dropdowns and sorting
   - 4-column product grid
   - Product cards with ratings and wishlist
   - Pagination

5. **Single Product Page (`product-single.html`)**
   - Image gallery with thumbnails
   - Product details and options (size, color)
   - Quantity controls
   - Add to cart functionality
   - Feature badges (cashback, warranty, etc.)
   - Customer reviews
   - "You might also like" section

## 🎨 Design System

### Colors
```css
--primary-green: #1A6B45
--white: #FFFFFF
--light-gray-bg: #F7F8F6
--dark-footer: #1C2535
--text-primary: #1A1A2E
--text-secondary: #6B7280
--star-rating: #F59E0B
```

### Components
- **Navbar**: Sticky navigation with dropdown menus
- **Footer**: 5-column footer with links, newsletter subscription, and social icons
- **Buttons**: Primary, outline, and full-width variants
- **Cards**: Hover effects with shadow and lift animation
- **Forms**: Styled inputs with focus states

## 🚀 Getting Started

### Installation
1. Clone the repository
2. Open any HTML file in a web browser
3. No build process required - pure HTML, CSS, and JavaScript

### File Structure
```
/
├── index.html              # Home page
├── courses.html            # Courses listing
├── course-single.html      # Single course detail
├── shop.html               # Store/shop page
├── product-single.html     # Single product detail
├── css/
│   ├── global.css         # Global styles and design system
│   ├── components.css     # Navbar and footer components
│   ├── home.css           # Home page specific styles
│   ├── courses.css        # Courses page styles
│   ├── course-single.css  # Single course page styles
│   ├── shop.css           # Shop page styles
│   └── product-single.css # Single product page styles
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── course-single.js   # Course page specific JS
├── images/                # Logo and images folder
└── assets/                # Additional assets

```

## 🎯 Key Interactions

### JavaScript Features
- Mobile hamburger menu
- Add to cart with animation
- Filter pills for courses
- Accordion modules
- Image gallery thumbnails
- Quantity controls
- Smooth scrolling
- Form validation
- Scroll to top button
- Pagination controls

### Animations
- Fade in on scroll
- Card hover lift effects
- Button scale on hover
- Smooth transitions
- Pulse animation for cart badge

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1024px (2-column grids, adjusted spacing)
- **Mobile**: Below 768px (single column, hamburger menu)

## 🎓 Course Categories

- Quranic Adventures
- Islamic Stories
- Young Explorers of Islam
- Learning Arabic
- Islamic Etiquette
- Islamic Science
- Life of Prophets
- Islamic History
- Growing in Islam
- Foundations in Islam
- Islamic Values Voyage
- Ramadan Rookies

## 🛍️ Shop Products

- Islamic books (Quran, stories, dua books)
- Prayer accessories (mats, tasbihs)
- Educational kits
- Learning materials (flash cards, posters)
- Stationery items

## 🎨 Decorative Elements

- Organic blob shapes scattered throughout
- Custom SVG icons
- Islamic-inspired color accents
- Rounded, friendly design language
- Child-friendly visual elements

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `css/global.css`:
```css
:root {
  --primary-green: #1A6B45;  /* Change to your brand color */
  /* ... other variables */
}
```

### Adding Your Logo
Replace placeholder logos with your actual logo:
- Navbar: Update `navbar-logo` src in HTML files
- Footer: Update `footer-logo` src in HTML files
- Recommended size: 150x50px for navbar

### Modifying Content
All content is in HTML files and can be easily modified. Update:
- Course names and descriptions
- Product listings
- Teacher profiles
- Contact information
- Footer links

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is built for ILM SEEKER educational academy.

## 🤝 Credits

- Design System: Custom Islamic education theme
- Icons: Inline SVG icons
- Fonts: Google Fonts (Nunito, DM Sans)
- Images: Placeholder images (replace with actual content)

## 📞 Support

For questions or support:
- Email: info@ilmseeker.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ for Islamic Education**
*"Where Knowledge Lights the Path"*
