import React from 'react'
import Footer from '../../components/Footer'
import Message from '../../components/providerComponents/Message'
import Navebar from '../../components/providerComponents/Navbar'

const Messages = () => {
  return (
    <div>
          <Navebar />
          <div className='w-full'>
              <div className='max-w-[1300px] mx-auto mt-10 mb-10 bg-white rounded-3xl p-5 flex flex-col gap-4'>
                  <Message email="example@gmail.com" chat="hai, how are you ! I'm fine thanks" time="11-01-2023"/>
                  <Message email="example@gmail.com" chat="hai, how are you ! I'm fine thanks" time="11-01-2023" />
                  <Message email="example@gmail.com" chat="hai, how are you ! I'm fine thanks" time="11-01-2023" />
                  <Message email="example@gmail.com" chat="hai, how are you ! I'm fine thanks" time="11-01-2023" />
                  <Message email="example@gmail.com" chat="hai, how are you ! I'm fine thanks" time="11-01-2023" />
                  <Message email="example@gmail.com" chat="hai, how are you ! I'm fine thanks" time="11-01-2023" />
                  <Message email="example@gmail.com" chat="hai, how are you ! I'm fine thanks" time="11-01-2023"/>
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Messages
