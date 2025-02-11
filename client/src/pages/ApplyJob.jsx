/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ApplyJob = () => {
    const { id } = useParams()

    const [JobData, setJobData] = useState(null);

    const { jobs } = useContext(AppContext)

    const fetchJob = async () => {
        const data = jobs.filter(job => job._id === id)
        if (data.length !== 0) {
            setJobData(data[0])
            console.log(data[0]);
        }
    }

    useEffect(() => {
        if (jobs.length > 0) {
            fetchJob()
        }
    }, [id, jobs])

    return (
        <div>ApplyJob Page</div>
    )
}

export default ApplyJob