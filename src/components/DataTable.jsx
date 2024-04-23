import { useGlobalContext } from "../context/globalContext";
import deleteFinanzas from "../fetchs/deleteFinanzas";
import deleteTags from "../fetchs/deleteTags";
import { Pencil, Trash, Tag } from "lucide-react";
import updateTagById from "../fetchs/updateTagById";
import updateFinanzaById from "../fetchs/updateFinanzaById";
import FinanceUpdateForm from "../pages/dashboardPages/dashboardForms/FinanceUpdateForm";
import TagsUpdateForm from "../pages/dashboardPages/dashboardForms/tagsUpdateForm";
import DialogComponent from "./DialogComponent";
import { useToast } from "./ui/use-toast";


export default function DataTable({ data }) {
  const { updateFinanzas, updateTags, sideBarSelected, userTags } =
    useGlobalContext();
  const { toast } = useToast()
  return (
    <table className="border shadow-xl text-center">
      <thead>
        <tr className="rounded-lg divide-x">
          {Object.keys(data[0]).map((title, i) =>
            i > 0 && i < 8 && sideBarSelected === "finanzas" ? (
              <th key={i} className="px-2 w-16 bg-slate-300 border-2">
                {title}
              </th>
            ) : i > 0 && i < 2 && sideBarSelected === "tags" ? (
              <td key={i} className="px-2 w-16 bg-slate-300 border-2 font-bold">
                {title}
              </td>
            ) : null
          )}
          <th className="px-2 w-16 bg-slate-300 border-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          return (
            <tr key={i}>
              {Object.values(item).map((items, j) =>
                j > 0 && j < 8 && sideBarSelected === "finanzas" ? (
                  <td key={j} className="px-2 w-16 bg-slate-200 border-2 ">
                    {j === 6 ? (
                      items === true ? (
                        "Ingreso"
                      ) : (
                        "Egreso"
                      )
                    ) : j == 7 ? (
                      <div className="flex flex-row gap-1">
                        {items.map((tag, k) => (
                          <button
                            className="bg-slate-400 rounded-xl p-1 hover:bg-rose-400"
                            key={k}
                            onClick={async () => {
                              let newTags = data[i].tags.filter(
                                (obj) => !Object.values(obj).includes(tag._id)
                              );

                              let tagToUpdate = userTags.find(
                                (obj) => obj._id === tag._id
                              );

                              let finanzasArray = tagToUpdate.finanzas.filter(
                                (obj) => obj !== data[i]._id
                              );

                              await updateTagById(
                                tag._id,
                                tag.name,
                                finanzasArray
                              );
                              await updateFinanzaById(
                                data[i]._id,
                                data[i].name,
                                data[i].desc,
                                data[i].price,
                                data[i].payMethod,
                                data[i].date,
                                data[i].type,
                                newTags
                              );
                              updateFinanzas();
                              updateTags();
                            }}
                          >
                            {tag.name}
                          </button>
                        ))}
                      </div>
                    ) : (
                      items
                    )}
                  </td>
                ) : j > 0 && j < 2 && sideBarSelected === "tags" ? (
                  <td key={j} className="px-2 w-16 bg-slate-200 border-2 ">
                    {items}
                  </td>
                ) : null
              )}
              <td className="px-2 w-fit bg-slate-200 border-2 ">
                <div className="flex gap-2">
                  <DialogComponent
                    Trigger={<Pencil className="text-white" />}
                    Trigger_class={"bg-slate-600 p-2 hover:bg-rose-500 rounded-md"}
                    Titulo={"Editar " + sideBarSelected?.toLowerCase().slice(0, -1)}
                    Desc={"Asegurate de guardar los cambios antes de cerrar."}>
                    {
                      sideBarSelected == "finanzas" ? <FinanceUpdateForm data={data[i]} /> : <TagsUpdateForm data={data[i]} />
                    }
                  </DialogComponent>

                  <button
                    title="Eliminar"
                    className="bg-slate-600 p-2 hover:bg-rose-500 rounded-md"
                    onClick={() => {
                      if (sideBarSelected == "finanzas") {
                        deleteFinanzas(data[i]._id);
                        updateFinanzas();
                      } else {
                        deleteTags(data[i]._id);
                        updateTags();
                      }
                    }}
                  >
                    <Trash className="text-white" />
                  </button>
                  {sideBarSelected == "finanzas" ? (
                    <DialogComponent
                      Trigger={<Tag className="text-white" />}
                      Trigger_class={"bg-slate-600 p-2 hover:bg-rose-500 rounded-md"}
                      Titulo={"Tags"}
                      Desc={"Elige un tag para añadir."}>
                      <div className="flex flex-wrap gap-2">
                        {userTags.map((tag, key) => (
                          <button
                            key={key}
                            className="bg-slate-600 p-2 hover:bg-rose-500 rounded-md text-white"
                            onClick={() => {
                              if (
                                data[i].tags
                                  .map((tag) => tag._id)
                                  .includes(tag._id)
                              ) {
                                toast({
                                  title: "Error 🚨",
                                  description: "El Tag ya esta añadido.",
                                })
                                return;
                              }
                              updateTagById(tag._id, tag.name, [
                                ...tag.finanzas,
                                data[i]._id,
                              ]);
                              updateFinanzaById(
                                data[i]._id,
                                data[i].name,
                                data[i].desc,
                                data[i].price,
                                data[i].payMethod,
                                data[i].date,
                                data[i].type,
                                [...data[i].tags, tag._id]
                              );
                              updateFinanzas();
                              updateTags();
                            }}
                          >
                            {tag.name}
                          </button>
                        ))}
                      </div>
                    </DialogComponent>
                  ) : null}


                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
