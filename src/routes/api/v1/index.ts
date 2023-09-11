// 3rd party
import { Hono } from "hono";

// all routes
import todoRoutes from "./todos";

const router = new Hono();

router.route("todos", todoRoutes);

export default router;
