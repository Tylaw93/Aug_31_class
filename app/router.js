import Router from "express";
import noteController from "./controller.js";

const router = new Router();

// TODO: Add routes here (maybe 🤔 start with a GET test route)
router.get("/", (_, res) => {
  res.send("Hello World from API");
});

router.get("/notes", async (req, res) => {
  try {
    const notes = await noteController.index();
    res.json(notes);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/notes/:id", async (req, res) => {
  try {
    const note = await noteController.show(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newNote = await noteController.create(req.body);
    res.json(newNote);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.put("/notes/:id", async (req, res) => {
  try {
    const updatedNote = await noteController.update(req.body);
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.delete("/notes/:id", async (req, res) => {
  try {
    await noteController.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/notes", async (req, res) => {
  try {
    await noteController.deleteMany();
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
