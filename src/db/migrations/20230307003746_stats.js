/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('stats', function (table) {
        table.increments('id');
        table.integer('total_transactions').defaultTo(0).notNullable();
        table.integer('sub_total').defaultTo(0).notNullable();
        table.integer('request_id');

        table.foreign('request_id').references('Meta.id');
});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('stats')
};
