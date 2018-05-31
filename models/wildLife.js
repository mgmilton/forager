const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class WildLife {
  static create(attributes){
    return database('wild_life').insert(attributes).returning('*')
  }
}


module.exports = WildLife
