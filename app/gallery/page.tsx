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
  { id: "workshops", label: "Workshops" },
  { id: "events", label: "Events" },
  { id: "stories", label: "Student Stories" },
];

const galleryItems = [
  {
    id: 1,
    category: "workshops",
    title: "Digital Literacy Workshop",
    description: "Students learning computer basics - 2023",
    image: "https://theunitedindian.com/images/DE.jpg",
  },
  {
    id: 2,
    category: "events",
    title: "Annual Day Celebration",
    description: "Celebrating student achievements - 2024",
    image: "https://www.thepresidiumschool.com/news_image/5001%20(14).jpg",
  },
  {
    id: 3,
    category: "stories",
    title: "Success Story: Priya",
    description: "From scholarship recipient to software engineer",
    image: "https://media.istockphoto.com/id/1029797636/photo/school-girl-stock-image.jpg?s=612x612&w=0&k=20&c=vTO9wMeghrSTzTrKNvv_vBmjF7yJMMPA-coFg3bab2w=",
  },
  {
    id: 4,
    category: "workshops",
    title: "Career Guidance Session",
    description: "Industry experts mentoring students - 2023",
    image: "https://thenest.school/wp-content/uploads/2023/11/IMG-20231110-WA0055-e1699702424521.jpg",
  },
  {
    id: 5,
    category: "events",
    title: "Community Outreach",
    description: "Meeting with parents and community leaders",
    image: "https://www.artindiafoundation.org/images/ka-165.webp",
  },
  {
    id: 6,
    category: "stories",
    title: "Success Story: Karthik",
    description: "First-generation college graduate",
    image: "https://img.freepik.com/free-photo/handsome-young-indian-student-man-holding-notebooks-while-standing-street_231208-2773.jpg?t=st=1732690743~exp=1732694343~hmac=0235290ee8344ec6208681bbff28eeb64de44be26f4b5d944b91c6113622d828&w=996",
  },
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
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gG_xbF8SIVU?si=jBwLSdxMm8T6vzC0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              
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