'use client'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React from 'react'
import { storage } from '../_firebase/firebase'
import Image from 'next/image'

const AboutMe = () => {

  return (
    <article className='flex'>
      <section>
        <Image alt='UnityLogo' className='bg-white rounded-[20%] relative left-5 top-[30%] ' src="https://cdn.icon-icons.com/icons2/3915/PNG/512/unity_logo_icon_249311.png" width={50} height={50} />
        <Image alt='UnityLogo' className='relative left-[4rem] top-[45%] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png" width={50} height={50} />
      </section>
      <section className='flex flex-col gap-4 items-center text-center w-screen'>
        {/* <input type="file" onChange={(event: any) => {
        const file = event.target.files[0];
        const img = ref(storage, `${file.name}`);

        const uploadTask = uploadBytesResumable(img, file);

        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            alert(error)
          }
        );

      }} /> */}
        <h1 className='text-[5rem] text-orange-500'>Marcos Gutiérrez Moya</h1>
        <p className='w-[90%] text-[1.5rem] text-orange-400'>Empecé mi carrera como programador a mis 24 años cursando un grado superior de <b className='text-orange-600'>ANIMACIONES 3D, JUEGOS Y ENTORNOS INTERACTIVOS</b> en la escuela de imagen y sonido <b>CES</b>. He hecho varios videojuegos que podéis encontrar en esta página. he disfrutado mucho con su desarrollo, sobretodo con la parte de la programación.</p>
        <p className='w-[90%] text-[1.5rem] text-orange-400'>Al cabo de unos años he empezado en ampliar mis conocimientos de programación, y me formé en desarrollo web. También he disfrutado llevando a cabo los proyectos, y he aprendido otras formas de programar.</p>
      </section>
      <section>
        <Image alt='UnityLogo' className='relative right-9 top-[40%] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png" width={50} height={50} />
        <Image alt='UnityLogo' className='relative right-[1rem] top-[55%] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png" width={50} height={50} />
      </section>
    </article>
  )
}

export default AboutMe