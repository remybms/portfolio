"use client"

import Header from '@/components/header'
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowDown } from 'react-icons/ai'
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaJava } from "react-icons/fa6";
import { SiPhp, SiCsharp } from "react-icons/si";
import Link from 'next/link'
import React from 'react'
import Work from '@/components/formation/work'
import School from '@/components/formation/school'
import Footer from '@/components/footer'
import Portfolio from '@/components/portfolio';
import styles from '@/styles/Home.module.css'

export default function Home() {

  const [experience, setExperience] = React.useState("work")

  const workDisplay = () => {
    setExperience("work");
  };
  const schoolDisplay = () => {
    setExperience("school");
  };

  return (
    <>

      <main className={styles.main}>
        <Head>
          <title>Rémy Bamas Lunay</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className={styles.presentationBloc}>
          <img src='/pictures/moi.jpg' alt='photo de profil' className={styles.img} />
          <div className={styles.presentation}>
            <div className={styles.name}>Rémy Bamas Lunay - Développeur Web</div>
            <div>
              <div className={styles.subtitle}>Qui suis-je ?</div>
              <div className={styles.description}>Je suis un développeur web full stack, passionné et expérimenté.</div>
            </div>
            <div>
              <div className={styles.subtitle}>Mes passions</div>
              <ul className={styles.passionsList}>
                <li>Sports mécaniques</li>
                <li>Breakdance</li>
              </ul>
            </div>
            <div className={styles.links}>
              <Link href='https://www.linkedin.com/in/rémy-bamas-lunay-83ba7a170' target='_blank' className={styles.logo}><AiFillLinkedin size={50} /></Link>
              <Link href="https://github.com/remybms" target='_blank' className={styles.logo}><AiFillGithub size={50} /></Link>
            </div>
          </div>
        </div>
        <div id='formation' className={styles.formation}>
          <ul className={styles.languagesList}>
            <li className={styles.language}>
              <IoLogoJavascript size={60}/>
            </li>
            <li className={styles.languageBlue}>
              <FaPython size={60} />
            </li>
            <li className={styles.language}>
              <FaJava size={60} />
            </li>
            <li className={styles.languageBlue}>
              <SiPhp size={60} />
            </li>
            <li className={styles.lastLanguage}>
                <SiCsharp size={60}/>
            </li>
          </ul>

          <div className={styles.selector}>
            <button onClick={workDisplay} className={experience === 'work' ? styles.selected : styles.notselected}>
              Expérience
            </button>
            <button onClick={schoolDisplay} className={experience === 'school' ? styles.selected : styles.notselected}>
              Formation
            </button>
          </div>
          <div>
            {experience === "work" && <Work />}
            {experience === "school" && <School />}
          </div>

        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <Footer />
      </main></>
  )
}
