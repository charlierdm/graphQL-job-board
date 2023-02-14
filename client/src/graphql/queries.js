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

