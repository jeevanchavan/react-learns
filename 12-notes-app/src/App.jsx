import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [userName, setUserName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userRole, setUserRole] = useState('')
  const [userDesc, setUserDesc] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler =(e)=>{
    e.preventDefault();
    console.log("Form Submitted");

    const oldUsers = [...allUsers];
    oldUsers.push({userName,userDesc,userRole,imageURL})
    console.log(oldUsers);

    setAllUsers(oldUsers)
    
    setUserName('')
    setImageURL('')
    setUserRole('')
    setUserDesc('')
  } 

  return (
    <div className='bg-black h-screen text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex p-5 flex-wrap ' >

        <input className='border-2 text-white px-5 py-2 rounded m-2 lg:w-[48%] text-2xl font-semibold' 
          value={userName}
          onChange={(e)=>{
            setUserName(e.target.value)
          }}
          type="text" 
          placeholder='Enter Name' 
        />

        <input className='border-2 text-white px-5 py-2 rounded m-2 lg:w-[48%] text-2xl font-semibold' 
          value={imageURL}
          onChange={(e)=>{
            setImageURL(e.target.value)
          }}
          type="text" 
          placeholder='Image URL' 
        />

        <input className='border-2 text-white px-5 py-2 rounded m-2 lg:w-[48%] text-2xl font-semibold' 
          value={userRole}
          onChange={(e)=>{
            setUserRole(e.target.value)
          }}
          type="text" 
          placeholder='Enter Role'
         />

        <input className='border-2 text-white px-5 py-2 rounded m-2 lg:w-[48%] text-2xl font-semibold' 
          value={userDesc}
          onChange={(e)=>{
            setUserDesc(e.target.value)
          }}
          type="text" 
          placeholder='Enter Description' 
        />

        <button className='bg-green-700 cursor-pointer active:scale-95 text-white px-5 py-2 rounded m-2 lg:w-[97%] md:w-[84%] text-2xl font-semibold'
        >Create User</button>
      </form>

      <div className='flex p-5 flex-wrap gap-5'>

        {allUsers.map(function(elem,idx){
            return  < div key={idx} className=' lg:w-[22vw] md:w-[30vw] sm:w-[45vw] px-8 py-8 flex  items-center flex-col rounded-2xl bg-white text-black'>
              <img className='w-25 h-25 rounded-4xl object-cover object-center' src={elem.imageURL} alt="" />
              <h1 className='font-bold text-black text-3xl mt-3'>{elem.userName}</h1>
              <h3 className='text-green-600 text-2xl font-semibold'>{elem.userRole}</h3>
              <p className='leading-tight text-sm font-medium mt-5 align-middlelg: '>{elem.userDesc}</p>
              <button className='rounded bg-red-500 px-8 py-2 text-white mt-5 font-semibold cursor-pointer active:scale-95 '>Remove</button>
          </div>
        })}

    </div>
    </div>
    
    
  )
}

export default App