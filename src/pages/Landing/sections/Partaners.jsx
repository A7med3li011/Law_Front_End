import React, { useState } from 'react';
import img1 from '/src/pages/Landing/sections/Logo/img1.png';
import img2 from '/src/pages/Landing/sections/Logo/img2.png';
import img3 from '/src/pages/Landing/sections/Logo/img3.png';
import img4 from '/src/pages/Landing/sections/Logo/img4.png';
import img5 from '/src/pages/Landing/sections/Logo/img5.png';
// Fake partner images (using placeholder images)
const partnerImages = [
img1, img2, img3, img4, img5,
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === partnerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partnerImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative py-12 bg-white  p-15">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#052F72] mb-8 font-['Hind_Vadodara']">
          Our Partners
        </h2>
        <div className="relative overflow-hidden">
          {/* Slider Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {partnerImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lgoxia
                flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`Partner ${index + 1}`}
                  className="h-20 w-40 object-contain"
                />
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
