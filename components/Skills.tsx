import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion";
import Profileimg1 from ".././public/ashrayaimage1.jpg";

type Props = {
    directionLeft?:boolean;
}

export default function Skills({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{
            opacity: 1,
          }}
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          >
             <Image
          src={Profileimg1}
          alt="ashraya_image"
          className="rounded-full h-32 w-32 mx-auto object-cover object-center xl:h-[200px] xl:w-[200px]"
        />
         
        </motion.div>


        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}