"use client"
import Link from "next/link"
import { usePathname} from "next/navigation"

export const navLinks=[
    {
        name:"home",
        path:"/"
    },
    {
        name:"resume",
        path:"/resume"
    },
    {
        name:"projects",
        path:"/projects"
    },
    {
        name:"contact",
        path:"/contact"
    }
]

export function Nav(){
    const pathname=usePathname();
    return(
        <nav className="flex gap-8">
            {navLinks.map((link, index)=>{
        return <Link href={link.path} key={index} className={`${link.path===pathname && "text-accent border-b-2 border-accent "} 
        capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
            })}
        </nav>
    )
}