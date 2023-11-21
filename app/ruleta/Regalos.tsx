'use client'
import React, { useState } from 'react'
import { setFamilyData } from '../_componentes/web/webData'

type Persona = {
    nombre: string,
    regalos: string[],
    aRegalar: string,
    leRegala: string
}


const Regalos = ({registrado,regala}:{registrado:Persona|any,regala:string}) => {
    const [lista,setLista] = useState<string[]>([]);

    function addPresent(e:any) {
        if (e.code == "Enter") {
            setLista([...lista,e.target.value]);
            e.target.value = "";
        }
    }
    console.log(registrado,regala);
    console.log(lista);
    
    

    return (
        <div className="flex flex-col gap-6">
            <section className='flex gap-12'>
                <h3 className="text-[1rem] md:sm:text-[2rem]">Regalos a pedir</h3>
                <button onClick={()=>setFamilyData({nombre:registrado.nombre,regalos:lista,aRegalar:regala,leRegala:registrado.leRegala!==""?registrado.leRegala:""})} className='bg-blue-950/50 hover:bg-blue-900/75 border-green-500 border-2 border-solid text-[0.75rem] md:sm:text-[1.5rem] py-1 px-2'>Pedir regalos</button>
            </section>
            <p className="text-[0.75rem] md:sm:text-xl">Podeis poner enlaces o el nombre de lo que queráis</p>
            <input type="text" name="" id="" className="px-2 py-1 text-[0.5rem] md:sm:text-[1rem]" onKeyDown={(e) => addPresent(e)} />
            <ol className='list-decimal'>{lista?.map(present=>{
                return(
                    <li>{present.includes("http")?<a className='underline cursor-pointer text-[0.5rem] md:sm:text-[1rem]' href={present} target='_blank'>{present}</a>:present}</li>
                )
            })}</ol>
        </div>
    )
}

export default Regalos