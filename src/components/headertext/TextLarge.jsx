import React from 'react'

export default function TextLarge({text,size='5xl',weight='bold'}) {
  return (
    <div>
        <h1 className={`text-${size} font-${weight} text-5xl font-semibold `}>{text}</h1>
    </div>
  )
}
