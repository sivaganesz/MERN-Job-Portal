import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import React from 'react'

const JobDescription = () => {
    const isApplied = true;;
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className="p-4">
            <div className='flex items-center justify-between '>
                <h1 className='font-bold text-2xl'>Software Developer</h1>
                <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-800 hover:bg-blue-900'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Badge className="font-semibold bg-red-100 text-red-700 px-2 py-1">12 Positions</Badge>
                <Badge className="font-semibold bg-blue-100 text-blue-700 px-2 py-1">Part-time</Badge>
                <Badge className="font-semibold bg-green-100 text-green-700 px-2 py-1">12 PLA</Badge>
            </div>

            </div>
            <div className='p-4'>
                <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
                <h1 className='font-bold my-1'>Role: <span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Location: <span className="pl-4 font-normal text-gray-800">Hyderabad</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className="pl-4 font-normal text-gray-800">2 yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className="pl-4 font-normal text-gray-800">12LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className="pl-4 font-normal text-gray-800">4</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className="pl-4 font-normal text-gray-800">17-87-2024.</span></h1>
                <h1 className='font-bold my-1'>Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, velit dolore! Ducimus dignissimos molestias a voluptates fugiat non fugit nisi?</span></h1>

            </div>

        </div>
    )
}

export default JobDescription