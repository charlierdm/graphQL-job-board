import {Companys, Jobs} from "./db.js"

export const resolvers = {
  Query: {
    job: (_, args) => Jobs.findById(args.id),
    jobs: () => Jobs.findAll(),
  },

  Job: {
    company: (job) => Companys.findById(job.companyId),
  }
}