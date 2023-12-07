import React, { useState,useRef } from 'react'
import Card from './Card'

function Foreground () {
    const ref = useRef(null) ;

    const data = [
        {
          desc: "This is card 1",
          filesize: ".9mb",
          close: false,
          tag: { isOpen: true, tagtitle: "Download Now" , tagColor: "green"},
        },

        {
            desc: "This is the card 2",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagtitle: "Download Now" , tagColor: "blue"},
          },


          {
            desc: "This is the card 3",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagtitle: "Download" , tagColor: "blue"},
          },


      ];
      
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10' >
          {data.map((item, index) => (
            <Card data={item} reference={ref}/>
          ))} 
            
        </div>
      );
    }

    export default Foreground
      