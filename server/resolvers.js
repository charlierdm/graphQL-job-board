import {Companys, Jobs} from "./db.js"

export const resolvers = {
  Query: {
    jobs: () => Jobs.findAll(),
  },

  Job: {
    company: (job) => Companys.findById(job.companyId),
  }
}