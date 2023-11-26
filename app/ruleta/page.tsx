'use client'
import { useEffect, useState } from "react";
import Regalos from "./Regalos";
import { getFamilyData } from "../_componentes/web/webData";
import Link from "next/link";

type Persona = {
    nombre: string,
    regalos: string[],
    aRegalar: string,
    leRegala: string
}

const Ruleta = () => {

    const [yaElegidos, setYaElegidos] = useState<Persona[]>([]);
    const [participantes, setParticipantes] = useState<Persona[]>([]);
    const [nombre, setNombre] = useState<Persona>();
    const [nombreAmigo, setNombreAmigo] = useState<Persona>();

    function random(familia: Persona[] | any, e: any) {
        const rawNombre = participantes.find(el => el.nombre === e.target.value)
        const arrayFamilia = [] as Persona[];
        familia.forEach((element: Persona) => {
            if (element.leRegala == "" && element.nombre !== rawNombre?.nombre) {
                arrayFamilia.push(element);
            }
            else {

            }
        });

        setParticipantes(arrayFamilia);
        setNombre(rawNombre)
        mostrarRegalos(rawNombre?.aRegalar||"");
        localStorage.setItem("yo",JSON.stringify(rawNombre));

    }

    function setChoosenOne() {
        if (yaElegidos.length < 1) {
            const rdm = Math.floor(Math.random() * participantes.length);
            const nombre = participantes.splice(rdm, 1);

            setYaElegidos(nombre);
        }
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
                setNombre(yo);         
                
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
        <div className='h-screen w-screen text-green-500 flex flex-col pt-12 items-center gap-4 md:sm:gap-14'>
            <h1 className='text-[1.5rem] md:sm:text-[2rem] md:xl:text-[4rem] text-center'>Amigo invisible de la familia Gutiérrez</h1>
            {nombre !== undefined ?
                <div>
                    <p className="text-[1.5rem] md:sm:text-[2rem] md:xl:text-[3rem] text-center pb-6">Eres {nombre?.nombre}</p>
                    {nombre.aRegalar === "" ?
                        <section className="flex flex-col gap-4 md:sm:flex-row justify-around p-8 w-full">
                            <div className='flex justify-center items-center h-full'>
                                {yaElegidos?.length != 0 ?
                                    <p className='text-[1.5rem] md:sm:text-2xl'>Te ha tocado... {yaElegidos[0]?.nombre}</p>
                                    :
                                    <button onClick={setChoosenOne} className='hover:bg-green-900/25 border-green-500 border-2 border-double text-[1.5rem] md:sm:text-[2.5rem] p-2'>Ver amigo invisible</button>
                                }
                            </div>
                            <Regalos registrado={nombre} regala={yaElegidos[0]?.nombre} />
                        </section>
                        :
                        <div className="flex flex-col items-center justify-center gap-6 w-screen">
                            <Link href={"/ruleta/pedidos"} className='px-4 py-2 border-2 border-green-500 bg-blue-900/25 hover:bg-blue-900/75'>Cambiar tus regalos</Link>
                            <p className="md:sm:pt-0 text-center p-2 text-[1.8rem] md:sm:text-[2.2rem]">Tu amigo invisible es {nombre.aRegalar}</p>
                            <ol className='list-decimal w-fit'>{nombreAmigo?.regalos.map((present, i) => {
                                return (
                                    <li key={present + i} className='flex justify-between text-[1.5rem] md:sm:text-[2rem] flex-wrap'>{present.includes("http") ? <a className='underline cursor-pointer text-[0.5rem] md:sm:text-[1rem]' href={present} target='_blank'>{i+1}. {present}</a> : <p>{i+1}. {present}</p>}</li>
                                )
                            })}</ol>
                        </div>
                    }
                </div>
                :
                <select onChange={(e) => { random(participantes, e) }} className="w-[75%] p-2 text-[0.5rem] md:sm:w-[50%] md:sm:text-[1rem]">
                    <option value="escoge">{participantes.length!==0?"Dime cuál es tu nombre":"No está conectando a la base de datos"}</option>
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