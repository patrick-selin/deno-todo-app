import { Eta } from "./deps.js";
import * as todoService from "./todoService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showForm = async (c) => {
    return c.html(
      eta.render("todos.eta", { todos: await todoService.listTodos() })
    );
  };





  export { showForm };