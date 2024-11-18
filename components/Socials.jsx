import Link from "next/link"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/TereseBo" },
    { icon: <FaLinkedinIn />, path: "www.linkedin.com/in/terese-bodérus-90b9731b6" },
]
export function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link href={social.path} key={index} className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    )
}