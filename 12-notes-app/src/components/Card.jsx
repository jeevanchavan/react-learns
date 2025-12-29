import React from 'react'

const Card = () => {
  return (
    <div className='w-[22vw] px-8 py-8 flex items-center flex-col rounded-2xl bg-white text-black'>
        <img className='w-25 h-25 rounded-4xl object-cover' src="https://i.pinimg.com/736x/df/35/b7/df35b7ec42a710f17fde998c7b5d8f5b.jpg" alt="" />
        <h1 className='font-bold text-black text-3xl mt-3'>Jeevan Chavan</h1>
        <h3 className='text-green-600 text-2xl font-semibold'>Developer</h3>
        <p className='leading-tight text-sm font-medium mt-5 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, temporibus.</p>
        <button className='rounded bg-red-500 px-8 py-2 text-white mt-5 font-semibold cursor-pointer active:scale-95 '>Remove</button>
    </div>
  )
}

export default Card