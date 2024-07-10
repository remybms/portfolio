import React from "react";

interface Formation{
    diplome_ou_formation: string;
    etablissement: string;
    ville: string;
    debut_ou_obtention: string;
    fin: string;
    apprentissage: string;
    mention: string;
}

export default function School(){
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

    return(
        <div className="flex flex-col-reverse text-center">
            {data.map((item) => (
                <div>
                    <div>{item.diplome_ou_formation}</div>
                    <div>{item.etablissement}</div>
                    <div>{item.ville}</div>
                    <div>{item.debut_ou_obtention}</div>
                    <div>{item.fin}</div>
                    <div>{item.apprentissage}</div>
                    <div>{item.mention}</div>
                </div>
            ))}
        </div>
    )
}