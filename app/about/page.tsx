import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";
import { TeamGrid } from "@/components/team-grid";
import { ValueCard } from "@/components/value-card";
import { ArrowRight, Book, Heart, Shield, Star, Users } from "lucide-react";

const values = [
  {
    icon: Book,
    title: "Education",
    description: "Providing quality education accessible to all",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Embracing diversity and equal opportunities",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Maintaining transparency and ethical practices",
  },
  {
    icon: Star,
    title: "Growth",
    description: "Fostering continuous learning and development",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "Building confidence and self-reliance",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Students studying"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Who We Are
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-gray-300">
            Founded in 2020, Arivom Educational Trust is dedicated to transforming
            lives through education in Chennai. We believe that every child
            deserves access to quality education, regardless of their economic
            background.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission & Vision
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We envision a society where education is truly a fundamental right,
              fostering a brighter and more equitable future for all. Our mission
              is to provide accessible, quality education that empowers
              underprivileged communities to achieve their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core values guide our actions and decisions in serving our
              community.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
                {values.map((value) => (
                <div key={value.title} className="transition-transform transform hover:scale-105">
                  <ValueCard {...value} />
                </div>
                ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <Timeline />

      {/* Team Section */}
      <TeamGrid />

      {/* Impact Story */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stories That Inspire
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="relative overflow-hidden rounded-xl bg-primary/5 px-6 py-12 shadow-sm ring-1 ring-primary/10 sm:px-12">
              <figure className="mx-auto max-w-2xl">
                <blockquote className="text-center text-lg font-semibold leading-8 text-gray-900">
                  <p>
                    "Thanks to Arivom's scholarship program, I was able to continue
                    my education and become the first graduate in my family. Today,
                    I'm working as a software engineer and supporting my siblings'
                    education."
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <Image
                    className="mx-auto h-20 w-20 rounded-full"
                    src="https://media.istockphoto.com/id/1029797636/photo/school-girl-stock-image.jpg?s=612x612&w=0&k=20&c=vTO9wMeghrSTzTrKNvv_vBmjF7yJMMPA-coFg3bab2w="
                    alt="Student portrait"
                    width={64}
                    height={64}
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      Priya Lakshmi
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-gray-900"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600">Alumni, 2022</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join Us in Our Journey
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Together, we can create a brighter future through education.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}