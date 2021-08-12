CREATE DATABASE meals;
SET
  NAMES utf8mb4;
USE meals;
CREATE TABLE `meal`
(
  `id` INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL ,
  `description` TEXT NULL DEFAULT NULL,
  `location` VARCHAR(255),
  `when` DATETIME NOT NULL,
  `max_reservations` INT(50) UNSIGNED,
  `price` DECIMAL UNSIGNED NOT NULL,
  `created_date` DATETIME NOT NULL DEFAULT NOW()
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `reservation`
(
  `id` INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT ,
  `no_of_guests` INT(50) UNSIGNED NOT NULL ,
  `meal_id` INT(10) UNSIGNED NOT NULL,
  `created_date` DATETIME NOT NULL DEFAULT NOW(),
  `contact_phonenumber` VARCHAR(255) NOT NULL,
  `contact_name` VARCHAR(255) NOT NULL,
  `contact_email` VARCHAR(255) NOT NULL,
   CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `review`
(
  `id` INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `meal_id` INT(10) UNSIGNED NOT NULL,
  `stars` INT(10) NOT NULL,
  `created_date` DATETIME NOT NULL DEFAULT NOW(),
  CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

INSERT INTO
  meal (
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`
  )
VALUES
  (
    'gravad salmon with homemade fox sauce',
    'pickled salmon served with sweet mustard sauce.',
    'Dantes Plads 1',
    '2021-08-17 17:00:00',
    '25',
    '88.00'
  ),
  (
    'Classic tartar with accessories',
    'Tatar with raw egg yolk, pickles, horseradish, raw onion and capers.',
    'Frederiksberg Centret',
    '2021-08-13 11:00:00',
    '30',
    '110.00'
  ),
  (
    'Old- New Mexican Food',
    'Avocado taco with sal de chapulin.',
    'Fælledparken',
    '2021-08-12 10:00:00',
    '15',
    '120.00'
  ),
  (
    'Ceviche',
    'Salmon ceviche, with mango, mint, extra virgin olive oil, crunchy corn, red onion, and smoked habanero peppers.',
    'Admiralgade 25',
    '2021-08-15 12:00:00',
    '35',
    '150.00'
  );
INSERT INTO
  reservation (
    `no_of_guests`,
    `meal_id`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES
  (
    10,
    2,
    '71453423',
    'Greeshma',
    'greesh@gmail.com'
  ),
  (
    7,
    1,
    '71783423',
    'Michel',
    'mic@gmail.com'
  ),
  (
    10,
    5,
    '98452323',
    'Dantis',
    'dantis@gmail.com'
  ),
  (
    10,
    5,
    '61235432',
    'Isa',
    'isa@gmail.com'
  );

INSERT INTO
  review (
    `title`,
    `description`,
    `meal_id`,
    `stars`
  )
VALUES
  (
    'Excellent',
    'The quality of the food is excellent',
    1,
    5
  ),
  (
    'Good',
    'Nice food',
    2,
    4
  ),
  (
   'Average',
    'The taste is ok but nothing special',
    4,
    3
  ),
  (
    'Poor',
    'Very bad taste',
    5,
    2
  );


-----------------------Meal-------------------------
---Get all meals--
SELECT * 
FROM meal;
--Add a new meal--
INSERT INTO
  meal (
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`
  )
VALUES
(
    'Grandmas jelly',
    'Cream, vanilla bean from Madagascar, and passion fruit sauce.',
    'Vesterbrogade 19',
    '2021-08-12 16:00:00',
    '30',
    '80.00'
  );
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
  reservation (
    `no_of_guests`,
    `meal_id`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES
  (
    20,
    4,
    '51453429',
    'Raul',
    'raul@gmail.com'
  );
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
  review (
    `title`,
    `description`,
    `meal_id`,
    `stars`
  )
VALUES
  (
    'Very bad',
    'Very bad taste and under cooked',
    5,
    1
  );
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
