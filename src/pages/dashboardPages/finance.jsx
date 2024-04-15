import { useGlobalContext } from "../../context/globalContext";
import DataTable from "../../components/DataTable";
import HiddenFormlayout from "../../components/HiddenFormlayout";
import SubmitButton from "../../components/forms/SubmitButton"
import CircleButton from "../../components/CircleButton";

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
            <form className="w-96 mx-auto">
                <label>Nombre
                    <input type="text" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"/>
                </label>
                <label>Descripción
                    <input type="text" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"/>
                </label>
                <label>Precio
                    <input type="number" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"/>
                </label>
                <label>Método de pago
                    <select type="text" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400">
                    <option>Tarjeta</option>
                    <option>Efectivo</option>
                    </select>
                </label>
                <label>Fecha
                    <input type="datetime-local" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"/>
                </label>
                <label>Tipo
                    <input type="checkbox" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"/>
                </label>
                <div className="py-4">
                    <SubmitButton> ACEPTAR </SubmitButton>
                </div>
            </form>
        </HiddenFormlayout>
    </div>
    </div>)
}