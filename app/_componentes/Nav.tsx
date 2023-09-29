import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type colors = {
    webColor:boolean,
    gameColor:boolean,
}

const Nav = ({webColor, gameColor}:colors) => {
    return (
        <nav className='bg-black flex items-center justify-between p-3 sticky top-0 w-[100vw]'>
            <Link href={"/"} className='flex items-center gap-2 text-white'>
                <Image src='https://media.licdn.com/dms/image/D4D03AQEUI108__rKgA/profile-displayphoto-shrink_400_400/0/1674665524926?e=1700697600&v=beta&t=ZEb1namajjsHuok7r7VBPuHwcYjxGlo6IUFQM2aH4hE' className='rounded-[50%] h-[5rem] w-[5rem]' height={25} width={50} alt={"foto"} />
                <h1 className='text-2xl'>Marcos Gutiérrez Moya</h1>
            </Link>
            <section className='flex items-center gap-12'>
                <Link href={"/web"} className={`text-[2rem] ${webColor?`text-green-700`:`text-white`}`}>Web</Link>
                <Link href={"https://react-arena.vercel.app/"} target='_blank' className='text-[2rem] text-white'>9<sup>3/4</sup></Link>
                <Link href={"/videogames"} className={`text-[2rem] ${gameColor?`text-green-700`:`text-white`}`}>Videojuegos</Link>
            </section>
            <section className='flex items-center gap-4 pl-36 text-white'>
                {process.title === "Videogames" ? <h1>itch.io</h1> : <></>}
                <Link href={"https://github.com/MarcosGutierrezMoya?tab=repositories"} target="_blank" className='flex items-center gap-2'>
                    <img src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png" alt="github icon" className='h-8' />
                    <p className='text-[1.25rem]'>Github</p>
                </Link>
                <Link href={"https://www.linkedin.com/in/marcos-gutierrez-moya/"} target="_blank" className='flex items-center gap-2'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png" alt="github icon" className='h-8' />
                    <p className='text-[1.25rem]'>Linkedin</p>
                </Link>
            </section>
        </nav>
    )
}

export default Nav