import Router from "express";
import noteController from "./controller.js";

const router = new Router();

// TODO: Add routes here (maybe 🤔 start with a GET test route)
router.get("/", (_, res) => {
  res.send("Hello World from API");
});

router.post("/", async (req, res) => {
  const newNote = await noteController.create(req.body);
  res.json(newNote);
});

export default router;
