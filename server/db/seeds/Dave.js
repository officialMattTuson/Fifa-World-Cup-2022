exports.seed = async function(knex) {
  await knex('Dave').del()
  await knex('Dave').insert([
    {id: 1, game_id: 0, result: 'Draw'},
  ]);
};
