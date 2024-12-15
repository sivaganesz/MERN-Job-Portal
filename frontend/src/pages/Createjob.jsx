import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import CreateTableSelected from 'react-select';
const Createjob = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        data.skills = selectedOptions; console.log(data);
    }

    const [selectedOptions, setSelectedOptions] = useState(null);
    const options = [
        { value: "JavaScript", label: "JavaScript" },
        { value: "Java", label: "Java" },
        { value: "C", label: "C" },
        { value: "HTML / CSS", label: "HTML / CSS" },
        { value: "Node.js", label: "Node.js" },
        { value: "MongoDB", label: "MongoDB" },
    ]

    return (
        <div className='max-w-screen-2xl mx-auto container xl:px-24 px-4'>
            <div className="bg-gray-100 py-10 px-4 lg:px-16">
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                    {/* first row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="block mb-2 text-lg">Job Title</label>
                            <input type="text" defaultValue={"Web Developer"}
                                {...register("jobTitle")} className='create-job-input' />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="block mb-2 text-lg">Company Name </label>
                            <input type="text" placeholder='Ex: Microsoft'
                                {...register("CompanyName")} className='create-job-input' />
                        </div>
                    </div>

                    {/* second row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="block mb-2 text-lg">Minimum Salary</label>
                            <input type="text" placeholder='$20k'
                                {...register("minPrice")} className='create-job-input' />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="block mb-2 text-lg">Maximum Salary </label>
                            <input type="text" placeholder='$120k'
                                {...register("maxPrice")} className='create-job-input' />
                        </div>
                    </div>

                    {/* third row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="block mb-2 text-lg">Salary Type</label>
                            <select {...register("salaryType", { required: true })} className='create-job-input'>
                                <option value="">Choose your salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="block mb-2 text-lg">Job Location</label>
                            <input type="text" placeholder='Ex: London'
                                {...register("jobLocation")} className='create-job-input' />
                        </div>
                    </div>

                    {/* fourth row */}
                    <div className="create-job-flex">

                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="block mb-2 text-lg">Job Posting Date</label>
                            <input type="date" placeholder='Ex: 2024-11-11'
                                {...register("postingDate")} className='create-job-input' />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="block mb-2 text-lg">Experience Level</label>
                            <select {...register("experienceLevel", { required: true })} className='create-job-input'>
                                <option value="">select your experience level</option>
                                <option value="Internship">Internship</option>
                                <option value="Any experience">Any experience</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                        </div>
                    </div>

                    {/* fifth row */}
                    <div className="create-job-flex">

                        <div className="w-full">
                            <label htmlFor="block mb-2 text-lg">Required Skill</label>
                            <CreateTableSelected
                                defaultValue={selectedOptions}
                                onChange={setSelectedOptions}
                                options={options}
                                isMulti
                                className='create-job-input py-4' />
                        </div>
                    </div>

                    {/* sixth row */}
                    <div className="create-job-flex">

                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="block mb-2 text-lg">Company Logo</label>
                            <input type="url" placeholder='Paste your company logo ULR: https://google.com/image'
                                {...register("companyLogo")} className='create-job-input' />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="block mb-2 text-lg">Employment Type</label>
                            <select {...register("employmentType", { required: true })} className='create-job-input'>
                                <option value="">select your work type</option>
                                <option value="Temporary">Temporary</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Full-time">Full-time</option>
                            </select>
                        </div>
                    </div>

                    {/* seventh row */}
                    <div className="create-job-flex">

                        <div className="w-full">
                            <label htmlFor="block mb-2 text-lg">Job Description</label>
                            <textarea {...register("description")} className='w-full pl-3 py-1.5 focus:outline-none' rows={6} placeholder='Job Description'></textarea>
                        </div>
                    </div>

                    {/* last row */}
                    <div className="create-job-flex">

                        <div className="w-full">
                            <label htmlFor="block mb-2 text-lg">Job Posted By</label>
                            <input type="email" placeholder='your email' {...register("postedBy")} className='create-job-input'/>
                        </div>
                    </div>

                    <input type="submit" className="my-5 bg-blue px-8 py-2 text-white font-semibold cursor-pointer rounded-sm" />
                </form>
            </div>
        </div>
    )
}

export default Createjob