import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between'>
            <h2 className='bg-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl'>{props.id+1}</h2>
            <div>
                <p className='leading-relaxed text-lg mb-12 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus voluptatibus rem, distinctio nulla quaerat voluptas.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 px-6 py-2 rounded-4xl text-white font-medium cursor-pointer'>{props.tag}</button>
                    <button className='bg-blue-500 px-4 py-2 rounded-4xl text-white font-medium cursor-pointer'><i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent