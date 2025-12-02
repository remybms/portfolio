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
      <main class={styles.portfolio}>
        <div class={styles.selector}>
          {data.map((project, index) => (
            <button key={index} onClick={() => toggleProject(index)} class={openIndex === index ? styles.selectedTitle : styles.notSelectedTitle}>
              {project.titre}
            </button>
          ))}
        </div>
        {data.map((project, index) => (
          <div key={index} className={openIndex === index ? styles.selectedProject : styles.notSelectedProject}>
            <img src={project.img} alt={project.titre} class={styles.img} />
            <div class={styles.project}>
              <div class={styles.description}>
                <div class={styles.title}>
                  {project.titre}
                </div>
                <p>
                  {project.description}
                </p>
                <p>
                  {project.lieu}
                </p>
              </div>
              <div class={styles.links}>
                {project.github && <Link href={project.github} class={styles.link} target='_blank'>Github</Link>}
                {project.live && <Link href={project.live} class={styles.link} target='_blank'>Live</Link>}
              </div>
            </div>
          </div>
        ))}
      </main></>
  )
}