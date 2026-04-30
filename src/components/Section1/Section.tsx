// import { div, section } from "motion/react-client";
import Image from "next/image";
import Theater from "../../../public/Theater.png";
import Relaxation from "../../../public/Relaxation.png";
import Office from "../../../public/Office.png";
import Kitchen from "../../../public/Kitchen.png";
import Living from "../../../public/Living Room.png";
import Bedroom from "../../../public/Bed Room.png";

export default function Services() {
  return (
    <section className="bg-white overflow-hidden min-h-screen lg:pb-20 pb:10">
      <div className="flex flex-col place-items-center gap-10 ">
        <h1 className="text-black text-3xl font-bold">Our Services</h1>
        <div className="grid grid-cols-1 items-center justify-center lg:px-0 px-5 text-black">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
            <div className="relative w-full">
              <Image
                src={Theater}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto"
              />{" "}
              <p className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Lecture Theater Funiture
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src={Relaxation}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto"
              />{" "}
              <p className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Relaxaton Funiture
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src={Office}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto"
              />{" "}
              <p className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Office Funiture
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src={Kitchen}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto"
              />{" "}
              <p className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Kitchen Funiture
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src={Living}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto"
              />{" "}
              <p className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Living Room Funiture
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src={Bedroom}
                alt="Rectangle"
                width={300}
                height={300}
                className="w-full h-auto"
              />{" "}
              <p className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold text-center px-2">
                Bed Room Funiture
              </p>
            </div>
          </div>
        </div>

        {/* <a href="/services" className="flex items-center hover:transition-all cursor-pointer duration-300 gap-2">
          <p className="text-black">See all </p>{" "}
          <svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
          className="w-3 h-3 fill-black stroke-black">
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </a> */}

        <a
  href="/services"
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
    </section>
  );
}
