import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import your images
import img1 from "/src/pages/Landing/sections/Logo/img1.png";
import img2 from "/src/pages/Landing/sections/Logo/img2.png";
import img3 from "/src/pages/Landing/sections/Logo/img3.png";
import img4 from "/src/pages/Landing/sections/Logo/img4.png";
import img5 from "/src/pages/Landing/sections/Logo/img5.png";
import homeScreen from "../../../../public/screenHome.svg";

export default function Partners() {
  // Create a duplicated array for seamless looping
  const partners = [img1, img2, img3, img4, img5,img3];
  const duplicatedPartners = [...partners, ...partners];
  
  return (
    <div className="relative py-12 bg-white px-4 flex flex-col items-center">
      <img src={homeScreen} alt="home screen" className="mb-6" />
      <h2 className="text-3xl font-bold text-center text-[#052F72] mb-8">
        شركـاء النجـاح
      </h2>
      

      <div className="w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          // pagination={{ clickable: true }}
          // navigation={true}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          // Add these settings for better loop handling
          loopAdditionalSlides={3}
          loopFillGroupWithBlank={false}
        >
          {duplicatedPartners.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className=" p-4 rounded-lg shadow-sm flex justify-center items-center h-32 md:h-40 w-full mx-auto">
                <img
                  src={img}
                  loading="lazy"
                  alt={`Partner ${index % partners.length + 1}`}
                  className="max-h-full max-w-full object-contain transition duration-300 hover:scale-105 "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}