import {User} from "../models/Usermodel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
                message:"User already exist with this email",
                success:false
            })
        }
        //password check
        const hashedPassword = await bcrypt.hash(password,10);
        await User.create({
            fullname, email, phoneNumber, password: hashedPassword, role,
        });
        

        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })
    }catch(error){
        console.log("Error occurred in  register",error);
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
        let user = await User.findOne({email});
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
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user ={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            password:user.password,
            role:user.role,
            profile:user.profile

        }

        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000, httpOnly:true, sameSite:"strict"}).json({
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
        let skillsArray;

        if(skills) skillsArray = skills.split(",");

        let userId = req.id;
        //email check
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        }

        //updating data
        if(fullname) user.fullname=fullname;
        if(email) user.email=email;
        if(phoneNumber) user.phoneNumber=phoneNumber;
        if(bio) user.profile.bio=bio;
        if(skills) user.profile.skills=skillsArray;

        await user.save();

        user ={
            _id:user._id,
            fullname:user.fullname,
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
        console.log(error);
        
    }
}