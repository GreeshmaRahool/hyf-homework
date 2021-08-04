CREATE DATABASE organization;
USE organization;
CREATE TABLE `employee`
(
  `id` INT(10) NOT NULL UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
   `email` varchar(255),
   `phone` varchar(255),
);
CREATE TABLE `department`
(
  `id` INT(10) NOT NULL UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
);
CREATE TABLE `role`
(
  `id` INT(10) NOT NULL UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `dept_id` INT(10) NOT NULL
  CONSTRAINT `fk_department` FOREIGN KEY (`dept_id`) REFERENCES `department` (`id`) ON DELETE CASCADE
);
CREATE TABLE `emp_dept`
(
  `emp_id` INT(10) NOT NULL UNSIGNED PRIMARY KEY,
  `dept_id` INT(10) NOT NULL,
  PRIMARY KEY(`emp_id`,`dept_id`),
  CONSTRAINT `fk_emp_dept_emp` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_emp_dept_dept` FOREIGN KEY (`dept_id`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE `emp_role`
(
  `emp_id` INT(10) NOT NULL UNSIGNED PRIMARY KEY,
  `role_id` INT(10) NOT NULL,
  PRIMARY KEY(`emp_id`,`role_id`),
  CONSTRAINT `fk_emp_role_emp` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_emp_role_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);