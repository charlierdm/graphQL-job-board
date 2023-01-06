import {Database} from 'fakebase';

const db = new Database('./data')

export const Companys = db.table('companies')
export const Jobs = db.table('jobs')
export const Users = db.table('users')
