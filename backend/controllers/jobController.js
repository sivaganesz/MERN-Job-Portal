import { Job } from '../models/Jobmodel.js';

export const createPostJob = async(req , res) => {
    try {
        const { title, description, requirements, salary, experience, location, jobType, position, companyID } = req.body;
        const userId = req.id;
        if (!title || !description || !requirements || !salary || !experience || !location || !jobType || !position || !companyID) {
            return res.status(400).json({
                message: "something is missing",
                success: false
            })
        }
        const job = await Job.create({
            title,
            description,
            requirements: Array.isArray(requirements) 
                ? requirements // If already an array, use it directly
                : requirements.split(","), // If string, split into array
            salary: Number(salary),
            experienceLevel:experience,
            location,
            jobType,
            position,
            companyID,
            created_by: userId
        });

        return res.status(201).json({
            message:"New job created successfully",
            job,
            success:true
        })
    } catch (error) {
        console.log("Error occurred in createPostJob",error);

    }
}

export const getAllJobs = async(req,res)=>{
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}},
            ]
        };
        const jobs = await Job.find(query).populate({
            path:"companyID"
        }).sort({created_by:-1});
        if(!jobs){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        };
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const getJobById =  async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"companyID"
        }).sort({created_by:-1});
        if(!job){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        }
        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const getAdminJobs = async (req,res)=>{
    try {
        const adminId = req.id;
        const getJobs = await Job.find({created_by:adminId});
        if(!getJobs){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        }
        return res.status(200).json({
            getJobs,
            success:true
        })
    } catch (error) {
        console.log(error);      
    }
}