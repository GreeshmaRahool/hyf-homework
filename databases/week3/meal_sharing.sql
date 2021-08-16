-----------------------Meal-------------------------

---Get all meals--
SELECT * 
FROM meal;

--Add a new meal--
INSERT INTO
  meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`)
VALUES
('Grandmas jelly','Cream, vanilla bean from Madagascar, and passion fruit sauce.','Vesterbrogade 19','2021-08-12 16:00:00','30','80.00');

--Get a meal with any id, fx 1--
SELECT *
FROM meal
WHERE id = 4;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes--
UPDATE meal
SET `when` = '2021-08-17 19:00:00', price = 108
WHERE id = 1;

--Delete a meal with any id, fx 1--
DELETE
FROM meal
WHERE id=3;

-----------------------Reservation------------------

--Get all reservations--
SELECT *
FROM reservation;

--Add a new reservation--
INSERT INTO
  reservation (`no_of_guests`,`meal_id`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES
  (20,4,'51453429','Raul','raul@gmail.com');

--Get a reservation with any id, fx 1--
SELECT *
FROM reservation
WHERE id = 3;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes--
UPDATE reservation
SET no_of_guests = 15, contact_email = 'dant@gmail.com'
WHERE id = 3;

--Delete a reservation with any id, fx 1--
DELETE
FROM reservation
WHERE id=1;

-----------------------Review-----------------------

--Get all reviews--
SELECT *
FROM review;

--Add a new review--
INSERT INTO
  review (`title`,`description`,`meal_id`,`stars`)
VALUES
  ('Very bad','Very bad taste and under cooked',5,1);

--Get a review with any id, fx 1--
SELECT *
FROM review
WHERE id = 4;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes--
UPDATE review
SET description = 'Excellent taste and must try one'
WHERE id = 1;

--Delete a review with any id, fx 1--
DELETE
FROM review
WHERE id=5;

-----------------------Additional queries-----------

--Get meals that has a price smaller than a specific price fx 90--
SELECT title, price
FROM meal
WHERE price < 100;

--Get meals that still has available reservations--
SELECT title,max_reservations,no_of_guests
FROM meal 
JOIN reservation ON meal.id = reservation.meal_id
WHERE reservation.no_of_guests < meal.max_reservations;

--Get meals that partially match a title. 
    
    --Rød grød med will match the meal with the title Rød grød med fløde--
SELECT *
FROM meal
WHERE title LIKE '%salmon%';

--Get meals that has been created between two dates--
SELECT title , created_date
FROM meal
WHERE created_date BETWEEN '2021-08-10 10:00:00' AND '2021-08-12 10:00:00';

--Get only specific number of meals fx return only 5 meals--
SELECT title,description
FROM meal
LIMIT 3;

--Get the meals that have good reviews--
SELECT meal.title,review.stars,review.description
FROM meal
JOIN review ON meal.id = review.meal_id
WHERE review.stars > 3; 

--Get reservations for a specific meal sorted by created_date--
SELECT meal.title,reservation.no_of_guests,meal.created_date
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.id =5
ORDER BY meal.created_date;

--Sort all meals by average number of stars in the reviews--
SELECT meal.title,AVG(review.stars) AS AverageOfStar
FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY AverageOfStar DESC;
