--Part 2: School database
  --Create a new database 
  CREATE DATABASE School;
SET NAMES utf8mb4;
 -- containing the following tables:
 --Class: with the columns: id, name, begins (date), ends (date)
 CREATE TABLE
 `class`
 (
   `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `name` VARCHAR(255) NOT NULL,
   `begins`DATETIME NOT NULL,
   `ends` DATETIME NOT NULL
 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

  --Student: with the columns: id, name, email,
   --phone, class_id (foreign key)
 CREATE TABLE
 `student`
 (
   `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `name` VARCHAR(255) NOT NULL,
   `email`VARCHAR(255) NOT NULL,
   `phone`VARCHAR(255) NULL,
   `class_id` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) 
    REFERENCES `class` (`id`) 
    ON DELETE CASCADE ON UPDATE CASCADE
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  --Create an index on the name column of the student table.
  CREATE INDEX idx_name ON student(name);
  --Add a new column to the class table named status which can only have the 
  --following values: not-started, ongoing, finished.
  ALTER TABLE class ADD status enum('not-started','ongoing','finished');
 