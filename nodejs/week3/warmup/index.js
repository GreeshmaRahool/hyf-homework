const { response, request, query } = require("express");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("nodejs week3 homework"));

//Get:Addition with multiple query params.
app.get("/calculator/add", (request, response) => {
    let sum = 0;
    for (let param in request.query) {

        if (isNaN(Number(request.query[param]))) {
            return response.status(406).send('Enter a valid number');
        }

        sum = sum + Number(request.query[param]);
        console.log(Number(request.query[param]));
    }
    response.send(`Sum is: ${sum}`)
});

//Get: Multiplication with multiple query params
app.get("/calculator/multiply", (request, response) => {
    let product = 1;
    for (let param in request.query) {

        if (isNaN(Number(request.query[param]))) {
            return response.status(406).send('Enter a valid number');
        }

        product = product * Number(request.query[param]);
    }
    response.send(`Product is: ${product}`)
});

//POST: Multiplication with request body
app.post("/calculator/multiply", (request, response) => {

    const firstParam = Number(request.body.firstParam);
    const secondParam = Number(request.body.secondParam);

        if (isNaN(firstParam && secondParam)) {
            return response.status(406).send('Enter a valid number');
        }

    const product = firstParam * secondParam;
    response.send(`Product is: ${product}`)
});

//POST : Division with request body
app.post("/calculator/divide", (request, response) => {

    const firstParam = Number(request.body.firstParam);
    const secondParam = Number(request.body.secondParam);

        if (isNaN(firstParam && secondParam)) {
            return response.status(406).send('Enter a valid number');
        }

    const quotient  = firstParam /secondParam;
    response.send(`Quotient  is: ${quotient}`)
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));