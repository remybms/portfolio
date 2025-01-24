import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'

export default function Portfolio() {
  return (
    <>
      <main className=' flex flex-col min-h-screen bg-darkblue justify-between'>
        <Head>
          <title>Rémy Bamas - Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="grid pc:grid-cols-2 grid-cols-1 justify-around text-center justify-items-center">

          <div className='text-darkpink text-xl m-4 w-fit'>
            <h1 className='m-4 w-fit'>
              Groupie Tracker
            </h1>
            <img src='/pictures/groupietracker.png' width={500} />
            <div className='text-pink mt-4'>
              Projet avec serveur go se liant à une API.
            </div>
            <div className='text-pink'>
              Réalisé à Nantes Ynov Campus.
            </div>
          </div>

          <div className='text-darkpink text-xl m-4 w-fit'>
            <h1 className='m-4 w-fit'>
              Les Briscards
            </h1>
            <img src='/pictures/briscards.png' width={500} />
            <div className='text-pink mt-4'>
              Projet en Next.js réalisé en groupe.
            </div>
            <div className='text-pink'>
              Réalisé à Nantes Ynov Campus.
            </div>
          </div>
        </div>
        <Footer />
      </main></>
  )
}