import React from 'react'
import Navebar from '../components/Navbar'
import Footer from '../components/Footer'

const SingleProvider = () => {
  return (
    <div>
          <Navebar />
          <div className='w-full h-[500px] bg-slate-300 flex justify-center'>
              <div className='w-[400px] h-[400px] rounded-full bg-slate-300 border-8 border-[#E1EDF8] z-10 absolute top-[395px]'></div>
      </div>
      <div className='w-full mt-72 flex flex-col items-center justify-center mx-auto max-w-[900px]'>
        <h2 className='text-5xl font-semibold font-Volkhov mb-16'>Company Name</h2>
        <p className='text-center text-lg'>An event management company is a business that specializes in organizing and executing events such as weddings, corporate events, concerts, festivals, and more. These companies typically handle all aspects of event planning, including budgeting, venue selection, logistics, marketing, and more. They work closely with clients to understand their needs and goals for the event, and then use their expertise and resources to bring the event to life. Some event management companies may also offer additional services such as event design, entertainment booking, catering, and event rentals. Overall, the goal of an event management company is to take the stress and hassle out of planning and executing a successful event.</p>
      </div>
      
      <Footer/>
    </div>
  )
}

export default SingleProvider
