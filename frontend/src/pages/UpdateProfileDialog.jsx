import React from 'react'
import { Button } from "@/components/ui/button"
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
const UpdateProfileDialog = ({ open, setOpen }) => {
    return (
        <div>
            <Dialog open={open}>
                <DialogContent className="max-w-[325px] lg:max-w-[425px]" onInteractOutside={()=>setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                        <form action="">
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-left">Name</Label>
                                    <Input id="name" name="name" className="col-span-3"/>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-left">Email</Label>
                                    <Input id="email" name="email" className="col-span-3"/>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="number" className="text-left">Number</Label>
                                    <Input id="number" name="number" className="col-span-3"/>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="bio" className="text-left">Bio</Label>
                                    <Input id="bio" name="bio" className="col-span-3"/>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="skills" className="text-left">Skills</Label>
                                    <Input id="skills" name="skills" className="col-span-3"/>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="file" className="text-left">Resume</Label>
                                    <Input id="file" name="file" type="file" accept="application/pdf" className="col-span-3"/>
                                </div>
                            </div>
                        </form>
                    {/* <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter> */}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog