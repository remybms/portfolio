import React from "react";
import workData from "@/data/data.json"
import styles from '@/styles/Formation.module.css'


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
            <div class={styles.formation}>
                {displayedData.map((item) => (
                    <div class={styles.experience}>
                        <h1 class={styles.title}>{item.poste}{item.entreprise != null ? ", " : ""}{item.entreprise}</h1>
                        <div class={styles.dates}>
                            <div class={styles.date}>{item.embauche}</div>
                            <div>-</div>
                            <div class={styles.date}>{item.depart}</div>
                        </div>
                        <ul class={styles.missions}>
                            {item.mission1 != null ? <li>{item.mission1}</li> : ""}
                            {item.mission2 != null ? <li>{item.mission2}</li> : ""}
                            {item.mission3 != null ? <li>{item.mission3}</li> : ""}
                        </ul>

                    </div>
                ))}
            </div>
            <button onClick={displayMore} class={styles.button}>
                {fullData ? "Afficher moins ⏶" : "Afficher plus ⏷"}
            </button>

        </>
    )
}