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

import { projects } from "@/constants/projects"


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
                            <div className="text-6xl leading-none font-extra-bold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* projects info */}
                            <h2 className="text-[42px] font-bold leading-none text-white 
                            group-hover:text-accent transition-all duration-500 capitalize"
                            >
                                {project.title}
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
                            {/*Divider between text and links*/}
                            <div className="border border-white/20"></div>
                            {/*Button links */}
                            <div className="flex items-center gap-4">
                                {/* Github link */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                             bg-secondary flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* Deployment link */}
                                {project.live !== "" ?
                                    <Link href={project.live} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                             bg-secondary flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link> : null}
                                {/* Docs link */}
                                {project.docs !== "" ?
                                    <Link href={project.live} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                             bg-secondary flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Project Docs</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link> : null}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-[520px] mb-12">
                            {projects.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center rounded-lg">
                                            <div className="absolute top-0 bottom-0 w-full h-full rounded-lg z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover rounded-lg" alt={project.alt} />
                                            </div>
                                        </div>
                                    </SwiperSlide>)
                            })}
                            {/* Buttons for slider */}
                            <SliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between "
                                btnStyles="bg-primary/60 xl:bg-secondary/60 hover:bg-secondary/20 xl:hover:bg-secondary/20 hover:text-primary/60 xl:hover:text-accent/20 mx-0 rounded-md text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                iconStyles=""
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section >
    )
}