import React from 'react'

export default function Button({text='',action=()=>{},width='w-1/5'}) {
  return (
    <div className={`bg-primary text-white ${width} p-5 mt-5 rounded-xl  text-center text-xl`}>
            {text}
    </div>
  )
}

