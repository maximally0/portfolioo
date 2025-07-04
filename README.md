# Rishul Chanana Portfolio

A futuristic, immersive personal portfolio website built with modern web technologies.

## 🌟 Features

- **Sci-Fi Aesthetic**: Dark theme with glowing gradients, animated starfield, and floating UI effects
- **Interactive Elements**: Mouse-follow parallax, text transparency effects, and sound feedback
- **Modern Design**: Glassmorphism effects, smooth animations, and responsive layout
- **SEO Optimized**: Complete meta tags, sitemap, and robots.txt for search engine visibility

## 🛠️ Built With

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui + Radix UI primitives
- **Animations**: Framer Motion
- **Sound**: Web Audio API
- **Build Tool**: Vite

## 🚀 Live Demo

Visit the live website: [https://rishulchanana.com](https://rishulchanana.com)

## 📦 Deployment on Vercel

### Step 1: Build for Production
```bash
npm run build
```

### Step 2: Deploy to Vercel

#### Option A: Connect GitHub Repository
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the settings
6. Click "Deploy"

#### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel
```

### Step 3: Add Custom Domain

1. In your Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your custom domain: `rishulchanana.com`
4. Follow the DNS configuration instructions:
   - Add an A record pointing to Vercel's IP: `76.76.19.61`
   - Or add a CNAME record pointing to `cname.vercel-dns.com`

### Step 4: SSL/HTTPS Setup

Vercel automatically provides SSL certificates for all domains. Once your domain is configured:
- SSL certificate is automatically generated and renewed
- HTTPS is enforced by default
- No additional configuration needed

## 🌐 Domain Configuration

For the domain `rishulchanana.com`, add these DNS records:

**Option 1: A Record (Recommended)**
```
Type: A
Name: @
Value: 76.76.19.61
TTL: 3600
```

**Option 2: CNAME Record**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600
```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and configurations
│   │   └── hooks/          # Custom React hooks
│   └── index.html          # Main HTML file
├── public/                 # Static assets
├── dist/                   # Production build output
├── vercel.json             # Vercel deployment configuration
├── robots.txt              # Search engine robots file
├── sitemap.xml             # XML sitemap for SEO
└── README.md               # This file
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📞 Contact

- **Email**: [hello@rishulchanana.com](mailto:hello@rishulchanana.com)
- **LinkedIn**: [linkedin.com/in/rishul-chanana](https://linkedin.com/in/rishul-chanana)
- **Twitter**: [@rishhul](https://x.com/rishhul)
- **Instagram**: [@chanana_rishul](https://instagram.com/chanana_rishul)
- **Medium**: [@rishulchanana36](https://medium.com/@rishulchanana36)

## 📄 License

This project is created for Rishul Chanana's personal portfolio. All rights reserved.