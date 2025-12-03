import React from "react";
import formationData from "../../data/data.json"
import styles from "@/styles/Formation.module.css"

export default function School() {

    const data = formationData.formation

    return (
        <div className={styles.formation}>
            {data.map((item) => (
                <div className={styles.experience}>
                    <h1 className={styles.title}>{item.diplome_ou_formation}</h1>
                    <div className={styles.etablissement}>{item.etablissement}{item.ville != null ? ", " : ""}{item.ville}</div>
                    <div className={styles.dates}>
                        <div>{item.debut_ou_obtention}</div>
                        <div>{item.fin != null ? "-" : ""}</div>
                        <div>{item.fin}</div>
                    </div>
                    <div className={styles.contenu}>
                        <div>{item.apprentissage}</div>
                        <div>{item.mention}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}