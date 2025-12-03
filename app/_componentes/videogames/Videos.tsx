'use client'
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../_firebase/firebase";
import React, { useEffect, useState } from 'react'

type videos = {
    url: string;
    gameName: string;
}

const Videos = ({ url, gameName }: videos) => {
    const [description, setDescription] = useState("");
    useEffect(() => {
        getDescription()
    }, [gameName])


    async function getDescription() {

        const docRef = doc(db, "games", gameName);

        try {
            console.log("db:", db);
            console.log("docref:", docRef);

            const docSnap = await getDoc(docRef)

            if (docSnap?.exists()) {
                console.log("Document data:", docSnap?.data());
                setDescription(docSnap?.data().description);
            } else {
                console.log("Document data:", docSnap?.data());
                alert("No such document!");
            }
        } catch (error) {

            console.error('Error adding document:', error);
        }


    }


    return (
        <>
            <section className='flex flex-col items-center justify-center gap-6 w-[55vw]'>
                {url === "La Huida" ? <iframe width="560" height="315" src="https://www.youtube.com/embed/-Qw_6BdbJxw?si=mCnbWePZQFLdeCvk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> : url === "Time Wanderer" ? <iframe width="560" height="315" src="https://www.youtube.com/embed/dM_VZsWmGsU?si=m33N8vSU4PqZeMbg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> : url === "Project_R" ? <iframe width="560" height="315" src="https://www.youtube.com/embed/I6s0tTGUkhA?si=C_OSv9TDDjAUeXjb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> : url === "CrazyRacy" ? <iframe width="560" height="315" src="https://www.youtube.com/embed/d2KrO30XLDg?si=MYJe5RWhd9I5looN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> : url === "Los tercios" ? <iframe width="560" height="315" src="https://www.youtube.com/embed/6n7x2EP_7gE?si=ABStMY5K5GxxOyLZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> : null}
                <article className='flex flex-col gap-4 text-[1.5rem] w-[100%]'>
                    <h1 className='text-5xl text-left'>Descripcion:</h1>
                    {description}
                </article>
            </section>
        </>
    )
}

export default Videos