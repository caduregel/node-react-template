const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index", { message: 'Hello World!' }));


module.exports = indexRouter;