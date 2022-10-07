exports.seed = async function(knex) {
  await knex('Cole').del()
  await knex('Cole').insert([
    {id: 1, game_id: 0, result: 'Draw'},
  ]);
};
