import Link from "next/link";
import Hamburger from "./hamburger";

export default function Header() {
    return (
        <>
            <div className="tablet:sticky top-0 tablet:justify-around max-w-screen bg-darkgrey flex z-10">
            <div className="tablet:hidden items-center">
                <Hamburger />
            </div>
            <Link href="/" className="flex my-4 text-2xl w-screen tablet:w-fit justify-center">
                <div className="text-pink font-montserrat mr-2">
                    Rémy
                </div>
                <div className="text-blue font-montserrat">
                    Bamas Lunay
                </div>
            </Link>
            <div className="tablet:flex m-8 text-2xl h-min text-pink hidden">
                <Link className="border-b-2 hover:border-pink border-transparent active:border-pink mr-2" href="/">À propos</Link>
                <Link className="border-b-2 hover:border-pink border-transparent active:border-pink ml-2 mr-2" href="/#formation">Expérience</Link>
                <Link className="border-b-2 hover:border-pink border-transparent active:border-pink ml-2 mr-2" href="/#portfolio">Portfolio</Link>
                <Link className="border-b-2 hover:border-pink border-transparent active:border-pink ml-2" href="mailto:bamasremy43@gmail.com">Me contacter</Link>
            </div>
        </div></>
    )
}
