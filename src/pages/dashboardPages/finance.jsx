import { useGlobalContext } from "../../context/globalContext";
import DataTable from "../../components/DataTable";
import HiddenFormlayout from "../../components/HiddenFormlayout";
import CircleButton from "../../components/CircleButton";
import FinanceForm from "./dashboardForms/Financeform";
export default function Finance(){
    const {userFinanzas} = useGlobalContext();

    return(
    <div className="text-slate-700">
    <h1 className="mt-4 mx-auto text-3xl select-none text-center">Finanzas</h1>
    <div className="w-max mx-auto my-8">
        <div className="flex justify-between"> 
        {(userFinanzas??[]).length==0? "No hay registros": <DataTable data={userFinanzas}/>}
        {(userFinanzas??[]).length==0? "": <table><th>Acciones</th>{userFinanzas.map((data)=>(
                <tr><CircleButton src='/edit.svg' id={'edit'+data['_id']} className="bg-slate-600 p-2 hover:bg-slate-500" onClick={()=>(console.log('ok'+data['_id']))}/>
                    <CircleButton src='/delete.svg' id={'delete'+data['_id']} className="bg-slate-600 p-2 hover:bg-rose-500" onClick={()=>(console.log('ok'+data['_id']))}/>
                </tr>
        ))}</table>}
        </div>
        <HiddenFormlayout>
            <FinanceForm/>
        </HiddenFormlayout>
    </div>
    </div>)
}