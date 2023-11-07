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
    
    const laHuida = "-Qw_6BdbJxw?si=5UgzAHXC11OSmPHX";
    const timeWanderer = "dM_VZsWmGsU?si=SLXPbrkcs1j8uxvz";
    const Project_R = "I6s0tTGUkhA";
    const CrazyRacy = "d2KrO30XLDg";
    const tercios = "0kx5eu4qq7c";
    
    
    

    return (
        <div className="h-fit-content flex flex-col gap-24">
            <Panels setVideo={setVideo} />
            <Videos url={video === "CrazyRacy" ? CrazyRacy : video === "Project_R" ? Project_R : video === "Time Wanderer" ? timeWanderer : video === "La Huida" ? laHuida : tercios} gameName={video} />
        </div>
    )
}

export default GamesVideos;