import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30');

    setUserData(response.data);

  }

  let printUserData = 'No user Availabe'

  if(userData.length>0){
    printUserData = userData.map(function(elem){

      return <div >
        <div className='h-40 w-45 bg-white object-cover'>
          <img className='h-40' src={elem.download_url} alt="" />
        </div>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white p-4'>
      <button onClick={getData} className='bg-green-600 px-8 py-5 rounded active:scale-95 cursor-pointer font-bold mb-3'>Get data</button>

      <div className='flex flex-wrap gap-2'>
        {printUserData}
      </div>
    </div>
  )
}

export default App