const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
    const query = request.query;
    console.log(request.query);

    if (query.maxPrice) {
      const inputPrice = parseInt(query.maxPrice);

      if (isNaN(inputPrice)) {
        return response.status(400).send("Invalid price");
      }
      response.send(meals.filter((meal) => meal.price <= inputPrice));
    } else if (query.title) {
      response.send(
        meals.filter((meal) =>
          meal.title.toLowerCase().includes(query.title.toLowerCase())
        )
      );
    } else if (query.createdAfter) {
      const inputDate = Date.parse(query.createdAfter);

      if (isNaN(inputDate)) {
        return response.status(400).send("Invalid date");
      }

      response.send(
        meals.filter((meal) => Date.parse(meal.createdAt) > inputDate)
      );
    } else if (query.limit) {
      const inputLimit = parseInt(query.limit);

      if (isNaN(inputLimit)) {
        return response.status(400).send("Invalid limit");
      }
      response.send(meals.slice(0, inputLimit));
    } else {
      response.send(meals);
    }
  } catch (error) {
    response.status(400).send("Bad request!");
  }
});

router.get("/:id", (request, response) => {
  const params = request.params;

  try {
    if (parseInt(params.id)) {
      const getMealWithId = meals.filter(
        (meal) => meal.id === parseInt(params.id)
      );
      response.send(getMealWithId[0]);
    }
    if (getMealWithId.length === 0) {
      response.status(404).send("No data found!");
    }
    if (isNaN(parseInt(params.id))) {
      response.status(400).send("Not a valid id");
    }
  } catch (error) {
    response.status(400).send("Bad request!");
  }
});

module.exports = router;
