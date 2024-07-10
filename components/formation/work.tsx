import React from "react";

interface Experience{
    poste: string;
    entreprise: string;
    lieu: string;
    embauche: string;
    depart: string;
    mission1: string;
    mission2: string;
    mission3: string;
}

export default function Work() {
    const [data, setData] = React.useState<Experience[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/experience');
                const apiData = await response.json();
                setData(apiData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'API', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col-reverse text-center">
            {data.map((item) => (
                <div>
                    <div>{item.poste}</div>
                    <div>{item.entreprise}</div>
                    <div>{item.lieu}</div>
                    <div>{item.embauche}</div>
                    <div>{item.depart}</div>
                    <div>{item.mission1}</div>
                    <div>{item.mission2}</div>
                    <div>{item.mission3}</div>
                </div>
            ))}
        </div>
    )
}