const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", { message: "Index" })
});

module.exports = indexRouter;