'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useGeneralContext } from './context'

const Nav = () => {
    const { videoGamesSection } = useGeneralContext()
    const [modal, setModal] = useState(false)
    const [mousePos, setMousePos] = useState({ posY: 0, posX: 0 })

    return (
            <nav className='bg-black flex items-center justify-between gap-2 md:xl:gap-0 p-3 sticky top-0 w-screen'>
                <Link href={"/"} className='flex items-center gap-2 text-white'>
                    <Image src='https://media.licdn.com/dms/image/D4D03AQEUI108__rKgA/profile-displayphoto-shrink_400_400/0/1674665524926?e=1700697600&v=beta&t=ZEb1namajjsHuok7r7VBPuHwcYjxGlo6IUFQM2aH4hE' className='rounded-[50%] h-[1rem] md:sm:h-[3rem] md:xl:h-[5rem] w-[1rem] md:sm:w-[3rem] md:xl:w-[5rem]' height={25} width={50} alt={"foto"} />
                    <h1 className='text-[0.5rem] md:sm:text-[1rem] md:xl:text-2xl'>Marcos Gutiérrez Moya</h1>
                </Link>
                <section className='flex items-center gap-4 md:xl:gap-12'>
                    <Link href={"/videogames"} className={`text-[0.5rem] md:sm:text-[1rem] md:xl:text-[2rem] ${videoGamesSection === "Videogames" ? `text-green-700` : `text-white`}`}>Videojuegos</Link>
                    <Link href={"https://react-arena.vercel.app/"} target='_blank' className='text-[0.5rem] md:sm:text-[1rem] md:xl:text-[2rem] text-white' onMouseEnter={() => setModal(true)} onMouseLeave={() => setModal(false)}>
                    9<sup>3/4</sup>{modal && <article className={`bg-red-500 absolute top-[${mousePos.posY+100}px] left-[${mousePos.posX}px] w-[10%] mr-5 text-white text-xl`} onMouseLeave={() => setModal(false)}>Entre videojuegos y web hay... un juego en web</article>}
                    </Link>
                    <Link href={"/web"} className={`text-[0.5rem] md:sm:text-[1rem] md:xl:text-[2rem] ${videoGamesSection === "Web" ? `text-green-700` : `text-white`}`}>Web</Link>
                </section>
                <section className='flex items-center gap-1 md:xl:gap-4  text-white'>
                    {videoGamesSection === "Videogames" ?
                        <Link href={"https://guicos.itch.io/"} target="_blank" className='flex items-center gap-2'>
                            <Image height={25} width={35} src="https://static-00.iconduck.com/assets.00/itch-io-icon-2048x2048-i6hzclad.png" alt="github icon" className='h-[1rem] md:sm:h-[2.5rem] md:xl:h-[5rem] w-[1rem] md:sm:w-[3rem] md:xl:w-[5rem]' />
                            <p className='text-[1.25rem]'>Itch.io</p>
                        </Link>
                        : <></>}
                    <Link href={"https://github.com/MarcosGutierrezMoya?tab=repositories"} target="_blank" className='flex items-center gap-2'>
                        <Image height={25} width={35} src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png" alt="github icon" className='h-[1rem] md:sm:h-[2.5rem] md:xl:h-[5rem] w-[1rem] md:sm:w-[2.5rem] md:xl:w-[5rem]' />
                        <p className='text-[0.5rem] md:sm:text-[1rem] md:xl:text-[1.25rem]'>Github</p>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/marcos-gutierrez-moya/"} target="_blank" className='flex items-center gap-2'>
                        <Image height={25} width={35} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png" alt="github icon" className='h-[1rem] md:sm:h-[2.5rem] md:xl:h-[5rem] w-[1rem] md:sm:w-[2.5rem] md:xl:w-[5rem]' />
                        <p className='text-[0.5rem] md:sm:text-[1rem] md:xl:text-[1.25rem]'>Linkedin</p>
                    </Link>
                </section>
            </nav>
    )
}

export default Nav