"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";


import image1 from "../../public/image1.jpg"
import image2 from "../../public/image2.jpg"
import image3 from "../../public/image3.jpg"


export default function ProductSlider() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="bg-[#FBF6E6] py-20">

        <Swiper
          className="mySwiper"
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1,
            scale: 1, // we control scaling via CSS
          }}
        >

          <SwiperSlide>
            <Image src={image1} alt="" width={500} height={500} />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={image2} alt="" width={500} height={500} />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={image3} alt="" width={500} height={500} />
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  );
}

// export default function ResearchSlider() {
//   return (
//    <section className="overflow-hidden bg-white">
//         <div className="py-20 bg-[#FBF6E6]">
//              <Swiper
//       effect="coverflow"
//       grabCursor={true}
//       centeredSlides={true}
//       slidesPerView={3}
//       loop={true}
//       modules={[EffectCoverflow]}
//       coverflowEffect={{
//         rotate: 0,
//         stretch: 0,
//         depth: 200,
//         modifier: 1,
//         scale: 0.8,
//       }}
//     >
//       <SwiperSlide>
//         <Image alt="" src={image1} width={600} height={600}/>
//       </SwiperSlide>

//       <SwiperSlide>
//         <Image alt="" src={image2} width={600} height={600}/>
//       </SwiperSlide>

//       <SwiperSlide>
//         <Image alt="" src={image3} width={600} height={600}/>
//       </SwiperSlide>
//     </Swiper>
//         </div>
//    </section>
//   );
// }