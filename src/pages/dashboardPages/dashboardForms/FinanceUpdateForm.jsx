import SubmitButton from "../../../components/forms/SubmitButton";
import updateFinanzaById from "../../../fetchs/updateFinanzaById";
import { useGlobalContext } from "../../../context/globalContext";
import { useState } from "react";

export default function FinanceUpdateForm({data}) {
  const id = data._id;
  const tags = data.tags
  const { user, updateFinanzas, setDialogOpened } = useGlobalContext();
  let [name, setName] = useState(data.name);
  let [description, setDesc] = useState(data.desc);
  let [price, setPrice] = useState(data.price);
  let [paymethod, setPaymethod] = useState(data.payMethod);
  let [date, setDate] = useState(data.date);
  let [type, setType] = useState(data.type);

  const wait = () => new Promise((resolve) => setTimeout(resolve, 500));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateFinanzaById(
      id,
      name,
      description,
      price,
      paymethod,
      date,
      type,
      tags
    );

    if (response) {
      updateFinanzas();
      setName("");
      setDesc("");
      setPrice(0.0);
      setPaymethod("Efectivo");
      setType(false);
      wait().then(() => setDialogOpened(false));
    }
  };

  return (
    <form className="w-96 mx-auto" onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          type="text"
          value={name}
          className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-slate-800 border-2 placeholder:italic placeholder:text-slate-400"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Descripción
        <input
          type="text"
          value={description}
          className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-slate-800 border-2 placeholder:italic placeholder:text-slate-400"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </label>
      <label>
        Precio
        <input
          type="number"
          value={price}
          className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-slate-800 border-2 placeholder:italic placeholder:text-slate-400"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </label>
      <label>
        Método de pago
        <select
          type="text"
          value={paymethod}
          className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-slate-800 border-2 placeholder:italic placeholder:text-slate-400"
          onChange={(e) => {
            setPaymethod(e.target.value);
          }}
        >
          <option>Efectivo</option>
          <option>Tarjeta</option>
        </select>
      </label>
      <label>
        Fecha
        <input
          type="datetime-local"
          value={date}
          className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-slate-800 border-2 placeholder:italic placeholder:text-slate-400"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </label>
      <label>
        Tipo
        <select
          type="text"
          value={type}
          className="mt-1 w-full rounded-md p-1 focus:outline-slate-400 border-slate-800 border-2 placeholder:italic placeholder:text-slate-400"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value={1}>Ingreso</option>
          <option value={0}>Egreso</option>
        </select>
      </label>
      <div className="py-4">
        <SubmitButton> GUARDAR </SubmitButton>
      </div>
    </form>
  );
}
