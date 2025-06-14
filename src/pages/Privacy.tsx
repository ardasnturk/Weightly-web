import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  User,
  Database,
  Lock,
  Eye,
  Clock,
  FileText,
  Phone,
  AlertCircle,
} from "lucide-react";

const Privacy = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: "overview",
      icon: Shield,
      title: t("privacy.overview.title") || "1. Overview",
      content:
        t("privacy.overview.content") || "Privacy policy overview content",
    },
    {
      id: "dataController",
      icon: User,
      title: t("privacy.dataController.title") || "2. Data Controller",
      content:
        t("privacy.dataController.content") || "Data controller information",
      name: t("privacy.dataController.name") || "Arda Şentürk",
      email: t("privacy.dataController.email") || "Email: ardasnturk@me.com",
    },
    {
      id: "dataCollection",
      icon: Database,
      title: t("privacy.dataCollection.title") || "3. Data We Collect",
      content:
        t("privacy.dataCollection.content") ||
        "Information about data collection",
    },
    {
      id: "legalBasis",
      icon: FileText,
      title: t("privacy.legalBasis.title") || "4. Legal Basis for Processing",
      content: t("privacy.legalBasis.content") || "Legal basis information",
    },
    {
      id: "storageAndSecurity",
      icon: Lock,
      title: t("privacy.storageAndSecurity.title") || "5. Storage and Security",
      content:
        t("privacy.storageAndSecurity.content") ||
        "Storage and security information",
    },
    {
      id: "appleHealthIntegration",
      icon: Eye,
      title:
        t("privacy.appleHealthIntegration.title") ||
        "6. Apple Health Integration",
      content:
        t("privacy.appleHealthIntegration.content") ||
        "Apple Health integration information",
    },
    {
      id: "userRights",
      icon: AlertCircle,
      title: t("privacy.userRights.title") || "7. User Rights",
      content: t("privacy.userRights.content") || "User rights information",
    },
    {
      id: "dataRetention",
      icon: Clock,
      title: t("privacy.dataRetention.title") || "8. Data Retention",
      content:
        t("privacy.dataRetention.content") || "Data retention information",
    },
    {
      id: "policyChanges",
      icon: FileText,
      title: t("privacy.policyChanges.title") || "9. Changes to This Policy",
      content:
        t("privacy.policyChanges.content") || "Policy changes information",
    },
    {
      id: "contact",
      icon: Phone,
      title: t("privacy.contact.title") || "10. Contact",
      content: t("privacy.contact.content") || "Contact information",
      name: t("privacy.contact.name") || "Arda Şentürk",
      email: t("privacy.contact.email") || "Email: ardasnturk@me.com",
    },
  ];

  const renderDataCollectionDetails = () => {
    const userAccountItems = (t("privacy.dataCollection.userAccount.items", {
      returnObjects: true,
    }) as string[]) || ["Email address", "Username", "Age (optional)"];

    const weightTrackingItems = (t(
      "privacy.dataCollection.weightTracking.items",
      { returnObjects: true }
    ) as string[]) || ["Current weight", "Weight goal"];

    return (
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            {t("privacy.dataCollection.userAccount.title") ||
              "User Account Information:"}
          </h4>
          <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-1">
            {userAccountItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
            {t("privacy.dataCollection.weightTracking.title") ||
              "Weight Tracking Data:"}
          </h4>
          <ul className="list-disc list-inside text-green-800 dark:text-green-200 space-y-1">
            {weightTrackingItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
            {t("privacy.dataCollection.appleHealth.title") ||
              "Apple Health Data:"}
          </h4>
          <p className="text-purple-800 dark:text-purple-200">
            {t("privacy.dataCollection.appleHealth.content") ||
              "Apple Health data information"}
          </p>
        </div>
      </div>
    );
  };

  const renderLegalBasisDetails = () => (
    <div className="space-y-4">
      <div className="border-l-4 border-green-500 pl-4">
        <p className="text-gray-700 dark:text-gray-300">
          <strong className="text-green-600 dark:text-green-400">
            {t("privacy.legalBasis.consent") || "Consent information"}
          </strong>
        </p>
      </div>
      <div className="border-l-4 border-blue-500 pl-4">
        <p className="text-gray-700 dark:text-gray-300">
          <strong className="text-blue-600 dark:text-blue-400">
            {t("privacy.legalBasis.contractual") ||
              "Contractual necessity information"}
          </strong>
        </p>
      </div>
      <div className="border-l-4 border-purple-500 pl-4">
        <p className="text-gray-700 dark:text-gray-300">
          <strong className="text-purple-600 dark:text-purple-400">
            {t("privacy.legalBasis.legitimate") ||
              "Legitimate interest information"}
          </strong>
        </p>
      </div>
    </div>
  );

  const renderUserRightsDetails = () => {
    const rights = (t("privacy.userRights.rights", {
      returnObjects: true,
    }) as string[]) || [
      "Access your personal data",
      "Correct or update inaccurate data",
      "Request deletion of your data",
      "Withdraw your consent at any time",
      "Request a copy of your data in a portable format",
    ];

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rights.map((right, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 dark:text-green-400 text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {right}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="text-yellow-800 dark:text-yellow-200">
            <strong>
              {t("privacy.userRights.contact") ||
                "Contact information for exercising rights"}
            </strong>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg p-2 -ml-2 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("common.backToHome") || "Back to Home"}
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              {t("privacy.title") || "Privacy Policy"}
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  {t("privacy.lastUpdated") || "Last updated: June 10, 2025"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>
                  {t("privacy.effectiveDate") || "Effective Date: June 7, 2025"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        {section.title}
                      </h2>

                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {section.content}
                        </p>

                        {/* Special content for specific sections */}
                        {section.id === "dataController" && (
                          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <p className="font-semibold text-gray-900 dark:text-white">
                              {section.name}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                              {section.email}
                            </p>
                          </div>
                        )}

                        {section.id === "dataCollection" &&
                          renderDataCollectionDetails()}
                        {section.id === "legalBasis" &&
                          renderLegalBasisDetails()}
                        {section.id === "userRights" &&
                          renderUserRightsDetails()}

                        {section.id === "contact" && (
                          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2 text-green-900 dark:text-green-100">
                              {t("privacy.contact.title") || "Contact"}
                            </h3>
                            <p className="font-semibold text-green-800 dark:text-green-200">
                              {section.name}
                            </p>
                            <p className="text-green-700 dark:text-green-300">
                              {section.email}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Questions About Your Privacy?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              We're committed to transparency and protecting your data. If you
              have any questions or concerns about how we handle your
              information, don't hesitate to reach out.
            </p>
            <a
              href="mailto:ardasnturk@me.com"
              className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
