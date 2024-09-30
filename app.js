const express = require("express");
const app = express();

// Routes
const indexRouter = require('./routes/indexRouter')
const exampleRouter = require('./routes/exampleRoute')

app.use('/', indexRouter)
app.use('/example', exampleRouter)

// Tell app to listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));