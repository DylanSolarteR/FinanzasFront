import { useGlobalContext } from "../../context/globalContext";
import DataTable from "../../components/DataTable";



export default function Finance(){
    const {userFinanzas} = useGlobalContext();
    return(
    <div className="text-slate-700">
    <h1 className="mt-4 mx-auto text-3xl select-none text-center">Finanzas</h1>
    <div className="w-max mx-auto my-8">
        {(userFinanzas??[]).length==0? "No hay registros": <DataTable data={userFinanzas}/>}
    </div>
    </div>)
}