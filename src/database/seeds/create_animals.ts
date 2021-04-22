import { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('animals').insert([
    { type: 'Cachorro', image: 'dog.svg' },
    { type: 'Gato', image: 'cat.svg' }
  ]);
}