
"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

import {phone, email, name} from "@/constants/aboutme"
import { technologies } from "@/constants/technologies"
import { education_desc, experience_desc, personal_desc, skill_desc } from "@/constants/resume_texts"

//Personal data
const about = {
    title: "About me",
    description: personal_desc,
    items: [
        {
            fieldName: "Name",
            fieldValue: name
        },
        {
            fieldName: "Phone",
            fieldValue: phone
        },
        {
            fieldName: "Experience",
            fieldValue: "1 year"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Swedish"
        },
        {
            fieldName: "E-mail",
            fieldValue: email
        },
        {
            fieldName: "Languages",
            fieldValue: "Swedish, English"
        },
    ]
}

//Experience data
const experience = {
    icon: "assets/resume/badge.svg",
    title: "My experience",
    description: experience_desc,
    items: [
        {
            company: "Clinical Genomics, SciLifelabs",
            position: "Fullstack developer intern",
            duration: "Oct 2023 - Apr 2024"
        },
        {
            company: "Centre for rare diseases",
            position: "Information Scientist",
            duration: "Sept 2020 - Present"
        },
        {
            company: "Department of Clinical Genetics",
            position: "Laboratory technichian",
            duration: "Jun 2014 - Aug 2022"
        },
        {
            company: "Department of Clinical Genetics",
            position: "Education coordinator",
            duration: "Apr 2021 - Feb 2022"
        },
        {
            company: "Department of Clinical Genetics",
            position: "Student coordinator",
            duration: "Aug 2018 - Dec 2021"
        },
    ]
}

//Education data

const education = {
    icon: "assets/resume/cap.svg",
    title: "My education",
    description: education_desc,
    items: [
        {
            institution: "Nackademin AB",
            degree: "Full stack web developer, open source",
            duration: "Sep 2022 - May 2024"
        },
        {
            institution: "Karolinska Institutet",
            degree: "Bachelor of Medical Sciences in laboratory science",
            duration: "Sep 2011 - Jun 2014"
        },
        {
            institution: "Nackademin AB",
            degree: "Full stack web developer, open source",
            duration: "Sep 2022 - May 2024"
        },
        {
            institution: "Nackademin AB",
            degree: "Full stack web developer, open source",
            duration: "Sep 2022 - May 2024"
        },
        {
            institution: "Nackademin AB",
            degree: "Full stack web developer, open source",
            duration: "Sep 2022 - May 2024"
        },
        {
            institution: "Nackademin AB",
            degree: "Full stack web developer, open source",
            duration: "Sep 2022 - May 2024"
        },
        {
            institution: "Nackademin AB",
            degree: "Full stack web developer, open source",
            duration: "Sep 2022 - May 2024"
        },
    ]
}

//Skill data
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
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* Contents */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full ">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                                                flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                    text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full ">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                                                flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[360px] min-h-[60px]
                                                    text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
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
                        {/* skills */}
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
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] hover:text-accent rounded-xl flex justify-center items-center">
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
                        {/* about me */}
                     
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] xl:max-w-[800px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] xl:max-w-[820px] mx-auto xl:mx-0">
                                    {about.items.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl xl:text-lg">{item.fieldValue}</span>
                                            </li>
                                        )

                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}