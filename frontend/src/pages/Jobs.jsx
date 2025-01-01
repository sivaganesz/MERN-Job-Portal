import React from 'react';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';
import store from '@/redux/store';

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    const {allJobs} = useSelector(store=>store.job);
    return (
        <div className="w-[90%] mx-auto mt-5 p-5">
            <div className="flex flex-col lg:flex-row gap-5">
                {/* Filter Section */}
                <div className="w-full lg:w-[20%]">
                    <FilterCard />
                </div>

                {/* Job Listings */}
                <div className="w-full lg:w-[80%] mx-auto">
                    { allJobs.length <= 0 ? (
                        <div className="flex items-center justify-center h-[88vh]">
                            <span className="font-bold text-3xl">JOB NOT FOUND</span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
                            {allJobs.map((job) => (
                               <div key={job?._id}><Job job={job} /></div>
                               
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
