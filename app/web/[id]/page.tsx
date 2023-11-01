'use client'
import React from 'react'

const WebProyect = ({params}:{params:{id:string}}) => {
  let description = "";

  switch (params.id) {
    case "CssProjects":
      description = "Varios proyectos de CSS con un poco de js";
      break;
  
    default:
      break;
  }


  return (
    <div className='flex flex-col items-center h-screen'>
      <title>{params.id}</title>
      <h1 className='text-white text-[1.7rem]'>{params.id}</h1>
      <h3>Descripción:</h3>
      <p className='text-white'>{description}</p>
      {/* <Image /> */}
    </div>
  )
}

export default WebProyect