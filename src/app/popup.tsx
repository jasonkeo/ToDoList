import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { todo } from "node:test"


interface EditProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    todoitem: string[];
    setListofitems: React.Dispatch<React.SetStateAction<string[]>>;
    id: number;
}


export const Edit: React.FC<EditProps> = ({ open, setOpen, todoitem, setListofitems, id }) => {

    const [formData, setData] = useState(todoitem[id]);


    useEffect(() => {
        setData(todoitem[id]);
    }, [todoitem, id]);



    function formSubmit() {
        let temp = todoitem
        temp[id] = formData
        setListofitems(temp)
        setOpen(false)


    }

    return (
        <Dialog open={open}>
            {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
            <DialogContent className="sm:max-w-[425px]" onOpenAutoFocus={(e) => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Edit Note - {id + 1} </DialogTitle>
                    {/* <DialogDescription>
            
          </DialogDescription> */}
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex w-full items-center gap-4">
                        {/* <Label htmlFor="name" className="text-right">
              Name
            </Label> */}

                        <Input id="name" value={formData} className="w-full" onChange={(e) => { setData(e.target.value) }} onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                formSubmit();
                            }
                        }} autoFocus/>
                    </div>
                    {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => { formSubmit() }}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
