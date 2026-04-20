import { link } from 'fs'
import React from 'react'
import { text } from 'stream/consumers'


const rame = [
    {
        text: "20k+",
        link:"Years Of Experience",
    },
    {
        text: "1k+",
        link:"Closed Deals",
    },
    {
        text: "30k+",
        link:"Happy Clients",
    },
]
export default function  Frame (){
  return (
    <div className='bg-[#FFFFFF] py-10'>
        <div className='flex justify-center gap-10 items-center text-[#8B8B8B]' >
            {rame.map((items,index)=>(
                <div key={index} className='flex items-center flex-col '>
                    <p className='text-3xl font-bold'>{items.text}</p>
                    <p>{items.link}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
