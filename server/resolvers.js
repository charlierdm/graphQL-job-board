import {Companys, Jobs} from "./db.js"

export const resolvers = {
  Query: {
    company: (_, {id}) => Companys.findById(id),
    job: (_, {id}) => Job.findById(id),
    jobs: () => Jobs.findAll(),
  },

  Mutation: {
    createJob: (_, {title, companyId, description}) => {
      Jobs.create({title, companyId, description})
    }
  },

  Company: {
    jobs: (company) => Jobs.findAll(job => job.companyId === company.id)
  },

  Job: {
    company: (job) => Companys.findById(job.companyId),
  }
}