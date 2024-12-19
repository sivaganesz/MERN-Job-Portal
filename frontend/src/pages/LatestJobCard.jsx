import { Badge } from '@/components/ui/badge'
import React from 'react'

const LatestJobCard = () => {
  return (
    <div className="bg-white shadow-md p-5 mx-auto border rounded-md cursor-pointer transform transition-transform hover:scale-105">
      <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-gray-500'>India</p>
      </div>
      <div className="my-3">
        <h1 className='font-bold text-lg'>Job Title</h1>
        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laboriosam.</p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <Badge className="text-md text-red-700 font-bold" variant="ghost">12postion</Badge>
        <Badge className="text-md text-blue-700 font-bold" variant="ghost">Part-time</Badge>
        <Badge className="text-md text-green-700 font-bold" variant="ghost">12pla</Badge>
      </div>
    </div>
  )
}

export default LatestJobCard