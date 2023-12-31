import Header from '@/components/header'

export default function Portfolio() {
  return (
    <>
    <main className='min-h-screen bg-darkblue'>
      <Header />
      <div className="grid grid-cols-2 justify-around">

        <div className='text-darkpink text-xl m-4'>
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

        <div className='text-darkpink text-xl m-4'>
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
    </main></>
  )
}