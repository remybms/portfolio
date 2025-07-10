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

      <main className='min-h-screen bg-darkgrey'>
        <Head>
          <title>Rémy Bamas Lunay</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="grid grid-cols-1 text-center pc:text-start content-around h-screen">
          <div className='flex flex-col pc:flex-row justify-center items-center content-center text-pink '>
            <div className='pc:mr-20 pc:mx-5 mb-2 pc:mb-0 justify-center flex tablet:w-2/5 w-3/5 pc:w-1/6 pc:block'>
              <img src='/pictures/moi.jpg' alt='photo de profil' className='rounded-3xl' />
            </div>
            <div className='flex flex-col h-fit space-y-5 items-center pc:items-start pc:my-32'>
              <div className='text-3xl font-bold'>Rémy Bamas Lunay - Développeur Web</div>
              <div>
                <div className='text-2xl font-semibold'>Qui suis-je ?</div>
                <div className='text-xl mx-4 phone:mx-0'>Je suis un développeur web full stack, passionné et expérimenté.</div>
              </div>
              <div>
                <div className='text-2xl font-semibold'>Mes passions</div>
                <ul className='text-xl list-disc ml-5'>
                  <li>Sports mécaniques</li>
                  <li>Breakdance</li>
                </ul>
              </div>
              <div className='flex space-x-4'>
                <Link href='https://www.linkedin.com/in/rémy-bamas-lunay-83ba7a170'><AiFillLinkedin size={50} /></Link>
                <Link href="https://github.com/remybms"><AiFillGithub size={50} /></Link>
              </div>
            </div>
          </div>
          <div className='animate-bounce hidden tablet:flex justify-center pc:mb-5 text-blue self-end'>
            <a href='#formation'><AiOutlineArrowDown size={42} /></a>
          </div>
        </div>
        <div id='formation' className='flex flex-col max-w-screen items-center tablet:pt-20'>
          <ul className='grid grid-cols-2 tablet:grid-cols-3 pc:flex pc:flex-row pc:space-x-10 mb-14 text-darkpink'>
            <li className='relative flex'>
              <IoLogoJavascript size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                <circle cx="50" cy="50" r="35" stroke="#4A919E" strokeWidth="5" fill='transparent' strokeDasharray={315} strokeDashoffset={110} strokeLinecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />

              </svg>
            </li>
            <li className='relative flex'>
              <FaPython size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                <circle cx="50" cy="50" r="35" stroke="#4A919E" strokeWidth="5" fill='transparent' strokeDasharray={315} strokeDashoffset={170} strokeLinecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />

              </svg>
            </li>
            <li className='relative flex'>
              <FaJava size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                <circle cx="50" cy="50" r="35" stroke="#4A919E" strokeWidth="5" fill='transparent' strokeDasharray={315} strokeDashoffset={190} strokeLinecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />

              </svg>
            </li>
            <li className='relative flex'>
              <SiPhp size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                <circle cx="50" cy="50" r="35" stroke="#4A919E" strokeWidth="5" fill='transparent' strokeDasharray={315} strokeDashoffset={130} strokeLinecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </li>
            <li className='col-start-1 col-end-3 tablet:col-start-2 tablet:col-end-2 flex justify-center items-center'>
              <div className='relative flex'>
                <SiCsharp size={60} className='m-10' />
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                  <circle cx="50" cy="50" r="35" stroke="#4A919E" strokeWidth="5" fill='transparent' strokeDasharray={315} strokeDashoffset={170} strokeLinecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
                </svg>
              </div>
            </li>

          </ul>

          <div className=' text-2xl text-blue p-2 border-4 rounded-lg'>
            <button onClick={workDisplay} className={` hover:bg-pink hover:text-darkgrey p-2 rounded-md ${experience === 'work' ? 'bg-darkpink text-darkgrey' : 'bg-darkgrey text-pink'}`}>
              Expérience
            </button>
            <button onClick={schoolDisplay} className={`hover:bg-pink hover:text-darkgrey p-2 rounded-md ${experience === 'school' ? 'bg-darkpink text-darkgrey' : 'bg-darkgrey text-pink'}`}>
              Formation
            </button>
          </div>
          <div>
            {experience === "work" && <Work />}
            {experience === "school" && <School />}
          </div>

        </div>

        <Footer />
      </main></>
  )
}
