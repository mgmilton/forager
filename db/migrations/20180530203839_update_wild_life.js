exports.up = function(knex, Promise) {
  return knex.schema.alterTable('wild_life', function(table){
    table.float('longitude').alter();
    table.float('latitude').alter();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wild_life')
};
