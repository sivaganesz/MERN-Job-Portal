import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

const NewsLetter = () => {
    return (
        <div>
            <div >
                <h3 className='text-lg font-bold mb-2 flex justify-start gap-2'><FaEnvelopeOpenText className='mt-1'/> Email me for jobs </h3>
                <p className='text-primary/75 text-base mb-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quam tempora nobis consequatur aliquid maxime necessitatibus omnis natus quos quae.</p>

                <div className='w-full space-y-4'>
                    <input type="email" name='email' id='email' placeholder='name@email.com' className='w-full block py-2 pl-3 border focus:outline-none' />
                    <input type="submit" value={"Subcribe"} className='w-full block py-2 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold hover:bg-sky-700' />
                </div>
            </div>

            {/* 2nd part */}
            <div className='mt-20'>
                <h3 className='text-lg font-bold mb-2 flex justify-start gap-2'><FaRocket className='mt-1.5' /> Get noticed faster</h3>
                <p className='text-primary/75 text-base mb-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quam tempora nobis consequatur aliquid maxime necessitatibus omnis natus quos quae.</p>

                <div className='w-full space-y-4'>
                    <input type="submit" value={"Upload your resume"} className='w-full block py-2 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold hover:bg-sky-700' />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter