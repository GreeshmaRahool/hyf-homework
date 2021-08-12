--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title AS Task,user.email
FROM task 
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE 
user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name AS User,task.title AS Task,status.name As Status
FROM user 
JOIN user_task ON user.id = user_task.user_id
JOIN task ON user_task.task_id = task.id
JOIN status ON task.status_id = status.id
WHERE
user.name LIKE '%Donald Duck%' 
AND 
status.name = 'Not started' ;

-- Get all the tasks for 'Maryrose Meadows' that were created in september
-- (hint: month(created)=month_number).
SELECT task.title AS Task , user.name AS User, task.created
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id
WHERE 
user.name LIKE 'Maryrose Meadows'
AND
month(created) = 9;
--Find how many tasks where created in each month, 
--e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT month(task.created) AS Created_Month, COUNT(task.id) AS Task_count
FROM task
GROUP BY month(task.created)
ORDER BY month(task.created);




