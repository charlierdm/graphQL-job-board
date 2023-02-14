import {Companys, Jobs} from "./db.js"

export const resolvers = {
  Query: {
    company: (_, args) => Companys.findById(args.id),
    job: (_, args) => Jobs.findById(args.id),
    jobs: () => Jobs.findAll(),
  },

  Company: {
    jobs: (company) => Jobs.findAll(job => job.companyId === company.id)
  },

  Job: {
    company: (job) => Companys.findById(job.companyId),
  }
}