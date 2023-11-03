'use client'
import Nav from '@/app/_componentes/Nav';
import getWebData from '@/app/_componentes/web/webData';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type firebaseWebData = {
  data: {
    description: string,
    link: string
  },
  id: string,
  url: string
}

const WebProyect = ({ params }: { params: { id: string } }) => {

  const [webData, setWebData] = useState<firebaseWebData[]>([]);

  useEffect(() => {
    getWebData().then(data => setWebData(data));

  }, [])


  return (
    <div className='flex flex-col items-center h-screen w-screen text-green-500'>
      <title>{params.id}</title>
      <Nav />
      {webData?.filter(data => data.id === params.id).map((project) => {
        return (
          <article className='flex flex-col items-center'>
            <Link href={project.data.link} style={{ backgroundImage: `url('${project.url}.png')` }} className={`aspect-video w-[35vw] bg-no-repeat bg-cover block border-transparent border-[5px] border-solid hover:border-green-400`} target='_blank'/>
            <h1 className=' text-[1.7rem]'>{project.id}</h1>
            <h3>Descripción:</h3>
            <p className=''>{project.data.description}</p>

          </article>
        )
      })}
    </div>
  )
}

export default WebProyect