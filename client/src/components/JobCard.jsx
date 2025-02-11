/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const JobCard = ({ job }) => {

    const navigate = useNavigate()
    return (
        <div className='border p-6 shadow rounded'>
            <div className='flex justify-between items-center'>
                <img className='h-8' src={assets.company_icon} alt="" />
            </div>
            <h4 className='font-medium text-xl mt-4'>{job.title}</h4>
            <div className='flex items-center gap-3 mt-2 text-xs'>
                <span className='bg-blue-50 border border-blue-200 px-4 py-2 rounded'>{job.location}</span>
                <span className='bg-red-50 border border-blue-200 px-4 py-2 rounded'>{job.level}</span>
            </div>
            <p className='text-gray-600 text-sm mt-4 font-normal' dangerouslySetInnerHTML={{__html:job.description.slice(0, 150)}}></p>
            <div className='mt-4 flex gap-4 text-sm'>
                <button onClick={() => {navigate(`/apply-job/${job._id}`); scrollTo(0, 0)}} className='bg-blue-600 text-white px-4 py-2 rounded-md'>Apply Now</button>
                <button onClick={() => {navigate(`/apply-job/${job._id}`); scrollTo(0, 0)}} className='text-gray-500 border border-gray-500 rounded-md px-4 py-2'>Learn More</button>
            </div>
        </div>
    )
}

export default JobCard