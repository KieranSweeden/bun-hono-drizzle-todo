// 3rd party
import { Hono } from "hono";

import { database } from "./db/index";
import apiRoutes from "./routes/api/v1/index";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));

app.route("/api/v1/", apiRoutes);

export default app;
