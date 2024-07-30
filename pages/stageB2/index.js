import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function Stage() {
    return (
        <main className="flex flex-col justify-between min-h-screen bg-darkblue">
            <Head>
                <title>Rémy Bamas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <h1 className="flex text-darkpink text-3xl justify-center font-bold mt-4 tablet:mt-0">
                Mon stage de fin d'année
            </h1>
            <div>
                <p className="flex text-pink text-xl mt-8 mx-10 text-center">
                    Afin de valider ma deuxième année d'études, j'ai dû réaliser une période de stage en entreprise. J'ai donc décidé d'intégrer l'équipe de Nantes Ynov Campus en tant que Mentor Informatique, poste que j'occuperais également en tant qu'alternant à partir d'octobre.
                </p>
                <p className="flex text-pink text-xl mx-10 text-center justify-center">
                    Durant cette période de stage, je serai accompagné des autres mentors informatiques déjà présent, afin de préparer au mieux l'année de cours 2024/2025 des bachelors 1 et 2.
                </p>
            </div>

            <ul className="p-10 space-y-4 text-lg">
                <li className="flex flex-col space-y-2 items-center">
                    <h2 className="border-b-2 w-fit text-blue font-semibold text-xl px-1 text-center">
                        Semaine 1 : Mes débuts à Nantes Ynov Campus !
                    </h2>
                    <p className="text-pastel text-center tablet:mx-20 pc:mx-40">
                        Ma première semaine au sein de Nantes Ynov Campus s'est essentiellement axée sur la prise de poste. On m'a fait une visite des locaux, j'ai pu rencontrer l'équipe mentors de l'école, et plus particulièrement les mentors informatiques qui m'accompagneront tout au long de l'année. Nous avons ensemble commencé à préparer les ymmersions qui auront lieu en septembre pour les premières années. On m'a transmis l'organisation de celles de l'année dernière que je puisse voir ce qui est possible, ce qui ne l'est pas, ce qui a été fait et ce qui doit être enlever.
                    </p>
                </li>
                <li className="flex flex-col space-y-2 items-center">
                    <h2 className="border-b-2 w-fit text-blue font-semibold text-xl px-1 text-center">
                        Semaine 2
                    </h2>
                    <p className="text-pastel text-center tablet:mx-20 pc:mx-40">
                        Au cours de cette deuxième semaine, j'ai pu assister à une réunion en compagnie du responsable pédagogique, du référent filière et d'un collègue mentor. Au cours de cette réunion, nous avons essentiellement vu le planning des trois semaines d'ymmersions, et nous avons commencé la répartition de présence sur ces journées de cours pour les premières années. Sur cette semaine, j'ai également pu commencer à manipuler les outils nécessaires pour donner cours, tel que ytrack, une plateforme sur laquelle les étudiants pourront s'entrainer à coder avec de nouveaux langages.
                    </p>
                </li>

            </ul>
            <Footer/>
        </main>
    )
}