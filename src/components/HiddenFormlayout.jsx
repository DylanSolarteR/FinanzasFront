import { useState } from "react"

export default function HiddenFormlayout({children}){
    let [visible, setVisible] = useState(false);

    const change = (visible)=>{
        setVisible(!visible);
    }
    return(<div className="py-4">
            <button className="rounded-full bg-slate-600 p-2 hover:bg-slate-500 hover:scale-105 animation-all duration-300" onClick={()=>{change(visible)}}>
                <img src="/plus.svg" className={"invert animate-all duration-200 "+ (visible? "rotate-45":"rotate-0")}></img>
            </button>
            <div className={"py-4 px-4 mx-auto "+(visible? "":"hidden")}>
                {children}
            </div>
        </div>)
}