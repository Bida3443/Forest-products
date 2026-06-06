"use client"
import Bstool from "../../public/Bstool.png"
import sofa from "../../public/sofa.png"
import eatry from "../../public/Eatry.png"
import rocking from "../../public/rockingchair.png"
import bar from "../../public/bar chair.png"
import tripod from "../../public/tripodchair.png"

import { motion } from "framer-motion";
import Image from "next/image"

export default function OurProducts() {
  return (
    <section className="bg-white py-20 min-h-screen  overflow-hidden">
      <div className="  overflow-hidden">
        <div className="flex justify-between mb-10 lg:px-25 px-2">
          <h1 className="text-black font-bold">Bamboo</h1>
          
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
              src={Bstool}
              alt="Bookshelf"
              className="max-h-full w-full object-contain"
            />
            </div>
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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
            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={rocking}
              alt="Bookshelf"
              className="max-h-full w-auto object-contain"
            />
            </div>
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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

            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={bar}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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
            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={eatry}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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

            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={sofa}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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

            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={tripod}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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

        <div className="flex justify-between pt-10 mb-10 lg:px-25 px-2">
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
              src={Bstool}
              alt="Bookshelf"
              className="max-h-full w-full object-contain"
            />
            </div>
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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
            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={rocking}
              alt="Bookshelf"
              className="max-h-full w-auto object-contain"
            />
            </div>
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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

            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={bar}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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
            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={eatry}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>
            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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

            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={sofa}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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

            <div className="h-62.5 flex items-center justify-center">
              <Image
              src={tripod}
              alt="Bookshelf"
              className="w-full h-auto max-w-37.5 md:max-w-50 lg:max-w-62.5"
            />
            </div>

            <h2 className="text-black text-sm md:text-base lg:text-lg text-center mt-6">
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