import { useGlobalContext } from "../../context/globalContext";
import DataTable from "../../components/DataTable";
import HiddenFormlayout from "../../components/HiddenFormlayout";
import TagsForm from "./dashboardForms/tagsform";

export default function Tags() {
  const { userTags } = useGlobalContext();
  return (
    <div className="text-slate-700">
      <h1 className="mt-4 mx-auto text-3xl select-none text-center">Tags</h1>
      <div className="w-max mx-auto my-8">
        <div className="flex justify-center items-center">
          {(userTags ?? []).length == 0 ? (
            "No hay registros"
          ) : (
            <DataTable data={userTags} />
          )}
        </div>
        <HiddenFormlayout>
          <TagsForm />
        </HiddenFormlayout>
      </div>
    </div>
  );
}
