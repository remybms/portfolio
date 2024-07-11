"use client"

import Header from '@/components/header'
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
        <Header />
        <div className="flex-col mb-16">
          <div className='flex justify-center content-center text-pink mb-60'>
            <div className='grid-cols-1 gap-y-16 h-fit mt-32 mb-32'>
              <div className='text-3xl animate-pulse'>Développeur Web</div>
              <div className='text-xl'>Je suis un développeur web full stack, passionné et expérimenté.</div>
              <div className='flex space-x-4'>
                <Link href='https://www.linkedin.com/in/rémy-bamas-83ba7a170'><AiFillLinkedin size={50} /></Link>
                <Link href="https://github.com/remybms"><AiFillGithub size={50} /></Link>
              </div>

            </div>
            <div className='ml-20'>
              <img src='/pictures/moi.jpg' width="250" />
            </div>
          </div>
          <div className='animate-bounce flex justify-center text-blue self-end'>
            <a href='#formation'><AiOutlineArrowDown size={42} /></a>
          </div>
        </div>
        <div id='formation' className='flex flex-col max-w-screen items-center'>
          <div className='flex space-x-10 mb-14'>
            <div className='relative flex text-js'>
              <IoLogoJavascript size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
              <circle cx="50" cy="50" r="35" stroke="#E4C01A" stroke-width="5" fill='transparent' strokeDasharray={315} strokeDashoffset={130} stroke-linecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </div>
            <div className='relative flex text-python'>
              <FaPython size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                <circle cx="50" cy="50" r="35" stroke="#3e74a2" stroke-width="5" fill='transparent' strokeDasharray={315} strokeDashoffset={170} stroke-linecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </div>
            <div className='relative flex text-java'>
              <FaJava size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
              <circle cx="50" cy="50" r="35" stroke="#d52827" stroke-width="5" fill='transparent' strokeDasharray={315} strokeDashoffset={190} stroke-linecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </div>
            <div className='relative flex text-php'>
              <SiPhp size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
              <circle cx="50" cy="50" r="35" stroke="#556096" stroke-width="5" fill='transparent' strokeDasharray={315} strokeDashoffset={150} stroke-linecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </div>
            <div className='relative flex text-c#'>
              <SiCsharp size={60} className='m-10' />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='absolute'>
              <circle cx="50" cy="50" r="35" stroke="#6f0885" stroke-width="5" fill='transparent' strokeDasharray={315} strokeDashoffset={170} stroke-linecap="round" stroke-mitterlimit="0" transform="rotate(-90 ) translate(-100 0)" />
              </svg>
            </div>

          </div>

          <div className=' text-2xl text-pastel p-2 border-4 rounded-lg'>
            <button onClick={workDisplay} className='focus:bg-darkpink p-2 rounded-md'>Expérience</button>
            <button onClick={schoolDisplay} className='focus:bg-darkpink p-2 rounded-md'>Formation</button>
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
