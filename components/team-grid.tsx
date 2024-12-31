import Image from "next/image";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Dr. R. Vijayakumar",
    role: "Founder & Chairman",
    imageUrl:
      "/Vijayaraja.png",
    bio: "Visionary leader with a mission to transform communities through education and empowerment.",
    linkedin: "#",
  },
  {
    name: "Anitha Rajendran",
    role: "Director of Education",
    imageUrl:
      "https://t3.ftcdn.net/jpg/06/60/16/72/360_F_660167287_gzYr2ejTMDX1dCyj96YNFb7FiwJZPrvK.jpg",
    bio: "Dedicated to designing impactful educational programs for underprivileged children.",
    linkedin: "#",
  },
  {
    name: "Ravi Shankar",
    role: "Head of Community Outreach",
    imageUrl:
      "https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s=",
    bio: "Fostering strong connections between communities and the Trust's initiatives.",
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
            The passionate individuals driving the mission of Ganga Shanmuga Social and Educational Trust.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((person) => (
            <li key={person.name}>
              <div className="group relative">
                <div className="relative h-48 w-48 mx-auto overflow-hidden rounded-full bg-gray-100 group-hover:scale-105 transition-transform duration-300">
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
