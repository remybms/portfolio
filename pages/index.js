import Image from 'next/image'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="flex justify-center content-center bg-darkblue text-pink">
          <div className='grid-cols-1 pt-20'>
            <div className='text-3xl animate-pulse'>Développeur Web</div>
            <div>Je suis développeur web, spécialisé en front, passionné et expérimenté.</div>
            
          </div>
          <div className='ml-20'>
            <img src='/pictures/photo.png' width="250"/>
          </div>
        </div>


      </main></>
  )
}
