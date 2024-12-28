import { nrOfShowcasedProjects } from "./projects"
import { nrOfTechnologies } from "./resume/technologies"

export const phone="+46 076 93 88 441"
export const email="terese.boderus@gmail.com"
export const name="Terese Bodérus"

export const experience="1 year"
export const languages="Swedish, English"
export const nationality="Swedish"




export const myStats = [

    {
        num: nrOfShowcasedProjects,
        text: "Showcased projects",
        linkprops:{href:"/projects"}
    },
    {
        num: nrOfTechnologies,
        text: "Technologies",
        linkprops:{href:"/resume"}
    },
    {
        prefix: "<",
        num: 1000,
        text: "GitHub contributions",
        linkprops:{href:"https://github.com/TereseBo", target:"_blank"}
    }
]