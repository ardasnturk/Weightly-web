import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Twitter, Instagram, Facebook, Heart } from "lucide-react";
import iconImage from "../assets/icon.png";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { label: t("footer.links.product", "Product"), href: "/" },
    { label: t("footer.links.features", "Features"), href: "/features" },
    { label: t("footer.links.privacy", "Privacy"), href: "/privacy" },
    {
      label: t("footer.links.support", "Support"),
      href: "mailto:ardasnturk@me.com",
    },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/weightly",
      label: t("footer.social.twitter", "Twitter"),
    },
    {
      icon: Instagram,
      href: "https://instagram.com/weightly",
      label: t("footer.social.instagram", "Instagram"),
    },
    {
      icon: Facebook,
      href: "https://facebook.com/weightly",
      label: t("footer.social.facebook", "Facebook"),
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={iconImage}
                alt={t("common.appName", "Weightly")}
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {t("common.appName", "Weightly")}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {t(
                "footer.description",
                "Weightly helps you track your weight journey with beautiful visualizations and smart insights."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {t("footer.links.product", "Product")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("mailto:") ? (
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {t("footer.social.title", "Follow Us")}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:ardasnturk@me.com"
                className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm block"
              >
                ardasnturk@me.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {t(
                "footer.legal.copyright",
                "© 2024 Weightly. All rights reserved."
              )}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
              {t(
                "footer.legal.madeWith",
                "Made with ❤️ by Arda Şentürk"
              ).replace("❤️", "")}
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              Arda Şentürk
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
