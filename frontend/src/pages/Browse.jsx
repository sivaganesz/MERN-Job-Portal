import React from 'react'
import Job from './job';

const randomJobs = [1, 2, 3];

const Browse = () => {
    return (
        <div className='p-3'>
            <div className="max-w-7xl mx-auto my-10">
                <h1 className='font-bold text-xl'>Search Result({randomJobs.length})
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 mt-10">
                        {randomJobs.map((item, index) => (
                            <Job key={index} />
                        ))}
                    </div>
                </h1>
            </div>
        </div>
    )
}

export default Browse