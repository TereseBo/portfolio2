
"use client"
import { FaHtml5, FaCss3, FaJS, FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextgdotjs } from "react-icons/si"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from " @components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

//TODO: Update personal data 
//TODO: Update experience data 
//TODO: Update educational data 
//TODO: Update skill data 
cons
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
const experience={
    icon:"assets/resume/badge.svg",
    title: "My experience",
    description: loremIpsum,
    items:[
        {
            company:"Clinical Genomics, SciLifelabs",
            position:"Fullstack developer intern",
            duration:"Oct 2023 - Apr 2024"
        },
        {
            company:"Centre for rare diseases",
            position:"Information Scientist",
            duration:"Sept 2020 - Present"
        },
        {
            company:"Department of Clinical Genetics",
            position:"Laboratory technichian",
            duration:"Jun 2014 - Aug 2022"
        },
        {
            company:"Department of Clinical Genetics",
            position:"Education coordinator",
            duration:"Apr 2021 - Feb 2022"
        },
        {
            company:"Department of Clinical Genetics",
            position:"Student coordinator",
            duration:"Aug 2018 - Dec 2021"
        },
    ]
}

//Education data

const education={
    icon:"assets/resume/cap.svg",
    title: "My experience",
    description: loremIpsum,
    items:[
        {
            institution:"Nackademin AB",
            degree:"Full stack web developer, open source",
            duration:"Sep 2022 - May 2024"
        },
        {
            institution:"Karolinska Institutet",
            degree:"Bachelor of Medical Sciences in laboratory science",
            duration:"Sep 2011 - Jun 2014"
        },
        {
            institution:"Nackademin AB",
            degree:"Full stack web developer, open source",
            duration:"Sep 2022 - May 2024"
        },
        {
            institution:"Nackademin AB",
            degree:"Full stack web developer, open source",
            duration:"Sep 2022 - May 2024"
        },
        {
            institution:"Nackademin AB",
            degree:"Full stack web developer, open source",
            duration:"Sep 2022 - May 2024"
        },
        {
            institution:"Nackademin AB",
            degree:"Full stack web developer, open source",
            duration:"Sep 2022 - May 2024"
        },
        {
            institution:"Nackademin AB",
            degree:"Full stack web developer, open source",
            duration:"Sep 2022 - May 2024"
        },
    ]
}

//Skill data
const skills={
    title:"My skills",
    description:loremIpsum,
    skillList:[
        {
            icon:<FaHtml5/>,
            name:"html 5"
        },
        {
            icon:<FaCss3/>,
            name:"css 3"
        },
        {
            icon:<FaJS/>,
            name:"javascript"
        },
        {
            icon:<FaNodeJs/>,
            name:"node.js"
        },
        {
            icon:<FaReact/>,
            name:"React.js"
        },
        {
            icon:<SiNextgdotjs/>,
            name:"Next.js"
        },
        {
            icon:<SiTailwindcss/>,
            name:"tailwind.css"
        },
    ]
}
export default function Resume() {
    return (
        <motion.div>Resume page</motion.div>
    )
}