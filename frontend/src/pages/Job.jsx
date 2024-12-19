import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import React from 'react';

const Job = () => {
    return (
        <div className="bg-white shadow-lg p-6 mx-auto border rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            {/* Top Row: Date and Bookmark */}
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-sm text-gray-500">2 Days Ago</h1>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>
            </div>

            {/* Company Section */}
            <div className="flex items-center gap-4 mb-3">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                    <h1 className="font-semibold text-lg text-gray-800">Company Name</h1>
                    <p className="text-sm text-gray-500">India</p>
                </div>
            </div>

            {/* Job Title and Description */}
            <div className="mb-4">
                <h1 className="font-bold text-xl text-gray-800">Job Title</h1>
                <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laboriosam.
                </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-5">
                <Badge className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1">12 Positions</Badge>
                <Badge className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1">Part-time</Badge>
                <Badge className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1">12 PLA</Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center md:justify-normal lg:justify-normal gap-4">
                <Button variant="outline">Details</Button>
                <Button className="bg-cyan-800 text-white hover:bg-cyan-700">Save For Later</Button>
            </div>
        </div>
    );
};

export default Job;
