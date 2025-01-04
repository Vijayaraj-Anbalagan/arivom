import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";
import { TeamGrid } from "@/components/team-grid";
import { ValueCard } from "@/components/value-card";
import { ArrowRight, Book, Heart, Shield, Star, Users } from "lucide-react";
import { DonationDialog } from "@/components/DonationDialog";

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
      {/* Hero Section with Trust Logo */}
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
          <div className="flex items-center justify-between mb-12">
            <Image
              src="/logo.png"
              alt="Trust Logo"
              width={120}
              height={120}
              className="rounded-full bg-white p-2"
            />
            <h2 className="text-2xl font-medium text-white italic">
              "Life is to serve Humanity"
            </h2>
          </div>
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Who We Are
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-gray-300">
            Established in 2015, Ganga Shanmuga Social and Educational Trust (Reg No : 17/4 2015) is
            committed to transforming lives through education in Tamil Nadu. We believe
            every child deserves access to quality education, regardless of their
            economic background.
          </p>
        </div>
      </section>

      {/* Founders Tribute Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              In Memory of Our Founders
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              We honor the vision and legacy of our beloved founders, whose dedication
              to serving humanity continues to inspire our mission.
            </p>
          </div>
            <div className="text-center max-w-2xl mx-auto">
            <div className="relative w-full h-60 mx-auto mb-6 sm:h-64">
              <Image
              src="/founder.png"
              alt="Founder"
              fill
              className="border-4 border-primary/20 object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
             திரு.கெங்கையா திருமதி. கெ.சண்முகத்தாய்
            </h3>
            <p className="text-lg text-gray-600">1945 - 2014</p>
            <p className="mt-4 text-lg text-gray-600">
              We honor the vision and legacy of our beloved founder, whose dedication
              to serving humanity continues to inspire our mission.
            </p>
            </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-primary font-semibold mb-4">Our Purpose</p>
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission & Vision
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We envision a society where education is a fundamental right,
              fostering a brighter and equitable future for all. Following our motto
              "Life is to serve Humanity", our mission is to provide accessible,
              quality education that empowers communities to achieve
              their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-primary font-semibold mb-4">What Drives Us</p>
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core values guide our actions and decisions in serving our
              community, embodying our belief that life is to serve humanity.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="transition-transform transform hover:scale-105"
                >
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

      {/* CTA Section */}
      <section className="bg-primary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join Us in Our Journey
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Together, we can create a brighter future through education and fulfill
              our mission that life is to serve humanity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <DonationDialog />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}