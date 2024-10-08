import React from 'react'
import HeaderTop from '@/components/HeaderTop'
import Navbar from '@/components/navbar'
import PageHero from '@/components/PageHero'
import Committee2 from './components/committee2'
import Footer from '@/components/Footer'

const MeetOurTeam = () => {
  return (
    <div>
      <HeaderTop isHomePage={false} />
      <Navbar />
      <PageHero 
  title="Programme Committee" 
  image="https://v1.nitj.ac.in/ITEP/img/01.jpg" 
/>
      <main className="container mt-12 mx-auto px-4">
        <Committee2 />
        </main>
        <Footer />
    </div>
  )
}

export default MeetOurTeam