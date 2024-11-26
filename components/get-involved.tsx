import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";

export function GetInvolved() {
  return (
    <section className="bg-primary/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <div className="flex items-center gap-x-4">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-poppins text-xl font-semibold text-gray-900">
                Become a Volunteer
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Share your time and skills to make a difference. Join our team of
              dedicated volunteers in teaching, mentoring, or organizing events.
              Together, we can create a brighter future for our students.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="#">
                  Join as Volunteer <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <div className="flex items-center gap-x-4">
              <Heart className="h-8 w-8 text-secondary" />
              <h3 className="font-poppins text-xl font-semibold text-gray-900">
                Support Our Cause
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Your contributions help us sustain and expand our educational
              programs. Every donation, big or small, makes a significant impact in
              transforming lives through education.
            </p>
            <div className="mt-8">
              <Button
                className="bg-secondary hover:bg-secondary/90"
                asChild
              >
                <Link href="#">
                  Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900">
            Let's Make Education Accessible for All
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Together, we can transform lives and create brighter futures. Join us
            today.
          </p>
        </div>
      </div>
    </section>
  );
}