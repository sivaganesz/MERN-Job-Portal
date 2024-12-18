import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='text-center mt-16'>
            <div className='flex flex-col my-10 gap-5'>
                <span className="mx-auto font-semibold text-lg md:text-xl lg:text-2xl text-red-600 border bg-gray-100 px-4 py-2 rounded-full">Best Job Hunt Website</span>
                <h1 className='font-bold text-2xl md:text-5xl'>Search, Apply & <br /> Get Your <span className='text-blue-700'>Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, inventore.</p>
                <div className="flex border border-gray-300 shadow-md md:w-[40%] rounded-full pl-6 mx-auto items-center">
                    <input type="text" className='w-full outline-none border-none'
                    placeholder='Find Your Dream jobs' />
                    <Button className="rounded-r-full bg-blue-800 w-16"><Search className='h-5 w-5'/></Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection