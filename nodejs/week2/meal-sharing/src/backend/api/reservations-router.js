const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", (request, response) => {
  try {
    response.send(reservations);
  } catch (error) {
    response.status(400).send("Bad request!");
  }
});
router.get("/:id", (request, response) => {
  const params = request.params;

  try {
    if (parseInt(params.id)) {
      const getReservationWithId = reservations.filter(
        (reservation) => reservation.id === parseInt(params.id)
      );
      return response.send(getReservationWithId[0]);
    }
    if (getReservationWithId.length === 0) {
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
