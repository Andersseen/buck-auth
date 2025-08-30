import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { CloudflareBindings } from "./config/bindings";

// export type Env = {
//   <BINDING_NAME>: D1Database;
// };

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
