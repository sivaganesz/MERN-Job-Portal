import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';

const Signup = () => {
  const[input,setInput]=useState({
    fullname:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""
  })

  const navigate = useNavigate();

  const changeEventHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }

  const changeFileHandler = (e) =>{
    setInput({...input,file:e.target.files?.[0]});
  }

  const submitHandler = async (e)=>{
    e.preventDefault();
    const fromData = new FormData();
    fromData.append("fullname",input.fullname)
    fromData.append("email",input.email)
    fromData.append("phoneNumber",input.phoneNumber)
    fromData.append("password",input.password)
    fromData.append("role",input.role)
    if(input.file){
      fromData.append("file",input.file)
    }
    try {
    
      const res = await axios.post(`${USER_API_END_POINT}/register`,fromData,{
        headers:{
            "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      })
     if(res.data.success){
               navigate("/login")
               toast.success(res.data.message);
             }

    } catch (error) {
      console.log("registration error :", error);
      toast.error(error.response.data.message)
        // Reset form values
    setInput({
      fullname: '',email: '',phoneNumber: '',password: '',role: '',file: '',
    });
    }

  
  }
  return (
    <div>
      <div className="flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={submitHandler}
          className="border border-gray-300 w-full max-w-lg rounded-md p-4 my-10 bg-white shadow-md"
        >
          <h1 className="font-bold text-xl mb-5 text-center">Sign Up</h1>
          <div className="my-2">
            <Label>Fullname</Label>
            <Input type="text" value={input.fullname} onChange={changeEventHandler} name="fullname" placeholder="abc" className="w-full" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" value={input.email} onChange={changeEventHandler} name="email" placeholder="abc@gmail.com" className="w-full" />
          </div>
          <div className="my-2">
            <Label>PhoneNumber</Label>
            <Input type="text" value={input.phoneNumber} onChange={changeEventHandler} name="phoneNumber" placeholder="1234567890" className="w-full" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" value={input.password} onChange={changeEventHandler} name="password" placeholder="password" className="w-full" />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 my-5">
            <RadioGroup className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="student"
                  name="role"
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="recruiter"
                  name="role"
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>

            <div className="flex  sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Label>Profile</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4 hover:bg-green-600">
            Sign Up
          </Button>
          <span>Already have an account?<Link to='/login' className='text-blue-900'> Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
