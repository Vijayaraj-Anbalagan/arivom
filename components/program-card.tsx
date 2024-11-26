import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  title: string;
  description: string;
  impact: string;
  icon: LucideIcon;
  image: string;
}

export function ProgramCard({
  title,
  description,
  impact,
  icon: Icon,
  image,
}: ProgramCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <Icon className="h-5 w-5" />
          <span className="font-semibold">{title}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-base leading-7 text-gray-600">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-x-4">
          <div
            className={cn(
              "rounded-full px-3 py-1 text-sm font-semibold leading-6",
              "bg-primary/10 text-primary"
            )}
          >
            {impact}
          </div>
          <Button variant="link" className="ml-auto">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}