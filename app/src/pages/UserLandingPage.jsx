import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ServiceCard from '../components/ServiceCard'



const UserLandingPage = () => {
  return (
    <div>
          <Navbar/>
      <Banner />
      <div className='w-full'>
      <h1 className='uppercase font-Volkhov m-7 text-2xl md:text-4xl lg:text-5xl text-center'>services</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1300px] mx-auto'>
        <ServiceCard />
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        </div>
        </div>
    </div>
  )
}

export default UserLandingPage
