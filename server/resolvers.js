import {Companys, Jobs} from "./db.js"

export const resolvers = {
  Query: {
    company: (_, args) => Companys.findById(args.id),
    job: (_, args) => Jobs.findById(args.id),
    jobs: () => Jobs.findAll(),
  },

  Mutation: {
    createJob: (_, args, context) => {
      if (!context.auth) {
        throw new Error('unauthorized')
      }
      return Jobs.create(args.input)
    },
    deleteJob: (_, args) => Jobs.delete(args.id),
    updateJob: (_, args) => Jobs.update(args.input)
  },

  Company: {
    jobs: (company) => Jobs.findAll(job => job.companyId === company.id)
  },

  Job: {
    company: (job) => Companys.findById(job.companyId),
  }
}