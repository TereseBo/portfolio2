import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import  Link from "next/link"

export function DownloadCV({ className }) {  
    return (
        <Link href="/assets/resume/CVTereseBodérus.pdf" target="_blank" rel="noopener noreferrer" download>
            <Button variant="outline" size="lg" className={className}>
                <span>Download CV</span>
                <FiDownload className="text-large" />
            </Button>
        </Link>
    )

}