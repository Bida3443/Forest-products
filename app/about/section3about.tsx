
import Image from "next/image"
import people from "../../public/people2.jpg"


export default function servic3eabout() {
    return (
        <section className="bg-white lg:py-10 lg:px-20 px-2 py-2  overflow-hidden">
            <div className="flex lg:flex-row lg:py-20 py-6 lg:px-2 px-0  flex-col justify-between gap-20  items-center">
                <div className="space-y-4">
                    <h1 className="lg:text-3xl text-[#4C4C4D]  text-2xl font-bold">Our Mission</h1>
                    <p className="lg:max-w-s lg:max-w-125.5 z-0 max-w-110 lg:text-[14px] text-[#B6B6B7] text-justify text-[10px]">Our mission is to provide our customers with the highest quality, stylish furniture pieces that not only elevate their homes but also enhance their lives. We are committed to offering a diverse range of products that cater to various design preferences and budgets, while maintaining our standards of excellence. Our goal is to make the process of furnishing your home as easy and enjoyable as possible, with exceptional customer service and hassle-free delivery.</p>
                </div>
                <div className="">
                    <Image
                        src={people}
                        alt=""
                        width={600}
                        height={800}
                        className="rounded-xl"
                    />

                </div>
                
            </div>
        </section>
    )
}