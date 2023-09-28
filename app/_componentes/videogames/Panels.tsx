import { useState } from "react";

function Panels({ resize }: { resize: any }) {
    const [panelActive, setPanelActive] = useState("")

    return (
        <article className="flex justify-center ">
            <div id="Project_R" className="cursor-pointer bg-fondoProjectR h-72 w-[6vw] bg-cover rounded-[5rem] bg-center bg-no-repeat active:bg-red-500" onClick={resize} >
            </div>
            <div id="CrazyRacy" className="cursor-pointer bg-fondoCrazyRacy h-72 w-[6vw] bg-cover rounded-[5rem] bg-center bg-no-repeat" onClick={resize} >
            </div>
        </article>
    )
}

export default Panels;