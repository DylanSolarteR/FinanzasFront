import SubmitButton from "../../../components/forms/SubmitButton";
import { useState } from "react";
import { useGlobalContext } from "../../../context/globalContext";
import updateTagById from "../../../fetchs/updateTagById";

export default function TagsUpdateForm({data}) {
  console.log(data)
  const id = data._id
  const finanzasArray = data.finanzas
  const { user, updateTags, setDialogOpened } = useGlobalContext();
  let [name, setName] = useState(data.name);

  const wait = () => new Promise((resolve) => setTimeout(resolve, 500));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateTagById(id, name, finanzasArray);
    if (response) {
      updateTags();
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
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div className="py-4">
        <SubmitButton> ACEPTAR </SubmitButton>
      </div>
    </form>
  );
}
