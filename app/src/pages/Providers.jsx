import React from 'react'
import Footer from '../components/Footer'
import Navebar from '../components/Navbar'
import ProvidersCard from '../components/ProvidersCard'


const Providers = () => {
  return (
    <div className='w-full'>
          <Navebar />
          <div className='lg:max-w-[1600px] md:max-w-[900px] max-w-[400px] mx-auto'>
              <h2 className='font-Volkhov text-3xl mt-10 ml-10 mb-10'>wedding planners</h2>
              <div className='grid lg:grid-cols-3 md:grid-cols-2'>
              <ProvidersCard />
              <ProvidersCard /> 
              <ProvidersCard /> 
              <ProvidersCard/> 
              </div>
              
                     
          </div>
          <Footer/>
    </div>
  )
}

export default Providers
