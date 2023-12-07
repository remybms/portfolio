import Image from 'next/image'
import Header from '@/components/header'
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowDown } from 'react-icons/ai'
import {BiLogoJava} from 'react-icons/bi'
import Link from 'next/link'

export default function Home() {
  return (
    <>

      <main className='min-h-screen bg-darkblue'>
        <Header />
        <div className="flex-col h-screen">
          <div className='flex justify-center content-center text-pink mb-60'>
            <div className='grid-cols-1 gap-y-16 h-fit mt-32 mb-32'>
              <div className='text-3xl animate-pulse'>Développeur Web</div>
              <div>Je suis développeur web, spécialisé en front, passionné et expérimenté.</div>
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
        <div id='formation'>
        </div>


      </main></>
  )
}
