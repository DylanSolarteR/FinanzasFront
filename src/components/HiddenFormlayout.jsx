import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGlobalContext } from "@/context/globalContext";

export default function HiddenFormlayout({ children }) {
  const { sideBarSelected, dialogOpened, setDialogOpened } = useGlobalContext();
  return (
    <div className="py-4 flex flex-col justify-center items-center">
      <Dialog open={dialogOpened} onOpenChange={setDialogOpened}>
        <DialogTrigger className="bg-slate-600 hover:bg-slate-500 text-white rounded-lg w-full p-2">
          AGREGAR {sideBarSelected?.toUpperCase().slice(0, -1)}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Agregar {sideBarSelected?.toLowerCase().slice(0, -1)}
            </DialogTitle>
            <DialogDescription>
              Rellena los siguientes campos y añade una nueva entrada.
            </DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
