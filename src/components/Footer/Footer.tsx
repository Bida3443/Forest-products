// import React from 'react'
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logoo.png"; 
// import { div } from "motion/react-client";
import mail from "../../../public/mail.png";
import location from "../../../public/location.png";

export default function Footer  () {

    const svg = [
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"/></svg>
            ),
        },
        
        {
            svg:(    
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"/></svg>
            ), 
        },

        {
            svg:   (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        ),
        },

        {
            svg: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
        ),
        },

    ];
    const Information = [
  {
    text: "About Us",
    link: "/About Us",
  },
  {
    text: "Projects",
    link: "/Projects",
  },
  {
    text: "Blog",
    link: "/Blog",
  },
  {
    text: "Testimonial",
    link: "/Testimonial",
  },
  
];
    const helpful = [
  {
    text: "Services",
    link: "/Services",
  },
  {
    text: "Support",
    link: "/Support",
  },
  {
    text: "Terms & Condition",
    link: "/Terms",
  },
  {
    text: "Privacy & Policy",
    link: "/Privacy",
  },
  
];


  return (
    <section className="bg-[#4C4C4D] h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 lg:py-24 px-5 sm:px-8 lg:px-20">

            <div className="flex flex-col gap-5 items-start">
                <div><Link href="/">
                          <Image
                            src={logo}
                            alt="Logo Image"
                            width={300}
                            height={300}
                            className="w-25 h-15"
                          />
                        </Link></div>
                <p>Upgrade your home with our stylish and functional furniture collection. Shop now and transform your living space</p>
                <div className="flex gap-3 cursor-pointer">{svg.map((item,index)=>(
                    <div key={index} className="w-7 h-7 bg-white rounded-full p-2">
                        {item.svg}
                    </div>
                ))}</div>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl pb-5">Information</h1>
                <div className="space-y-3">{Information.map((item,index)=>(
                    <div key={index} className="hover:text-[#F0BD09] transition-all duration-300 " ><a href={item.link}>{item.text}</a></div>
                ))}</div>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl pb-5">Helpful Links</h1>
                <div className="space-y-3">{helpful.map((item,index)=>(
                    <div key={index} className="hover:text-[#F0BD09] transition-all duration-300 " ><a href={item.link}>{item.text}</a></div>
                ))}
            </div>
            </div>
            <div className="space-y-8">
                <div className="space-y-2">
            <h1 className="text-xl">Contact Us</h1>
            <p>+234 2 241 3327</p>
            <div className="flex gap-2"><Image src={mail} alt="mail" width={100} height={100} className="w-5 h-5"/> <p>Email Us</p></div>
            </div>
             <div className="space-y-2">
            <h1>Forest hill Estate, Jericho, <br /> Idiishin, Ibadan, 2400001</h1>
            
            <div className="flex gap-2"><Image src={location} alt="mail" width={100} height={100} className="w-5 h-5"/> <p>Get Direction</p></div>
            </div>
                  
            </div>

                
        </div>

<div className="px-5 lg:px-10">
  <div className="flex lg:flex-row flex-col gap-4 py-7 justify-center items-center border-t border-white/20">
    <div className="text-center text-sm break-words">
      © 2023 FPD&U. All Rights Reserved.
      
    </div>
  </div>

  
</div>
    
        
    </section>
  )
};
