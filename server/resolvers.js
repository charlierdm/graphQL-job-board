import {Companys, Jobs} from "./db.js"

const rejectIf = condition => {
  if (condition) throw new Error('unauthorized')
}

export const resolvers = {
  Query: {
    company: (_, args) => Companys.findById(args.id),
    job: (_, args) => Jobs.findById(args.id),
    jobs: () => Jobs.findAll(),
  },

  Mutation: {
    createJob: (_, args, context) => {
      rejectIf(!context.user)

      const companyId = context.user.companyId
      return Jobs.create({...args.input, companyId})
    },
    deleteJob: async (_, args, context) => {
      rejectIf(!context.user)
      const job = await Jobs.findById(args.id)
      rejectIf(job.companyId !== context.user.companyId)
      
      return Jobs.delete(args.id)
    },
    updateJob: (_, args) => Jobs.update(args.input)
  },

  Company: {
    jobs: (company) => Jobs.findAll(job => job.companyId === company.id)
  },

  Job: {
    company: (job) => Companys.findById(job.companyId),
  }
}