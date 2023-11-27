'use client'
import { getFamilyData, setFamilyData } from '@/app/_componentes/web/webData';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Persona = {
    nombre: string,
    regalos: string[],
    aRegalar: string,
    leRegala: string
}

const Pedidos = () => {
    const [lista, setLista] = useState<string[]>([]);
    const [participantes, setParticipantes] = useState<Persona[]>([]);
    const [yo, setYo] = useState<Persona>();

    function getLista() {
        const yoLocal = JSON.parse(localStorage.getItem("yo") || "");
        
        setLista(yoLocal.regalos||[]);
        setYo(yoLocal);
    }
    
    function eliminarRegalo(index: number) {
        const rawNombre = participantes.find(el => el.nombre === yo?.nombre) || {} as Persona;
        const newList = lista.filter((ele, i) => i !== index);
        setLista(newList);
        rawNombre.regalos = newList;
        localStorage.setItem("yo",JSON.stringify(rawNombre))
    }
    function addPresent(e: any) {
        const rawNombre = participantes.find(el => el.nombre === yo?.nombre) || {} as Persona;
        if (e.keyCode == 13) {
            setLista([...lista, e.target.value]);
            rawNombre.regalos = [...lista, e.target.value];
            e.target.value = "";
            localStorage.setItem("yo",JSON.stringify(rawNombre))
        }
        setFamilyData(rawNombre)
    }

    useEffect(() => {
        getFamilyData().then(data => setParticipantes(data));
        getLista();
    }, [])


    return (
        <div className='h-screen w-screen text-green-500 flex flex-col justify-center items-center gap-4 md:sm:gap-14'>
            <h1 className='text-[1.5rem] md:sm:text-[2rem] md:xl:text-[4rem] text-center p-4'>Tus regalos, no tardes en cambiarlos o te comprarán algo que no quieres</h1>
            <Link href={"/ruleta"} className='px-4 py-2 border-2 border-green-500 bg-blue-900/25 hover:bg-blue-900/75'>Volver</Link>
            <input type="text" name="" id="" className="px-2 py-1 text-[1rem] md:sm:text-[1.5rem] md:xl:text-[1.5rem]" onKeyDown={(e) => addPresent(e)} placeholder='Pulsa enter para agregar un regalo'/>
            {lista.length!==0?
            <ol className='list-decimal'>{lista?.map((present, i) => {
                return (
                    <li key={present + i} className='flex justify-between gap-4 w-screen p-4'>{present.includes("http") ? <a className='underline cursor-pointer text-[1rem] md:sm:text-[1.5rem] text-sky-500' href={present} target='_blank'>{present}</a> : <p className='text-[1rem] md:sm:text-[1.5rem] md:xl:text-[1.5rem]'>{present}</p>}<button className='text-red-500' onClick={() => eliminarRegalo(i)}>X</button></li>
                    )
                })}</ol>
                :
                <p>No pediste regalos</p>
            }
        </div>
    )
}

export default Pedidos