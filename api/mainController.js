import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showMain = async (c) => {
  return c.html(eta.render("main.eta", {
    user: c.user,
  }));
};

export { showMain };