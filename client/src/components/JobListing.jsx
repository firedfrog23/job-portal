/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'


const JobListing = () => {
    const {isSearched, searchFilter, setSearchFilter} = useContext(AppContext)
    return (
        <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>

            { /* Sidebar */}
            <div>

            { /* Search Filter from Hero Component */}
            {
                isSearched && ( searchFilter.title !== "" || searchFilter.location !== "") && 
                (
                    <>
                        <h3>Current Search</h3>
                        <div>
                            {searchFilter.title && (
                                <span>
                                    {searchFilter.title}
                                    <img onClick={e => setSearchFilter(prev => ({...prev, title: ""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                </span>
                            )}
                            {searchFilter.location && (
                                <span>
                                    {searchFilter.location}
                                    <img onClick={e => setSearchFilter(prev => ({...prev, location: ""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                </span>
                            )}
                        </div>
                    </>
                )
            }

            </div>
        </div>
    )
}

export default JobListing