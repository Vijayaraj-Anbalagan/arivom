import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/program-card";
import { ArrowRight, GraduationCap, Users, Monitor, BookOpen } from "lucide-react";
import { DonationDialog } from "@/components/DonationDialog";



export default function ProgramsPage() {
  
  const programs = [
    {
      title: "School Book Distribution",
      description: "Empowering young students with educational resources such as the revered Thirukural to aid in their academic growth.",
      impact: "200+ Thirukural books distributed",
      icon: BookOpen,
      image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669489/use_filename-24.jpg",
    },
    {
      title: "Shelter Support for Needy Families",
      description: "Providing protective sheets and materials to cover huts during rainy and summer seasons.",
      impact: "10+ families supported",
      icon: Users,
      image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669487/use_filename-12.jpg",
    },
    {
      title: "Provision Distribution for Needy Homes",
      description: "Delivering essential provisions to homes and communities in need to ensure basic needs are met.",
      impact: "100+ homes supported",
      icon: Monitor,
      image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669487/use_filename-10.jpg",
    },
    {
      title: "Support for Old Age Homes",
      description: "Providing food and essentials to elderly residents in old age homes to improve their living conditions.",
      impact: "50+ elderly beneficiaries",
      icon: GraduationCap,
      image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669486/use_filename-9.jpg",
    },
    {
      title: "Marriage Ceremonies for Couples",
      description: "Supporting the marriage of couples by offering necessary arrangements and support.",
      impact: "5+ ceremonies organized",
      icon: Users,
      image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669489/use_filename-28.jpg",
    },
    {
      title: "Social and Educational Support",
      description: "Providing educational support and resources to students to help them succeed.",
      impact: "100+ students supported",
      icon: BookOpen,
      image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669489/use_filename-25.jpg",

    }
  ];
  
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Students in a classroom"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Empowering Through Education
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-gray-300">
            At Ganga Shanmuga Social and Educational Trust, we focus on bridging
            the educational gap through transformative programs for students and communities.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Initiatives
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn about the initiatives that are transforming lives and communities.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Initiative: Scholarship Program
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our flagship Scholarship Program is opening doors to education for hundreds of students.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="relative lg:order-2">
              <Image
                src="https://res.cloudinary.com/drbgsqthk/image/upload/v1735669489/use_filename-25.jpg"
                alt="Scholarship recipients"
                width={800}
                height={600}
                className="aspect-[3/2] rounded-2xl object-cover"
              />
            </div>
            <div className="lg:order-1">
              <p className="mb-8 text-base leading-7 text-gray-700">
                The Scholarship Program provides financial support for deserving students, covering tuition fees, books, and essential educational materials.
              </p>
              <blockquote className="relative border-l-4 border-primary pl-4 italic">
                <p>
                  "With the Trust's scholarship, I achieved my dream of becoming an engineer. This program changed my life forever."
                </p>
                <footer className="mt-4 text-sm font-semibold">
                  - Scholarship Recipient
                </footer>
              </blockquote>
              <ul className="mt-12 space-y-4">
                <li className="flex items-center">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="ml-4">Full tuition fee coverage</span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="ml-4">Mentorship and academic support</span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="ml-4">Career placement assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-primary/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Partner with Us to Create Impact
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Support our programs or volunteer your time to help us make education accessible to all.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            <DonationDialog />
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-gray-200"
                asChild
              >
                <Link href="tel:+919443454172">
                  Call Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
