import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30');

    setUserData(response.data);

  }

  useEffect(function(){
    getData()
  },[])

  let printUserData = <h3 className='text-gray-600 font-medium'>No user Available</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx}>
        <a href={elem.url} target="_">
          <div className='h-48 w-48 overflow-hidden rounded-xl'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
        </div>

        <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen w-screen text-white p-4'>
      {/* <button onClick={getData} className='bg-green-600 px-8 py-5 rounded active:scale-95 cursor-pointer font-bold mb-3'>Get data</button> */}

      <div className='flex flex-wrap gap-3'>
        {printUserData}
      </div>
    </div>
  )
}

export default App