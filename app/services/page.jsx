"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const loremIpsum = "Lorem ipsum odor amet, consectetuer adipiscing elit. Ornare cursus dui nullam pretium, mauris tellus parturient? Rhoncus suscipit platea suscipit eleifend turpis facilisis mollis. Fringilla urna varius nisi amet litora tellus at interdum nisi. Sed sodales turpis cras purus tellus consequat porttitor. Nascetur a condimentum ex parturient rhoncus lobortis enim."

const services = [
    {
        num: "01",
        title: "Web development",
        description: loremIpsum,
        href: ""
    },
    {
        num: "02",
        title: "UI/UX design",
        description: loremIpsum,
        href: ""
    },
    {
        num: "03",
        title: "Problem solving",
        description: loremIpsum,
        href: ""
    },
    {
        num: "04",
        title: "Diagnostics",
        description: loremIpsum,
        href: ""
    },
]

export default function Services() {
    return (
        <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
                    className="grid grid-cols-1  md:grid-cols-2 gap-[60px]">
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline 
                                    text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                                    transition-all duration-55 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60">{service.description}</p>

                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}