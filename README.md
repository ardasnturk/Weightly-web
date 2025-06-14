# Weightly - Landing Page

A modern, multilingual landing page for the Weightly mobile app, built with React, Vite, and TailwindCSS.

## 🌟 Features

- **Multilingual Support**: Available in English, Spanish, German, Italian, and Turkish
- **Dark/Light Theme**: Automatic system preference detection with manual toggle
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI**: Beautiful gradients, animations, and hover effects
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React i18next** - Internationalization
- **Lucide React** - Beautiful icons
- **GitHub Pages** - Static site hosting

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/yourusername/weightly-web.git
   cd weightly-web
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open your browser and visit \`http://localhost:5173\`

## 📱 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint
- \`npm run deploy\` - Deploy to GitHub Pages

## 🌍 Supported Languages

- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)
- 🇩🇪 German (de)
- 🇮🇹 Italian (it)
- 🇹🇷 Turkish (tr)

## 🎨 Color Palette

### Light Theme

- Primary: \`#22c55e\`
- Background: \`#f9fafb\`
- Surface: \`#ffffff\`
- Text: \`#1f2937\`

### Dark Theme

- Primary: \`#22c55e\`
- Background: \`#111827\`
- Surface: \`#1f2937\`
- Text: \`#f9fafb\`

## 📂 Project Structure

\`\`\`
src/
├── components/ # Reusable UI components
│ ├── Navigation.tsx
│ └── Footer.tsx
├── contexts/ # React contexts
│ └── ThemeContext.tsx
├── pages/ # Page components
│ ├── Home.tsx
│ └── Privacy.tsx
├── utils/ # Utility functions
├── i18n.ts # Internationalization setup
├── index.css # Global styles
├── App.tsx # Main app component
└── main.tsx # Entry point

public/
└── locales/ # Translation files
├── en/
├── es/
├── de/
├── it/
└── tr/
\`\`\`

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when you push to the main branch.

### Manual Deployment

\`\`\`bash
npm run build
npm run deploy
\`\`\`

## 🔧 Configuration

### Environment Variables

Create a \`.env\` file in the root directory for any environment-specific configurations.

### Custom Domain

To use a custom domain with GitHub Pages:

1. Add a \`CNAME\` file to the \`public\` directory
2. Update the \`homepage\` field in \`package.json\`
3. Configure your DNS settings

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Arda Şentürk**

- Website: [ardasenturk.de](https://ardasenturk.de)
- Email: ardasnturk@me.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show your support

Give a ⭐️ if this project helped you!
