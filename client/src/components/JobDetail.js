import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import {getJobById} from '../graphql/queries';

export const JobDetail = () => {
  const [job, setJob] = useState(null)
  
  const {jobId} = useParams();

  useEffect(() => {
    getJobById(jobId).then(setJob)
  }, [jobId])

  if (!job) return <p>Loading...</p>

  return (
    <div>
      <h1 className="title">
        {job.title}
      </h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>
          {job.company.name}
        </Link>
      </h2>
      <div className="box">
        {job.description}
      </div>
    </div>
  );
}

