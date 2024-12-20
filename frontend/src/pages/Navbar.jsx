import React,{useState} from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover'
import { Avatar, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import store from '@/redux/store'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const navItems = [
    { path: "/", title: "Home" },
    { path: "/jobs", title: "Jobs" },
    { path: "/Browse", title: "Browse" },
  ]

  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_END_POINT}/logout`,{withCredentials:true})
      if(res.data.success){
        dispatch(setUser(null));
        toast.success(res.data.message)}
        navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  } 
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto xl:max-w-7xl h-16'>
        <div>
          <h1 className='text-2xl font-bold'>Job <span className='text-blue-700'>Portal</span></h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='hidden md:flex font-medium items-center gap-10'>
          {navItems.map(({ path, title }) => (
            <li key={path} className='text-base text-primary'>
              <NavLink to={path} className={({ isActive }) =>
                isActive ? "active" : ""}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
          {
            !user ? (
              <div className="flex items-center gap-2">
                <Link to="/login"><Button variant="outline">Login</Button></Link>
                <Link to="/signup"><Button className="bg-blue-700 hover:bg-green-600">SignUp</Button></Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger>
                  <Avatar className="border border-neutral-700">
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-3">
                    <Avatar className="border border-neutral-700">
                      <AvatarImage src={user?.profile?.profilePhoto} />
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>{user?.fullname}</h4>
                      <p className='text-sm text-muted-foreground'>{user?.description}</p>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='flex items-center w-fit cursor-pointer'><User2 /><Button variant="link"><Link to="/profile">View Profile</Link></Button></div>
                    <div className='flex items-center w-fit cursor-pointer'><LogOut /><Button onClick={logoutHandler} variant="link">Logout</Button></div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }

          {/* mobile view */}
          <div className='md:hidden block mr-5' >
            <button onClick={handleMenuToggler}>
              {
                isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBarsStaggered className="w-5 h-5 text-primary" />
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar