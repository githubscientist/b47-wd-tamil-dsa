-- show databases;

-- use employeesdb;

-- show tables;

-- desc employee_table;

-- alter table employee_table add salary int;

-- desc employee_table;  

-- alter table employee_table drop primary key; 

-- alter table employee_table add primary key(id);

-- alter table employee_table modify name varchar(30); 

-- desc employee_table;

-- customers
-- 	- customerid primary key
--     - first_name
--     - last_name
--     - email
--     - phone_number

-- products
-- 	- product_id primary key
--     - product_name
--     - price
--     - quantity        

-- day2 - additional MYSQL

-- show databases;  

-- use employeesdb;

-- show tables; 

-- select database();

-- show tables;

-- describe employee_table;

-- insert into employee_table(id, name, occupation, age, salary) values(101, 'peter', 'engineer', 25, 25000);
-- insert into employee_table(id, name, occupation, age, salary) values(102, 'joseph', 'developer', 30, 20000);
-- insert into employee_table(id, name, occupation, age, salary) values(103, 'mike', 'developer', 28, 23000);
-- insert into employee_table(id, name, occupation, age, salary) values(104, 'stephen', 'scientist', 45, 30000);
-- insert into employee_table(id, name, occupation, age, salary) values(105, 'mark', 'engineer', 25, 33000);
-- insert into employee_table(id, name, occupation, age, salary) values(106, 'suzi', 'scientist', 30, 39000);
-- insert into employee_table(id, name, occupation, age, salary) values(107, 'michael', 'engineer', 25, 45000);
-- insert into employee_table(id, name, occupation, age, salary) values(108, 'alexander', 'developer', 29, 15000);

select * from employee_table;