"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

interface CarouselItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface CarouselProps {
  images: CarouselItem[];
  autoplayDelay?: number;
  showPagination?: boolean;
  onSwiperInit?: (swiper: SwiperType) => void;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2500,
  showPagination = true,
  onSwiperInit,
}) => {
  return (
    <section className="w-full relative px-0">
      <Swiper
        onSwiper={onSwiperInit}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={showPagination}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="!w-[85vw] sm:!w-[65vw] md:!w-[55vw] lg:!w-[45vw] xl:!w-[40vw] flex justify-center items-center"
          >
            <div className="aspect-[4/3] w-full relative group overflow-hidden rounded-xl shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-sm sm:text-base">{image.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
