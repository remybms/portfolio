import React from "react";
import formationData from "../../data/data.json"
import styles from "@/styles/Formation.module.css"

export default function School() {

    const data = formationData.formation

    return (
        <div className="flex flex-col-reverse text-center m-10 space-y-14 space-y-reverse">
            {data.map((item) => (
                <div className="grid grid-cols-1 text-pink justify-items-center items-center space-y-4 text-lg">
                    <h1 class={styles.title}>{item.diplome_ou_formation}</h1>
                    <div className="flex flex-col text-xl">{item.etablissement}{item.ville != null ? ", " : ""}{item.ville}</div>
                    <div class={styles.dates}>
                        <div>{item.debut_ou_obtention}</div>
                        <div>{item.fin != null ? "-" : ""}</div>
                        <div>{item.fin}</div>
                    </div>
                    <div className="text-xl">
                        <div>{item.apprentissage}</div>
                        <div>{item.mention}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}