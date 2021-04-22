import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('animals', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('type').notNullable();
  })
} 

export async function down(knex: Knex) {
  return knex.schema.dropTable('animals');
} 