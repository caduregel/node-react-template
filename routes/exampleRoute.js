const { Router } = require("express");

const exampleRouter = Router();

exampleRouter.get("/", (req, res) => res.send("All authors"));
exampleRouter.get("/:exampleId", (req, res) => {
  const { exampleId } = req.params;
  res.send(`Example ID: ${exampleId}`);
});

module.exports = exampleRouter;