'use client';

import { useState } from "react";

const carouselItems = [
  {
    title: "Achieve project goals together",
    description: "Plan projects, take notes, and brainstorm. Let AI write your first draft.",
    bgColor: "bg-blue-100"
  },
  {
    title: "Stay organized with AI",
    description: "Keep your projects on track with intelligent organization tools.",
    bgColor: "bg-green-100"
  },
  {
    title: "Collaborate seamlessly",
    description: "Work together with your team in real-time.",
    bgColor: "bg-purple-100"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative mb-8">
      <div className="overflow-hidden rounded-lg">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 absolute w-full ${
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div 
              className={`${item.bgColor} w-full h-[300px] rounded-lg mb-4 flex items-center justify-center`}
            >
              <span className="text-lg text-gray-600">Preview Image</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
} 