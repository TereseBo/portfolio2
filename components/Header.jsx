import Link from "next/link"
import { Button } from "./ui/button"
import { Nav } from "./Nav"

export function Header() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font semibold">
                        Terese Bodérus <span className="text-accent"></span>
                    </h1>
                </Link>
                {/* Nav for desktop */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact"></Link>
                    <Button>Hire me</Button>
                </div>
                {/* Nav for mobile */}
                <div className="xl:hidden">
                    <Nav />
                    <Link href="/contact"></Link>
                    <Button>Hire me</Button>
                </div>

            </div>
        </header>
    )
}