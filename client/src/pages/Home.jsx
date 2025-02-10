/* eslint-disable no-unused-vars */
import React from 'react'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className="bg-gray-50">
            <Navbar />
            <Hero />
            <JobListing />
            <AppDownload/>
            <Footer/>
        </div>
    )
}

export default Home
