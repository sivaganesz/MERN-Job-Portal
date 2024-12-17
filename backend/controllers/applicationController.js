import { Application } from "../models/Applicationmodel.js";
import { Job } from "../models/Jobmodel.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required",
                success: false
            })
        }
        //check if the user has applied for this jobs
        const existingApplication = await Application.findOne({ job: jobId, application : userId });
        if (existingApplication) {
            return res.status(400).json({
                message: "you have already applied for this jobs",
                success: false
            })
        }

        //check if the job exits
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found",
                success: false
            })
        }

        // create a new application
        const newApplication = await Application.create({
            job: jobId,
            application: userId
        })

        job.applications.push(newApplication._id);
        await job.save();

        return res.status(201).json({
            message: "job applied successfully",
            sucess: true
        })
    } catch (error) {
        console.log(error);

    }
}

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const appliedjobs = await Application.find({application:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'companyID',
                options:{sort:{createdAt:-1}},
            }
        })

        if (!appliedjobs) {
            return res.status(404).json({
                message: "No Applications",
                success: false
            })
        }

        return res.status(200).json({
            appliedjobs,
            success: true
        })
    } catch (error) {
        console.log(error);

    }
}

export const getApplicants = async (req,res)=>{
    try {
        
        const jobId = req.params.id;
        const jobApplicants = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt: -1}},
            populate:{
                path:"application"
            }
        })

        
        if (!jobApplicants) {
            return res.status(404).json({
                message: "Jobs not found",
                success: false
            })
        }

        return res.status(200).json({
            jobApplicants,
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;

        // Validate the status field
        if (!status) {
            return res.status(400).json({
                message: "Status is required",
                success: false
            });
        }

        // Find the application by ID
        const application = await Application.findOne({ _id: applicationId });
        if (!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false
            });
        }

        // Update the status and save it
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Status updated successfully",
            success: true,
            updatedApplication: application // Optional: Send the updated document
        });
    } catch (error) {
        console.error("Error updating status:", error);
        return res.status(500).json({
            message: "Something went wrong",
            success: false
        });
    }
};
