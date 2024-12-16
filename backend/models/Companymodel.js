import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
    },
    website:{
        type:Number,
    },
    location:{
        type:String,
    },
    logo:{
        type:String,//url
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
},{timestamps:true})
export const Company = new model('Company',companySchema);
