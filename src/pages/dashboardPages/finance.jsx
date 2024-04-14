import { useGlobalContext } from "../../context/globalContext";

export default function Finance(){
    const {token, user} = useGlobalContext();
    return(
    <div className="text-slate-700">
    <h1 className="mt-4 text-3xl select-none ">Finanzas</h1>
    </div>)
}