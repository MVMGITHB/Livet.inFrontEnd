import { FaFacebookF, FaTwitter, FaYoutube, FaSpotify } from "react-icons/fa";
import Link from "next/link";

const footerLinks = {
  site: [
    { name: "About Us", url: "/aboutus" },
    { name: "Terms of Services", url: "/termsofuse" },
    { name: "Privacy Policy", url: "/privacypolicy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-blue-500 transition-colors"
          >
            Livet.in
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
            {footerLinks.site.map((link, i) => (
              <Link
                key={i}
                href={link.url}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/mint.live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-gray-400 hover:text-white text-xl transition-colors" />
            </a>
            <a
              href="https://twitter.com/livemint"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-400 hover:text-white text-xl transition-colors" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCUI9vm69ZbAqRK3q3vKLWCQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-gray-400 hover:text-white text-xl transition-colors" />
            </a>
            <a
              href="https://spotify.link/ugizqq4SZDb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify className="text-gray-400 hover:text-white text-xl transition-colors" />
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
          © 2025 HT Digital Streams Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
