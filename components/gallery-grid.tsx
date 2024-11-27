"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100"
            onClick={() => setSelectedItem(item)}
          >
            <div className="aspect-[4/3] w-full  image-wrapper shine">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white">
                  <h3 className="font-poppins text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogDescription>{selectedItem.description}</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
          src={selectedItem.image}
          alt={selectedItem.title}
          fill
          className="object-cover"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}