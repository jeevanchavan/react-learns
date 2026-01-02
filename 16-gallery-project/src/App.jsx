import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`);

    setUserData(response.data);
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx} >
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen w-screen text-white p-4'>
      {/* <button onClick={getData} className='bg-green-600 px-8 py-5 rounded active:scale-95 cursor-pointer font-bold mb-3'>Get data</button> */}

      <div className='flex h-[90%] flex-wrap gap-3'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-5 gap-5'>
        <button className='bg-amber-400 px-6 py-3 rounded text-sm font-bold text-black cursor-pointer active:scale-95'
        style={{opacity:index == 1?0.5:1}}
          onClick={()=>{
            if(index > 1){
              setIndex(index-1)
              setUserData([])
            }
          }}
        >Prev</button>
        <h3>Page {index}</h3>
        <button className='bg-amber-400 px-6 py-3 rounded text-sm font-bold text-black cursor-pointer active:scale-95'
          onClick={()=>{
            setUserData([])
            setIndex(index+1)
          }}
        >Next</button>
      </div>
    </div>
  )
}

export default App