// /app/privacy-policy/page.jsx

import PrivacyPolicy from "@/components/contact/privacy";
// /app/privacy-policy/page.jsx

import { Metadata } from "next";

export const metadata = {
  title: "Privacy Policy | livet.in",
  description:
    "Read the Privacy Policy of livet.in to understand how we collect, use, and protect your personal information. Learn about your rights and data protection measures.",
  keywords: [
    "Privacy Policy",
    "data protection",
    "personal information",
    "livet.in",
    "security",
    "user rights",
  ],
  openGraph: {
    title: "Privacy Policy | livet.in",
    description:
      "livet.in explains how we handle your data, your rights, and the measures we take to protect your information.",
    images: [
      {
        url: "/images/privacy-og.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - livet.in",
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
