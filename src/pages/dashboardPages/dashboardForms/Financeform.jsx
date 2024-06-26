import SubmitButton from "../../../components/forms/SubmitButton"
import newFactura from "../../../fetchs/newFactura";
import { useGlobalContext } from "../../../context/globalContext";
import { useState } from "react";

export default function FinanceForm(){
    const {user} = useGlobalContext();
    let [name, setName] = useState('');
    let [description, setDesc] = useState('');
    let [price, setPrice] = useState(0.0);
    let [paymethod, setPaymethod] = useState('Efectivo');
    let [date, setDate] = useState(new Date());
    let [type, setType] = useState(false)


    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await newFactura(name, description, price, paymethod, date, type, [], user);
        if(response){
            setName('')
            setDesc('')
            setPrice(0.0)
            setPaymethod('Efectivo')
            setType(false)
        }
    }


    return(<form className="w-96 mx-auto" onSubmit={handleSubmit}>
                <label>Nombre
                    <input type="text" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>Descripción
                    <input type="text" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
                    onChange={(e) => setDesc(e.target.value)}
                    />
                </label>
                <label>Precio
                    <input type="number" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <label>Método de pago
                    <select type="text" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
                    onChange={(e) => setPaymethod(e.target.value)}
                    >
                    <option>Tarjeta</option>
                    <option>Efectivo</option>
                    </select>
                </label>
                <label>Fecha
                    <input type="datetime-local" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
                    onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label>Tipo
                    <input type="checkbox" className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-black border-2 placeholder:italic placeholder:text-slate-400"
                    onChange={(e) => setType(e.target.value)}
                    />
                </label>
                <div className="py-4">
                    <SubmitButton> ACEPTAR </SubmitButton>
                </div>
            </form>
        )
}