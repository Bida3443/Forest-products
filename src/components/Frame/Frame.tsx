


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
                    <p className='lg:text-3xl text-xl font-bold'>{items.text}</p>
                    <p className="lg:text-3xl text-md">{items.link}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
