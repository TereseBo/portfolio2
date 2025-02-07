
"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

import { technologies } from "@/constants/resume/technologies"
import { education_desc, experience_desc, personal_desc, skill_desc } from "@/constants/resume/resume_texts"
import { personal_data } from "@/constants/resume/personal_data"
import { education_data } from "@/constants/resume/education_data"
import { experience_data } from "@/constants/resume/experience_data"
import { DownloadCV } from "@/components/Downloadcv"

//About
const about = {
    title: "About me",
    description: personal_desc,
    items: personal_data
}

//Experience
const experience = {
    icon: "assets/resume/badge.svg",
    title: "My experience",
    description: experience_desc,
    items: experience_data

}
//Education
const education = {
    icon: "assets/resume/cap.svg",
    title: "My education",
    description: education_desc,
    items: education_data
}

//Skills
const skills = {
    title: "My skills",
    description: skill_desc,
    items: technologies
}
export default function Resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vw] flex justify-center py-12 xl:py-2"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="skills"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <DownloadCV className={"justify-self-center mt-8 uppercase flex items-center gap-2"} />
                    </TabsList>


                    {/*Tab contents */}
                    <div className="min-h-[70vh] w-full">
                        {/* Skills tab */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {skills.items.map((item, index) => {
                                        return (<li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-secondary hover:text-accent rounded-xl flex justify-center items-center">
                                                        <div className="text-6xl  transition-all duration-300">
                                                            {item.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">
                                                            {item.name}
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>)
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* About tab */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] xl:max-w-[800px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] xl:max-w-[820px] mx-auto xl:mx-0 bg-secondary py-6 px-10 xl:px-0 rounded-xl ">
                                    {about.items.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4 text-nowrap xl:ps-10">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl xl:text-lg">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* Education tab*/}
                        <TabsContent value="education" className="w-full ">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[50vh]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-secondary py-6 px-10 rounded-xl 
                                                flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <div>
                                                        <h3 className="text-xl max-w-[360px] min-h-[60px]
                                                    text-center lg:text-left">
                                                            {item.degree}
                                                        </h3>
                                                        <p className="text-white/60">{item.points}</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Experience tab */}
                        <TabsContent value="experience" className="w-full ">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[50vh]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-secondary py-6 px-10 rounded-xl 
                                                flex flex-col justify-center items-center lg:items-start gap-3">
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] 
                                                    text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-start gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent mt-3 shrink-0"></span>
                                                        <div>
                                                            <p className="text-white/60">{item.company},</p>
                                                            <p className="text-white/60">{item.location}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}