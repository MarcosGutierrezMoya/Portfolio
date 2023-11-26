'use client'
import React, { useEffect, useState } from 'react'
import { setFamilyData } from '../_componentes/web/webData'

type Persona = {
    nombre: string,
    regalos: string[],
    aRegalar: string,
    leRegala: string
}


const Regalos = ({ registrado, regala }: { registrado: Persona | any, regala: string }) => {
    const [lista, setLista] = useState<string[]>([]);
    const [enviado, setEnviado] = useState<boolean>(false);

    function addPresent(e: any) {
        if (e.keyCode == 13) {
            setLista([...lista, e.target.value]);
            e.target.value = "";
        }
    }

    function eliminarRegalo(index: number) {
        const newList = lista.filter((ele, i) => i !== index);
        setLista(newList);
    }

    useEffect(() => {
        const yo = localStorage.getItem("yo") ? JSON.parse(localStorage.getItem("yo") || "") : "";
        setEnviado(false);
    }, [])


    return (
        <>
            {enviado ?
                <p className='text-[2rem] text-red-800'>Información enviada</p>
                :
                <div className="flex flex-col gap-6 w-full md:sm:w-[50%]">
                    <p className="text-[0.9rem] md:sm:text-xl">Podéis poner enlaces de la pagina de compra o el nombre de lo que queráis como regalo.</p>
                    <p className="text-[0.9rem] underline md:sm:text-xl">Pulsa enter cuando hayas escrito un regalo para agregarlo.</p>
                    <input type="text" name="" id="" className="px-2 py-1 text-[1rem] md:sm:text-[1.5rem]" onKeyDown={(e) => addPresent(e)} placeholder='Pulsa enter para agregar un regalo' />
                    <ol className='list-decimal'>{lista?.map((present, i) => {
                        return (
                            <li key={present + i} className='flex justify-between gap-4 max-w-[50%]'>{present.includes("http") ? <a className='underline cursor-pointer text-[0.5rem] md:sm:text-[1rem] text-sky-500 w-screen p-4' href={present} target='_blank'>{present}</a> : <p>{present}</p>}<button className='text-red-500' onClick={() => eliminarRegalo(i)}>X</button></li>
                        )
                    })}</ol>
                    <button onClick={() => {
                        localStorage.setItem("yo", JSON.stringify({ nombre: registrado.nombre, regalos: lista, aRegalar: regala, leRegala: registrado.leRegala !== "" ? registrado.leRegala : "" }));
                        setEnviado(true);
                        setFamilyData({ nombre: registrado.nombre, regalos: lista, aRegalar: regala, leRegala: registrado.leRegala !== "" ? registrado.leRegala : "" })
                    }} className='bg-blue-950/50 hover:bg-blue-900/75 border-green-500 border-2 border-solid text-[0.75rem] md:sm:text-[1.5rem] py-1 px-2'>Pulsar después de registrar los regalos con la barra de arriba</button>
                </div>
            }
        </>
    )
}

export default Regalos