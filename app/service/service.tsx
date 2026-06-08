"use client"
import Image from "next/image";
import Theater from "../../public/Theater.jpg";
import Relaxation from "../../public/Relaxation.jpg";
import Office from "../../public/Office.jpg";
import Kitchen from "../../public/Kitchen.jpg";
import Living from "../../public/Living Room.jpg";
import Bedroom from "../../public/Bed Room.jpg";

import { motion } from "framer-motion";

export default function service() {
    return (
    <section className="bg-white lg:py-10 py-5 overflow-hidden">
      <div className="flex flex-col place-items-center py-20 gap-10">
        <h1 className="text-black text-3xl font-bold">Our Services</h1>
        <div className="grid grid-cols-1 items-center justify-center lg:px-0 px-5 text-black">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden ">
              <Image
                src={Theater}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Lecture Theater Funiture
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 10, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden">
              <Image
                src={Relaxation}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Relaxaton Funiture
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden">
              <Image
                src={Office}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Office Funiture
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 10, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden">
              <Image
                src={Kitchen}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Kitchen Funiture
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 10, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden">
              <Image
                src={Living}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Living Room Funiture
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 10, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden">
              <Image
                src={Bedroom}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Bed Room Funiture
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden ">
              <Image
                src={Theater}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Lecture Theater Funiture
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 10, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden">
              <Image
                src={Relaxation}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Relaxaton Funiture
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden">
              <Image
                src={Office}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Office Funiture
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 10, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden">
              <Image
                src={Kitchen}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Kitchen Funiture
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 10, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden">
              <Image
                src={Living}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Living Room Funiture
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 10, y: 2 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}

              className="relative w-full rounded-xl   group overflow-hidden">
              <Image
                src={Bedroom}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto rounded-xl   transition-transform duration-500 group-hover:scale-110"
              />{" "}
              <p className="absolute  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Bed Room Funiture
              </p>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

