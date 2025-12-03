'use client'
import { useEffect, useState } from "react";
import Panels from "./Panels";
import Videos from "./Videos";
import { useGeneralContext } from "../context";



function GamesVideos() {
    const { setVideoGamesSection } = useGeneralContext();
    const [video, setVideo] = useState("Project_R");
    
    
    useEffect(() => {
        setVideoGamesSection("Videogames");
    }, [video])
    
    const laHuida = "La Huida";
    const timeWanderer = "Time Wanderer";
    const Project_R = "Project_R";
    const CrazyRacy = "CrazyRacy";
    const tercios = "Los tercios";
        

    return (
        <div className="h-fit-content flex flex-col gap-24">
            <Panels setVideo={setVideo} />
            {/* <Videos url={video === "CrazyRacy" ? CrazyRacy : video === "Project_R" ? Project_R : video === "Time Wanderer" ? timeWanderer : video === "La Huida" ? laHuida : tercios} gameName={video} /> */}
            <Videos url={video} gameName={video} />
        </div>
    )
}

export default GamesVideos;