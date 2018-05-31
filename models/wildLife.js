const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class wildLife {
  static create(attributes){
    return database('wildlife').insert(attributes).returning('*')
  }
}
