// Site Configuration
export const siteConfig = {
  // App Info
  app: {
    name: "Weightly",
    tagline: "Track Your Weight Journey",
    description:
      "The smart way to monitor your weight loss progress with beautiful charts, personalized goals, and motivational insights.",
    version: "1.0.0",
    author: "Arda Şentürk",
  },

  // URLs and Links
  urls: {
    website: "https://weightly.ardasenturk.de",
    appStore: "https://apps.apple.com/app/weightly", // Replace with actual URL
    playStore: "https://play.google.com/store/apps/details?id=com.weightly", // Replace with actual URL
    author: "https://ardasenturk.de",
  },

  // Contact Information
  contact: {
    email: "ardasnturk@me.com",
    privacy: "ardasnturk@me.com",
    support: "ardasnturk@me.com",
  },

  // Social Media
  social: {
    twitter: "https://twitter.com/weightly",
    instagram: "https://instagram.com/weightly",
    facebook: "https://facebook.com/weightly",
    linkedin: "https://linkedin.com/company/weightly",
  },

  // Features List
  features: [
    {
      id: "track-progress",
      icon: "BarChart3",
      category: "Analytics",
      priority: 1,
      enabled: true,
    },
    {
      id: "set-goals",
      icon: "Target",
      category: "Goals",
      priority: 2,
      enabled: true,
    },
    {
      id: "smart-insights",
      icon: "Zap",
      category: "Intelligence",
      priority: 3,
      enabled: true,
    },
    {
      id: "privacy-first",
      icon: "Shield",
      category: "Privacy",
      priority: 4,
      enabled: true,
    },
    {
      id: "data-export",
      icon: "Download",
      category: "Data",
      priority: 5,
      enabled: true,
    },
    {
      id: "offline-mode",
      icon: "Wifi",
      category: "Accessibility",
      priority: 6,
      enabled: true,
    },
    {
      id: "multiple-users",
      icon: "Users",
      category: "Family",
      priority: 7,
      enabled: true,
    },
    {
      id: "health-integration",
      icon: "Heart",
      category: "Integration",
      priority: 8,
      enabled: true,
    },
  ],

  // Theme Colors
  colors: {
    light: {
      primary: "#22c55e",
      primaryLight: "#dcfce7",
      primaryDark: "#15803d",
      background: "#f9fafb",
      surface: "#ffffff",
      card: "#ffffff",
      text: "#1f2937",
      textSecondary: "#374151",
      textMuted: "#6b7280",
      border: "#e5e7eb",
      borderLight: "#f3f4f6",
      success: "#22c55e",
      successLight: "#dcfce7",
      warning: "#f59e0b",
      warningLight: "#fef3c7",
      error: "#ef4444",
      errorLight: "#fecaca",
      info: "#3b82f6",
      infoLight: "#dbeafe",
      accent: "#fbbf24",
      overlay: "rgba(0, 0, 0, 0.5)",
      shadow: "#000000",
    },
    dark: {
      primary: "#22c55e",
      primaryLight: "#16a34a",
      primaryDark: "#15803d",
      background: "#111827",
      surface: "#1f2937",
      card: "#374151",
      text: "#f9fafb",
      textSecondary: "#e5e7eb",
      textMuted: "#9ca3af",
      border: "#4b5563",
      borderLight: "#374151",
      success: "#22c55e",
      successLight: "#16a34a",
      warning: "#f59e0b",
      warningLight: "#d97706",
      error: "#ef4444",
      errorLight: "#dc2626",
      info: "#3b82f6",
      infoLight: "#2563eb",
      accent: "#fbbf24",
      overlay: "rgba(0, 0, 0, 0.7)",
      shadow: "#000000",
    },
  },

  // SEO Settings
  seo: {
    title: "Weightly - Track Your Weight Journey",
    description:
      "The smart way to monitor your weight loss progress with beautiful charts, personalized goals, and motivational insights.",
    keywords: [
      "weight tracking",
      "fitness",
      "health",
      "weight loss",
      "diet",
      "mobile app",
      "health tracking",
      "wellness",
      "fitness app",
      "weight management",
    ],
    ogImage: "/og-image.jpg",
    twitterHandle: "@weightly",
  },

  // Supported Languages
  languages: [
    { code: "en", name: "English", flag: "🇺🇸", enabled: true },
    { code: "es", name: "Español", flag: "🇪🇸", enabled: true },
    { code: "de", name: "Deutsch", flag: "🇩🇪", enabled: true },
    { code: "it", name: "Italiano", flag: "🇮🇹", enabled: true },
    { code: "tr", name: "Türkçe", flag: "🇹🇷", enabled: true },
  ],

  // Navigation Menu
  navigation: [
    { label: "nav.home", path: "/", enabled: true },
    { label: "nav.features", path: "/features", enabled: true },
    { label: "nav.privacy", path: "/privacy", enabled: true },
  ],

  // Footer Links
  footer: {
    sections: [
      {
        title: "Product",
        links: [
          { label: "footer.links.features", href: "/features" },
          { label: "footer.links.privacy", href: "/privacy" },
          { label: "Download", href: "#download" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "mailto:ardasnturk@me.com" },
          { label: "Contact Us", href: "mailto:ardasnturk@me.com" },
          { label: "Bug Report", href: "mailto:ardasnturk@me.com" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/careers" },
        ],
      },
    ],
  },

  // Analytics & Tracking
  analytics: {
    googleAnalytics: "G-XXXXXXXXXX", // Replace with actual GA ID
    hotjar: "XXXXXXX", // Replace with actual Hotjar ID
    enabled: false, // Set to true in production
  },

  // Feature Flags
  features_flags: {
    showBlog: false,
    showTestimonials: true,
    showPricing: false,
    showNewsletter: true,
    showCookieBanner: true,
    enableAnimations: true,
    enableServiceWorker: false,
  },

  // API Configuration
  api: {
    baseUrl: process.env.VITE_API_URL || "https://api.weightly.app",
    timeout: 10000,
    retryAttempts: 3,
  },

  // Development Settings
  development: {
    showDevTools: process.env.NODE_ENV === "development",
    enableMockData: false,
    logLevel: "info",
  },
};

export default siteConfig;
