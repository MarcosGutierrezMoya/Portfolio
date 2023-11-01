'use client'
import Link from 'next/link'
import React, { SetStateAction } from 'react'
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../_firebase/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useGeneralContext } from '../context';

type firebaseWebData = {
    data: {
        description: string,
        link: string
    },
    id: string,
    url: string
}

const Projects = () => {
    const { setVideoGamesSection } = useGeneralContext()
    setVideoGamesSection("Web");

    const [webData, setWebData] = useState<firebaseWebData[]>([]);

    useEffect(() => {
        // Firesotre
        async function getWebData() {

            const docSnap = await getDocs(collection(db, "web"))
            const storageRef = ref(storage, "gs://portfolio-e6089.appspot.com")
            const docData:any= []
            docSnap.forEach((doc) => {
                docData.push({ data: doc.data(), id: doc.id })
            });
            const arrayProjects: any = await Promise.all(docData.map((doc:any) => {
               return getDownloadURL(ref(storageRef, `Web/${doc.id}.png`))
                .then((url) => {
                    return {url, ...doc}
                })
                .catch((error) => {
                    console.error(error);
                });
            }))
            setWebData(arrayProjects);
        }
        getWebData();
    }, []);

    return (
        <div className='flex flex-col gap-5 pt-5'>
            {webData.map((project, i) => {
                return (
                    <article key={project.id} className={`flex ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} justify-around items-center w-full h-[40vh]`}>
                        <Link href={`/web/${project.id}`} style={{ backgroundImage: `url('${project.url}.png')` }} className={`aspect-video w-[35vw] bg-no-repeat bg-cover block border-transparent border-[5px] border-solid hover:border-green-400`} />
                        <section className='w-[50%] flex flex-col items-center justify-between h-[80%] text-center'>
                            <h1 className='text-lg'>{project.id}</h1>
                            <p>{project.data.description}</p>
                        </section>
                    </article>
                )
            })}
        </div>
    )
}

export default Projects