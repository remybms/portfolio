"use client"

import Image from 'next/image'
import Header from '@/components/header'
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowDown } from 'react-icons/ai'
import { BiLogoJava } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'
import Work from '@/components/formation/work.tsx'
import School from '@/components/formation/school.tsx'

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
              <div>Je suis un développeur web full stack, passionné et expérimenté.</div>
              <div className='flex'>
                <Link href='https://www.linkedin.com/in/rémy-bamas-83ba7a170'><AiFillLinkedin size={42} /></Link>
                <Link href="https://github.com/remybms"><AiFillGithub size={42} /></Link>
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
          <div className=' text-2xl text-pastel'>
            <button onClick={workDisplay} className='focus:bg-darkpink p-2 rounded-md'>Expérience</button>
            <button onClick={schoolDisplay} className='focus:bg-darkpink p-2 rounded
            
            
            -md'>Formation</button>
          </div>
          <div>
            {experience === "work" && <Work />}
            {experience === "school" && <School />}
          </div>

        </div>


      </main></>
  )
}
