export default function Header() {
    return (
        <div className="flex justify-between max-w-screen bg-darkblue">
        <div className="flex m-8 text-2xl">
            <div className="text-pink font-montserrat">
                Rémy
            </div>
            <div className="text-blue font-montserrat">
                Bamas
            </div>
        </div>
        <div className=" flex m-8 text-2xl h-min text-pink">
            <a className="hover:border-b-2 border-b-0 border-pastel mr-2" href="contact">Me contacter</a>
            <a className="hover:border-b-2 border-b-0 border-pastel ml-2 mr-2" href="portfolio">Portfolio</a>
            <a className="hover:border-b-2 border-b-0 border-pastel ml-2" href="/">à propos</a>
        </div>
        </div>
)
}