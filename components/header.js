import Link from "next/link";
import Hamburger from "./hamburger";

export default function Header() {
    return (
        <><div className="justify-around max-w-screen bg-darkblue hidden tablet:flex">
            <Link href="/" className="flex m-8 text-2xl">
                <div className="text-pink font-montserrat mr-2">
                    Rémy
                </div>
                <div className="text-blue font-montserrat">
                    Bamas Lunay
                </div>
            </Link>
            <div className=" flex m-8 text-2xl h-min text-pink">
                <Link className="border-b-2 hover:border-pastel border-transparent active:border-pink mr-2" href="mailto:bamasremy43@gmail.com">Me contacter</Link>
                <Link className="border-b-2 hover:border-pastel border-transparent active:border-pink ml-2 mr-2" href="/portfolio">Portfolio</Link>
                <Link className="border-b-2 hover:border-pastel border-transparent active:border-pink ml-2" href="/">À propos</Link>
            </div>
        </div>
            <div className="flex justify-between w-screen phone:hidden items-center">
                <div className="mt-5 w-screen">
                    <Hamburger />
                    <Link href="/" className="flex text-2xl justify-center">
                        <div className="text-pink font-montserrat mr-2">
                            Rémy
                        </div>
                        <div className="text-blue font-montserrat">
                            Bamas
                        </div>
                    </Link>
                </div>


            </div></>
    )
}
