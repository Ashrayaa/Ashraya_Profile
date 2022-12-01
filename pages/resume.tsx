import React from 'react'
import Image from "next/image";
import Resume1 from ".././public/resume.jpg";

type Props = {}

export default function Resume({}: Props) {
  return (
    <div className='h-screen p-4 lg:p-12'>
         <Image
          src={Resume1}
          alt="resume"
          className="flex items-center justify-center"
        />
        
    </div>
  )
}