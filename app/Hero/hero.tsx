// import React from 'react'
"use client";

import Image from "next/image";
import Arrow from "../../public/Arrow.png";
import vector from "../../public/Vector 1.png";
import chair from "../../public/chair.png";

// import { motion } from "framer-motion";

export default function hero() {
  return (
    <section className="h-screen bg-[#F9F2DA] w-full ">
      <div className="flex flex-col lg:flex-row lg:pt-40 pt-10 space-y-10 justify-center lg:justify-between place-items-center text-black ">
        <div className="pl-20 lg:items-start items-center">
          <div className="space-y-4   lg:w-150 w-100">
            <h1 
        
            className="text-4xl  font-bold text-[#F0BD09]">
              Experience <br /> <span className="text-[#4C4C4D]">comfort</span>{" "}
              and <span className="text-[#4C4C4D]">style</span> <br /> like
              never before
            </h1>
            <p className="text-[#A9A9A7] ">
              Upgrade your home with our stylish and functional furniture
              collection. Shop <br /> now and transform your living space
            </p>
            <button className="bg-[#F0BD09] gap-2 p-2 text-white lg:text-[15px] flex items-center  px-4 rounded-xl">
              See our products
              <Image
                src={Arrow}
                alt="arrow"
                width={300}
                height={300}
                className="w-5 h-5 "
              />{" "}
            </button>
          </div>
        </div>

        <div className="relative z-10">
          <Image
            src={vector}
            alt="Vector"
            width={400}
            height={400}
            className="lg:w-120 w-80 lg:h-120 h-50"
          />

          <Image
            src={chair}
            alt="chair"
            width={400}
            height={400}
            className="absolute top-10 right-0  lg:w-110 w-100 lg:h-110 h-40"
          />
        </div>
      </div>
    </section>
  );
}
