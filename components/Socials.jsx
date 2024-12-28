import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/TereseBo", target:"_blank" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/terese-bodérus-90b9731b6", target:"_blank" },
    { icon: <FaEnvelope />, path: "/contact", target:"_self" }
]
export function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link href={social.path} target={social.target} key={index} className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    )
}