import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";
import { DonationDialog } from "./DonationDialog";

export function GetInvolved() {
  return (
    <section className="bg-primary/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-x-4">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-poppins text-xl font-semibold text-gray-900">
                Become a Volunteer
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Share your time and skills to support underprivileged children. Join
              our dedicated team to teach, mentor, or assist in organizing
              educational events. Together, we can empower communities.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="#">
                  Join as Volunteer <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-x-4">
              <Heart className="h-8 w-8 text-secondary" />
              <h3 className="font-poppins text-xl font-semibold text-gray-900">
                Support Our Cause
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Help us sustain and grow our educational initiatives. Your
              generosity provides scholarships, resources, and opportunities for
              children to achieve their dreams. Every contribution makes a
              difference.
            </p>
            <div className="mt-8">
            <DonationDialog />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900">
            Together, We Can Transform Lives Through Education
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join Ganga Shanmuga Social and Educational Trust in making education
            accessible for all. Be a part of the change today.
          </p>
        </div>
      </div>
    </section>
  );
}
