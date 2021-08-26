const { request } = require("express");
const express = require("express");
const app = express();

const numbersRouter = express.Router();

numbersRouter.get('/', (request, response)  => {
    response.send('Simple calculator');
    
});
//Addition
numbersRouter.get('/add', (request, response) => {

    const query = request.query;
    if (query.first && query.second) {

        const sum = parseInt(query.first) + parseInt(query.second);
        response.send(` The sum is ${sum}`);
       
     }
     else {
        response.status(400).send('Bad request');
  }
   
});
//Multiplication
numbersRouter.get('/multiply/:first/:second', (request, response) => {

    const params = request.params;
    if (params.first && params.second) {

        const product = parseInt(params.first) * parseInt(params.second);
        response.send(`The product is ${product}`);
       
    }
    else {
        
        response.status(400).send('Bad request');
    }
    
});
module.exports= numbersRouter;