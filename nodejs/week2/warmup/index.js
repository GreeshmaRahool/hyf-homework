const { response } = require("express");
const express = require("express");
const app = express();
const numbersRouter = require('./numbersRouter');

app.get("/", (request, response) => response.send("nodejs week2 homework"));

app.use('/numbers', numbersRouter);
app.listen(3000, () => console.log('Calculator:listening on port 3000'));