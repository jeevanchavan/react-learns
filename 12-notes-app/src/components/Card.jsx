import React from 'react'

const Card = (props) => {
  return (
    < div key={props.idx} className=' lg:w-[22vw] md:w-[30vw] sm:w-[45vw] px-8 py-8 flex  items-center flex-col rounded-2xl bg-white text-black'>
              <img className='w-25 h-25 rounded-4xl object-cover object-center' src={props.elem.imageURL} alt="" />
              <h1 className='font-bold text-black text-3xl mt-3'>{props.elem.userName}</h1>
              <h3 className='text-green-600 text-2xl font-semibold'>{props.elem.userRole}</h3>
              <p className='leading-tight text-sm font-medium mt-5 align-middlelg: '>{props.elem.userDesc}</p>
              <button onClick={()=>{
                props.deleteHandler(props.idx);
              }} className='rounded bg-red-500 px-8 py-2 text-white mt-5 font-semibold cursor-pointer active:scale-95 '>Remove</button>
          </div>
  )
}

export default Card