import { data } from "autoprefixer"
import { useState } from "react"
import { Link } from "react-router-dom"

function NavButton({text,href,imgsrc, state}){
    return(
        <Link className='px-8 py-4 text-slate-700 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors duration-300 flex justify-between' to={href}>
            <img src={imgsrc} className='p-2 rounded-full bg-slate-200'/>{text}
        </Link>
    )
}

export default function NavSide(){
    let [state,setstate]=useState(0)
    const cambiar_estado=(state)=>{
        setstate(state==0? 1: 0)
    }

    let navigation = [
        ['/','/tag.svg','Etiquetas'],
        ['/','/dollar-sign.svg','Finanzas']
    ]

    return(
    <>
    <div className={"bg-slate-200 "+(state==1? "w-64":"w-12")}>
    <button className='bg-slate-300 transition-colors duration-300 inline-flex w-full h-10 hover:bg-slate-400 items-center ' onClick={
                ()=>{cambiar_estado(state)}
                }>
        <img src={state==1? "/x.svg":"/menu.svg"} className='px-2 invert h-full'/>
        <div className="text-slate-700 text-center mx-auto text-xl">
            {state==1? "Menu":""}
        </div>
    </button>
    {navigation.map((dato)=>(<NavButton text={state==1? dato[2]:""} state={state} href={dato[0]} imgsrc={dato[1]}/>))}
    </div>
    </>
    )
}//{navigation.map((dato)=>(NavButton(dato[0],dato[1],dato[2])))}