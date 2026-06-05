"use client"

import Image from "next/image"
import Mini from "../../../public/chair2.png";
import Minibook from "../../../public/Minibookshelf.png";
import rocking from "../../../public/rocking.png";
import tripod from "../../../public/tripodchair.png";
import stool from "../../../public/carribean.png";
import foam from "../../../public/foamchair.png";
import { motion } from "framer-motion";


export default function OurProducts() {
  return (
    <section className="bg-white py-20 min-h-screen  overflow-hidden">
      <div className="  overflow-hidden">
        <div className="flex justify-between mb-10 lg:px-25 px-2">
          <h1 className="text-black font-bold">OUR PRODUCTS</h1>
          <a
            href="/products"
            className="group flex items-center gap-2 text-gray-600 hover:text-black transition-all duration-300 cursor-pointer"
          >
            <p className="group-hover:underline">See all</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-3 h-3 fill-current transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-10 md:px-6 lg:px-25">
          <motion.div 
                   initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
          
          className="flex flex-col items-center justify-center rounded-xl border border-[#F0BD09] p-3 md:p-2">
            <Image
              src={Minibook}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-2">
              Mini Book Shelf
            </h2>
            <p className="text-black font-bold text-sm md:text-base">
              ₦25,000
            </p>
            <button className="bg-[#F0BD09] text-white text-xs md:text-sm lg:text-[15px] px-8 md:px-10 py-1.5 rounded-xl mt-2 w-full md:w-auto">
              Message to buy
            </button>
          </motion.div>


          <motion.div 
                   initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-center rounded-xl border border-[#F0BD09] p-3 md:p-4">
            <Image
              src={Mini}
              alt="Bookshelf"
              className="w-full h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
            />
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-2">
              Chair
            </h2>
            <p className="text-black font-bold text-sm md:text-base">
              ₦15,000
            </p>
            <button className="bg-[#F0BD09] text-white text-xs md:text-sm lg:text-[15px] px-8 md:px-10 py-1.5 rounded-xl mt-2 w-full md:w-auto">
              Message to buy
            </button>
          </motion.div>


          <motion.div 
          
                   initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
          
          className="flex flex-col items-center justify-center rounded-xl border border-[#F0BD09] p-3 md:p-4">

            <Image
              src={tripod}
              alt="Bookshelf"
              className="w-full h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
            />

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-2">
              Tripod Chair
            </h2>

            <p className="text-black font-bold text-sm md:text-base">
              ₦10,000
            </p>

            <button className="bg-[#F0BD09] text-white text-xs md:text-sm lg:text-[15px] px-8 md:px-10 py-1.5 rounded-xl mt-2 w-full md:w-auto">
              Message to buy
            </button>
          </motion.div>

          <motion.div 
          
                   initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-center rounded-xl border border-[#F0BD09] p-3 md:p-4">
            <Image
              src={stool}
              alt="Bookshelf"
              className="w-full h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
            />
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-2">
              Caribean Stool
            </h2>
            <p className="text-black font-bold text-sm md:text-base">
              ₦5,000
            </p>
            <button className="bg-[#F0BD09] text-white text-xs md:text-sm lg:text-[15px] px-8 md:px-10 py-1.5 rounded-xl mt-2 w-full md:w-auto">
              Message to buy
            </button>
          </motion.div>


          <motion.div
          
                   initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
        
          className="flex flex-col items-center justify-center rounded-xl border border-[#F0BD09] p-3 md:p-4">

            <Image
              src={rocking}
              alt="Bookshelf"
              className="w-full h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
            />

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-2">
              Rocking Chair
            </h2>
            <p className="text-black font-bold text-sm md:text-base">
              ₦30,500
            </p>

            <button className="bg-[#F0BD09] text-white text-xs md:text-sm lg:text-[15px] px-8 md:px-10 py-1.5 rounded-xl mt-2 w-full md:w-auto">
              Message to buy
            </button>
          </motion.div>

          <motion.div 
          
                   initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
          
          className="flex flex-col items-center justify-center rounded-xl border border-[#F0BD09] p-3 md:p-4">

            <Image
              src={foam}
              alt="Bookshelf"
              className="w-full h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
            />

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-2">
              Formy Chair
            </h2>

            <p className="text-black font-bold text-sm md:text-base">
              ₦2,500
            </p>

            <button className="bg-[#F0BD09] text-white text-xs md:text-sm lg:text-[15px] px-8 md:px-10 py-1.5 rounded-xl mt-2 w-full md:w-auto">
              Message to buy
            </button>
          </motion.div>



          {/* Repeat for others */}

        </div>
      </div>
    </section>
  )
}