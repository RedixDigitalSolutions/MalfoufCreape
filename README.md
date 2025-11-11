Malfouf & Crepe Marketing Proposal
A professional marketing proposal website built by Redix Digital Solutions for Malfouf & Crepe restaurant in Bardo, Tunisia.

📍 Live Demo: https://redixdigitalsolutions.github.io/MalfoufCreape/

📋 Table of Contents
About

Features

Tech Stack

Project Structure

Getting Started

Deployment

Available Scripts

Package Details

Contributing

License

Contact

🎯 About
This project is a comprehensive digital marketing proposal website created for Malfouf & Crepe, a fast-food restaurant located in Bardo, Tunisia. The proposal showcases Redix Digital Solutions' expertise in social media marketing, video production, and digital advertising strategies specifically tailored for the restaurant industry.

The website presents:

Complete market analysis of Bardo's fast-food landscape

Competitive analysis of local restaurants

Three-tier pricing packages (400 TND, 600 TND, 800 TND)

Portfolio of professional video reels

Strategic marketing roadmap

Client: Malfouf & Crepe Restaurant
Agency: Redix Digital Solutions
Location: Bardo, Tunis, Tunisia
Language: French (Français)

✨ Features
🎨 Design & UX
Fully Animated UI: Smooth animations powered by Framer Motion

Responsive Design: Mobile-first approach with adaptive layouts

Modern Aesthetics: Professional gradient themes with Redix branding (#ff6b35, #f7931e)

Interactive Navigation: Smooth scroll with sticky navbar

📊 Content Sections
Hero Section: Eye-catching landing with call-to-action

About Redix: Company overview with service showcase

Portfolio (Why Us): Video reel showcase with 3 professional presentations

Market Analysis: Interactive charts showing market growth and customer preferences

Marketing Strategy: Competitor analysis of 6 local restaurants in Bardo

Pricing Packages: Three transparent tiers with detailed feature lists

Contact Footer: Complete company information and quick links

🎥 Video Integration
Professional Reels: Embedded video presentations

Kapari Square

Pementos Presentation (2 versions)

Badge indicators for reel content

📈 Data Visualization
Interactive Charts: Using Chart.js for market data

Market growth projections (2023-2027)

Customer preference distribution

SWOT Analysis: Visual representation of business analysis

🌐 SEO & Performance
Optimized meta tags for search engines

Open Graph and Twitter Card support

Fast loading with optimized assets

Preloaded critical resources

🛠 Tech Stack
Frontend Framework
React 18.2.0 - UI library

React DOM 18.2.0 - DOM rendering

Animation & Motion
Framer Motion 10.16.16 - Animation library for smooth transitions

Data Visualization
Chart.js 4.4.0 - Canvas-based charting

React ChartJS 2 5.2.0 - React wrapper for Chart.js

Icons & UI
React Icons 4.12.0 - Icon library (FA, Material Design, etc.)

Build Tools
React Scripts 5.0.1 - Create React App build configuration

gh-pages 6.1.0 - GitHub Pages deployment

Development & Testing
@testing-library/react - Testing utilities

@testing-library/jest-dom - Custom Jest matchers

📁 Project Structure

malfouf-creape-proposal/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   └── redix.png          # Company logo
│   │   └── videos/
│   │       ├── KapariSquare.mp4
│   │       ├── PementosPresentation.mov
│   │       └── Pementospresentation2.mp4
│   ├── index.html                  # HTML template
│   └── manifest.json               # PWA manifest
├── src/
│   ├── components/
│   │   ├── Navbar.js              # Navigation bar
│   │   ├── Hero.js                # Landing section
│   │   ├── AboutRedix.js          # Company overview
│   │   ├── WhyUs.js               # Portfolio showcase
│   │   ├── MarketAnalysis.js      # Market data & charts
│   │   ├── Strategy.js            # Marketing strategy
│   │   ├── Packages.js            # Pricing tiers
│   │   └── Contact.js             # Footer & contact
│   ├── styles/
│   │   ├── Navbar.module.css
│   │   ├── Hero.module.css
│   │   ├── AboutRedix.module.css
│   │   ├── WhyUs.module.css
│   │   ├── MarketAnalysis.module.css
│   │   ├── Strategy.module.css
│   │   ├── Packages.module.css
│   │   └── Contact.module.css
│   ├── App.js                      # Main app component
│   ├── App.css                     # Global styles
│   └── index.js                    # Entry point
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
🚀 Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14.0.0 or higher)

npm (v6.0.0 or higher) or yarn

Git for version control

Installation
Clone the repository

bash
git clone https://github.com/RedixDigitalSolutions/MalfoufCreape.git
cd MalfoufCreape
Install dependencies

bash
npm install
Start the development server

bash
npm start
Open your browser


http://localhost:3000
The page will automatically reload when you make changes to the code.

🌐 Deployment
This project is configured for deployment to GitHub Pages.

Deploy to GitHub Pages
Build the production version

bash
npm run build
Deploy to GitHub Pages

bash
npm run deploy
The site will be published to:


https://redixdigitalsolutions.github.io/MalfoufCreape/
Manual Deployment Steps
If you need to deploy manually:

bash
# Build the project
npm run build

# Deploy using gh-pages
npx gh-pages -d build
Deployment Troubleshooting
Issue: Branch already exists

bash
git branch -D gh-pages
git push origin --delete gh-pages
npm run deploy
Issue: Need to force update

bash
npx gh-pages -d build -f
📜 Available Scripts
Development
npm start - Runs the app in development mode

npm test - Launches the test runner

npm run eject - Ejects from Create React App (one-way operation)

Production
npm run build - Builds the app for production

npm run deploy - Deploys to GitHub Pages

💼 Package Details
Pricing Packages
Pack Basique (400 TND/month)
Professional ads manager

1 video shoot session

4 videos with simple editing

Content roadmap creation

Meta Ads sponsoring (20$)

Scripting + video ideas

Social media management

Marketing strategy development

Optimal posting times analysis

Social media monitoring & reporting

Pack Professionnel (600 TND/month) ⭐ Most Popular
Professional ads manager

1 video shoot session

8 videos with simple editing

Content roadmap creation

Meta Ads sponsoring (40$)

Scripting + video ideas

Social media management

Marketing strategy development

Optimal posting times analysis

Social media monitoring & reporting

Pack Ultimate (800 TND/month)
Professional ads manager

1 video shoot session

8 videos with simple editing

Content roadmap creation

Meta Ads sponsoring (60$)

Scripting + video ideas

Social media management

Marketing strategy development

Optimal posting times analysis

Social media monitoring & reporting

🏢 About Redix Digital Solutions
Redix Digital Solutions is Tunisia's premier digital marketing agency specializing in helping restaurants and businesses scale their online presence.

Location: Smart Technopark Manouuba, Tunisie
Website: redixsolutions.pro
Email: contact@redixsolutions.pro
Phone: +216 92 861 655

Services
Social Media Marketing

Video Production

Branding & Design

Web & App Development

Digital Advertising

SEO Optimization

Event Coverage

Track Record
50+ Success Stories

300% Average Growth

1M+ Content Views

24/7 Client Support

🤝 Contributing
We welcome contributions to improve this proposal template! Here's how you can help:

Fork the repository

Create a feature branch

bash
git checkout -b feature/your-feature-name
Commit your changes

bash
git commit -m "Add: your feature description"
Push to your branch

bash
git push origin feature/your-feature-name
Open a Pull Request

Contribution Guidelines
Follow React best practices

Use CSS Modules for styling

Write clean, commented code

Test on multiple devices

Update documentation as needed

📝 License
This project is proprietary and owned by Redix Digital Solutions.

© 2025 Redix Digital Solutions. All rights reserved.

Prepared for Malfouf & Crepe by Nizar.

📞 Contact
For Project Inquiries
Redix Digital Solutions
📍 Smart Technopark Manouuba, Tunisie
🌐 redixsolutions.pro
📧 contact@redixsolutions.pro
📱 +216 92 861 655

Repository
🔗 GitHub: RedixDigitalSolutions/MalfoufCreape
🌐 Live Site: https://redixdigitalsolutions.github.io/MalfoufCreape/

🙏 Acknowledgments
Client: Malfouf & Crepe Restaurant, Bardo

Development: Redix Digital Solutions Team

Prepared By: Nizar

Location: Bardo, Tunis, Tunisia

Built with ❤️ by Redix Digital Solutions

Votre Croissance, Notre Stratégie 🚀