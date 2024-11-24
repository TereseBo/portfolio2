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
import { SliderBtns } from "@/components/SliderBtns"

const loremIpsum = "Lorem ipsum odor amet, consectetuer adipiscing elit. Ornare cursus dui nullam pretium, mauris tellus parturient?"

/* TODO: Add project images to assets */
//TODO: Add project information
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
        image: "/assets/photo_round.png",
        live: "",
        github: "",
        alt: "Image description"
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
        github: "",
        alt: "Image description"
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
        github: "",
        alt: "Image description"
    },

]

export default function Work() {
    const [project, setProject] = useState(projects[0])

    function handleSlideChange(swiper) {
        //get slide index
        const currentIndex = swiper.activeIndex

        //update state for page
        setProject(projects[currentIndex])
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }}
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
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-[520px] mb-12">
                            {projects.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt={project.alt} />
                                            </div>

                                        </div>
                                    </SwiperSlide>)
                            })}
                            {/* Buttons for slider */}
                            {/* TODO: Restyle horrid buttons */}
                            {/* TODO: Restyle equally horrid placement of buttons for xl screen */}
                            <SliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-black/10 hover:bg-white/20 rounded-md text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                iconStyles=""
                            />

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section >
    )
}