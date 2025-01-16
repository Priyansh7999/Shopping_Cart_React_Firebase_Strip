import React from 'react'

export default function Items({item}) {
    console.log("hello"+item)
  return (
    <div className='relative group border border-cyan-700 p-5 cursor-pointer'>
      <div className='overflow-hidden aspect-w-1 aspect-h-1'>
        <img
           src={item?.thumbnail}
           alt={item?.title}
           className='object-cover w-full h-full transition duration-300 group-hover:scale-105'
        />
        <div className='flex items-start justify-between mt-4 space-x-4'>
            <h3 className='font-bold text-gray-950'>{item?.title}</h3>
        </div>

      </div>
    </div>
  )
}
