import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <dt className="flex items-center gap-x-3">
        <Icon
          className="h-10 w-10 flex-none text-primary"
          aria-hidden="true"
        />
        <span className="font-poppins text-lg font-semibold leading-7 text-gray-900">
          {title}
        </span>
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">{description}</p>
      </dd>
    </div>
  );
}