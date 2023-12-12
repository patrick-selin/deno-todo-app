import { Hono } from "./deps.js";
import * as todoController from "./todoController.js";
import * as authController from "./authController.js";

const app = new Hono();

app.get("/auth/login", authController.showLoginForm);



app.get("/todos", todoController.showForm);
app.post("/todos", todoController.createTodo);

app.get("/todos/:id", todoController.showTodo);
app.post("/todos/:id", todoController.updateTodo);
app.post("/todos/:id/delete", todoController.deleteTodo);

export default app;
