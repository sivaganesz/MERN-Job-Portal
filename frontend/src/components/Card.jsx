import React from 'react'
import { FaEnvelope, FaEnvelopeCircleCheck, FaEnvelopeOpenText, FaEnvelopesBulk, FaExclamation, FaExpand, FaExpeditedssl, FaIndianRupeeSign, FaInternetExplorer, FaRegEnvelope } from 'react-icons/fa6';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const { companyName, companyLogo, jobTitle, minPrice, maxPrice, jobLocation, postingDate,experienceLevel, employmentType, description } = data;
    return (
        <section className='card'>
            <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
                <img src={companyLogo} alt='' />
                <div>
                    <h4 className='mb-1 text-primary'>{companyName}</h4>
                    <h2 className='mb-1 text-lg font-semibold text-primary'>{jobTitle}</h2>
                    <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                        <span className='flex items-center gap-2'><FiMapPin />{jobLocation}</span>
                        <span className='flex items-center gap-2'><FiClock />{employmentType}</span>
                        <span className='flex items-center gap-2'><FaEnvelopesBulk />{experienceLevel}</span>
                        <span className='flex items-center gap-2'><FaIndianRupeeSign />{minPrice}k - {maxPrice}k</span>
                        <span className='flex items-center gap-2'><FiCalendar />{postingDate}</span>
                    </div>
                    <p className='text-primary/70 text-base'>{description}</p>
                </div>

            </Link>
        </section>

    )
}

export default Card