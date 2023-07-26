
exports.up = knex => knex.schema.createTable('dishes', table => {
  table.increments('id').primary();
  table.text('name').notNullable();
  table.text('description').notNullable();
  table.text('category').notNullable();
  table.decimal('price', 10, 2).notNullable();
  table.text('image');

  table.timestamp("created_by").references("id").inTable("users");
  table.timestamp("updated_by").references("id").inTable("users");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("dishes");