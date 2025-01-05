import { Socials } from "@/components/Socials";
import { Photo } from "@/components/Photo";
import { Statistics } from "@/components/Statistics";
import { DownloadCV } from "@/components/Downloadcv";
import Link from "next/link";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Presentation text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack developer</span>
            <h1 className="h1 mb-6">Hello I&apos;m
              <br />
              <span className="text-accent">Terese Bodérus</span>
            </h1>
            <p className="max-w[500px] mb-9 mx-2 text-white/80">
              If you’re looking for someone who brings both creativity and problem-solving
              skills to the table, let's <Link className="text-accent" href="/contact">connect</Link>!
              <br />
          <br/>
              I have a passion for biology, technology and problem-solving. I thrive in dynamic environments and am excited
              to contribute to innovative projects that make an impact. I am eager to take on challenges that allow me to leverage
              my analytical mindset and technical expertise.

            </p>
            {/* Social links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadCV className={"uppercase flex items-center gap-2"} />
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                 text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Skills />
      {/*Divider*/}
      <div className="container mx-auto">
        <div className="border border-white/20 m-16"></div>
      </div>
      <Statistics />
    </section>
  );
}
