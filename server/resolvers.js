import {Companys, Jobs} from "./db.js"

export const resolvers = {
  Query: {
    company: (_, {id}) => Companys.findById(id),
    job: (_, {id}) => Jobs.findById(id),
    jobs: () => Jobs.findAll(),
  },

  Mutation: {
    createJob: (_, {input}) => Jobs.create(input),
    deleteJob: (_, {id}) => Jobs.delete(id),
    updateJob: (_, {input}) => Jobs.update(input)
  },

  Company: {
    jobs: (company) => Jobs.findAll(job => job.companyId === company.id)
  },

  Job: {
    company: (job) => Companys.findById(job.companyId),
  }
}