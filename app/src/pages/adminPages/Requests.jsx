import React, { useState } from 'react'
import MoreRequest from '../../components/adminComponents/MoreRequest'
import RequestsTable from '../../components/adminComponents/RequestsTable'
import Sidebar from '../../components/adminComponents/Sidebar'

const Requests = () => {
    const [addService, setAddService] = useState(false)
    const addServiceClose = () => setAddService(false);
  return (
    <div className='flex'>
          <Sidebar type="req" />
          <div className='w-full h-screen'>
              <div className='max-w-[1200px] mx-auto bg-white mt-20 rounded-3xl p-8'>
                  <RequestsTable more={setAddService} />
                  <MoreRequest onClose={addServiceClose} visible={addService}/>
                 
              </div>
          </div>
    </div>
  )
}

export default Requests
