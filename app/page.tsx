import React from 'react'
import Image from 'next/image';

// Components
import Header from '@components/Header'

// Asssets
import Moonbami from '@public/assets/images/moonbami.jpg';

const App = () => {
  return (
    <main >
      <Header />
      <section id="profile" className="landing-section container h-[55rem] flex flex-wrap justify-evenly items-center gap-x-[25rem]">
      <div className="description text-white">
        <h1 className="text-8xl font-bold tracking-[-0.96px] mb-8">Hey there!</h1>
        <p className="w-[37.5rem] text-xl font-normal leading-7 ">My name is <strong className="landing-strong">Moonbami</strong>, and I am currently pursuing a career for being a <strong className="landing-strong">full-stack web developer</strong>. I am still a novice, but I am making <strong className="landing-strong">progress and learning</strong> on a daily basis.</p>
      </div>
      <div className="display-profile relative">
        <div className="square-holder-before"></div>
        <Image className="w-[21.875rem] h-[21.875rem] border-[3px] border-solid border-white rounded-lg" src={ Moonbami } alt="Jam Moonbami" />
        <div className="square-holder-after"></div>
      </div>
    </section>
    </main>
  )
}

export default App