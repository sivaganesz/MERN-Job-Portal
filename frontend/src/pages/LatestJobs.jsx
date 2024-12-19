import React from 'react'
import LatestJobCard from './LatestJobCard';

const randomJobs = [1,2,3,4,5,6,7,8,9];
const LatestJobs = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold ml-0 md:ml-5 lg:ml-5 text-center md:text-left lg:text-left'>
          <span className='text-blue-600 '>Lastest & Top</span> Job Openings</h1>
        <div className="grid lg:grid-cols-3 gap-5 my-10 md:grid-cols-2 sm:grid-cols-1 p-5">
            {
                randomJobs.slice(0,6).map((job,index)=><LatestJobCard/>)
            }
        </div>
    </div>
  )
}

export default LatestJobs