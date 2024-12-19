import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Monitor,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import NumberTicker from "@/components/ui/number-ticker";

const programs = [
  {
    title: "Scholarships",
    description:
      "Supporting deserving students with financial aid to pursue their educational dreams.",
    icon: GraduationCap,
  },
  {
    title: "Community Tutoring",
    description:
      "Free tutoring programs to help students excel in their academic pursuits.",
    icon: Users,
  },
  {
    title: "Digital Literacy",
    description:
      "Empowering students with essential digital skills for the modern world.",
    icon: Monitor,
  },
  {
    title: "Skill Development",
    description:
      "Practical training programs to enhance employability and career prospects.",
    icon: BookOpen,
  },
];

const stats = [
  { id: 1, name: "Students Benefited", value: 500 },
  { id: 2, name: "Scholarships Awarded", value: 100 },
  { id: 3, name: "Programs Launched", value: 15 },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-pattern relative py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-poppins text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering Communities Through{" "}
              <span className="text-primary">Education</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join hands with Ganga Shanmuga Social and Educational Trust to
              create a brighter future for underprivileged children.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="transition-transform transform hover:scale-105"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary text-white hover:bg-secondary/90 transition-transform transform hover:scale-105"
                asChild
              >
                <Link href="/contact">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Initiatives
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Comprehensive programs designed to uplift communities and improve
              access to education.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="flex flex-col transition-transform transform hover:scale-105"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <program.icon
                      className="h-5 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {program.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{program.description}</p>
                    <p className="mt-6">
                      <Link
                        href="/programs"
                        className="text-sm font-semibold leading-6 text-primary"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-pattern py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="font-poppins text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Impact
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/90">
                Transforming lives and communities through education.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col bg-white/5 p-8 transition-transform transform hover:scale-105"
                >
                  <dt className="text-sm font-semibold leading-6 text-white/90">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    <NumberTicker value={stat.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest News & Events
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Stay updated with our recent activities and upcoming events
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Placeholder for dynamic news/events content */}
            <article className="flex flex-col items-start">
              <div className="relative w-full image-wrapper shine">
                <Image
                  src="https://www.thepresidiumschool.com/news_image/5001%20(14).jpg"
                  alt="Students studying"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  width={800}
                  height={400}
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024-03-16" className="text-gray-500">
                    Mar 16, 2024
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    Upcoming Event
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    Annual Scholarship Distribution Ceremony
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    Join us for our annual scholarship distribution ceremony where
                    we celebrate the achievements of our students.
                  </p>
                </div>
              </div>
            </article>
            <article className="flex flex-col items-start">
              <div className="relative w-full image-wrapper shine">
                <Image
                  src="https://thenest.school/wp-content/uploads/2023/11/IMG-20231110-WA0055-e1699702424521.jpg"
                  alt="Students at a workshop"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  width={800}
                  height={400}
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024-02-28" className="text-gray-500">
                    Feb 28, 2024
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    Past Event
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    Digital Literacy Workshop
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    Our digital literacy workshop helped students learn essential
                    computer skills for the modern world.
                  </p>
                </div>
              </div>
            </article>
            <article className="flex flex-col items-start">
              <div className="relative w-full image-wrapper shine">
                <Image
                  src="https://www.artindiafoundation.org/images/ka-165.webp"
                  alt="Students at a workshop"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  width={800}
                  height={400}
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024-02-15" className="text-gray-500">
                    Feb 15, 2024
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    Past Event
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    Community Tutoring Program
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    Our community tutoring program helped students excel in their
                    academic pursuits.
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-primary/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Make a Difference Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Your support can help transform the lives of underprivileged students.
              Join us in our mission to make quality education accessible to all.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/90"
                asChild
              >
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