import {Jobs} from "./db.js"

export const resolvers = {
  Query: {
    jobs: () => Jobs.findAll(),
  }
}