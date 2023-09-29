import { Dispatch, SetStateAction, useState } from "react";

type videos = {
    setVideo:Dispatch<SetStateAction<string>>
}

function Panels({setVideo}:videos) {
    const [panelActive, setPanelActive] = useState("")
    function resize(e:any){
        let active = document.getElementsByClassName("active")[0];
        if (!e.target.classList.contains("active")) {
            active.classList.remove("active");
            e.target.classList.add("active");
        }
        setVideo(e.target.id);
    }

    return (
        <article className="flex justify-center ">
            <div id="laHuida" className="cursor-pointer bg-laHuida h-64 w-[6vw] bg-cover rounded-[5rem] bg-center bg-no-repeat transition-all duration-1000" onClick={resize} >
            </div>
            <div id="timeWanderer" className="cursor-pointer bg-timeWanderer h-64 w-[6vw] bg-cover rounded-[5rem] bg-center bg-no-repeat transition-all duration-1000" onClick={resize} >
            </div>
            <div id="Project_R" className="cursor-pointer bg-fondoProjectR h-64 w-[6vw] bg-cover rounded-[5rem] bg-center bg-no-repeat transition-all duration-1000 active" onClick={resize} >
            </div>
            <div id="CrazyRacy" className="cursor-pointer bg-fondoCrazyRacy h-64 w-[6vw] bg-cover rounded-[5rem] bg-center bg-no-repeat transition-all duration-1000" onClick={resize} >
            </div>
            <div id="tercios" className="cursor-pointer bg-tercios h-64 w-[6vw] bg-cover rounded-[5rem] bg-center bg-no-repeat transition-all duration-1000" onClick={resize} >
            </div>
        </article>
    )
}

export default Panels;