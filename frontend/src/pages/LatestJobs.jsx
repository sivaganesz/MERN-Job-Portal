import React from 'react'
import LatestJobCard from './LatestJobCard';
import { useSelector } from 'react-redux';

// const randomJobs = [1,2,3,4,5,6,7,8,9];
const LatestJobs = () => {
  const {allJobs} = useSelector(store=>store.job);
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold ml-0 md:ml-5 lg:ml-5 text-center md:text-left lg:text-left'>
          <span className='text-blue-600 '>Lastest & Top</span> Job Openings</h1>
        <div className="grid lg:grid-cols-3 gap-5 my-10 md:grid-cols-2 sm:grid-cols-1 p-5">
            {
                    allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCard key={job._id} job={job}/>)
                  }
        </div>
    </div>
  )
}

export default LatestJobs