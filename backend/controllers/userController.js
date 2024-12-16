import {User, user} from "../models/Usermodel";
import bcrypt from 'bcryptjs';

export const register = async (req,res) => {
    try{
        const {fullname,email,phoneNumber,password,role}=req.body;
        //field check
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        };
        //email check
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        }
        //password check
        const hashedPassword = await bcrypt.hash(password,10);
        await User.Create({
            fullname,email,phoneNumber,password:hashedPassword,role,
        })

        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })
    }catch(error){
        console.log(error);
        
    }
}

export const login = async (req,res) => {
    try{
        const {email,password,role} = req.body;
        //validate field
        if(!email || !password || !role){
            return res.status(400).json({
                message:"something is missing",
                success:false
            })
        }
        //user check
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"Incorrect email or password",
                success:false
            })
        }
        //password check 
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect email or password",
                success:false
            })
        }
        //role check
        if(role !== user.role){
            return res.status(400).json({
                message:"Account doesn't exist with current role",
                success:false
            })
        }

        const tokenData = {
            userId:user._id
        }
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn : 'Id'});

        user ={
            _id:user._id,
            email:user.email,
            phoneNumber:user.phoneNumber,
            password:user.password,
            role:user.role,
            profile:user.profile

        }

        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000, httpsOnly:true, sameSite:"strict"}).json({
            message:`Welcome back ${user.fullname}`,
            user,
            success:true
        })
    }
    catch(error){
        console.log(error);
        
    }
}

export const logout = async (req,res) => {
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully",
            success:true
        })
    } catch (error) {
            console.log(error);
    }
}

export const updateProfile = async(req,res) => {
    try {
        const {fullname,email,phoneNumber,bio,skills}=req.body;
        const file = req.file
        //field check
        if(!fullname || !email || !phoneNumber || !bio || !skills){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        };
        const skillsArray = skills.split(",");
        let userId = req.id;
        //email check
        const user = await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        }

        //updating data
        user.fullname=fullname,
        user.email=email,
        user.phoneNumber=phoneNumber,
        user.profile.bio=bio,
        user.profile.skills=skillsArray

        await user.save();

        user ={
            _id:user._id,
            email:user.email,
            phoneNumber:user.phoneNumber,
            password:user.password,
            role:user.role,
            profile:user.profile

        }

        return res.status(200).json({
            message:"profile updated successfully.",
            user,
            success:true
        })
    } catch (error) {
        
    }
}