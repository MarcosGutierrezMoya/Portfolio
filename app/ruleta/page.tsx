'use client'
import { useEffect, useState } from "react";
import Calculo from "./Calculo";
import Regalos from "./Regalos";
import { getFamilyData } from "../_componentes/web/webData";

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
    console.log(nombre);
    

    function random(familia: Persona[] | any,e:any) {
        const rawNombre = participantes.find(el=>el.nombre===e.target.value)
        const arrayFamilia = [] as Persona[];
        let yo = {} as Persona;
        familia.forEach((element: Persona) => {
            if (element.leRegala == "" && element.nombre !== rawNombre?.nombre) {
                console.log(rawNombre);
                
                arrayFamilia.push(element);
            }
            else {
                console.log("nada");
            }
        });
        console.log(arrayFamilia);  
        setParticipantes(arrayFamilia);
        setNombre(rawNombre)
    }

    function setChoosenOne() {
        if (yaElegidos.length < 1) {
            const rdm = Math.floor(Math.random() * participantes.length);
            const nombre = participantes.splice(rdm, 1);
            console.log(nombre[0].nombre);

            setYaElegidos(nombre);
        }
    }

    useEffect(() => {
        getFamilyData().then(data => setParticipantes(data) );
    }, [])
    console.log(yaElegidos);

    return (
        <div className='h-screen w-screen text-green-500 flex flex-col items-center gap-2 md:sm:gap-28'>
            <h1 className='text-[2rem] md:sm:text-[4rem] text-center'>Amigo invisible de la familia Gutiérrez</h1>
            {nombre?
                <section className="flex flex-col gap-4 md:sm:gap-0 md:sm:flex-row justify-around p-8 w-full">
                    <Regalos registrado={nombre} regala={yaElegidos[0]?.nombre}/>
                    <div className='flex justify-center items-center h-full'>
                        {yaElegidos?.length != 0 ?
                            <p className='text-[1.5rem] md:sm:text-2xl'>Te ha tocado... {yaElegidos[0]?.nombre}</p>
                            :
                            <button onClick={setChoosenOne} className='hover:bg-green-900/25 border-green-500 border-2 border-double text-[1.5rem] md:sm:text-[2.5rem] p-2'>Ver amigo invisible</button>
                        }
                    </div>
                </section>
                :
                <select onChange={(e) => {random(participantes,e) }} className="w-[50%]">
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