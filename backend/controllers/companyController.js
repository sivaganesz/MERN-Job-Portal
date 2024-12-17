import { Company } from '../models/Companymodel.js'

export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;

        // Validate the required field
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required",
                success: false
            });
        }

        // Check for an existing company with the same name
        let company = await Company.findOne({ name:companyName });
        if (company) { // Fix here: condition checks if company already exists
            return res.status(400).json({
                message: "You can't register the same company twice",
                success: false
            });
        }

        // Create a new company
         company = await Company.create({
            name: companyName,
            userId: req.id // Assuming `req.id` is available from authentication middleware
        });

        return res.status(201).json({
            message: "Company registered successfully",
            company,
            success: true
        });
    } catch (error) {
        console.error("Error while registering company:", error);

        // Handle specific MongoDB duplicate key errors
        if (error.code === 11000) {
            return res.status(400).json({
                message: "Duplicate company name is not allowed",
                success: false
            });
        }
    }
};

export const getCompany = async (req, res) => {
    try {
        const userId = req.id; // logged in userId
        const compaines = await Company.find({ userId });
        if (!compaines || compaines.length === 0) {
            return res.status(404).json({
                message: "compaines not found",
                success: false
            });
        }
        return res.status(200).json({
            compaines,
            success:true
        })
    } catch (error) {
        console.log("Error getCompany",error);
    }
}

export const getCompanyById = async (req,res)=>{
    try {
        const companyId = req.params.id; // logged in userId
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "compaines not found",
                success: false
            });
        }
        return res.status(200).json({
            company,
            success:true
        })
    } catch (error) {
        console.log("Error getCompanyById",error);
    }
}

export const updateCompany = async (req, res) => {
    try {
        const { companyName, description, website, location } = req.body;
        const file = req.file;
        const updateData = { companyName, description, website, location }
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!company) {
            return res.status(404).json({
                message: "company not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "company information update",
            success: true
        });
    } catch (error) {
        console.log("Error updateCompany information",error);
    }
}