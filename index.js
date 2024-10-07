const path = require("node:path");

// Express
const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
const indexRouter = require('./routes/indexRouter')
const exampleRouter = require('./routes/exampleRoute')

app.use('/', indexRouter)

// Tell app to listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));