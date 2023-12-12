import { Hono } from "./deps.js";
import * as todoController from "./todoController.js";
import * as authController from "./authController.js";
import * as mainController from "./mainController.js";

const app = new Hono();

app.get("/auth/login", authController.showLoginForm);
app.post("/auth/login", authController.loginUser);
app.post("/auth/logout", authController.logoutUser);
app.get("/auth/registration", authController.showRegistrationForm);
app.post("/auth/registration", authController.registerUser);

app.get("/todos", todoController.showForm);
app.post("/todos", todoController.createTodo);

app.get("/todos/:id", todoController.showTodo);
app.post("/todos/:id", todoController.updateTodo);
app.post("/todos/:id/delete", todoController.deleteTodo);

app.get("/", mainController.showMain);

export default app;
