import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – Handicap Hub",
  description:
    "Privacy Policy for the Handicap Hub mobile application and website.",
};

const sections = [
  {
    heading: "Information We Collect",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-gray-800 mb-1">Information you provide:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Name and display name</li>
            <li>Email address</li>
            <li>Golf club membership and home club</li>
            <li>Golf rounds, scores, and handicap data</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-800 mb-1">Information collected automatically:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Device type and operating system</li>
            <li>App usage activity (screens visited, features used)</li>
            <li>Push notification tokens</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-800 mb-1">Information from third parties:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Account information from Google or Apple if you sign in using those services</li>
            <li>Subscription and purchase history via Apple App Store or Google Play</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    heading: "How We Use Your Information",
    content: (
      <div className="space-y-3 text-gray-600">
        <p>We use your information to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Create and manage your account</li>
          <li>Calculate and track your golf handicap</li>
          <li>Enable group chats and social features within the app</li>
          <li>Process subscription payments</li>
          <li>Send push notifications about rounds, competitions, and messages</li>
          <li>Improve the Service</li>
        </ul>
        <p className="font-medium text-gray-800">
          We do not sell your personal information to third parties. We do not use your data for advertising.
        </p>
      </div>
    ),
  },
  {
    heading: "Third-Party Services",
    content: (
      <div className="space-y-3 text-gray-600">
        <p>We use the following third-party services which may process your data:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="font-medium text-gray-800">Clerk</span> — authentication and account management</li>
          <li><span className="font-medium text-gray-800">Convex</span> — secure cloud database storage</li>
          <li><span className="font-medium text-gray-800">RevenueCat</span> — subscription management (iOS and Android)</li>
          <li><span className="font-medium text-gray-800">Stripe</span> — payment processing (web)</li>
          <li><span className="font-medium text-gray-800">Apple / Google</span> — in-app purchases and sign-in</li>
        </ul>
        <p>Each of these services has their own privacy policy governing their use of your data.</p>
      </div>
    ),
  },
  {
    heading: "Data Storage and Security",
    content: (
      <div className="space-y-3 text-gray-600">
        <p>
          Your data is stored securely in the cloud. We use industry-standard security measures to
          protect your information. However, no method of transmission over the internet is 100%
          secure.
        </p>
        <p>
          Your data is processed and stored on servers which may be located outside of South Africa.
          By using the Service, you consent to this transfer.
        </p>
      </div>
    ),
  },
  {
    heading: "Data Retention",
    content: (
      <p className="text-gray-600">
        We retain your data for as long as your account is active. You may request deletion of your
        account and associated data at any time by contacting us.
      </p>
    ),
  },
  {
    heading: "Your Rights",
    content: (
      <div className="space-y-3 text-gray-600">
        <p>You have the right to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>To exercise any of these rights, contact us at the email below.</p>
      </div>
    ),
  },
  {
    heading: "Children's Privacy",
    content: (
      <p className="text-gray-600">
        Handicap Hub is not directed at children under the age of 13. We do not knowingly collect
        personal information from children under 13.
      </p>
    ),
  },
  {
    heading: "Changes to This Policy",
    content: (
      <p className="text-gray-600">
        We may update this Privacy Policy from time to time. We will notify you of significant
        changes by posting the new policy in the app or via email. Your continued use of the Service
        after changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    content: (
      <div className="text-gray-600 space-y-1">
        <p>For any privacy-related questions or requests:</p>
        <p className="font-medium text-gray-800">The Handicap Hub Team</p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@handicaphub.co.za"
            className="text-green-700 hover:underline"
          >
            support@handicaphub.co.za
          </a>
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <span className="text-xl">⛳</span>
            <span className="font-bold text-green-800">Handicap Hub</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: May 2026</p>

        <p className="text-gray-600 mb-10">
          This Privacy Policy explains how The Handicap Hub Team (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          or &ldquo;our&rdquo;) collects, uses, and protects your information when you use the
          Handicap Hub mobile application and website (collectively, the &ldquo;Service&rdquo;).
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                {section.heading}
              </h2>
              {section.content}
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-100 py-6 px-4 mt-10">
        <div className="max-w-3xl mx-auto text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Handicap Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
