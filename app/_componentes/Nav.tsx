'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useGeneralContext } from './context'
import { getFoto } from './web/webData'

const Nav = () => {
    const { videoGamesSection } = useGeneralContext()
    const [modal, setModal] = useState(false)
    const [mousePos, setMousePos] = useState({ posY: 0, posX: 0 })
    const [fotoPerfil, setFotoPerfil] = useState<string>("");
    
    useEffect(() => {
        getFoto().then(url => setFotoPerfil(url));
    }, [])
    

    return (
            <nav className='bg-black flex items-center justify-between gap-2 md:xl:gap-0 p-3 sticky top-0 w-full'>
                <Link href={"/"} className='flex items-center gap-2 text-white'>
                    <Image src={`${fotoPerfil}`} className='rounded-[100%] h-[2rem] sm:h-[2.5rem] md:h-[5rem] w-[2rem] sm:w-[3rem] md:w-[4.5rem]' height={20} width={60} alt={"foto"} />
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
                            <Image height={25} width={35} src="https://static-00.iconduck.com/assets.00/itch-io-icon-2048x2048-i6hzclad.png" alt="github icon" className='h-[1rem] sm:h-[2.5rem] md:xl:h-[5rem] w-[1rem] sm:w-[3rem] md:xl:w-[5rem]' />
                            <p className='text-[1.25rem]'>Itch.io</p>
                        </Link>
                        : <></>}
                    <Link href={"https://github.com/MarcosGutierrezMoya?tab=repositories"} target="_blank" className='flex items-center md:gap-2'>
                        <Image height={45} width={50} src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="github icon" className='rounded-[50%] h-[1rem] sm:h-[2.5rem] md:xl:h-[5rem] w-[1rem] sm:w-[3rem] md:xl:w-[5rem]' />
                        <p className='text-[0.5rem] md:sm:text-[1rem] md:xl:text-[1.25rem]'>Github</p>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/marcos-gutierrez-moya/"} target="_blank" className='flex items-center md:gap-2'>
                        <Image height={25} width={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png" alt="github icon" className='rounded-[50%] h-[1rem] sm:h-[2.5rem] md:xl:h-[4.2rem] w-[1rem] sm:w-[3rem] md:xl:w-[4.2rem]' />
                        <p className='text-[0.5rem] md:sm:text-[1rem] md:xl:text-[1.25rem]'>Linkedin</p>
                    </Link>
                </section>
            </nav>
    )
}

export default Nav