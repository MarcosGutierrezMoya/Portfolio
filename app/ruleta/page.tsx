'use client'
import { useEffect, useState } from "react";
import Regalos from "./Regalos";
import { getFamilyData, setFamilyData } from "../_componentes/web/webData";
import Link from "next/link";

type Persona = {
    nombre: string,
    regalos: string[],
    aRegalar: string,
    leRegala: string
}

const Ruleta = () => {

    const [participantes, setParticipantes] = useState<Persona[]>([]);
    const [nombre, setNombre] = useState<Persona>();
    const [nombreAmigo, setNombreAmigo] = useState<Persona>();

    function random(e: any) {
        const rawNombre = participantes.find(el => el.nombre === e.target.value)

        setNombre(rawNombre)
        mostrarRegalos(rawNombre?.aRegalar||"");
        localStorage.setItem("yo",JSON.stringify(rawNombre));

    }

    function mostrarRegalos(nombreDeAmigo:string) {
        const person = participantes.filter(p=>p.nombre===nombreDeAmigo)
        
        setNombreAmigo(person[0]);
    }

    useEffect(() => {
        getFamilyData().then(data => setParticipantes(data));
    }, [])

    useEffect(() => {
        if (localStorage.getItem("yo")) {
            const yo = JSON.parse(localStorage.getItem("yo")||"")||{} as Persona;
            if (yo.nombre === "") {
                localStorage.removeItem("yo");
            }
            const nuevoYo = participantes.find(p=>p.nombre === yo.nombre);
            if (nuevoYo?.aRegalar !== "") {
                setNombre(nuevoYo);         
                
                mostrarRegalos(yo.aRegalar);
            }
            else{
                console.log("lo");
                localStorage.removeItem("yo");
                setNombre(undefined);
            }
        }

    }, [participantes])
    

    return (
        <div className='min-h-screen w-screen text-green-500 flex flex-col pt-12 items-center gap-4 md:sm:gap-14'>
            <h1 className='text-[1.5rem] md:sm:text-[2rem] md:xl:text-[4rem] text-center'>Amigo invisible de la familia Gutiérrez</h1>
            {nombre !== undefined ?
                <div>
                    <p className="text-[1.5rem] md:sm:text-[2rem] md:xl:text-[3rem] text-center pb-6">Eres {nombre?.nombre}</p>
                    {nombre.aRegalar === "" ?                        
                            <Regalos registrado={nombre} participantes={participantes} />
                        :
                        <div className="flex flex-col items-center justify-center gap-6 w-screen">
                            <Link href={"/ruleta/pedidos"} className='px-4 py-2 border-2 border-green-500 bg-blue-900/25 hover:bg-blue-900/75'>Cambiar tus regalos</Link>
                            <p className="md:sm:pt-0 text-center p-2 text-[1.8rem] md:sm:text-[2.2rem]">Tu amigo invisible es {nombre.aRegalar}</p>
                            <ol className='list-decimal w-fit p-2'>{nombreAmigo?.regalos.map((present, i) => {
                                return (
                                    <li key={present + i} className='flex justify-between text-[1.5rem] md:sm:text-[2rem] w-screen p-4'>{present.includes("http") ? <a className='underline cursor-pointer text-[0.5rem] md:sm:text-[1rem] text-sky-500 w-screen p-4' href={present} target='_blank'>{i+1}. {present.slice(0,present.indexOf(".es/")+3)}</a> : <p>{i+1}. {present}</p>}</li>
                                )
                            })}</ol>
                        </div>
                    }
                </div>
                :
                <select onChange={(e) => { random(e) }} className="w-[75%] p-2 text-[0.8rem] md:sm:w-[50%] md:sm:text-[1.2rem]">
                    <option value="escoge">Dime cuál es tu nombre</option>
                    {participantes?.map((persona: Persona) => {
                        return (
                            <option key={persona.nombre} value={persona.nombre}>{persona.nombre}</option>
                        )
                    })}
                </select>
            }
        </div>
    )
}

export default Ruleta