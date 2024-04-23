import { children } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function DialogComponent({ Trigger, Trigger_class, Titulo, Desc, children }) {
    return (
        <Dialog>
            <DialogTrigger className={Trigger_class}>
                {Trigger}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{Titulo}</DialogTitle>
                    <DialogDescription>
                        {Desc}
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default DialogComponent