import './App.css';
import joblistings from './store/joblistings';
import JobCard from './components/JobCard';

function App() {

  return (
     <>
        <h1>Job Listings</h1>
        <div className='joblisting-view'>
          {joblistings.length > 0 && joblistings.map(job => <JobCard job={job} />)}
          {joblistings.length === 0 && <p>No job listings found</p>}
        </div>
      </>
  )
}

export default App