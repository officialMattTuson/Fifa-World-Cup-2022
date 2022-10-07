exports.seed = async function(knex) {
  await knex('Marge').del()
  await knex('Marge').insert([
    {id: 1, game_id: 0, result: 'Draw'},
  ]);
};
