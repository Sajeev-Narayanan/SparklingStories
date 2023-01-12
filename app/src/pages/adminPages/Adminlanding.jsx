import React from 'react'
import Sidebar from '../../components/adminComponents/Sidebar'
import Banner from '../../components/Banner'

const Adminlanding = () => {
  return (
    <div className='flex'>
          <Sidebar />
      <div className=''>
        <Banner type='admin'/>
          </div>
    </div>
  )
}

export default Adminlanding
