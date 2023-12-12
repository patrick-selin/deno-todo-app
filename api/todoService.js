import { sql } from "./database.js";

const listTodos = async () => {
  return await sql`SELECT * FROM todos`;
};

const createTodo = async (todo) => {
    await sql`INSERT INTO todos (todo) VALUES (${ todo.todo })`;
  };

export { listTodos, createTodo };
