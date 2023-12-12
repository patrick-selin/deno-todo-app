import { Eta } from "./deps.js";
import * as todoService from "./todoService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showForm = async (c) => {
  return c.html(
    eta.render("todos.eta", { todos: await todoService.listTodos() })
  );
};

const createTodo = async (c) => {
  const body = await c.req.parseBody();
  await todoService.createTodo(body);
  return c.redirect("/todos");
};

const showTodo = async (c) => {
  const id = c.req.param("id");
  return c.html(
    eta.render("todo.eta", { todo: await todoService.getTodo(id) })
  );
};

const updateTodo = async (c) => {
    const id = c.req.param("id");
    const body = await c.req.parseBody();
    await todoService.updateTodo(id, body);
    return c.redirect(`/todos/${id}`);
  };

export { showForm, createTodo, showTodo, updateTodo };
