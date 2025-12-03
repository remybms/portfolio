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
            <div className={styles.formation}>
                {displayedData.map((item, index) => (
                    <div className={styles.experience} key={index}>
                        <h1 className={styles.title}>{item.poste}{item.entreprise != null ? ", " : ""}{item.entreprise}</h1>
                        <div className={styles.dates}>
                            <div className={styles.date}>{item.embauche}</div>
                            <div>-</div>
                            <div className={styles.date}>{item.depart}</div>
                        </div>
                        <ul className={styles.missions}>
                            {item.mission1 && <li>{item.mission1}</li>}
                            {item.mission2 && <li>{item.mission2}</li>}
                            {item.mission3 && <li>{item.mission3}</li>}
                        </ul>

                    </div>
                ))}
            </div>
            <button onClick={displayMore} className={styles.button}>
                {fullData ? "Afficher moins ⏶" : "Afficher plus ⏷"}
            </button>

        </>
    )
}