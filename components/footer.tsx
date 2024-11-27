import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import SparklesText from "./ui/sparkles-text";

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
];

const navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-primary"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
            {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-primary transform hover:-translate-y-1 transition-transform"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
            ))}
        </div>

        <div className="mt-16 text-center">
        <p className="text-gray-400 text-sm">Made with ❤ by</p>
        <SparklesText text="SocialSync" className="text-4xl mt-2" />
      </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Arivom Educational Trust. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}