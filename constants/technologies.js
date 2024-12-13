import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFlask, FaPython, FaBootstrap } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiDocker, SiGithubactions  } from "react-icons/si"
//Tech-stack
export const technologies =
    [
        //Languages and frameworks
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
            icon: <FaFlask />,
            name: "Flask"
        },
        {
            icon: <FaPython />,
            name: "Python"
        },
        //Styling
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        //Miscellaneous
        {
            icon: <SiGithubactions />,
            name: "GitHub Actions"
        },
        {
            icon: <SiDocker />,
            name: "Docker"
        },
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
    ]

//Number of technologies for use in stats
export const nrOfTechnologies = technologies.length