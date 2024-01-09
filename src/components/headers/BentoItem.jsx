import React from 'react'
import { IoLocation } from "react-icons/io5";

export default function BentoItem({image,header='',desc='',span='max-sm:col-span-1 col-span-1',location='Eatery',action=()=>{}}) {
  return (
    <div className={`${span} bg-red-100 h-[300px] relative rounded-xl`}>
      <img
        src={image}
        alt=""
        className="h-full object-cover w-full rounded-xl "
      />
      <div className="absolute top-0 left-0 bg-[rgb(0,0,0,.6)] h-full w-full rounded-xl text-white p-5 flex flex-col justify-end">
        <h1 className='text-xl font-semibold text-yellow-500'>{header}</h1>
        <p className='text-sm w-2/3 max-sm:w-full'>{desc}</p>
        <button className='self-start py-3 bg-yellow-500 w-[200px] max-sm:w-1/2 mt-5 rounded-lg' onClick={()=>{action()}}>Explore</button>
        <p className='absolute right-5 text-white flex items-center gap-2'> <IoLocation color='orange' size={25}/> {location}</p>
      </div>
    </div>
  );
}
