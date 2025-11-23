'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useGeneralContext } from '../context';
import getWebData from './webData';

type firebaseWebData = {
    data: {
        description: string,
        link: string,
        tools: string[],
    },
    id: string,
    url: string
}

const Projects = () => {
    const { setVideoGamesSection } = useGeneralContext()
    setVideoGamesSection("Web");

    const [webData, setWebData] = useState<firebaseWebData[]>([]);

    useEffect(() => {
        getWebData().then(data=>setWebData(data));
        
    }, [])
    

    return (
        <div className='flex flex-col gap-5 pt-5 w-full'>
            {webData.map((project, i) => {
                return (
                    <article key={project.id} className={`flex ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} justify-around items-center w-full h-[40vh]`}>
                        <Link href={`${project.data.link}`} target='_blank' style={{ backgroundImage: `url('${project.url}.png')` }} className={`aspect-video w-[35vw] bg-no-repeat bg-cover block border-transparent border-[5px] border-solid hover:border-green-400`} />
                        <section className='w-[50%] flex flex-col items-center justify-evenly h-[80%] text-center'>
                            <h1 className='text-lg'>{project.id}</h1>
                            <p>{project.data.description}</p>
                        </section>
                    </article>
                )
            })}
        </div>
    )
}

export default Projects