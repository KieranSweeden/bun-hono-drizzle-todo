import { Hono } from "hono";

const router = new Hono();

router
	.get("/", (ctx) => {
		return ctx.text("Fetch todos", 200);
	})
	.get("/:id", (ctx) => {
		return ctx.text("Fetch todo", 200);
	})
	.post("/", async (ctx) => {
		return ctx.text("Posting new todo", 200);
	})
	.patch("/:id", (ctx) => {
		return ctx.text("Partially updating todo", 200);
	})
	.put("/:id", (ctx) => {
		return ctx.text("Replacing todo", 200);
	})
	.delete("/:id", (ctx) => {
		return ctx.text("Deleting todo", 200);
	});

export default router;
