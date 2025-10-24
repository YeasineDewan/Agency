# Agency Website Project - Setup & Run Guide

## 📋 Project Overview

This is a professional Agency website built with React, featuring:
- Multi-language support (English/Bengali)
- Professional service pages with detailed pricing tiers
- Modern UI with Tailwind CSS and Framer Motion animations
- Responsive design for all devices
- Interactive service detail pages with pricing plans

## 🛠️ Technology Stack

- **Frontend**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.2
- **Animations**: Framer Motion 10.16.16
- **Routing**: React Router DOM 6.8.1
- **Internationalization**: i18next 25.6.0
- **Icons**: React Icons 5.5.0
- **Build Tool**: React Scripts 5.0.1

## 📁 Project Structure

```
Agency-master/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation with mobile menu
│   │   └── Footer.js          # Footer with social links
│   ├── pages/
│   │   ├── Home.js            # Landing page with hero section
│   │   ├── Services.js        # Services overview page
│   │   ├── About.js           # About us page
│   │   ├── Contact.js         # Contact form
│   │   ├── Portfolio.js       # Portfolio showcase
│   │   ├── Career.js          # Career opportunities
│   │   ├── Community.js       # Community initiatives
│   │   ├── Blogs.js           # Blog posts
│   │   ├── PrivacyPolicy.js   # Privacy policy
│   │   ├── TermsCondition.js  # Terms and conditions
│   │   ├── CompanyProfile.js  # Company information
│   │   ├── ConcernsProducts.js # Company concerns & products
│   │   ├── GiveFeedback.js    # Feedback form
│   │   ├── ArtistModelList.js # Artist/model directory
│   │   ├── QuotationRequest.js # Quote request form
│   │   └── Service Details/
│   │       ├── SEOServiceDetails.js      # SEO service with 12 pricing tiers
│   │       ├── VideoEditingDetails.js    # Video editing service
│   │       ├── WebDevelopmentDetails.js  # Web development service
│   │       ├── SocialMediaDetails.js     # Social media marketing
│   │       ├── AppDevelopmentDetails.js  # App development service
│   │       └── PhotoEditingDetails.js    # Photo editing service
│   ├── locales/
│   │   ├── en/
│   │   │   └── translation.json  # English translations
│   │   └── bn/
│   │       └── translation.json  # Bengali translations
│   ├── i18n/
│   │   └── index.js            # i18n configuration
│   ├── App.js                   # Main app component with routing
│   ├── index.js                 # App entry point
│   ├── index.css               # Global styles with Tailwind
│   └── App.css                  # App-specific styles
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # Project documentation
```

## 🚀 Step-by-Step Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git (for version control)

### Step 1: Navigate to Project Directory
```bash
cd "E:\Website Source Codes\Agency-master"
```

### Step 2: Install Dependencies
```bash
npm install
```
This will install all required packages including:
- React and React DOM
- Tailwind CSS and PostCSS
- Framer Motion for animations
- React Router for navigation
- i18next for internationalization
- React Icons for iconography

### Step 3: Start Development Server
```bash
npm start
```
This will:
- Start the development server on port 3000
- Open your browser automatically to http://localhost:3000
- Enable hot reloading for development

### Step 4: Access the Website
Open your browser and navigate to:
- **Main Site**: http://localhost:3000
- **Services Page**: http://localhost:3000/services
- **About Page**: http://localhost:3000/about
- **Contact Page**: http://localhost:3000/contact

## 🎯 Key Features & Pages

### 🏠 Home Page (`/`)
- Hero section with animated background
- Service overview cards
- Statistics section
- Portfolio preview
- Testimonials
- Newsletter signup
- Call-to-action sections

### 🛠️ Services Page (`/services`)
- Overview of all services
- "See More" buttons that work correctly
- Professional service cards with features
- Links to detailed service pages

### 📋 Service Detail Pages
Each service has a dedicated page with:

#### SEO Services (`/services/seo`)
- 12-tier pricing system (Bronze I-III, Gold I-III, Platinum I-III, Diamond I-III)
- Interactive plan selection
- Detailed feature lists
- Professional pricing from $299 to $3,499/month

#### Video Editing (`/services/video-editing`)
- Professional video production services
- Pricing from $199 to $3,299 per project
- Cinematic quality features
- Motion graphics and VFX

#### Web Development (`/services/web-development`)
- Custom website development
- Responsive design
- E-commerce solutions
- CMS integration

#### App Development (`/services/app-development`)
- Cross-platform mobile apps
- Native iOS & Android development
- Pricing from $2,999 to $49,999
- Enterprise features

#### Photo Editing (`/services/photo-editing`)
- Professional retouching
- Pricing from $99 to $1,999 per project
- Magazine-quality results
- Advanced compositing

#### Social Media Marketing (`/services/social-media`)
- Digital marketing strategies
- Content creation
- PPC advertising
- Social media management

### 🌐 Multi-language Support
- **English**: Default language
- **Bengali**: Full translation support
- Language toggle in navigation
- All content translated

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation
- Responsive images and layouts

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (not recommended)
npm run eject
```

## 🎨 Customization

### Colors (Tailwind Config)
- **Primary**: #DD0303 (Deep red)
- **Secondary**: #FA812F (Orange)
- **Accent**: #FAB12F (Golden yellow)
- **Light**: #FEF3E2 (Light cream)

### Adding New Services
1. Create a new service detail page in `src/pages/`
2. Add the route to `src/App.js`
3. Update the services array in `src/pages/Services.js`
4. Add translations to both language files

### Modifying Translations
- Edit `src/locales/en/translation.json` for English
- Edit `src/locales/bn/translation.json` for Bengali
- Use the `t()` function in components to access translations

## 🐛 Troubleshooting

### Common Issues & Solutions

1. **Port 3000 already in use**
   ```bash
   # Kill process using port 3000
   npx kill-port 3000
   # Then restart
   npm start
   ```

2. **Dependencies not installing**
   ```bash
   # Clear npm cache
   npm cache clean --force
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Check for missing dependencies
   npm install cross-spawn postcss-selector-parser array.prototype.findlastindex
   ```

4. **Translation not working**
   - Check if translation keys exist in both language files
   - Verify i18n configuration in `src/i18n/index.js`

## 📊 Performance Features

- **Code Splitting**: Automatic with React Router
- **Lazy Loading**: Images and components
- **Optimized Animations**: Framer Motion with reduced motion support
- **Responsive Images**: Optimized for different screen sizes
- **SEO Ready**: Meta tags and structured data

## 🔒 Security Features

- **XSS Protection**: React's built-in protection
- **CSRF Protection**: Form validation
- **Input Sanitization**: All user inputs validated
- **Secure Headers**: Configured in build process

## 📈 Analytics Ready

The project is ready for integration with:
- Google Analytics
- Facebook Pixel
- Custom analytics solutions
- Performance monitoring

## 🚀 Deployment Options

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure redirects for React Router

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically deploy
3. Configure environment variables if needed

### Traditional Hosting
1. Run `npm run build`
2. Upload contents of `build` folder to your server
3. Configure server for SPA routing

## 📝 Development Notes

### Recent Fixes Applied
- ✅ Fixed Services page "See More" button routing
- ✅ Created missing service detail pages
- ✅ Resolved ESLint warnings
- ✅ Fixed Git merge conflicts
- ✅ Enhanced mobile menu animations
- ✅ Added professional pricing tiers
- ✅ Improved user experience with better transitions

### Code Quality
- ESLint configured for React best practices
- Consistent code formatting
- Component-based architecture
- Reusable UI components
- Clean separation of concerns

## 📞 Support & Contact

For technical support or questions about this project:
- Check the troubleshooting section above
- Review the code comments for implementation details
- Test all functionality before deployment

---

**Last Updated**: October 2025
**Project Status**: ✅ Fully Functional & Production Ready
**Version**: 1.0.0
