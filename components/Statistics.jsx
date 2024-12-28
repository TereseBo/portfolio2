"use client"
import Link from "next/link"
import CountUp from "react-countup"
import { useState } from "react"
import { myStats } from "@/constants/aboutme"

//TODO:Replace stats with preferablt with something from GitHub API, else calculated numbers


export function Statistics() {
    const [showPrefix, setShowPrefix] = useState(false)
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-around gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {myStats.map((stat, index) => {
                        return (
                            <Link {...stat.linkprops} key={index} >
                                <div key={index} className="flex-1 flex gap-4 items-center justify-start text-white/80 hover:text-accent">
                                    <div className="gap-1 flex items-center justify-start">
                                        <CountUp

                                            onEnd={(prevVal) => setShowPrefix(true)}
                                            end={stat.num}
                                            duration={5}
                                            delay={2}
                                            separator=""
                                            className="text-4xl xl:text-6xl font-extrabold text-white"
                                        />
                                        {stat.prefix ? (<div className={`text-2xl xl:text-4xl font-extrabold ${showPrefix ? "text-accent" : "text-transparent"}`}>{stat.prefix}</div>) : null}
                                    </div>
                                    <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                                    leading-snug `
                                    }>
                                        {stat.text}
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}