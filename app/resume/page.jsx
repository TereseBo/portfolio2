
"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFlask, FaPython } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

//TODO: Update personal data 
//TODO: Update experience data 
//TODO: Update educational data 
//TODO: Update skill data 
const loremIpsum = "Lorem ipsum odor amet, consectetuer adipiscing elit. Ornare cursus dui nullam pretium, mauris tellus parturient? Rhoncus suscipit platea suscipit eleifend turpis facilisis mollis. Fringilla urna varius nisi amet litora tellus at interdum nisi. Sed sodales turpis cras purus tellus consequat porttitor. Nascetur a condimentum ex parturient rhoncus lobortis enim."

//Personal data
const about = {
    title: "About me",
    description: loremIpsum,
    info: [
        {
            fieldName: "Name",
            fieldValue: "Terese Bodérus"
        },
        {
            fieldName: "Phone",
            fieldValue: "+46 76 93 88 441"
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
            fieldValue: "terese.boderus@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
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
    description: loremIpsum,
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
    title: "My experience",
    description: loremIpsum,
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
    description: loremIpsum,
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <FaReact />,
            name: "React.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
    ]
}
export default function Resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vw] flex items-center justify-center py-12 xl:py-2"
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
                        <TabsContent value="experience" className="w-full ">experience</TabsContent>
                        {/* education */}
                        <TabsContent value="experience" className="w-full ">education</TabsContent>
                        {/* skills */}
                        <TabsContent value="experience" className="w-full ">skills</TabsContent>
                        {/* about me */}
                        <TabsContent value="experience" className="w-full ">about me</TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}