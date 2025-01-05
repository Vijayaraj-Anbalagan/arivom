"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryGrid } from "@/components/gallery-grid";
import { ArrowRight, Play } from "lucide-react";

// Types
type Category = 
  | "events"
  | "community-events"
  | "book-distribution"
  | "food-distribution"
  | "marriage-support"
  | "community-support"
  | "other";

type BatchInput = {
  category: Category;
  imageNumbers: number[];
  customItems?: {
    [key: number]: {
      title?: string;
      description?: string;
    };
  };
};

// Category definitions
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

// Default content for each category
const categoryDefaults = {
  "events": {
    title: "School Event",
    description: "Students participating in a school event."
  },
  "community-events": {
    title: "Community Event",
    description: "Community members participating in an event."
  },
  "book-distribution": {
    title: "School Book Distribution",
    description: "Empowering students with books for education."
  },
  "food-distribution": {
    title: "Support for Old Age Homes",
    description: "Food and essentials provided to elderly residents."
  },
  "marriage-support": {
    title: "Marriage Support",
    description: "Supporting marriage ceremonies for those in need."
  },
  "community-support": {
    title: "Community Support",
    description: "Supporting local community initiatives."
  },
  "other": {
    title: "Community Event",
    description: "Community members participating in an event."
  }
};

// Simplified batch input data
const batchInput: BatchInput[] = [
  { 
    category: "events",
    imageNumbers: [41, 42, 44, 22, 20, 17, 24],
    customItems: {
      42: {
        title: "Interactive Learning Workshop",
        description: "Students engaged in a learning workshop."
      }
    }
  },
  {
    category: "community-events",
    imageNumbers: [39, 40, 35, 36, 33, 30, 26, 27, 25]
  },
  {
    category: "book-distribution",
    imageNumbers: [45, 43, 37, 38, 32, 18, 19, 23],
    customItems: {
      43: {
        title: "Thirukkural Book Distribution",
        description: "Sharing knowledge of Tamil literature with students."
      },
      19: {
        title: "Thirukkural Book Distribution",
        description: "Sharing knowledge of Tamil literature with students."
      }
    }
  },
  {
    category: "food-distribution",
    imageNumbers: [ 2, 3, 4, 5, 7, 8, 9],
    customItems: {
      1: {
        title: "Food for Needy Families",
        description: "Meals distributed to families in need."
      }
    }
  },
  {
    category: "marriage-support",
    imageNumbers: [28, 16]
  },
  {
    category: "community-support",
    imageNumbers: [12, 11],
    customItems: {
      12: {
        title: "Shelter Support for Needy Families",
        description: "Providing protective materials for huts in rainy seasons."
      },
    }
  },
  {
    category: "other",
    imageNumbers: [14]
  }
];

// Generate gallery items from batch input
const generateGalleryItems = (batches: BatchInput[]) => {
  let currentId = 1;
  
  return batches.flatMap(({ category, imageNumbers, customItems = {} }) =>
    imageNumbers.map(imageNumber => {
      const id = currentId++;
      const customItem = customItems[imageNumber];
      
      return {
        id,
        category,
        title: customItem?.title || categoryDefaults[category].title,
        description: customItem?.description || categoryDefaults[category].description,
        image: `https://res.cloudinary.com/drbgsqthk/image/upload/v1735669497/use_filename-${imageNumber}.jpg`
      };
    })
  );
};

const galleryItems = generateGalleryItems(batchInput);

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
                <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {categories.map((category) => (
                  <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="font-poppins px-4 py-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                  {category.label}
                  </TabsTrigger>
                ))}
                </TabsList>
              <TabsContent value={activeCategory} className="mt-24 sm:mt-8">
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