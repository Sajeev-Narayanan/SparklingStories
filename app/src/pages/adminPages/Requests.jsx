import React, { useEffect, useState } from 'react'
import MoreRequest from '../../components/adminComponents/MoreRequest'
import RequestsTable from '../../components/adminComponents/RequestsTable'
import Sidebar from '../../components/adminComponents/Sidebar'
import axios from '../../config/axios'

const Requests = () => {


  const [data, setdata] = useState([]);
  const [select, setselect] = useState();
  const [addService, setAddService] = useState(false)

  useEffect(() => {
    try {
  
      axios.get("/admin/managerData").then((response) => {
        
        if (response.status === 200) {
         
          setdata(response.data.data)
          console.log(data)
        } else {
          alert("SOMETHING WEONG!!!!!!!!!!!!!")
        }
      })
    } catch (error) {
      console.log(error);
      alert("SOMETHING WEONG!!!!!!!!!!!!!")
    }
    
  }, [addService]);

  const singleData = data.filter((e) => {
    
   return e._id === select;
  })
  


    
    
  const addServiceClose = () => setAddService(false);
  

  return (
    <div className='flex'>
          <Sidebar type="req" />
          <div className='w-full h-screen'>
              <div className='max-w-[1200px] mx-auto bg-white mt-20 rounded-3xl p-8'>
                  <RequestsTable data={data} more={setAddService} select={setselect} />
                  <MoreRequest data={singleData} onClose={addServiceClose} visible={addService}/>
                 
              </div>
          </div>
    </div>
  )
}

export default Requests
