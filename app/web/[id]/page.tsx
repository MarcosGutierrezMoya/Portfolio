'use client'
import Nav from '@/app/_componentes/Nav';
import { useGeneralContext } from '@/app/_componentes/context';
import getWebData from '@/app/_componentes/web/webData';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type firebaseWebData = {
  data: {
    description: string,
    link: string,
    tools: string[],
  },
  id: string,
  url: string
}

const WebProyect = ({ params }: { params: { id: string } }) => {
  const { setVideoGamesSection } = useGeneralContext()
  setVideoGamesSection("Web");

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
          <section className='h-screen flex flex-col justify-around items-center p-8 gap-8'>
            <article>
              <Link href={project.data.link} style={{ backgroundImage: `url('${project.url}.png')` }} className={`aspect-video w-[35vw] bg-no-repeat bg-cover block border-transparent border-[5px] border-solid hover:border-green-400`} target='_blank' />
            </article>
            <h1 className=' text-[2rem]'>{project.id.replaceAll("_"," ")}</h1>
            <article key={project.id} className='flex h-full'>
              <div className='flex flex-col justify-start gap-4 items-center w-[50%] h-[full]'>
                <h3 className='text-[1.7rem]'>Descripción:</h3>
                <p className='w-[80%] text-center text-[1.3rem]'>{project.data.description}</p>
              </div>
              <div className='flex flex-col justify-start gap-4 items-center w-[50%] h-full'>
                <h3 className='text-[1.7rem]'>Herramientas:</h3>
                {project.data.tools.map(tool => {
                  return (
                    <p className='text-[1.3rem]'>{tool}</p>
                  )
                })}
              </div>
            </article>
          </section>
        )
      })}
    </div>
  )
}

export default WebProyect