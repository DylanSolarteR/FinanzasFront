import SubmitButton from "../../../components/forms/SubmitButton"
import { useState } from "react"
import { useGlobalContext } from "../../../context/globalContext";
import newTag from "../../../fetchs/newTag";

export default function TagsForm(){
    const {user} = useGlobalContext();
    let [name, setName] = useState('');
    let [finanza, setFinanza] = useState('');

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await newTag(name, [], user);
    }

    return (
        <form className="w-96 mx-auto" onSubmit={handleSubmit}>
                <label>Nombre
                    <input type="text" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>Finanzas
                    <input type="text" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
                    onChange={(e) => setFinanza(e.target.value)}
                    />
                </label>
                <div className="py-4">
                    <SubmitButton> ACEPTAR </SubmitButton>
                </div>
            </form>
    )
}