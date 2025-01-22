import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
];

export function ContactInfo() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
      <div className="space-y-2">
        <h2 className="font-poppins text-2xl font-bold tracking-tight text-gray-900">
          Contact Information
        </h2>
        <p className="text-base text-gray-600">
          Get in touch with us through any of the following channels.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Visit Us</p>
            <p className="mt-1 text-gray-600">
              A/15, Housing Board
              <br />
              Sattur, Virudhunagar District
              <br />
              Tamil Nadu 626203, India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Call Us</p>
            <p className="mt-1 text-gray-600">+91 9443454172</p>
            <p className="mt-1 text-gray-600">+91 8667664902</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Email Us</p>
            <p className="mt-1 text-gray-600">info.gangashanmugatrust@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <p className="font-semibold text-gray-900">Follow Us</p>
        <div className="flex space-x-4">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
