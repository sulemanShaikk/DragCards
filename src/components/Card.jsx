import React from 'react';
import { FaFileCode } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion"

function Card ({data, reference }) {
    return (
      <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={1} 
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
       className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
          <FaFileCode />
          <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc}</p>
          <div className='footer absolute bottom-0  w-full  left-0'>
              <div className='flex item-center justify-between px-8 py-3 mb-3'>
                  <h5>{data.filesize}</h5>
                  <span className='w-7 h-7 bg-zinc-600 bg-sky-200 rounded-full flex items-center justify-center'>
                      {data.close ?  <MdOutlineClose /> : <LuDownload size=".7em" color='#fff' />}
                  </span>
              </div>
              {
                data.tag.isOpen ? (  
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-green-600 " : "bg-blue-600 "}-600 flex items-center justify-center`}>
                    <h3 className='text-md font-semibold'>{data.tag.tagtitle}</h3>
                     </div>
                ) : null 
              }
              
          </div>
      </motion.div>
    )
  }

export default Card