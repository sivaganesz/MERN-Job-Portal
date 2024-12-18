import React ,{useState}from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {USER_API_END_POINT} from '../../utils/constant'

const Login = () => {
   const[input,setInput]=useState({
      email:"",
      password:"",
      role:"",
    })
    const navigate = useNavigate();
    
    const changeEventHandler=(e)=>{
      setInput({...input,[e.target.name]:e.target.value});
    }
  
    const submitHandler = async (e)=>{
      e.preventDefault();
      try {
      
        const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
          headers:{
              "Content-Type":"application/json"
          },
          withCredentials:true
        })
        if(res.data.success){
          navigate("/")
          toast.success(res.data.message);
        }
  
      } catch (error) {
        console.log("login error:", error);
        const errorMessage = error.response.data.message || "Something went wrong. Please try again.";
        toast.error(errorMessage);
      }
      
    }
  return (
    <div>
      <div className="flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={submitHandler}
          className="border border-gray-300 w-full max-w-lg rounded-md p-4 my-10 bg-white shadow-md"
        >
          <h1 className="font-bold text-xl mb-5 text-center">Login</h1>
             <div className="my-2">
                      <Label>Email</Label>
                      <Input type="email" value={input.email} onChange={changeEventHandler} name="email" placeholder="abc@gmail.com" className="w-full" />
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
                    </div>
          <Button type="submit" className="w-full my-4 hover:bg-green-600">
            Login
          </Button>
          <span>Don't have an account?<Link to='/signup' className='text-blue-900'> Signup</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Login