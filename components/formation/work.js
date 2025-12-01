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
                    <div className="grid grid-cols-1 text-pink justify-items-center items-center space-y-4 text-lg text-center">
                        <h1 className="text-2xl font-bold text-darkpink">{item.poste}{item.entreprise != null ? ", " : ""}{item.entreprise}</h1>
                        <div className="flex w-1/2 tablet:w-fit justify-items-center">
                            <div className="tablet:w-fit tablet:justify-self-end">{item.embauche}</div>
                            <div className="mx-2">-</div>
                            <div className="tablet:w-fit">{item.depart}</div>
                        </div>
                        <ul className="text-xl space-y-2 list-disc list-inside tablet:w-4/5">
                            {item.mission1 != null ?<li>{item.mission1}</li> : ""}
                            {item.mission2 != null ?<li>{item.mission2}</li> : ""}
                            {item.mission3 != null ?<li>{item.mission3}</li> : ""}
                        </ul>

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