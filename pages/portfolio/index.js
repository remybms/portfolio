import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import projects from '@/data/data.json'
import React from 'react'
import Link from 'next/link'

export default function Portfolio() {

  const [openIndex, setOpenIndex] = React.useState(0);
  const data = projects.projets;

  const toggleProject = (index) => {
    setOpenIndex(index);
  }

  return (
    <>
      <main className='flex flex-col min-h-screen bg-darkgrey justify-between'>
        <Head>
          <title>Rémy Bamas Lunay - Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="grid pc:grid-cols-3 tablet:mx-20 mx-5 grid-cols-1 items-center justify-items-center space-y-5 text-pink">
          <div className='flex flex-col tablet:space-y-5 space-y-2 text-xl font-semibold justify-self-start'>
            {data.map((project, index) => (
              <button key={index} onClick={() => toggleProject(index)} className={`border-b-2 border-transparent hover:border-darkpink px-1 w-fit ${openIndex === index ? 'border-pink' : ''}`}>
                {project.titre}
              </button>
            ))}
          </div>
          <div className='pc:col-span-2'>
            {data.map((project, index) => (
              <div key={index} className={`${openIndex === index ? 'flex flex-col pc:w-2/3 justify-self-end items-start space-y-4' : 'hidden'}`}>
                <img src={project.img} alt={project.titre} className='w-full object-cover' />
                <div className='grid tablet:grid-cols-[auto_auto] w-full'>
                  <div className='justify-items-start'>
                    <div className='text-2xl font-bold text-darkpink'>
                      {project.titre}
                    </div>
                    <p>
                      {project.description}
                    </p>
                    <p>
                      {project.lieu}
                    </p>
                  </div>
                  <div className='flex h-fit space-x-2 tablet:justify-end'>
                    {project.github && <Link href={project.github} className='p-2 border-2 rounded-lg px-4'>Github</Link>}
                    {project.live && <Link href={project.live} className='p-2 border-2 rounded-lg px-4'>Live</Link>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main></>
  )
}