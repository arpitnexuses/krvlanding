'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

const carouselItems = [
  {
    image: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/Post_3_a09b7190-aa6b-48ac-8fb1-1753b75a307a.png",
  },
  {
    image: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/KRV_Promo_Post_Feb_21_55d57d9c-817d-4551-9f7f-82e04e8e4ff1.png",
  },
  {
    image: "https://cdn-nexlink.s3.us-east-2.amazonaws.com/KRV_Promo_Post_Sept_25_2024_7669348a-059d-49d9-a016-253e848aa29f.png",
  }
];

export default function AutoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col w-full max-w-[600px] mx-auto px-4 sm:px-0">
      <div className="bg-[#00425A] rounded-[16px] sm:rounded-[32px] shadow-lg overflow-hidden w-full aspect-[4/5] sm:aspect-square">
        {/* Carousel Content */}
        <div className="relative w-full h-full">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 absolute inset-0 ${
                currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image || ''}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain p-2 sm:p-0 sm:object-fill"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex justify-center items-center gap-2 sm:gap-4 mt-3 sm:mt-4">
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))}
          className="text-gray-400 hover:text-gray-600 p-1 sm:p-2 text-lg sm:text-2xl"
          aria-label="Previous slide"
        >
          ←
        </button>
        
        <div className="flex gap-2 sm:gap-3">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#2E90FA]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))}
          className="text-gray-400 hover:text-gray-600 p-1 sm:p-2 text-lg sm:text-2xl"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
  );
} 