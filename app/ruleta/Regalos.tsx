'use client'
import React, { useEffect, useState } from 'react'
import { setFamilyData } from '../_componentes/web/webData'

type Persona = {
    nombre: string,
    regalos: string[],
    aRegalar: string,
    leRegala: string
}


const Regalos = ({ registrado, participantes}: { registrado: Persona | any,participantes:Persona[]}) => {
    const [lista, setLista] = useState<string[]>([]);
    const [enviado, setEnviado] = useState<boolean>(false);
    const [yaElegidos, setYaElegidos] = useState<Persona[]>([]);

    function addPresent(e: any) {
        if (e.keyCode == 13) {
            setLista([...lista, e.target.value]);
            setFamilyData({ nombre: registrado.nombre, regalos: [...lista, e.target.value], aRegalar: yaElegidos[0].nombre, leRegala: registrado.leRegala !== "" ? registrado.leRegala : "" })
            localStorage.setItem("yo", JSON.stringify({ nombre: registrado.nombre, regalos: [...lista, e.target.value], aRegalar: yaElegidos[0].nombre, leRegala: registrado.leRegala !== "" ? registrado.leRegala : "" }));
            e.target.value = "";
        }
    }

    function eliminarRegalo(index: number) {
        const newList = lista.filter((ele, i) => i !== index);
        setLista(newList);
        setFamilyData({ nombre: registrado.nombre, regalos: newList, aRegalar: yaElegidos[0].nombre, leRegala: registrado.leRegala !== "" ? registrado.leRegala : "" })
        localStorage.setItem("yo", JSON.stringify({ nombre: registrado.nombre, regalos: newList, aRegalar: yaElegidos[0].nombre, leRegala: registrado.leRegala !== "" ? registrado.leRegala : "" }));
    }

    function setChoosenOne() {
        if (yaElegidos.length < 1) {
            const arrayFamilia = [] as Persona[];
            participantes.forEach((element: Persona) => {
                if (element.nombre !== registrado.nombre && element.leRegala === "") {
                    arrayFamilia.push(element);
                }
                else {
    
                }
            });
    
            const rdm = Math.floor(Math.random() * arrayFamilia.length);
            const elegido = arrayFamilia.splice(rdm, 1);
            registrado.aRegalar = elegido[0].nombre || "";
            setFamilyData(registrado || {} as Persona);
            localStorage.setItem("yo", JSON.stringify(registrado));
            setYaElegidos(elegido);
        }
    }

    useEffect(() => {
        const yo = localStorage.getItem("yo") ? JSON.parse(localStorage.getItem("yo") || "") : "";
        setEnviado(false);
    }, [])


    return (
        <section className="flex flex-col gap-4 md:sm:flex-row justify-around p-8 w-full">
            <div className='flex justify-center items-center h-full'>
                {yaElegidos?.length != 0 ?
                    <p className='text-[1.5rem] md:sm:text-2xl'>Te ha tocado... {yaElegidos[0]?.nombre}</p>
                    :
                    <button onClick={setChoosenOne} className='hover:bg-green-900/25 border-green-500 border-2 border-double text-[1.5rem] md:sm:text-[2.5rem] p-2'>Ver amigo invisible</button>
                }
            </div>
            {enviado ?
                <p className='text-[2rem] text-red-800'>Información enviada</p>
                :
                <div className="flex flex-col gap-6 w-full md:sm:w-[50%]">
                    <p className="text-[0.9rem] md:sm:text-xl">Podéis poner enlaces de la pagina de compra o el nombre de lo que queráis como regalo.</p>
                    <p className="text-[0.9rem] underline md:sm:text-xl">Pulsa enter cuando hayas escrito un regalo para agregarlo.</p>
                    <input type="text" name="" id="" className="px-2 py-1 text-[1rem] md:sm:text-[1.5rem]" onKeyDown={(e) => addPresent(e)} placeholder='Pulsa enter para agregar un regalo' />
                    <ol className='list-decimal'>{lista?.map((present, i) => {
                        return (
                            <li key={present + i} className='flex justify-between gap-4 max-w-[50%] w-screen p-4'>{present.includes("http") ? <a className='underline cursor-pointer text-[0.5rem] md:sm:text-[1rem] text-sky-500 w-screen p-4' href={present} target='_blank'>{present}</a> : <p>{present}</p>}<button className='text-red-500' onClick={() => eliminarRegalo(i)}>X</button></li>
                        )
                    })}</ol>
                </div>
            }
        </section>
    )
}

export default Regalos