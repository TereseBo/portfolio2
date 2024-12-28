import Link from "next/link"
import { Button } from "./ui/button"
import { Nav } from "./Nav"
import { MobileNav } from "./Mobilenav"

export function Header() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font semibold hover:text-accent">
                        Terese Bodérus
                    </h1>
                </Link>
                {/* Nav for desktop */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button className="text-secondary hover:text-[#a4a4aa]" >Hire me</Button>
                    </Link>
                </div>
                {/* Nav for mobile */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    )
}