import { Badge } from '@/components/ui/badge'
import React from 'react'

const LatestJobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md p-5 mx-auto border rounded-md cursor-pointer transform transition-transform hover:scale-105">
      <div>
        <h1 className='font-medium text-lg'>{job?.companyID?.name}</h1>
        <p className='text-gray-500'>{job?.location}</p>
      </div>
      <div className="my-3">
        <h1 className='font-bold text-lg'>{job?.title}</h1>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {job?.description || "No description available"}
        </p>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <Badge className="text-md text-red-700 font-bold" variant="ghost">{job?.position} position</Badge>
        <Badge className="text-md text-blue-700 font-bold" variant="ghost">{job?.jobType}</Badge>
        <Badge className="text-md text-green-700 font-bold" variant="ghost">{job?.salary} PLA</Badge>
      </div>
    </div>
  )
}
export default LatestJobCard