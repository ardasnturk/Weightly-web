import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  Target,
  Zap,
  Shield,
  Download,
  Wifi,
  Users,
  Heart,
  CheckCircle,
  Star,
} from "lucide-react";

const iconMap = {
  BarChart3,
  Target,
  Zap,
  Shield,
  Download,
  Wifi,
  Users,
  Heart,
};

// Hardcoded features data to replace siteConfig dependency
const featuresData = [
  {
    id: "smart-insights",
    icon: "BarChart3",
    category: "Analytics",
    priority: 1,
    enabled: true,
  },
  {
    id: "privacy-first",
    icon: "Shield",
    category: "Security",
    priority: 1,
    enabled: true,
  },
  {
    id: "data-export",
    icon: "Download",
    category: "Data",
    priority: 2,
    enabled: true,
  },
  {
    id: "offline-mode",
    icon: "Wifi",
    category: "Accessibility",
    priority: 2,
    enabled: true,
  },
  {
    id: "multiple-users",
    icon: "Users",
    category: "Family",
    priority: 3,
    enabled: true,
  },
  {
    id: "health-integration",
    icon: "Heart",
    category: "Health",
    priority: 2,
    enabled: true,
  },
];

const Features = () => {
  const { t } = useTranslation();

  const enabledFeatures = featuresData.filter((feature) => feature.enabled);
  const featuresByCategory = enabledFeatures.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, typeof enabledFeatures>);

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent || BarChart3;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg p-2 -ml-2"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("common.backToHome") || "Back to Home"}
          </Link>

          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              {t("features.title") || "Features"}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("features.subtitle") ||
                "Discover all the powerful features that make weight tracking effortless"}
            </p>
          </div>
        </div>

        {/* Hero Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {enabledFeatures.slice(0, 4).map((feature) => {
            const Icon = getIcon(feature.icon);
            return (
              <div
                key={feature.id}
                className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <Star className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>

                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {t(`features.${feature.id.replace(/-/g, "")}.title`) ||
                    feature.id}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(`features.${feature.id.replace(/-/g, "")}.description`) ||
                    "Feature description"}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                    {feature.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features by Category */}
        <div className="space-y-16">
          {Object.entries(featuresByCategory).map(([category, features]) => (
            <div key={category} className="relative">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  {category}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}
                  Features
                </span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {features.map((feature) => {
                  const Icon = getIcon(feature.icon);
                  return (
                    <div
                      key={feature.id}
                      className="flex gap-4 p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                          {t(
                            `features.${feature.id.replace(/-/g, "")}.title`
                          ) || feature.id}
                          <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {t(
                            `features.${feature.id.replace(
                              /-/g,
                              ""
                            )}.description`
                          ) || "Feature description"}
                        </p>

                        {/* Additional feature details */}
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full">
                            Available Now
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-full">
                            Priority {feature.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Experience All Features?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Download Weightly now and discover how easy weight tracking can be
              with all these powerful features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/app/weightly"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-white inline-flex items-center gap-2 transition-colors"
              >
                <span>📱</span>
                Download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.weightly"
                className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-white inline-flex items-center gap-2 transition-colors"
              >
                <span>🤖</span>
                Download for Android
              </a>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Feature
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              {" "}
              Comparison
            </span>
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Free
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {enabledFeatures.map((feature) => (
                    <tr key={feature.id}>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {t(`features.${feature.id.replace(/-/g, "")}.title`) ||
                          feature.id}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature.priority <= 2 ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
