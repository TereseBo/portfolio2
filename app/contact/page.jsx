
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { phone, email } from "@/constants/aboutme"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import Link from "next/link"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: phone,
        link: `tel:${phone.replaceAll(" ", "")}`
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: email,
        link: `mailto:${email}`
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Stockholm",
        link: "https://en.wikipedia.org/wiki/Stockholm"
    },
]

export default function Contact() {
    const [formSent, SetFormSent] = useState(false)

    const [formValues, setFormValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        service: "",
        message: ""
    })
    function toggleForm() {
        SetFormSent(prevValue => { return !prevValue })
    }
    function saveChange(e) {
        setFormValues(prevValues => { return { ...prevValues, [e.target.id]: e.target.value } });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const reqData = { ...formValues, access_key: process.env.NEXT_PUBLIC_ACCESS_KEY }
        const json = JSON.stringify(reqData);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            setFormValues({
                firstname: "",
                lastname: "",
                email: "",
                phonenumber: "",
                service: "",
                message: ""
            }
            );
            toggleForm()
        }
    }

    return (
        <motion.section initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }}
            className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Contact form  */}
                    {!formSent ?
                        <div className="xl:w-[54%] order-2 xl:order-none">
                            <form className="flex flex-col gap-6 p-10 bg-secondary rounded-xl" onSubmit={handleSubmit} onChange={(e) => saveChange(e)}>
                                <h3 className="text-4xl text-accent ">Let's work together!</h3>
                                <p className="text-white/60">Tell me who you are and how to get in touch</p>
                                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input type="text" id="firstname" placeholder="Firstname" />
                                    <Input type="text" id="lastname" placeholder="Lastname" />
                                    <Input type="email" id="email" placeholder="E-mail address" />
                                    <Input type="text" id="phonenumber" placeholder="Phone number" />
                                </div>
                                <p className="text-white/60">Please tell me which topic you would like to discuss:</p>
                                <Textarea id="message" className="h-[200px]" placeholder="Write your message here" />
                                <Button size="md" className="max-w-40 self-center xl:self-end text-secondary hover:text-[#a4a4aa]">Send message</Button>
                            </form>
                        </div> :
                        <div className="xl:w-[54%] order-2 xl:order-none">
                            <div className="flex flex-col gap-6 p-10 bg-secondary rounded-xl" >
                                <h3 className="text-4xl text-accent ">Thank you for your message!</h3>
                                <p className="text-white/60">I'll get back to you as soon as possible</p>
                                <Button size="md" className="max-w-100 self-end xl:self-end bg-accent text-secondary hover:text-[#a4a4aa]" onClick={toggleForm}>Send another message</Button>

                            </div>
                        </div>}

                    {/* Contact info */}
                    <div className="flex flex-1 items-center xl:justify-center order-1 xl:order-none  mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <Link className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center"
                                            href={item.link} target="_blank">
                                            <div>{item.icon}</div>
                                        </Link>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </motion.section>
    )
}