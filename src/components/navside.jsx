import { useState } from "react"

function NavButton(){
    return(
        <></>
    )
}

export default function NavSide(){
    let [state,setstate]=useState(0)
    const cambiar_estado=(state)=>{
        setstate(state==0? 1: 0)
    }

    return(
    <>
    <div className={"bg-slate-200 "+(state==1? "w-64":"w-12")}>
    <button className='bg-slate-300 transition-colors duration-300 inline-flex w-full h-10 hover:bg-slate-400 items-center ' onClick={
                ()=>{cambiar_estado(state)}
                }>
        <img src={state==1? "/x.svg":"/menu.svg"} className='px-2 invert h-full'/>
        <div className="text-center mx-auto text-xl">
            {state==1? "Menu":""}
        </div>
    </button>
    </div>
    </>
    )
}