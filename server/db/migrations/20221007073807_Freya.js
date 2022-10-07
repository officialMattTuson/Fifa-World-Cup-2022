exports.up = function(knex) {
    return knex.schema.createTable('Freya', (table) => {
      table.increments('id')
      table.integer('game_id')
      table.string('result')
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Freya')
  };
  