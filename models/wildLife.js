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

  static update(id, attributes){
    return database('wild_life').where('id', id).update(attributes).returning('*')
  }

  static delete(id){
    return database('wild_life')
      .where({'id' : id})
      .del()
  }
}


module.exports = WildLife
