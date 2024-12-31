"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryGrid } from "@/components/gallery-grid";
import { ArrowRight, Play } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "book-distribution", label: "Book Distribution" },
  { id: "food-distribution", label: "Food Distribution" },
  { id: "marriage-support", label: "Marriage Support" },
  { id: "community-support", label: "Community Support" },
  { id: "events", label: "School Events" },
  { id: "community-events", label: "Community Events" },
  { id: "other", label: "Other" },
];

const galleryItems = [
  //School Events
  {
    id: 1,
    category: "events",
    title: "School Event",
    description: "Students participating in a school event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-41.jpg",
  },
  {
    id: 2,
    category: "events",
    title: "Interactive Learning Workshop",
    description: "Students engaged in a learning workshop.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-42.jpg",
  },
  {
    id: 4,
    category: "events",
    title: "School Event",
    description: "Students participating in a school event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-44.jpg",
  },
  {
    id: 5,
    category: "events",
    title: "Interactive Learning Workshop",
    description: "Students engaged in a learning workshop.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-44.jpg",
  },
  {
    id: 6,
    category: "events",
    title: "School Event",
    description: "Students participating in a school event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-40.jpg",
  },
  {
    id: 7,
    category: "events",
    title: "Interactive Learning Workshop",
    description: "Students engaged in a learning workshop.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-22.jpg",
  },
  {
    id: 8,
    category: "events",
    title: "School Event",
    description: "Students participating in a school event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-20.jpg",
  },
  {
    id: 9,
    category: "events",
    title: "Interactive Learning Workshop",
    description: "Students engaged in a learning workshop.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-17.jpg",
  },
  {
    id: 10,
    category: "events",
    title: "Interactive Learning Workshop",
    description: "Students engaged in a learning workshop.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-24.jpg",
  },
  {
    id: 11,
    category: "events",
    title: "School Event",
    description: "Students participating in a school event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-25.jpg",
  },
  {
    id: 12,
    category: "events",
    title: "Interactive Learning Workshop",
    description: "Students engaged in a learning workshop.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-26.jpg",
  },
  {
    id: 13,
    category: "events",
    title: "School Event",
    description: "Students participating in a school event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-27.jpg",
  },
  {
    id: 14,
    category: "events",
    title: "Interactive Learning Workshop",
    description: "Students engaged in a learning workshop.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-28.jpg",
  },
  {
    id: 15,
    category: "events",
    title: "School Event",
    description: "Students participating in a school event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-29.jpg",
  },
  {
    id: 16,
    category: "events",
    title: "Interactive Learning Workshop",
    description: "Students engaged in a learning workshop.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-30.jpg",
  },
  // Community Events
  {
    id: 17,
    category: "community-events",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-39.jpg",
  },
  {
    id: 18,
    category: "community-events",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-40.jpg",
  },
  {
    id: 19,
    category: "community-events",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-41.jpg",
  },
  {
    id: 20,
    category: "community-events",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-35.jpg",
  },
  {
    id: 21,
    category: "community-events",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-36.jpg",
  },
  {
    id: 22,
    category: "community-events",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-33.jpg",
    
  },
  {
    id: 23,
    category: "community-events",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-30.jpg",
  },
  {
    id: 24,
    category: "community-events",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-26.jpg",
  },
  {
    id: 25,
    category: "community-events",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-27.jpg",
  },
  {
    id: 26,
    category: "community-events",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-25.jpg",
  },
  // Book Distribution
  {
    id: 27,
    category: "book-distribution",
    title: "School Book Distribution",
    description: "Empowering students with books for education.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-45.jpg",
  },
  {
    id: 28,
    category: "book-distribution",
    title: "Thirukkural Book Distribution",
    description: "Sharing knowledge of Tamil literature with students.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-43.jpg",
  },
  {
    id: 29,
    category: "book-distribution",
    title: "School Book Distribution",
    description: "Empowering students with books for education.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-37.jpg",
  },
  {
    id: 30,
    category: "book-distribution",
    title: "Thirukkural Book Distribution",
    description: "Sharing knowledge of Tamil literature with students.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-38.jpg",
  },
  {
    id: 31,
    category: "book-distribution",
    title: "School Book Distribution",
    description: "Empowering students with books for education.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-32.jpg",
  },
  {
    id: 32,
    category: "book-distribution",
    title: "School Book Distribution",
    description: "Empowering students with books for education.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-18.jpg",
  },
  {
    id: 33,
    category: "book-distribution",
    title: "Thirukkural Book Distribution",
    description: "Sharing knowledge of Tamil literature with students.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-19.jpg",
  },
  {
    id: 34,
    category: "book-distribution",
    title: "School Book Distribution",
    description: "Empowering students with books for education.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669496/use_filename-23.jpg",
  },


  // Food Distribution
  {
    id: 35,
    category: "food-distribution",
    title: "Food for Needy Families",
    description: "Meals distributed to families in need.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669495/use_filename.jpg",
  },
  {
    id: 36,
    category: "food-distribution",
    title: "Support for Old Age Homes",
    description: "Food and essentials provided to elderly residents.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669495/use_filename-2.jpg",
  },
  {
    id: 37,
    category: "food-distribution",
    title: "Support for Old Age Homes",
    description: "Food and essentials provided to elderly residents.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669495/use_filename-3.jpg",
  },
  {
    id: 38,
    category: "food-distribution",
    title: "Support for Old Age Homes",
    description: "Food and essentials provided to elderly residents.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669495/use_filename-4.jpg",
  },
  {
    id: 39,
    category: "food-distribution",
    title: "Support for Old Age Homes",
    description: "Food and essentials provided to elderly residents.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669495/use_filename-5.jpg",
  },
  {
    id: 40,
    category: "food-distribution",
    title: "Support for Old Age Homes",
    description: "Food and essentials provided to elderly residents.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669495/use_filename-7.jpg",
  },
  {
    id: 41,
    category: "food-distribution",
    title: "Support for Old Age Homes",
    description: "Food and essentials provided to elderly residents.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669495/use_filename-8.jpg",
  },
  {
    id: 42,
    category: "food-distribution",
    title: "Support for Old Age Homes",
    description: "Food and essentials provided to elderly residents.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669495/use_filename-9.jpg",
  },

  // Marriage Support
  {
    id: 43,
    category: "marriage-support",
    title: "Marriage Support",
    description: "Supporting marriage ceremonies for those in need.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669495/use_filename-28.jpg",
  },
  {
    id: 44,
    category: "marriage-support",
    title: "Marriage Ceremony Assistance",
    description: "Organizing marriage ceremonies for the less privileged.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669488/use_filename-16.jpg",
  },

  // Community Support
  {
    id: 45,
    category: "community-support",
    title: "Shelter Support for Needy Families",
    description: "Providing protective materials for huts in rainy seasons.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669487/use_filename-12.jpg",
  },
  {
    id: 46,
    category: "community-support",
    title: "Community Tutoring Program",
    description: "Helping students excel in their academic pursuits.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669487/use_filename-11.jpg",
  },
  // Other
  {
    id: 47,
    category: "other",
    title: "Community Event",
    description: "Community members participating in an event.",
    image: "https://res.cloudinary.com/drbgsqthk/image/upload/v1735669487/use_filename-14.jpg",
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Gallery banner"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our Journey in Pictures
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-gray-300">
  Experience the impact of Ganga Shanmuga Social and Educational Trust through visual
  stories—from educational workshops to community events and inspiring
  success stories.
</p>

        </div>
      </section>

      {/* Featured Video */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Watch Our Impact
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how we're transforming lives through education
            </p>
          </div>
            <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-xl bg-gray-900 shadow-xl">
            <div className="relative aspect-video">
              <video
              width="100%"
              height="100%"
              controls
              >
              <source src="/trust-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              </video>
            </div>
            </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Gallery
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Browse through our collection of memories and milestones
            </p>
          </div>
          <div className="mt-16">
            <Tabs
              defaultValue="all"
              className="w-full"
              onValueChange={setActiveCategory}
            >
              <TabsList className="grid w-full grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="font-poppins"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value={activeCategory} className="mt-8">
                <GalleryGrid items={filteredItems} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Be Part of Our Story
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Your support can create more impactful moments. Join us in shaping
              the future of education.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Button size="lg" asChild>
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