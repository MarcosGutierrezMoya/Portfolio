'use client'
import React from 'react'
import Image from 'next/image'

const AboutMe = () => {

  return (
    <article className='flex px-6 pb-12 h-screen'>
      <section>
        <Image alt='Unity logo' className='bg-white rounded-[20%] relative left-5 top-[30%] ' src="https://cdn.icon-icons.com/icons2/3915/PNG/512/unity_logo_icon_249311.png" width={50} height={50} />
        <Image alt='c sharp logo' className='relative left-[4rem] top-[45%] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png" width={50} height={50} />
        <Image alt='react logo' className='relative left-[2rem] top-[60%] ' src="https://cdn1.iconfinder.com/data/icons/education-set-3-3/74/15-512.png" width={50} height={50} />
      </section>
      <section className='flex flex-col gap-4 items-center text-center w-screen aboutMeText'>
        <h1 className='text-[5rem] text-orange-500'>Marcos Gutiérrez Moya</h1>
        <p>Empecé mi carrera como programador a mis 24 años cursando un grado superior de <b className='text-orange-600'>ANIMACIONES 3D, JUEGOS Y ENTORNOS INTERACTIVOS</b> en la escuela de imagen y sonido <b>CES</b>. He hecho varios videojuegos que podéis encontrar en la pestaña de videojuegos del menú.</p>
        <p>Al acabar los estudios estuve en <b className='text-orange-600'>TIMELESS GAMES INC</b> trabajando como jefe de proyecto y desarrollador de unity. Después de buscar un tiempo encontré un grupo de personas con ganas de desarrollar su propio videojuego y montar una empresa. Me uní ellos y empezamos a desarrollar un juego de tipo hack`n slash. Al acabar ese juego empezamos a realizar uno nuevo de gestion de ejército.</p>
        <p>Después de unos años de programar con C# quise ampliar mis conocimientos de programación y me formé en desarrollo web. Hice un bootcamp en <b className='text-orange-600'>GAMMATECH SCHOOL</b> aprendiendo a programar para web aprendiendo también otras formas de programar.</p>
      </section>
      <section>
        <Image alt='blender logo' className='relative right-9 top-[40%] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png" width={50} height={50} />
        <Image alt='unreal logo' className='relative right-[1rem] top-[55%] ' src="https://cdn2.unrealengine.com/ue-logo-stacked-unreal-engine-w-677x545-fac11de0943f.png" width={80} height={80} />
        <Image alt='next logo' className='relative right-8 top-[65%] rounded-[60%] w-14 h-14' src="https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/635543691615050863a92f1f_nextjs-logo.png" width={50} height={50} />
      </section>
    </article>
  )
}

export default AboutMe