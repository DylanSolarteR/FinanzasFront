import { useGlobalContext } from "../../context/globalContext";
import DataTable from "../../components/DataTable";
import HiddenFormlayout from "../../components/HiddenFormlayout";
import TagsForm from "./dashboardForms/tagsform";
import CircleButton from "../../components/CircleButton";
import deleteTags from "../../fetchs/deleteTags";

export default function Tags(){
    const {userTags} = useGlobalContext();
    return(
    <div className="text-slate-700">
    <h1 className="mt-4 mx-auto text-3xl select-none text-center">Tags</h1>
    <div className="w-max mx-auto my-8">
        <div className="flex justify-between"> 
        {(userTags??[]).length==0? "No hay registros": <DataTable data={userTags}/>}
        {(userTags??[]).length==0? "": <table><th>Acciones</th>{userTags.map((data)=>(
                <tr><CircleButton src='/edit.svg' id={'edit'+data['_id']} className="bg-slate-600 p-2 hover:bg-slate-500" onClick={()=>(
                    console.log('ok')
                )}/>
                <CircleButton src='/delete.svg' id={'delete'+data['_id']} className="bg-slate-600 p-2 hover:bg-rose-500" onClick={()=>(
                    deleteTags(data['_id'])
                )}/>
                </tr>
        ))}</table>}
        </div>
        <HiddenFormlayout>
            <TagsForm/>
        </HiddenFormlayout>
    </div>
    </div>)
}