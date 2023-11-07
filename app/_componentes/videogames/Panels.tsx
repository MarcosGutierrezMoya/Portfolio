import { Dispatch, SetStateAction, useState } from "react";

type videos = {
    setVideo: Dispatch<SetStateAction<string>>
}

function Panels({ setVideo }: videos) {
    const [panelActive, setPanelActive] = useState("Project_R")
    const defaultStyle = "cursor-pointer h-64 w-[6vw] bg-cover rounded-[5rem] bg-center bg-no-repeat transition-all duration-1000"

    function resize(e: any) {
        setPanelActive(e.target.id)
        let active = document.getElementsByClassName("active")[0];
        let activeBtn = document.getElementsByClassName("activeBtn")[0];
        let activeDiv = document.getElementById(e.target.id + " btn");
        if (!e.target.classList.contains("active")) {
            active.classList.remove("active");
            e.target.classList.add("active");
            activeBtn.classList.remove("activeBtn");
            activeDiv?.classList.add("activeBtn");
        }
        setVideo(e.target.id);
    }
    function resizeParentDiv(e: any,id:string) {
        setPanelActive(id)
        let activeBtn = document.getElementsByClassName("activeBtn")[0];
        let active = document.getElementsByClassName("active")[0];
        let activeDiv = document.getElementById(id);
        if (!e.target.classList.contains("activeBtn")) {
            activeBtn.classList.remove("activeBtn");
            e.target.classList.add("activeBtn");
            active.classList.remove("active");
            activeDiv?.classList.add("active");
        }
        setVideo(id);
    }

    return (
        <div className="flex flex-col gap-6">
            <article className="flex justify-center ">
                <div id="La Huida" className={`bg-laHuida ${defaultStyle}`} onClick={resize} >
                </div>
                <div id="Time Wanderer" className={`bg-timeWanderer ${defaultStyle}`} onClick={resize} >
                </div>
                <div id="Project_R" className={`bg-fondoProjectR ${defaultStyle} active`} onClick={resize} >
                </div>
                <div id="CrazyRacy" className={`bg-fondoCrazyRacy ${defaultStyle}`} onClick={resize} >
                </div>
                <div id="Los tercios" className={`bg-tercios ${defaultStyle}`} onClick={resize} >
                </div>
            </article>
            <div className="flex justify-center gap-4 items-center">
                <button id="La Huida btn" className=" rounded-xl bg-white w-3 h-3" onClick={(e)=>resizeParentDiv(e,"La Huida")}></button>
                <button id="Time Wanderer btn" className=" rounded-xl bg-white w-3 h-3" onClick={(e)=>resizeParentDiv(e,"Time Wanderer")}></button>
                <button id="Project_R btn" className=" rounded-xl bg-white w-3 h-3 activeBtn" onClick={(e)=>resizeParentDiv(e,"Project_R")}></button>
                <button id="CrazyRacy btn" className=" rounded-xl bg-white w-3 h-3" onClick={(e)=>resizeParentDiv(e,"CrazyRacy")}></button>
                <button id="Los tercios btn" className=" rounded-xl bg-white w-3 h-3" onClick={(e)=>resizeParentDiv(e,"Los tercios")}></button>
            </div>
            <h1 className='text-5xl text-center'>{panelActive}</h1>
        </div>

    )
}

export default Panels;