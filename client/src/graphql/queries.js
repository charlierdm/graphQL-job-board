import {request, gql} from 'graphql-request'

const GRAPHQLURL = 'http://localhost:9000/graphql'

export const getJobs = async () => {
  const query = gql`
    query {
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

