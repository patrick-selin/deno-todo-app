import { Hono } from "./deps.js";
import * as todoController from "./todoController.js";

const app = new Hono();

app.get("/todos", todoController.showForm);
app.post("/todos", todoController.createTodo);

export default app;
