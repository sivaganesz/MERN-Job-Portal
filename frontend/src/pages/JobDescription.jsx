import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { setSingleJob } from '@/redux/jobSlice';
import store from '@/redux/store';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const JobDescription = () => {
    const {singleJob} = useSelector(store=>store.job)
    const {user} = useSelector(store=>store.auth)
    const isApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const params = useParams();
    const jobId = params.id;
    
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSingleJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
                console.log(res);
                
                if(res.data.success){
                    dispatch(setSingleJob(res.data.job));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJobs();
    },[jobId,dispatch,user?._id])
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className="p-4">
            <div className='flex items-center justify-between '>
                <h1 className='font-bold text-2xl'>{singleJob?.title}</h1>
                <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-800 hover:bg-blue-900'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Badge className="font-semibold bg-red-100 text-red-700 px-2 py-1">{singleJob?.position} Positions</Badge>
                <Badge className="font-semibold bg-blue-100 text-blue-700 px-2 py-1">{singleJob?.jobType}</Badge>
                <Badge className="font-semibold bg-green-100 text-green-700 px-2 py-1">{singleJob?.salary} PLA</Badge>
            </div>

            </div>
            <div className='p-4'>
                <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
                <h1 className='font-bold my-1'>Role: <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experienceLevel} yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary} LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>

            </div>

        </div>
    )
}

export default JobDescription