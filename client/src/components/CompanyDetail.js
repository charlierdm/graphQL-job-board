import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {getCompanyById} from '../graphql/queries';

export const CompanyDetail = () => {
  const [company, setCompany] = useState(null)
  const {companyId} = useParams();

  useEffect(() => {
    getCompanyById(companyId).then(setCompany)
  }, [companyId])

  if (!company) return <p>Loading...</p>

  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
    </div>
  );
}
