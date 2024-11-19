import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import { Socials } from "@/components/Socials";
import { Photo } from "@/components/Photo";
import { Statistics } from "@/components/Statistics";

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
            <p className="max-w[500px] mb-9 text-white/80"> I have a passion for biology, technology and problem-solving.
              I&apos;m capable in various programming languages and technologies.
            </p>
            {/* Social links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-large" />
              </Button>
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
            <Photo/>
          </div>
        </div>
      </div>
      <Statistics/>
    </section>
  );
}
