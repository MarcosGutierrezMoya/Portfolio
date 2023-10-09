'use client'
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../_firebase/firebase";
import React, { useEffect, useState } from 'react'

type videos = {
    url: string;
    gameName: string;
}

const Videos = ({ url, gameName }: videos) => {
    const [description, setDescription] = useState();
    useEffect(() => {
        getDescription()
    }, [gameName])

    async function getDescription() {

        const docRef = doc(db, "games", gameName);
        
        const docSnap = await getDoc(docRef);
        

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setDescription(docSnap.data().description);
        } else {
            alert("No such document!");
        }
        
    }

    return (
        <>
            <section className='flex flex-col items-center justify-center gap-6 w-[55vw]'>
                <h1 className='text-5xl text-center'>{gameName}</h1>
                <iframe width="800" height="400" src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <article className='flex flex-col gap-4 text-[1.5rem] w-[100%]'>
                    <h1 className='text-5xl text-left'>Descripcion:</h1>
                    {description}
                </article>
            </section>
        </>
    )
}

export default Videos