const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", (request, response) => {
  try {
    response.send(reviews);
  } catch (error) {
    response.status(400).send("Bad request!");
  }
});

router.get("/:id", (request, response) => {
  const params = request.params;

  try {
    if (parseInt(params.id)) {
      const getReviewWithId = reviews.filter(
        (review) => review.id === parseInt(params.id)
      );
      return response.send(getReviewWithId[0]);
    }
    if (getReviewWithId.length === 0) {
      return response.status(404).send("No data found!");
    }
    if (isNaN(parseInt(params.id))) {
      return response.status(400).send("Not a valid id");
    }
  } catch (error) {
    response.status(400).send("Bad request!");
  }
});

module.exports = router;
