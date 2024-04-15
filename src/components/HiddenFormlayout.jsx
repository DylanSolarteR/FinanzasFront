import { useState } from "react"
import CircleButton from "./CircleButton";

export default function HiddenFormlayout({children}){
    let [visible, setVisible] = useState(false);

    const change = (visible)=>{
        setVisible(!visible);
    }
    return(<div className="py-4">
            <CircleButton   id='add'
                            src="/plus.svg"
                            imageClassName={"animate-all duration-200 "+(visible? "rotate-45":"rotate-0")}
                            className={(visible? "bg-rose-600 hover:bg-rose-500":"bg-slate-600 hover:bg-slate-500")}
                            onClick={()=>{change(visible)}}/>
                            
            <div className={"py-4 px-4 mx-auto "+(visible? "":"hidden")}>
                {children}
            </div>
        </div>)
}