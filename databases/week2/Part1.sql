--Part 1: Working with tasks
--Add a task with these attributes: title, description,
  -- created, updated, due_date, status_id, user_id.
  USE hyf_lesson1;
INSERT INTO  task
   (title,description,created,updated,due_date,status_id,user_id) 
   VALUES
   ("Charge the camera","Remember to charge the camera before the trip starts","2021-08-02 22:06:16","2021-08-07 06:09:19","2021-08-21 13:14:09",1,5);
--Change the title of a task
UPDATE task
SET title = "Laundry"
WHERE id =1;
--Change a task due date
UPDATE task
SET due_date = "2021-08-07 23:04:38"
WHERE id =29;
--Change a task status
UPDATE task
SET status_id = 1
WHERE id =7;
UPDATE task
SET status_id = 3
WHERE id =12;
--Delete a task
DELETE FROM
task
WHERE id = 15;
