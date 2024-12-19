import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@radix-ui/react-label';

const filterData = [
    { filterType: "Location", array: ["Delhi", "Bangalore", "Hyderabad", "Mumbai", "Chennai"] },
    { filterType: "Industry", array: ["Frontend Developer", "Backend Developer", "Data Scientist", "Project Manager", "UI/UX Designer"] },
    { filterType: "Salary Range", array: ["0-40K", "40K-80K", "80K-1.2L", "1.2L+"] },
    { filterType: "Job Type", array: ["Full-time", "Part-time", "Internship", "Freelance"] },
];

const FilterCard = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    const toggleFilter = (index) => {
        setActiveFilter(activeFilter === index ? null : index);
    };

    return (
        <div className="p-5 w-full bg-white border">
            <h1 className="text-xl font-bold mb-4">Filters</h1>

            {/* For medium and larger screens: Display filter types in a row */}
            <div className="grid md:grid-cols-4  lg:grid-cols-1 gap-3 mb-4">
            {filterData.map((items, index) => (
                <div key={index} className="mb-3">
                    <h2
                        className="text-lg font-semibold cursor-pointer border-b pb-2 lg:cursor-auto lg:border-none"
                        onClick={() => toggleFilter(index)}
                    >
                        {items.filterType}
                    </h2>
                    {/* For larger screens, show all filters */}
                    <div className={`mt-2 space-y-2 ${activeFilter === index || 'lg:block hidden'} `}>
                        <RadioGroup>
                            {items.array.map((item, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                    <RadioGroupItem value={item} className="h-4 w-4" />
                                    <Label className="text-sm text-gray-600">{item}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default FilterCard;
