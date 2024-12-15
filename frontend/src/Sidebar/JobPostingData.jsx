import React from 'react';
import InputField from '../components/InputField';

const JobPostingData = ({ handleChange }) => {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    return (
        <div>
            <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="dateFilter" value="" onChange={handleChange} />
                    <span className="checkmark"></span> All time
                </label>
                <InputField handleChange={handleChange} value={twentyFourHoursAgo} title="Last 24 Hours" name="dateFilter" />
                <InputField handleChange={handleChange} value={sevenDaysAgo} title="Last 7 Days" name="dateFilter" />
                <InputField handleChange={handleChange} value={thirtyDaysAgo} title="Last Month" name="dateFilter" />
            </div>
        </div>
    );
};

export default JobPostingData;
