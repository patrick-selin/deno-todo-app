import { sql } from "./database.js";

const listTodos = async () => {
  return await sql`SELECT * FROM todos`;
};

const createTodo = async (todo) => {
  await sql`INSERT INTO todos (todo) VALUES (${todo.todo})`;
};

const getTodo = async (id) => {
    const rows = await sql`SELECT * FROM todos WHERE id = ${ id }`;
    return rows?.[0] ?? {};
  };

export { listTodos, createTodo, getTodo };
