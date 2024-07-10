import React from "react";

interface Experience {
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
        <div className="flex flex-col-reverse text-center m-10 space-y-14 space-y-reverse">
            {data.map((item) => (
                <div className="grid grid-cols-2 text-pink justify-items-center items-center space-y-4 text-lg">
                    <h1 className="col-span-2 text-2xl font-bold text-blue">{item.poste}</h1>
                    <div className="flex flex-col text-xl">
                        <div>{item.entreprise}</div>
                        <div>{item.lieu}</div>
                    </div>
                    <div className="flex space-x-2 text-xl">
                        <div>{item.embauche}</div>
                        <div>-</div>
                        <div>{item.depart}</div>
                    </div>
                    <div className="col-span-2">{item.mission1}</div>
                    <div className="col-span-2">{item.mission2}</div>
                    <div className="col-span-2">{item.mission3}</div>
                </div>
            ))}
        </div>
    )
}