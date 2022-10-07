exports.seed = async function(knex) {
  await knex('Freya').del()
  await knex('Freya').insert([
    {id: 1, game_id: 0, result: 'Draw'},
  ]);
};
