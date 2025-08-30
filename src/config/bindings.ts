import { D1Database } from "@cloudflare/workers-types";

export interface CloudflareBindings {
  DB: D1Database;
  BETTER_AUTH_SECRET: string;
}
