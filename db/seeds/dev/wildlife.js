
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wild_life').del()
    .then(function () {
      // Inserts seed entries
      return knex('wild_life').insert([
        {id: 1,
      	name: "Chanterelle",
      	species: "Cantharellus cibarius",
      	longitude:123.8050,
      	latitude:43.936425,
      	location_description: "North facing side of hill where there was considerable moisture."
        },
        {id: 2,
      	name: "Chicken of the woods",
      	species: "Laetiporus sulphureus",
      	longitude:123.8050,
      	latitude:43.936425,
      	location_description: "North facing side of hill where there was considerable moisture."
        }
      ]);
    });
};
