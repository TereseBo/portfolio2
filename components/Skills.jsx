import { technologies } from "@/constants/resume/technologies"
import Link from "next/link"

export function Skills() {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto flex items-baseline justify-center ">
                <div className="flex flex-col gap-1 items-center justify-start text-accent py-4 text-nowrap">
                    <div className="text-xl w-[20px] h-[20px]">
                    </div>
                    <p >
                        Tech stack:
                    </p>
                </div>
                <Link href="/projects">
                    <div className="flex flex-wrap justify-center gap-2 max-w-[80vw] mx-auto xl:max-w-none">

                        {technologies.map((item, index) => {
                            return (

                                <div key={index} className="flex flex-col gap-1 items-center justify-start text-white/80 p-4 text-nowrap hover:text-accent">
                                    <div className="text-xl text-white">
                                        {item.icon}
                                    </div>
                                    <p >
                                        {item.name}
                                    </p>
                                </div>
                            )
                        })}

                    </div>
                </Link>
            </div>
        </section>
    )
}