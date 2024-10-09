const path = require("node:path");
require("dotenv").config('./.env');
const db = require("./db/queries");

// Express
const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");


// Views
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
const indexRouter = require('./routes/indexRouter')
const exampleRouter = require('./routes/exampleRoute')

app.use('/', indexRouter)

// Tell app to listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));