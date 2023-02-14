import {request, gql} from 'graphql-request'

const GRAPHQLURL = 'http://localhost:9000/graphql'

export const getJobs = async () => {
  const query = gql`
    query jobsQuery {
      jobs {
        id
        title
        description
        company {
          name
        }
      }
    }
  `
  const {jobs} = await request(GRAPHQLURL, query)
  return jobs
}

export const getJobById = async id => {
  const query = gql`
    query jobQuery($id: ID!) {
      job(id: $id) {
        title
        description
        company {
          id
          name
        }
      }
    }
  `
    const variables = {id}
    const {job} = await request(GRAPHQLURL, query, variables)
    return job
}

export const getCompanyById = async id => {
  const query = gql`
    query companyQuery($id: ID!) {
      company(id: $id) {
        id
        description
        name
      }
    }
  `
  const variables = {id}
  const {company} = await request(GRAPHQLURL, query, variables)
  return company
}

