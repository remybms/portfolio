import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-around max-w-screen bg-darkblue">
        <div className="flex m-8 text-2xl">
            <div className="text-pink font-montserrat mr-2">
                Rémy
            </div>
            <div className="text-blue font-montserrat">
                Bamas
            </div>
        </div>
        <div className=" flex m-8 text-2xl h-min text-pink">
            <Link className="hover:border-b-2 border-b-0 border-pastel mr-2" href="mailto:bamasremy43@gmail.com">Me contacter</Link>
            <Link className="hover:border-b-2 border-b-0 border-pastel ml-2 mr-2" href="/portfolio">Portfolio</Link>
            <Link className="hover:border-b-2 border-b-0 border-pastel ml-2" href="/">à propos</Link>
        </div>
        </div>
)
}