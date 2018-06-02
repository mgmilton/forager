exports.up = function(knex, Promise) {
    return knex.schema.alterTable('wild_life', function(table){
      table.string('wild_life_description');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wild_life')
};
