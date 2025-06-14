import { useTranslation } from "react-i18next";
import {
  Download,
  BarChart3,
  Target,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";
import screenshot1 from "../assets/store/1.png";
import screenshot2 from "../assets/store/2.png";
import screenshot3 from "../assets/store/3.png";

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: BarChart3,
      title: t("features.trackProgress.title"),
      description: t("features.trackProgress.description"),
    },
    {
      icon: Target,
      title: t("features.setGoals.title"),
      description: t("features.setGoals.description"),
    },
    {
      icon: Zap,
      title: t("features.insights.title"),
      description: t("features.insights.description"),
    },
    {
      icon: Shield,
      title: t("features.privacy.title"),
      description: t("features.privacy.description"),
    },
  ];

  const downloadLinks = {
    ios: "https://apps.apple.com/app/weightly",
    android: "https://play.google.com/store/apps/details?id=com.weightly",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
                {t("hero.cta")}
              </button>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-0 sm:mr-4">
                {t("hero.availableOn")}:
              </p>
              <div className="flex gap-4">
                <a
                  href={downloadLinks.ios}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>iOS</span>
                </a>
                <a
                  href={downloadLinks.android}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Android</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("features.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("screenshots.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("screenshots.subtitle")}
            </p>
          </div>

          {/* App Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { src: screenshot1, alt: "Weightly Dashboard" },
              { src: screenshot2, alt: "Weight Progress Chart" },
              { src: screenshot3, alt: "Goal Setting Interface" },
            ].map((screenshot, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-auto object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-500 dark:bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90">{t("cta.subtitle")}</p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            {t("cta.downloadButton")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
