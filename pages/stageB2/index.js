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

            <ul className="p-10 space-y-8 text-lg">
                <li className="flex flex-col space-y-2 items-center">
                    <div className="flex space-x-6 text-blue items-center">
                        <h2 className="border-b-2 w-fit  font-semibold text-xl px-1 text-center">
                            Semaine 1 : Mes débuts à Nantes Ynov Campus !
                        </h2>
                        <div>
                            20/07/2024
                        </div>
                    </div>

                    <p className="text-pastel text-center tablet:mx-20 pc:mx-40">
                        Ma première semaine au sein de Nantes Ynov Campus s'est essentiellement axée sur la prise de poste. On m'a fait une visite des locaux, j'ai pu rencontrer l'équipe mentors de l'école, et plus particulièrement les mentors informatiques qui m'accompagneront tout au long de l'année. Nous avons ensemble commencé à préparer les ymmersions qui auront lieu en septembre pour les premières années. On m'a transmis l'organisation de celles de l'année dernière que je puisse voir ce qui est possible, ce qui ne l'est pas, ce qui a été fait et ce qui doit être enlever.
                    </p>
                </li>
                <li className="flex flex-col space-y-2 items-center">
                    <div className="flex space-x-6 text-blue items-center">
                        <h2 className="border-b-2 w-fit  font-semibold text-xl px-1 text-center">
                            Semaine 2 : Première réunion
                        </h2>
                        <div>
                            27/07/2024
                        </div>
                    </div>

                    <p className="text-pastel text-center tablet:mx-20 pc:mx-40">
                        Au cours de cette deuxième semaine, j'ai pu assister à une réunion en compagnie du responsable pédagogique, du référent filière et d'un collègue mentor. Au cours de cette réunion, nous avons essentiellement vu le planning des trois semaines d'ymmersions, et nous avons commencé la répartition de présence sur ces journées de cours pour les premières années. Sur cette semaine, j'ai également pu commencer à manipuler les outils nécessaires pour donner cours, tel que ytrack, une plateforme sur laquelle les étudiants pourront s'entrainer à coder avec de nouveaux langages.
                    </p>
                </li>
                <li className="flex flex-col space-y-2 items-center">
                    <div className="flex space-x-6 text-blue items-center">
                        <h2 className="border-b-2 w-fit  font-semibold text-xl px-1 text-center">
                            Semaine 3 : Préparer l'initiation
                        </h2>
                        <div>
                            03/08/2024
                        </div>
                    </div>

                    <p className="text-pastel text-center tablet:mx-20 pc:mx-40">
                        Pendant cette troisième semaine, j'ai pu commencer à préparer des cours que je ferais aux premières années pendant leurs ymmersions, comme par exemple une initiation au HTML / CSS. Ce cours est nécessaire car au cours d'une réunion, nous nous sommes aperçus que sur la suite de leurs études, les étudiants n'avaient pas forcément toutes les bonnes pratiques nécessaires au développement web. Il est donc important de leur apprendre au moins les bases sur une session de 3 heures pour qu'ils puissent par la suite s'améliorer.
                    </p>
                </li>
                <li className="flex flex-col space-y-2 items-center">
                    <div className="flex space-x-6 text-blue items-center">
                        <h2 className="border-b-2 w-fit  font-semibold text-xl px-1 text-center">
                            Semaine 4 : Premiers problèmes !
                        </h2>
                        <div>
                            10/08/2024
                        </div>
                    </div>

                    <p className="text-pastel text-center tablet:mx-20 pc:mx-40">
                        Cette semaine a démarrée avec un problème technique. Tous les PC de nos collaborateurs n'arrivaient plus a avoir accès à internet. Ce problème m'a permis d'aborder un nouvel aspect de ce poste : régler les problèmes comme celui-ci en contactant le support informatique. En tant que mentors informatiques, nous sommes le lien direct avec le support ce qui permet de régler les incidents comme celui-ci dans les meilleurs délais. Durant cette semaine, j'ai également pu participer à l'installation d'un troisième écran sur le poste d'un collaborateur, que ce soit sur la recherche du composant nécessaire à cette installation ou même l'installation directement.
                    </p>
                </li>
                <li className="flex flex-col space-y-2 items-center">
                    <div className="flex space-x-6 text-blue items-center">
                        <h2 className="border-b-2 w-fit  font-semibold text-xl px-1 text-center">
                            Semaine 5 : Mentor Academy
                        </h2>
                        <div>
                            24/08/2024
                        </div>
                    </div>

                    <p className="text-pastel text-center tablet:mx-20 pc:mx-40">
                        Cette semaine avait lieu ma formation de mentor à Lyon. Cette formation me permet de connaitre le comportement à avoir avec les étudiants, comment gérer certains comportements et certaines situations difficiles. Durant cette formation, j'étais accompagné dans un premier temps de tous les mentors juniors d'Ynov. Nous avons participé à des mises en situations, eu des discussions sur nos différentes réactions et nos différents chemins de pensées sur des éléments qui peuvent nous arriver tout au long de l'année et nous avons également eu des parties un peu plus théoriques de la part de nos formatrices. Le jeudi, nous avons été rejoint de nos mentors seniors et avons vu les différents éléments que nous devrons mettre en place et comment le faire avec les étudiants tout au long de l'année.
                    </p>
                </li>
            </ul>
            <Footer />
        </main>
    )
}