/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Hero />
            <JobListing />
        </div>
    )
}

export default Home
