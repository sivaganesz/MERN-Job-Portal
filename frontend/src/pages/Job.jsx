import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Job = ({ job }) => {

    // const jobId = "zxcvbnm";
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }
    return (

        <div className="bg-white shadow-lg p-6 mx-auto border rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            {/* Top Row: Date and Bookmark */}
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-sm text-gray-500">{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</h1>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>
            </div>

            {/* Company Section */}
            <div className="flex items-center gap-4 mb-3">
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className="font-semibold text-lg text-gray-800">{job?.company?.name}</h1>
                    <p className="text-sm text-gray-500">{job?.location}</p>
                </div>
            </div>

            {/* Job Title and Description */}
            <div className="mb-4">
                <h1 className="font-bold text-xl text-gray-800">{job?.title}</h1>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {job?.description || "No description available"}
                </p>

            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-5">
                <Badge className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1">{job?.position} Positions</Badge>
                <Badge className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1">{job?.jobType}</Badge>
                <Badge className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1">{job?.salary} PLA</Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center md:justify-normal lg:justify-normal gap-4">
                <Button variant="outline" onClick={() => navigate(`/description/${job?._id}`)}>Details</Button>
                <Button className="bg-cyan-800 text-white hover:bg-cyan-700">Save For Later</Button>
            </div>
        </div>
    );
};

export default Job;
