import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('ongs', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('expedient').notNullable();
    table.string('cellphone').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    table.string('recommendations').notNullable();
  })
} 

export async function down(knex: Knex) {
  return knex.schema.dropTable('ongs');
} 