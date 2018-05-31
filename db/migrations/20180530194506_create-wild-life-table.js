
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wild_life', function(table){
    table.increments('id').primary();
    table.string('name');
    table.string('species');
    table.timestamp('created_at');
    table.integer('longitude');
    table.integer('latitude');
    table.string('location_description');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wild_life')
};
