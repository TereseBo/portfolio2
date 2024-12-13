"use client"

import CountUp from "react-countup"
import { useState } from "react"
import { myStats} from "@/constants/mystats"

//TODO:Replace stats with preferablt with something from GitHub API, else calculated numbers


export function Statistics() {
    const [showPrefix, setShowPrefix] = useState(false)
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {myStats.map((stat, index) => {
                        return (
                            <div key={index} className="flex-1 flex gap-4 items-center justify-start">
                                <div  className="gap-1 flex items-center justify-start">
                                    <CountUp

                                        onEnd={(prevVal) => setShowPrefix(true)}
                                        end={stat.num}
                                        duration={5}
                                        delay={2}
                                        separator=""
                                        className="text-4xl xl:text-6xl font-extrabold"
                                    />
                                    {stat.prefix ? (<div className={`text-2xl xl:text-4xl font-extrabold ${showPrefix ? "text-accent" : "text-transparent"}`}>{stat.prefix}</div>) : null}
                                </div>
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