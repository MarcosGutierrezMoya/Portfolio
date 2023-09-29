'use client'
import { useState } from "react";
import Panels from "./Panels";
import Videos from "./Videos";
// import GameVideos from "../components/GameVideos";
// import NavBar  from "../components/NavBar";
// import CrazyRacy  from "../media/Trailer crazy racy.mp4";
// import Project_R  from "../media/Trailer project-r.mp4";


function GamesVideos() {
    const [video, setVideo] = useState("Project_R");

    const laHuida = "-Qw_6BdbJxw?si=5UgzAHXC11OSmPHX";
    const timeWanderer = "dM_VZsWmGsU?si=SLXPbrkcs1j8uxvz";
    const Project_R = "I6s0tTGUkhA";
    const CrazyRacy = "d2KrO30XLDg";
    const tercios = "aN4O7JW4bNo";




    return (
        <div className="h-fit-content flex flex-col gap-6">
            <Panels setVideo={setVideo} />
            <Videos url={video === "CrazyRacy" ? CrazyRacy : video === "Project_R" ? Project_R : video === "timeWanderer" ? timeWanderer : video === "laHuida" ? laHuida : tercios} gameName={video} />
        </div>
    )
}

export default GamesVideos;