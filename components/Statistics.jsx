"use client"

import CountUp from "react-countup"

//TODO:Replace stats with preferablt with something from GitHub API, else calculated numbers
const myStats = [
    {
        num: 1,
        text: "Years of experience"
    },
    {
        num: 4,
        text: "Showcased projects"
    },
    {
        num: 10,
        text: "Technologies"
    },
    {
        num: 1000,
        text: "GitHub contributions"
    },
]

export function Statistics() {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {myStats.map((stat, index) => {
                        return (
                            <div key={index} className="flex-1 flex gap-4 items-center justify-start">
                                <CountUp
                                    end={stat.num}
                                    duration={5}
                                    delay={2}
                                    separator=""
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                                    leading-snug text-white/80`
                                }>
                                    {stat.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}