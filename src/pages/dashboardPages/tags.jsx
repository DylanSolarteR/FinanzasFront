import { useGlobalContext } from "../../context/globalContext";
import DataTable from "../../components/DataTable";
import HiddenFormlayout from "../../components/HiddenFormlayout";
import SubmitButton from "../../components/forms/SubmitButton"

export default function Tags(){
    const {userTags} = useGlobalContext();
    return(
    <div className="text-slate-700">
    <h1 className="mt-4 mx-auto text-3xl select-none text-center">Tags</h1>
    <div className="w-max mx-auto my-8">
        {(userTags??[]).length==0? "No hay registros": <DataTable data={userTags}/>}
        <HiddenFormlayout>
            <form className="w-96 mx-auto">
                <label>Nombre
                    <input type="text" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"/>
                </label>
                <label>Finanzas
                    <input type="text" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"/>
                </label>
                <div className="py-4">
                    <SubmitButton> ACEPTAR </SubmitButton>
                </div>
            </form>
        </HiddenFormlayout>
    </div>
    </div>)
}