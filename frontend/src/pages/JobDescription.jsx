import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { setSingleJob } from '@/redux/jobSlice';
import store from '@/redux/store';
import { JOB_API_END_POINT,APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

const JobDescription = () => {
    const {singleJob} = useSelector(store=>store.job)
    const {user} = useSelector(store=>store.auth)
    const isIntiallyApplied = singleJob?.applications?.some(application => application.applicantion === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isIntiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
            
            if(res.data.success){
                setIsApplied(true); // Update the local state
                const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicantion:user?._id}]}
                dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
                toast.success(res.data.message);

            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }     



    useEffect(()=>{
        const fetchSingleJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
                console.log(res);
                
                if(res.data.success){
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application=>application.applicantion === user?._id)) // Ensure the state is in sync with fetched data
    
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
                <Button onClick={isApplied ? null : applyJobHandler} disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-800 hover:bg-blue-900'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
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