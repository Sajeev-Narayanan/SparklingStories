import React from 'react'
import EventManagersTable from '../../components/adminComponents/EventManagersTable'
import Sidebar from '../../components/adminComponents/Sidebar'

const EventManagers = () => {
  return (
    <div className='flex'>
          <Sidebar type="event" />
          <div className='w-full h-screen'>
              <div className='max-w-[1200px] mx-auto bg-white mt-20 rounded-3xl p-8'>
                  <EventManagersTable/>
                 
              </div>
          </div>
    </div>
  )
}

export default EventManagers

 