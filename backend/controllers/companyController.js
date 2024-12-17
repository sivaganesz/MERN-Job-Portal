import { Company } from '../models/Companymodel.js'
export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "company Name is required",
                success: false
            });
        }
        let company = await Company.findOne({ companyName: companyName });
        if (company) {
            return res.status(400).json({
                message: "you can't register same company",
                success: false
            });
        }
        company = await Company.create({
            companyName: companyName,
            userId: req.id
        })

        return res.status(201).json({
            message: "Company register successfully",
            company,
            success: true
        })
    } catch (error) {
        console.log(error);

    }
}

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
        console.log(error);
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
        console.log(error);
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
        console.log(error);
    }
}