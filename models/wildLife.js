const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

class WildLife {
  static all(){
    return database('wild_life').select('*')
  }

  static find(id){
    return database('wild_life').where('id', id)
  }
  
  static create(attributes){
    return database('wild_life').insert(attributes).returning('*')
  }
}


module.exports = WildLife
