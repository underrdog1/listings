import { useState } from 'react';
import { JobListing } from '../store/joblistings';



function JobCard({ job }: { job: JobListing }) {
    const [descOpen, setDescOpen] = useState(false)

    return (
        <div className='job-card'>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            {descOpen &&
                <>
                    <p className='salary'>{job.salary}</p>
                    <p>{job.description}</p>
                </>
            }
            <button
                onClick={() => setDescOpen(!descOpen)}>
                View Description
            </button>
        </div>
    )
}

export default JobCard;