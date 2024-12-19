import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/program-card";
import { ArrowRight, GraduationCap, Users, Monitor, BookOpen } from "lucide-react";

const programs = [
  {
    title: "Scholarship Program",
    description: "Providing financial assistance to underprivileged students for school and higher education.",
    impact: "100+ scholarships awarded",
    icon: GraduationCap,
    image: "https://media.istockphoto.com/id/1461631902/photo/group-of-college-students-discussing-about-project-with-team-leader-from-laptop-at-college.jpg?s=612x612&w=0&k=20&c=6KPm5e4SPQ2r0iHWOU0ujPn3bdCy60QfULFNCeSpEbs=",
  },
  {
    title: "Community Tutoring",
    description: "Free evening classes aimed at improving academic performance and confidence among children.",
    impact: "300+ children enrolled",
    icon: Users,
    image: "https://c9.shauryasoft.com/media/bny-wcp-2411131007-0812187636-3.jpg",
  },
  {
    title: "Digital Literacy",
    description: "Workshops on basic computer literacy and digital tools for students and adults.",
    impact: "20+ workshops annually",
    icon: Monitor,
    image: "https://theunitedindian.com/images/DE.jpg",
  },
  {
    title: "Youth Skill Development",
    description: "Vocational training programs to equip young adults with job-oriented skills.",
    impact: "50+ job placements",
    icon: BookOpen,
    image: "https://srdsindia.org/wp-content/uploads/2021/09/teaching.jpeg",
  },
];

export default function ProgramsPage() {
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
                src="https://img.freepik.com/free-photo/handsome-young-indian-student-man-holding-notebooks-while-standing-street_231208-2773.jpg?t=st=1732690743~exp=1732694343~hmac=0235290ee8344ec6208681bbff28eeb64de44be26f4b5d944b91c6113622d828&w=996"
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
                  - Rekha S., Scholarship Recipient
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
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/90"
                asChild
              >
                <Link href="/donate">
                  Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-gray-200"
                asChild
              >
                <Link href="/volunteer">
                  Volunteer With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
