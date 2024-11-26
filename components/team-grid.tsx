import Image from "next/image";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & Chairman",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Educational visionary with 20+ years of experience in academia.",
    linkedin: "#",
  },
  {
    name: "Priya Sharma",
    role: "Program Director",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Passionate about creating impactful educational programs.",
    linkedin: "#",
  },
  {
    name: "Arun Prakash",
    role: "Community Outreach",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Building bridges between communities and educational opportunities.",
    linkedin: "#",
  },
];

export function TeamGrid() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dedicated professionals working towards educational excellence.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((person) => (
            <li key={person.name}>
              <div className="group relative">
                <div className="relative h-48 w-48 mx-auto overflow-hidden rounded-full bg-gray-100">
                  <Image
                    className="object-cover"
                    src={person.imageUrl}
                    alt={person.name}
                    fill
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-poppins text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-primary">
                    {person.role}
                  </p>
                  <p className="mt-3 text-base leading-6 text-gray-600">
                    {person.bio}
                  </p>
                </div>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={person.linkedin}
                      className="text-gray-400 hover:text-primary"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}