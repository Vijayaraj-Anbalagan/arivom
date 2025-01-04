import { cn } from "@/lib/utils";

const timeline = [
  {
    name: "Established",
    description:
      "Ganga Shanmuga Social and Educational Trust was founded to empower communities through education.",
    date: "2015",
  },
  {
    name: "First Scholarship Program",
    description:
      "Launched our first scholarship program, benefiting 20 deserving students.",
    date: "2016",
  },
  {
    name: "Partnership with Schools",
    description:
      "Collaborated with a School to expand educational initiatives.",
    date: "2017",
  },
  {
    name: "Free Education Initiative",
    description:
      "Began providing free education, food, and uniforms to children in Sattur, Virudhunagar.",
    date: "2018",
  },
  {
    name: "Skill Development Programs",
    description:
      "Introduced skill development programs to improve career prospects for young learners.",
    date: "2020",
  },
];

export function Timeline() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A timeline of key milestones and achievements of Ganga Shanmuga Social and Educational Trust.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="ml-12 mt-6 flow-root border-l border-gray-200 pl-6">
            <ul role="list" className="-mb-8">
              {timeline.map((event, eventIdx) => (
                <li key={event.date}>
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span
                        className="absolute left-[-35px] top-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={cn(
                            "absolute left-[-35px] h-4 w-4 rounded-full ring-4 ring-white",
                            eventIdx === timeline.length - 1
                              ? "bg-secondary"
                              : "bg-primary"
                          )}
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4">
                        <div className="group">
                          <p className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                            {event.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                            {event.description}
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-600">
                          <time dateTime={event.date}>{event.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
