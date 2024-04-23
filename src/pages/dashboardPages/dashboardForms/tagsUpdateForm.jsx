import SubmitButton from "../../../components/forms/SubmitButton";
import { useState } from "react";
import { useGlobalContext } from "../../../context/globalContext";
import updateTagById from "../../../fetchs/updateTagById";
import { useToast } from "../../../components/ui/use-toast";

export default function TagsUpdateForm({ data }) {
  // console.log(data)
  const id = data._id
  const finanzasArray = data.finanzas
  const { updateTags, updateFinanzas } = useGlobalContext();
  let [name, setName] = useState(data.name);
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateTagById(id, name, finanzasArray);
    if (response) {
      updateTags();
      updateFinanzas();

      toast({
        title: "Actualizado 👍",
        description: "El registro ha sido actualizado correctamente.",
      })
    } else {
      toast({
        title: "Error 🚨",
        description: "El registro no ha sido actualizado.",
      })
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
