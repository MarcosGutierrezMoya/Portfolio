"use client"
import React, { useEffect, useState } from 'react'
import { getFamilyData } from '../_componentes/web/webData';

type Persona = {
    nombre: string,
    regalos: string[],
    aRegalar: string,
    leRegala: string
}

const Calculo = () => {
    const [yaElegidos, setYaElegidos] = useState<Persona[]>([]);
    const [participantes, setParticipantes] = useState<Persona[] | any>([]);
    function random(familia: Persona[] | any) {
        const arrayFamilia = [] as Persona[];
        familia.forEach((element: Persona) => {
            if (element.leRegala == "") {
                arrayFamilia.push(element);
                setParticipantes((prev: any) => [...prev, element]);
            }
            else {
                console.log("nada");
            }
        });

        setParticipantes(arrayFamilia);
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
        getFamilyData().then(data => random(data));
    }, [])
    console.log(yaElegidos);

    return (
        <div className='flex justify-center items-center h-full'>
            {yaElegidos?.length != 0 ?
                <p className='text-2xl'>Te ha tocado... {yaElegidos[0]?.nombre}</p>
                :
                <button onClick={setChoosenOne} className='hover:bg-green-900/25 border-green-500 border-2 border-double text-[2.5rem] p-2'>Ver amigo invisible</button>
            }
        </div>
    )
}

export default Calculo