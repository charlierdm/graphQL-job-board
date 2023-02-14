import {useState, useEffect} from 'react';
import JobList from './JobList';
import {getJobs} from '../graphql/queries';

export const JobBoard = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    getJobs().then(data => setJobs(data))
  }, [])

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}
