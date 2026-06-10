
import Image from "next/image"
import people from "../../public/people.jpg"


export default function servic2eabout() {
    return (
        <section className="bg-white lg:py-10 lg:px-20 px-2 py-2 overflow-hidden">
            <div className="flex bg-[#F9F2DA] lg:flex-row lg:py-20 py-6 lg:px-2 px-0 flex-col justify-between gap-20 items-center">

                <div className="lg:order-1 order-2">
                    <Image
                        src={people}
                        alt=""
                        width={600}
                        height={800}
                        className="rounded-br-3xl"
                    />

                </div>
                <div className="space-y-4 lg:order-2 order-1">
                    <h1 className="lg:text-3xl text-[#4C4C4D]  text-2xl font-bold">Our Vision</h1>
                    <p className="lg:max-w-s lg:max-w-125.5 z-0 max-w-110 lg:text-[14px] text-[#B6B6B7] text-justify text-[10px]">Our vision is to improve research on utilization of forest products, non-forest products and wood residue. We strive to provide our customers with the best possible shopping experience, from a user-friendly website to personalized customer service. We aim to constantly innovate and expand our product offerings, while maintaining our commitment to quality and style.</p>
                </div>
            </div>
        </section>
    )
}