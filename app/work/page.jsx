"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
/* TODO: Replace arrow for live projects */
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { useState } from "react"

import { Tooltip, TooltipContent, TooltipProvider, tooltip } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { TooltipTrigger } from "@radix-ui/react-tooltip"

const loremIpsum = "Lorem ipsum odor amet, consectetuer adipiscing elit. Ornare cursus dui nullam pretium, mauris tellus parturient?"

/* TODO: Add project images to assets */
const projects = [
    {
        num: "01",
        category: "weaving",
        title: "project 1",
        description: loremIpsum,
        stack: [
            { name: "Html 5" },
            { name: "Css 3" },
            { name: "Javascript" },

        ],
        image: "/",
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "weaving",
        title: "project 1",
        description: loremIpsum,
        stack: [
            { name: "Next.js" },
            { name: "Sass" },
            { name: "Javascript" },

        ],
        image: "/",
        live: "",
        github: ""
    },
    {
        num: "03",
        category: "genetics",
        title: "project 1",
        description: loremIpsum,
        stack: [
            { name: "Html 5" },
            { name: "Css 3" },
            { name: "Javascript" },

        ],
        image: "/",
        live: "",
        github: ""
    },

]

export default function Work() {
    const [project, setProject] = useState(projects[0])
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none" >
                        {/* Main project info */}
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* Outlined number */}
                            <div className="text-8xl leading-none font-extra-bold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* projects info */}
                            <h2 className="text-[42px] font-bold leading-none text-white 
                            group-hover:text-accent transition-all duration-500 capitalize"
                            >
                                {project.category}
                            </h2>
                            <p className="text-white/60">{project.description}</p>
                            {/* tech stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* Add comma after all but last */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>)
                                })}
                            </ul>
                            {/* Add fancy border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                             bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* Github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                             bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">slider</div>
                </div>
            </div>
        </motion.section>
    )
}