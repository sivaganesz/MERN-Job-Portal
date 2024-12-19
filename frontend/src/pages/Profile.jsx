import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Contact, Mail, Pen } from 'lucide-react'
import React, { useState } from 'react'
import AppliedJobs from './AppliedJobsTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import store from '@/redux/store'

const colors = [
    "bg-red-100 text-red-700",
    "bg-blue-100 text-blue-700",
    "bg-green-100 text-green-700",
    "bg-yellow-100 text-yellow-700",
    "bg-purple-100 text-purple-700",
    "bg-pink-100 text-pink-700",
    "bg-orange-100 text-orange-700",
];
const isResume = true;
const Profile = () => {
    const [open, setOpen] = useState(false)
    const {user} = useSelector(store=>store.auth)

    return (
        <div>
            {/* image, name */}
            <div className="w-[93%] lg:max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-6 p-10">
                <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center lg:items-start">
                    <div className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start gap-5">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div className="text-center md:text-left lg:text-left">
                            <h1 className="font-medium text-2xl">{user?.fullname}</h1>
                            <p>{user?.profile?.bio}.</p>
                        </div>
                    </div>
                    <Button variant="outline" className="mt-4 lg:mt-0 text-right" onClick={() => setOpen(true)}>
                        <Pen />
                    </Button>
                </div>

                {/* contact */}
                <div className="my-5 text-center md:text-left lg:text-left">
                    <div className="flex items-center gap-3 my-2 justify-center md:justify-start lg:justify-start">
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-3 my-2 justify-center md:justify-start lg:justify-start">
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>

                {/* skills */}
                <div className="">
                    <h1 className=' text-center md:text-left lg:text-left'>
                        <Label className="font-medium text-lg">Skills</Label>
                    </h1>
                    <div className="flex items-center gap-3 my-2 flex-wrap justify-center md:justify-start lg:justify-start">
                        {user?.profile?.skills.length !== 0 ? (
                            user?.profile?.skills.map((item, index) => {
                                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                                return (<Badge key={index} className={`px-3 py-2 w-20 flex items-center justify-center ${randomColor}`} > {item}</Badge>);
                            })) : (<span>NA</span>)}
                    </div>
                </div>

                {/* resume */}
                <div className="text-center md:text-left lg:text-left">
                    <h1 className=' text-center md:text-left lg:text-left'>
                        <Label className="font-medium text-lg">Resume</Label>
                    </h1>
                    <div >

                        {isResume ? (<a target="blank" href="" className="text-blue-800 hover:underline text-lg" > {user?.profile?.resumeOriginalName}</a>)
                            : (<span>NA</span>)}
                    </div>
                </div>
            </div>

            {/* Applied Jobs */}
            <div className="mt-8 w-[90%] lg:max-w-4xl mx-auto  bg-white rounded-2xl">
                <Label className="font-bold text-lg">Applied Jobs</Label>
                <AppliedJobs />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>

    )
}

export default Profile