
//Projects showcased in the portfolio
export const projects = [
    {
        num: "01",
        category: "Fullstack",
        title: "Weaver",
        description: `A fullstack project using Next.js allowing for creation and edit of weaving drafts as well as assisting in calculations needed to start 
        a new weaving project. Basic functionalities such as creation, edit, print and up/download are available to all users while authenticated users also 
        gain acces to profile pages where they may keep track of and their projects and equipment`,
        stack: [
            { name: "Next.js" },
            { name: "SCSS" },
            { name: "Typescript" },

        ],
        image: "/assets/projects/weaverlibrary.PNG",
        live: "https://nextweave.vercel.app/weaver",
        github: "https://github.com/TereseBo/nextweave",
        alt: "Weavingdraft with 3 shafts and 3 treadles made in the weaver application"
    },
    {
        num: "02",
        category: "Frontend",
        title: "Mendeler",
        description: `A mini game allowing the user follow Mendels footsteps by cross breeding peas. The game aims to highlight mendelian inheritance patterns for monogenic traits. 
        The user choose which peas to cross and the appearance and gene distribution among the progeny peas are shown. Consecutive rounds may continue to cross the offspring or add new genes to the mix by choosing to 
        include a new pea variety.`,
        stack: [
            { name: "React.js" },
            { name: "SCSS" },
            { name: "Javascript" },

        ],
        image: "/assets/projects/mendeler.PNG",
        live: "https://teresebo.github.io/game",
        github: "https://github.com/TereseBo/mendeler",
        alt: "The game mendeler where the user may cross peas demonstrating mendelian inheritance. Green and gnarly peas are shown in the picture displaying traits from both parents."
    },
    {
        num: "03",
        category: "Fullstack",
        title: "Orpha table",
        description: `The application allows for creatig custom lists of selected rare diseases, including ORPHAcode, ICD-10, preffered name and synonyms by utilizing the Orphanet RD-CODE API. The selected data
         can be exported to Excel or as JSON for further use. Intendet for medical proffessionals needing to keep track of a subset of the Orphanet nomenclature for daily clinical work in association with European 
         reference networks or other clinical actuivities
        .`,
        stack: [
            { name: "Next.js" },
            { name: "Tailwind" },
            { name: "Javascript" },

        ],
        image: "/assets/projects/orphalist.PNG",
        live: "",
        github: "https://github.com/TereseBo/orpha_table",
        alt: "Image description"
    }
]

//Number of projects for use in stats
export const nrOfShowcasedProjects = projects.length



