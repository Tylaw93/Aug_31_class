import Router from "express";

const router = new Router();

// TODO: Add routes here (maybe 🤔 start with a GET test route)
app.get('/', (_, res) =>{
  res.send("Hello World from API")
});

router.post("/" , (req, res) =>{
  res.json(req.body)
} )

export default router;
