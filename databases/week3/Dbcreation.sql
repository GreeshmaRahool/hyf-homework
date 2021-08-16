CREATE DATABASE meals;
SET NAMES utf8mb4;
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

INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`)
VALUES
  ('gravad salmon with homemade fox sauce','pickled salmon served with sweet mustard sauce.','Dantes Plads 1','2021-08-17 17:00:00','25','88.00'),
  ('Classic tartar with accessories','Tatar with raw egg yolk, pickles, horseradish, raw onion and capers.','Frederiksberg Centret','2021-08-13 11:00:00','30','110.00'),
  ('Old- New Mexican Food','Avocado taco with sal de chapulin.','Fælledparken','2021-08-12 10:00:00','15','120.00'),
  ('Ceviche','Salmon ceviche, with mango, mint, extra virgin olive oil, crunchy corn, red onion, and smoked habanero peppers.','Admiralgade 25','2021-08-15 12:00:00','35','150.00');
INSERT INTO reservation (`no_of_guests`,`meal_id`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES
  (10,2,'71453423','Greeshma','greesh@gmail.com'),
  (7,1,'71783423','Michel','mic@gmail.com'),
  (10,5,'98452323','Dantis','dantis@gmail.com'),
  (10,5,'61235432','Isa','isa@gmail.com');

INSERT INTO review (`title`,`description`,`meal_id`,`stars`)
VALUES
  ('Excellent','The quality of the food is excellent',1,5),
  ('Good','Nice food',2,4),
  ('Average','The taste is ok but nothing special',4,3),
  ('Poor','Very bad taste',5,2);
