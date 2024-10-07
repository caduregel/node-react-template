const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");

// Routes
const indexRouter = require('./routes/indexRouter')
const exampleRouter = require('./routes/exampleRoute')

app.use('/', indexRouter)

// Tell app to listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));