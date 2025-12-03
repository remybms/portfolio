import projects from '@/data/data.json'
import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Portfolio.module.css'

export default function Portfolio() {

  const [openIndex, setOpenIndex] = React.useState(0);
  const data = projects.projets;

  const toggleProject = (index) => {
    setOpenIndex(index);
  }

  return (
    <>
      <main className={styles.portfolio}>
        <div className={styles.selector}>
          {data.map((project, index) => (
            <button key={index} onClick={() => toggleProject(index)} className={openIndex === index ? styles.selectedTitle : styles.notSelectedTitle}>
              {project.titre}
            </button>
          ))}
        </div>
        {data.map((project, index) => (
          <div key={index} className={openIndex === index ? styles.selectedProject : styles.notSelectedProject}>
            <img src={project.img} alt={project.titre} className={styles.img} />
            <div className={styles.project}>
              <div className={styles.description}>
                <div className={styles.title}>
                  {project.titre}
                </div>
                <p>
                  {project.description}
                </p>
                <p>
                  {project.lieu}
                </p>
              </div>
              <div className={styles.links}>
                {project.github && <Link href={project.github} className={styles.link} target='_blank'>Github</Link>}
                {project.live && <Link href={project.live} className={styles.link} target='_blank'>Live</Link>}
              </div>
            </div>
          </div>
        ))}
      </main></>
  )
}