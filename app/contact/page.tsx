import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { GetInvolved } from "@/components/get-involved";
import { MapEmbed } from "@/components/map-embed";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Contact us banner"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Get in Touch With Us
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-gray-300">
            Whether you're interested in volunteering, supporting our initiatives,
            or learning more about Ganga Shanmuga Social and Educational Trust, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-12 sm:gap-16">
              <ContactInfo />
              <MapEmbed />
            </div>
            <div className="lg:pl-8 lg:border-l lg:border-gray-200">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <GetInvolved />
    </div>
  );
}
