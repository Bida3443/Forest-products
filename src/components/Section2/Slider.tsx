// import React from 'react'
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";


const projects = [
  {
    title: "Office Designs",
    image: "/officedesign.jpg",
  },
  {
    title: "Cafe Designs",
    image: "/cafe.jpg",
  },
  {
    title: "Lecture Hall Designs",
    image: "/lecturehall.jpg",
  },
  {
    title: "Living Room Designs",
    image: "/sittingroom.jpg",
  },
  {
    title: "Living Room Designs",
    image: "/hall.jpg",
  },
];

export default function Slider () {
  return (
   
    <section className="py-20 bg-[#f3f3f3]">
        <h2 className="text-center text-3xl font-bold mb-10 text-black">
          Featured Projects
        </h2>
      <div className="max-w-6xl mx-auto px-4">
        
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          navigation
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={30}

          breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}

          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
            scale: 0.85,
          }}
          className="mySwiper"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-55 md:h-70 object-cover rounded-md"
                />
                <h3 className="mt-3 font-semibold text-black">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
  

