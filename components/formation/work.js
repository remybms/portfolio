import React from "react";
import workData from "@/data/data.json"


export default function Work() {
    const data = workData.experiences
    const [fullData, displayFullData] = React.useState(false);
    const [displayedData, setDisplayedData] = React.useState(data.slice(data.length - 3, data.length));

    const displayMore = () => {
        displayFullData(!fullData);
        if (fullData) {
            setDisplayedData(data.slice(data.length - 3, data.length))
        } else {
            setDisplayedData(data)
        }
    }


    return (
        <>
            <div className="flex flex-col-reverse text-center m-10 space-y-14 space-y-reverse">
                {displayedData.map((item) => (
                    <div className="grid grid-cols-2 text-pink justify-items-center items-center space-y-4 text-lg">
                        <h1 className="col-span-2 text-2xl font-bold text-darkpink">{item.poste}</h1>
                        <div className="flex flex-col text-xl">
                            <div>{item.entreprise}</div>
                            <div>{item.lieu}</div>
                        </div>
                        <div className="grid grid-cols-1 tablet:grid-cols-[1fr_auto_1fr] w-1/2 tablet:w-fit justify-items-center text-xl">
                            <div className="tablet:w-fit tablet:justify-self-end">{item.embauche}</div>
                            <div className="mx-2">-</div>
                            <div className="tablet:w-fit">{item.depart}</div>
                        </div>
                        <div className="col-span-2">{item.mission1}</div>
                        <div className="col-span-2">{item.mission2}</div>
                        <div className="col-span-2">{item.mission3}</div>
                    </div>
                ))}
            </div>
            <div className="flex w-full justify-center text-xl font-semibold text-darkpink mb-10 mt-4">
                <button onClick={displayMore} className="tablet:border-b-2 border-transparent hover:border-darkpink px-1">
                    {fullData ? "Afficher moins ⏶" : "Afficher plus ⏷"}
                </button>
            </div>

        </>
    )
}