import {useState, useEffect} from 'react';
import {JobList} from './JobList';
import {getJobs} from '../graphql/queries';

export const JobBoard = () => {
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    getJobs().then(setJobs)
      .catch(error => setError(true))
  }, [])

  if (error) return <p>Sorry, something went wrong.</p>

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}
