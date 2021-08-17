const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

//Read meals with reviews
function getMealReviews() {
  return meals.map(meal => {
    meal.reviews = reviews.filter(review => review.mealId == meal.id)
    return meal
  });
}
const mealsWithReviews = getMealReviews(meals);

//Read random meal
function getRandomMeal() {
  const randomNumber = Math.floor((Math.random() * 4) + 1);
  return mealsWithReviews.find(meal => meal.id === randomNumber);
}

//Read random reservation
function getRandomReservation() {
  const randomNumber = Math.floor((Math.random() * 4) + 1);
  return reservations.find(reservation => reservation.id === randomNumber);
}

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(mealsWithReviews);
});

app.get("/cheap-meals", async (request, response) => {
  response.send(mealsWithReviews.filter(meal =>meal.price <70));
});

app.get("/large-meals", async (request, response) => {
  response.send(mealsWithReviews.filter(meal =>meal.maxNumberOfGuests>10));
});

app.get("/meal", async (request, response) => {
  response.send(getRandomMeal());
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(getRandomReservation());
});

module.exports = app;
