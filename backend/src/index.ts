import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia().get("/", () => {})
  .listen(3000);

app
  .get("/", () => {
    return new Response(Bun.file('./frontend/index.html'))
  })
  .get("/home", () => {
    return new Response(Bun.file('./frontend/home.html'))
  })
  .use(staticPlugin())

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
