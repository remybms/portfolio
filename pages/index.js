"use client"

import Header from '@/components/header'
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowDown } from 'react-icons/ai'
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaJava } from "react-icons/fa6";
import { SiPhp, SiCsharp } from "react-icons/si";
import Link from 'next/link'
import React from 'react'
import Work from '@/components/formation/work.tsx'
import School from '@/components/formation/school.tsx'
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

      <main className='min-h-screen bg-darkblue'>
        <Head>
          <title>Rémy Bamas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="flex-col mb-16">
          <div className='flex flex-col-reverse tablet:flex-row justify-center content-center text-pink pc:mb-60 mb-32 pt-24 pc:pt-0'>
            <div className='flex flex-col h-fit pc:my-32 items-center text-center'>
              <div className='text-3xl animate-pulse'>Développeur Web</div>
              <div className='text-xl mx-4 phone:mx-0'>Je suis un développeur web full stack, passionné et expérimenté.</div>
              <div className='flex space-x-4'>
                <Link href='https://www.linkedin.com/in/rémy-bamas-83ba7a170'><AiFillLinkedin size={50} /></Link>
                <Link href="https://github.com/remybms"><AiFillGithub size={50} /></Link>
              </div>

            </div>
            <div className='pc:ml-20 tablet:mr-5 justify-center flex tablet:block'>
              <img src='/pictures/moi.jpg' width="250" />
            </div>
          </div>
          <div className='animate-bounce flex justify-center text-blue self-end'>
            <a href='#formation'><AiOutlineArrowDown size={42} /></a>
          </div>
        </div>
        <div id='formation' className='flex flex-col max-w-screen items-center'>
          <ul className='grid grid-cols-2 tablet:grid-cols-3 pc:flex pc:flex-row pc:space-x-10 mb-14'>
            <li className='relative flex text-js'>
              <IoLogoJavascript size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                <circle cx="50" cy="50" r="35" stroke="#E4C01A" stroke-width="5" fill='transparent' strokeDasharray={315} strokeDashoffset={130} stroke-linecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </li>
            <li className='relative flex text-python'>
              <FaPython size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                <circle cx="50" cy="50" r="35" stroke="#3e74a2" stroke-width="5" fill='transparent' strokeDasharray={315} strokeDashoffset={170} stroke-linecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </li>
            <li className='relative flex text-java'>
              <FaJava size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                <circle cx="50" cy="50" r="35" stroke="#d52827" stroke-width="5" fill='transparent' strokeDasharray={315} strokeDashoffset={190} stroke-linecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </li>
            <li className='relative flex text-php'>
              <SiPhp size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                <circle cx="50" cy="50" r="35" stroke="#556096" stroke-width="5" fill='transparent' strokeDasharray={315} strokeDashoffset={150} stroke-linecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </li>
            <li className='relative flex text-c#'>
              <SiCsharp size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                <circle cx="50" cy="50" r="35" stroke="#6f0885" stroke-width="5" fill='transparent' strokeDasharray={315} strokeDashoffset={170} stroke-linecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </li>

          </ul>

          <div className=' text-2xl text-pastel p-2 border-4 rounded-lg'>
            <button onClick={workDisplay} className='hover:bg-darkpink active:bg-pink active:text-darkblue p-2 rounded-md'>Expérience</button>
            <button onClick={schoolDisplay} className='hover:bg-darkpink active:bg-pink active:text-darkblue p-2 rounded-md'>Formation</button>
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
