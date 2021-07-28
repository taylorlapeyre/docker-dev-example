import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').unique().notNullable().primary();
    table.string('given_name').notNullable();
    table.string('family_name').notNullable();
    table.string('password').notNullable();
    table.dateTime('created_at').defaultTo('now()');
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}

