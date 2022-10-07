exports.seed = async function(knex) {
  await knex('Matt').del()
  await knex('Matt').insert([
    {id: 1, game_id: 0, result: 'Draw'},
  ]);
};
