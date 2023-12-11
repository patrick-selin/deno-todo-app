import { sql } from "./database.js";

const listTodos = async () => {
    return await sql`SELECT * FROM todos`;
  };




  export { listTodos };