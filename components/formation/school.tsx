import React from "react";

interface Formation {
    diplome_ou_formation: string;
    etablissement: string;
    ville: string;
    debut_ou_obtention: string;
    fin: string;
    apprentissage: string;
    mention: string;
}

export default function School() {
    const [data, setData] = React.useState<Formation[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/formation');
                const apiData = await response.json();
                setData(apiData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'API', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col-reverse text-center m-10 space-y-14 space-y-reverse">
            {data.map((item) => (
                <div className="grid grid-cols-2 text-pink justify-items-center items-center space-y-4 text-lg">
                    <h1 className="col-span-2 text-2xl font-bold text-darkpink">{item.diplome_ou_formation}</h1>
                    <div className="flex flex-col text-xl">
                        <div>{item.etablissement}</div>
                        <div>{item.ville}</div>
                    </div>
                    <div className="flex space-x-2 text-xl">
                        <div>{item.debut_ou_obtention}</div>
                        <div>{item.fin}</div>
                    </div>
                    <div className="col-span-2">{item.apprentissage}</div>
                    <div className="col-span-2">{item.mention}</div>
                </div>
            ))}
        </div>
    )
}