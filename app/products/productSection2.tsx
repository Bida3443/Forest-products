"use client"
import Royal from "../../public/Royal.png"
import Mini from "../../public/Minibookshelf.png"
import chairr from "../../public/chairr.png"
import chairandtable  from "../../public/chair and table.png"
import three from "../../public/three seater.png"
import causine from "../../public/cousine.png"

import { motion } from "framer-motion";
import Image from "next/image"

export default function OurProducts() {
  return (
    <section className="bg-white py-10 ">
      <div className="">


        <div className="flex justify-between pt-2 mb-5 lg:px-25 px-2">
          <h1 className="text-black font-bold">Mahogany</h1>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-10 md:px-6 lg:px-25">
          <motion.div 
                   initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
          
          className="flex flex-col items-center justify-center rounded-xl border border-[#F0BD09] p-3 md:p-2">
            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={Royal}
              alt="Bookshelf"
              className="max-h-full w-full object-contain"
            />
            </div>
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
              Royal
            </h2>
            <p className="text-black font-bold text-sm md:text-base">
              ₦85,000
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
            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={Mini}
              alt="Bookshelf"
              className="max-h-full w-auto object-contain"
            />
            </div>
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
              Book Shelf
            </h2>
            <p className="text-black font-bold text-sm md:text-base">
              ₦20,000
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

            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={chairr}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
              Chair
            </h2>

            <p className="text-black font-bold text-sm md:text-base">
              ₦50,000
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
            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={chairandtable}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
              Chair and Table
            </h2>
            <p className="text-black font-bold text-sm md:text-base">
              ₦50,000
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

            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={three}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
              Sofa Chair
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

            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={causine}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
              Cusine Chair
            </h2>

            <p className="text-black font-bold text-sm md:text-base">
              ₦80,500
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