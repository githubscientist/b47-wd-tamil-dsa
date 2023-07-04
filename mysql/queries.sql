mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| bookstore          |
| information_schema |
| jointutor          |
| mysql              |
| performance_schema |
| school             |
| sys                |
+--------------------+
7 rows in set (0.02 sec)

mysql> use bookstore;
Database changed
mysql> show tables;
Empty set (0.01 sec)

mysql> use mysql;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+------------------------------------------------------+
| Tables_in_mysql                                      |
+------------------------------------------------------+
| columns_priv                                         |
| component                                            |
| db                                                   |
| default_roles                                        |
| engine_cost                                          |
| func                                                 |
| general_log                                          |
| global_grants                                        |
| gtid_executed                                        |
| help_category                                        |
| help_keyword                                         |
| help_relation                                        |
| help_topic                                           |
| innodb_index_stats                                   |
| innodb_table_stats                                   |
| ndb_binlog_index                                     |
| password_history                                     |
| plugin                                               |
| procs_priv                                           |
| proxies_priv                                         |
| replication_asynchronous_connection_failover         |
| replication_asynchronous_connection_failover_managed |
| replication_group_configuration_version              |
| replication_group_member_actions                     |
| role_edges                                           |
| server_cost                                          |
| servers                                              |
| slave_master_info                                    |
| slave_relay_log_info                                 |
| slave_worker_info                                    |
| slow_log                                             |
| tables_priv                                          |
| time_zone                                            |
| time_zone_leap_second                                |
| time_zone_name                                       |
| time_zone_transition                                 |
| time_zone_transition_type                            |
| user                                                 |
+------------------------------------------------------+
38 rows in set (0.00 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| bookstore          |
| information_schema |
| jointutor          |
| mysql              |
| performance_schema |
| school             |
| sys                |
+--------------------+
7 rows in set (0.01 sec)

mysql> create database employeesdb;
Query OK, 1 row affected (0.01 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| bookstore          |
| employeesdb        |
| information_schema |
| jointutor          |
| mysql              |
| performance_schema |
| school             |
| sys                |
+--------------------+
8 rows in set (0.01 sec)

mysql> use employeesdb;
Database changed
mysql> show tables;
Empty set (0.00 sec)

mysql> create table employee_table(
    -> id int NOT NULL,
    -> name char(30) NOT NULL,
    -> occupation varchar(30) NOT NULL,
    -> age int NOT NULL,
    -> PRIMARY KEY(id)
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql> show tables;
+-----------------------+
| Tables_in_employeesdb |
+-----------------------+
| employee_table        |
+-----------------------+
1 row in set (0.00 sec)

mysql> describe employee_table;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | char(30)    | NO   |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> use employeesdb;
No connection. Trying to reconnect...
Connection id:    45
Current database: *** NONE ***

Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+-----------------------+
| Tables_in_employeesdb |
+-----------------------+
| employee_table        |
+-----------------------+
1 row in set (0.01 sec)

mysql> select * from employee_table;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> describe employee_table;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | YES  |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> select id, name from employee_table;
+-----+-----------+
| id  | name      |
+-----+-----------+
| 101 | peter     |
| 102 | joseph    |
| 103 | mike      |
| 104 | stephen   |
| 105 | mark      |
| 106 | suzi      |
| 107 | michael   |
| 108 | alexander |
+-----+-----------+
8 rows in set (0.00 sec)

mysql> select * from employee_table;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> insert into emp(id, name, occupation, age, salary) select id, name, occupation, age, salary from employee_table;
ERROR 1146 (42S02): Table 'employeesdb.emp' doesn't exist
mysql> create table emp like employee_table;
Query OK, 0 rows affected (0.03 sec)

mysql> describe emp;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | YES  |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> insert into emp(id, name, occupation, age, salary) select id, name, occupation, age, salary from employee_table;
Query OK, 8 rows affected (0.00 sec)
Records: 8  Duplicates: 0  Warnings: 0

mysql> select * from emp;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> select * from employee_table;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> select * from emp;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> update emp set age = 47;
Query OK, 8 rows affected (0.00 sec)
Rows matched: 8  Changed: 8  Warnings: 0

mysql> select * from emp;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  47 |  25000 |
| 102 | joseph    | developer  |  47 |  20000 |
| 103 | mike      | developer  |  47 |  23000 |
| 104 | stephen   | scientist  |  47 |  30000 |
| 105 | mark      | engineer   |  47 |  33000 |
| 106 | suzi      | scientist  |  47 |  39000 |
| 107 | michael   | engineer   |  47 |  45000 |
| 108 | alexander | developer  |  47 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> update emp set age = 25 where id=101;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from emp;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  47 |  20000 |
| 103 | mike      | developer  |  47 |  23000 |
| 104 | stephen   | scientist  |  47 |  30000 |
| 105 | mark      | engineer   |  47 |  33000 |
| 106 | suzi      | scientist  |  47 |  39000 |
| 107 | michael   | engineer   |  47 |  45000 |
| 108 | alexander | developer  |  47 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> delete from emp where id=108;
Query OK, 1 row affected (0.01 sec)

mysql> select * from empl
    -> ;
ERROR 1146 (42S02): Table 'employeesdb.empl' doesn't exist
mysql> select * from emp;
+-----+---------+------------+-----+--------+
| id  | name    | occupation | age | salary |
+-----+---------+------------+-----+--------+
| 101 | peter   | engineer   |  25 |  25000 |
| 102 | joseph  | developer  |  47 |  20000 |
| 103 | mike    | developer  |  47 |  23000 |
| 104 | stephen | scientist  |  47 |  30000 |
| 105 | mark    | engineer   |  47 |  33000 |
| 106 | suzi    | scientist  |  47 |  39000 |
| 107 | michael | engineer   |  47 |  45000 |
+-----+---------+------------+-----+--------+
7 rows in set (0.00 sec)

mysql> delete from emp;
Query OK, 7 rows affected (0.00 sec)

mysql> select * from emp
    -> ;
Empty set (0.00 sec)

mysql> insert into emp(id, name, occupation, age, salary) select id, name, occupation, age, salary from employee_table;
Query OK, 8 rows affected (0.00 sec)
Records: 8  Duplicates: 0  Warnings: 0

mysql> select * from emp;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> select name, salary from emp where salary>30000;
+---------+--------+
| name    | salary |
+---------+--------+
| mark    |  33000 |
| suzi    |  39000 |
| michael |  45000 |
+---------+--------+
3 rows in set (0.00 sec)

mysql> select name, salary from emp where salary>=30000;
+---------+--------+
| name    | salary |
+---------+--------+
| stephen |  30000 |
| mark    |  33000 |
| suzi    |  39000 |
| michael |  45000 |
+---------+--------+
4 rows in set (0.00 sec)

mysql> select name, salary from emp where salary between 30000 and 35000;
+---------+--------+
| name    | salary |
+---------+--------+
| stephen |  30000 |
| mark    |  33000 |
+---------+--------+
2 rows in set (0.00 sec)

mysql> select name, salary from emp where salary>=30000 and salary<=35000;
+---------+--------+
| name    | salary |
+---------+--------+
| stephen |  30000 |
| mark    |  33000 |
+---------+--------+
2 rows in set (0.00 sec)

mysql> select * from emp where occupation='engineer' and age>=30;
Empty set (0.00 sec)

mysql> select * from emp where occupation='developer' and age>=30;
+-----+--------+------------+-----+--------+
| id  | name   | occupation | age | salary |
+-----+--------+------------+-----+--------+
| 102 | joseph | developer  |  30 |  20000 |
+-----+--------+------------+-----+--------+
1 row in set (0.00 sec)

mysql> select occupation from empl
    -> ;
ERROR 1146 (42S02): Table 'employeesdb.empl' doesn't exist
mysql> select occupation from emp;
+------------+
| occupation |
+------------+
| engineer   |
| developer  |
| developer  |
| scientist  |
| engineer   |
| scientist  |
| engineer   |
| developer  |
+------------+
8 rows in set (0.00 sec)

mysql> select distinct(occupation) from emp;
+------------+
| occupation |
+------------+
| engineer   |
| developer  |
| scientist  |
+------------+
3 rows in set (0.00 sec)

mysql> select * from emp;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> select * from emp order by age;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 103 | mike      | developer  |  28 |  23000 |
| 108 | alexander | developer  |  29 |  15000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 104 | stephen   | scientist  |  45 |  30000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.01 sec)

mysql> select * from emp order by age asc;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 103 | mike      | developer  |  28 |  23000 |
| 108 | alexander | developer  |  29 |  15000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 104 | stephen   | scientist  |  45 |  30000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> select * from emp order by age desc;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 104 | stephen   | scientist  |  45 |  30000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 108 | alexander | developer  |  29 |  15000 |
| 103 | mike      | developer  |  28 |  23000 |
| 101 | peter     | engineer   |  25 |  25000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 107 | michael   | engineer   |  25 |  45000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> select * from emp order by age asc;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 103 | mike      | developer  |  28 |  23000 |
| 108 | alexander | developer  |  29 |  15000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 104 | stephen   | scientist  |  45 |  30000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> select * from emp order by age asc, salary desc;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 107 | michael   | engineer   |  25 |  45000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 101 | peter     | engineer   |  25 |  25000 |
| 103 | mike      | developer  |  28 |  23000 |
| 108 | alexander | developer  |  29 |  15000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 104 | stephen   | scientist  |  45 |  30000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> select occupation, avg(salary) from emp group by occupation;
+------------+-------------+
| occupation | avg(salary) |
+------------+-------------+
| engineer   |  34333.3333 |
| developer  |  19333.3333 |
| scientist  |  34500.0000 |
+------------+-------------+
3 rows in set (0.01 sec)

mysql> select occupation, avg(salary) as average_salary from emp group by occupation;
+------------+----------------+
| occupation | average_salary |
+------------+----------------+
| engineer   |     34333.3333 |
| developer  |     19333.3333 |
| scientist  |     34500.0000 |
+------------+----------------+
3 rows in set (0.00 sec)

mysql> select occupation, sum(salary) as total_salary, avg(salary) as average_salary from emp group by occupation;
+------------+--------------+----------------+
| occupation | total_salary | average_salary |
+------------+--------------+----------------+
| engineer   |       103000 |     34333.3333 |
| developer  |        58000 |     19333.3333 |
| scientist  |        69000 |     34500.0000 |
+------------+--------------+----------------+
3 rows in set (0.01 sec)

mysql> select occupation, sum(salary) as total_salary, count() as n, avg(salary) as average_salary from emp group by occupation;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ') as n, avg(salary) as average_salary from emp group by occupation' at line 1
mysql> select occupation, sum(salary) as total_salary, count(*) as n, avg(salary) as average_salary from emp group by occupation;
+------------+--------------+---+----------------+
| occupation | total_salary | n | average_salary |
+------------+--------------+---+----------------+
| engineer   |       103000 | 3 |     34333.3333 |
| developer  |        58000 | 3 |     19333.3333 |
| scientist  |        69000 | 2 |     34500.0000 |
+------------+--------------+---+----------------+
3 rows in set (0.00 sec)

mysql> select max(salary) from emp;
+-------------+
| max(salary) |
+-------------+
|       45000 |
+-------------+
1 row in set (0.01 sec)

mysql> select min(salary) from emp;
+-------------+
| min(salary) |
+-------------+
|       15000 |
+-------------+
1 row in set (0.00 sec)

mysql> select * from emp;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> select * from emp order by salary desc;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 107 | michael   | engineer   |  25 |  45000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 101 | peter     | engineer   |  25 |  25000 |
| 103 | mike      | developer  |  28 |  23000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> select * from emp order by salary desc limit 3;
+-----+---------+------------+-----+--------+
| id  | name    | occupation | age | salary |
+-----+---------+------------+-----+--------+
| 107 | michael | engineer   |  25 |  45000 |
| 106 | suzi    | scientist  |  30 |  39000 |
| 105 | mark    | engineer   |  25 |  33000 |
+-----+---------+------------+-----+--------+
3 rows in set (0.00 sec)

mysql> select * from emp order by salary desc limit 3 offset 3;
+-----+---------+------------+-----+--------+
| id  | name    | occupation | age | salary |
+-----+---------+------------+-----+--------+
| 104 | stephen | scientist  |  45 |  30000 |
| 101 | peter   | engineer   |  25 |  25000 |
| 103 | mike    | developer  |  28 |  23000 |
+-----+---------+------------+-----+--------+
3 rows in set (0.01 sec)

mysql> select * from emp;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.01 sec)

mysql> create table developers like emp;
Query OK, 0 rows affected (0.01 sec)

mysql> desc developers;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | YES  |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.01 sec)

mysql> insert into developers(id, name, occupation, age, salary) select id, name, occupation, age, salary from emp where occupation='developer';
Query OK, 3 rows affected (0.00 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from developers;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
3 rows in set (0.00 sec)

mysql> desc developers;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | YES  |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> alter table developers drop column salary;
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc developers;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | YES  |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> drop table developers;
Query OK, 0 rows affected (0.01 sec)

mysql> show tables;
+-----------------------+
| Tables_in_employeesdb |
+-----------------------+
| emp                   |
| employee_table        |
+-----------------------+
2 rows in set (0.01 sec)

mysql> create table developers like emp;
Query OK, 0 rows affected (0.01 sec)

mysql> insert into developers(id, name, occupation, age, salary) select id, name, occupation, age, salary from emp where occupation='developer';
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> show tables
    -> ;
+-----------------------+
| Tables_in_employeesdb |
+-----------------------+
| developers            |
| emp                   |
| employee_table        |
+-----------------------+
3 rows in set (0.01 sec)

mysql> desc developers;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | YES  |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> select * from developers;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
3 rows in set (0.00 sec)

mysql> alter table developers drop column salary;
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from developeres;
ERROR 1146 (42S02): Table 'employeesdb.developeres' doesn't exist
mysql> select * from developers;
+-----+-----------+------------+-----+
| id  | name      | occupation | age |
+-----+-----------+------------+-----+
| 102 | joseph    | developer  |  30 |
| 103 | mike      | developer  |  28 |
| 108 | alexander | developer  |  29 |
+-----+-----------+------------+-----+
3 rows in set (0.00 sec)

mysql> alter table developers add column salary(int);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '(int)' at line 1
mysql> alter table developers add column salary(int) null;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '(int) null' at line 1
mysql> alter table developers add column salary int null;
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc developers;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | YES  |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> seelct * from developers;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'seelct * from developers' at line 1
mysql> select * from developeres;
ERROR 1146 (42S02): Table 'employeesdb.developeres' doesn't exist
mysql> select * from developers;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 102 | joseph    | developer  |  30 |   NULL |
| 103 | mike      | developer  |  28 |   NULL |
| 108 | alexander | developer  |  29 |   NULL |
+-----+-----------+------------+-----+--------+
3 rows in set (0.00 sec)

mysql> update developers set salary = 25000;
Query OK, 3 rows affected (0.00 sec)
Rows matched: 3  Changed: 3  Warnings: 0

mysql> select * from developers;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 102 | joseph    | developer  |  30 |  25000 |
| 103 | mike      | developer  |  28 |  25000 |
| 108 | alexander | developer  |  29 |  25000 |
+-----+-----------+------------+-----+--------+
3 rows in set (0.00 sec)

mysql> show tables;
+-----------------------+
| Tables_in_employeesdb |
+-----------------------+
| developers            |
| emp                   |
| employee_table        |
+-----------------------+
3 rows in set (0.00 sec)

mysql> select database();
+-------------+
| database()  |
+-------------+
| employeesdb |
+-------------+
1 row in set (0.00 sec)

mysql> create database store;
Query OK, 1 row affected (0.01 sec)

mysql> use store;
Database changed
mysql> show tables;
Empty set (0.00 sec)

mysql> create table customers(customerID int PRIMARY KEY, customerName varchar(30), customerEmail varchar(100), customerPhone int);
Query OK, 0 rows affected (0.01 sec)

mysql> desc customers
    -> ;
+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| customerID    | int          | NO   | PRI | NULL    |       |
| customerName  | varchar(30)  | YES  |     | NULL    |       |
| customerEmail | varchar(100) | YES  |     | NULL    |       |
| customerPhone | int          | YES  |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
4 rows in set (0.01 sec)

mysql> create table products(productID int PRIMARY KEY, productName varchar(30), productPrice decimal(10, 2), productQuantity int);
Query OK, 0 rows affected (0.01 sec)

mysql> desc products;
+-----------------+---------------+------+-----+---------+-------+
| Field           | Type          | Null | Key | Default | Extra |
+-----------------+---------------+------+-----+---------+-------+
| productID       | int           | NO   | PRI | NULL    |       |
| productName     | varchar(30)   | YES  |     | NULL    |       |
| productPrice    | decimal(10,2) | YES  |     | NULL    |       |
| productQuantity | int           | YES  |     | NULL    |       |
+-----------------+---------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> create table orders(orderID int PRIMARY KEY, customerID int, productID int, orderDate date, orderAmount decimal(10, 2), foreign key(customerID) references customers(customerID), foreign key(productID) references products(productID));
Query OK, 0 rows affected (0.02 sec)

mysql> desc orders;
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
| orderID     | int           | NO   | PRI | NULL    |       |
| customerID  | int           | YES  | MUL | NULL    |       |
| productID   | int           | YES  | MUL | NULL    |       |
| orderDate   | date          | YES  |     | NULL    |       |
| orderAmount | decimal(10,2) | YES  |     | NULL    |       |
+-------------+---------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> desc customers;
+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| customerID    | int          | NO   | PRI | NULL    |       |
| customerName  | varchar(30)  | YES  |     | NULL    |       |
| customerEmail | varchar(100) | YES  |     | NULL    |       |
| customerPhone | int          | YES  |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
4 rows in set (0.01 sec)

mysql> insert into customers(customerID, customerName, customerEmail, customerPhone) values(1, 'krish', 'krish@google.com', 123456789);
Query OK, 1 row affected (0.01 sec)

mysql> insert into customers(customerID, customerName, customerEmail, customerPhone) values(2, 'sathish', 'sathish@google.com', 987654321);
Query OK, 1 row affected (0.00 sec)

mysql> select * from customers;
+------------+--------------+--------------------+---------------+
| customerID | customerName | customerEmail      | customerPhone |
+------------+--------------+--------------------+---------------+
|          1 | krish        | krish@google.com   |     123456789 |
|          2 | sathish      | sathish@google.com |     987654321 |
+------------+--------------+--------------------+---------------+
2 rows in set (0.00 sec)

mysql> desc products;
+-----------------+---------------+------+-----+---------+-------+
| Field           | Type          | Null | Key | Default | Extra |
+-----------------+---------------+------+-----+---------+-------+
| productID       | int           | NO   | PRI | NULL    |       |
| productName     | varchar(30)   | YES  |     | NULL    |       |
| productPrice    | decimal(10,2) | YES  |     | NULL    |       |
| productQuantity | int           | YES  |     | NULL    |       |
+-----------------+---------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> desc customers;
+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| customerID    | int          | NO   | PRI | NULL    |       |
| customerName  | varchar(30)  | YES  |     | NULL    |       |
| customerEmail | varchar(100) | YES  |     | NULL    |       |
| customerPhone | int          | YES  |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> alter table customers drop primary key;
ERROR 1553 (HY000): Cannot drop index 'PRIMARY': needed in a foreign key constraint
mysql> use employeesdb;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+-----------------------+
| Tables_in_employeesdb |
+-----------------------+
| developers            |
| emp                   |
| employee_table        |
+-----------------------+
3 rows in set (0.00 sec)

mysql> desc emp;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | YES  |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> alter table emp drop primary key;
Query OK, 8 rows affected (0.02 sec)
Records: 8  Duplicates: 0  Warnings: 0

mysql> desc emp;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   |     | NULL    |       |
| name       | varchar(30) | YES  |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.01 sec)

mysql> alter table emp add constraint pk_id_name primary key(id, name);
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc emp;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | NO   | PRI | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> alter table emp drop primary key;
Query OK, 8 rows affected (0.01 sec)
Records: 8  Duplicates: 0  Warnings: 0

mysql> desc emp;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   |     | NULL    |       |
| name       | varchar(30) | NO   |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> alter table emp add constraint pk_id primary key(id);
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc emp;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | NO   |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> select * from emp
    -> ;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> insert into emp(id, name, occupation, age, salary) values(108, 'sathish', 'developer', 30, 10000);
ERROR 1062 (23000): Duplicate entry '108' for key 'emp.PRIMARY'
mysql> desc emp;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | NO   |     | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> alter table emp drop primary key;
Query OK, 8 rows affected (0.02 sec)
Records: 8  Duplicates: 0  Warnings: 0

mysql> alter table emp add constraint pk_id_name primary key(id, name);
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc emp;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(30) | NO   | PRI | NULL    |       |
| occupation | varchar(30) | NO   |     | NULL    |       |
| age        | int         | NO   |     | NULL    |       |
| salary     | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> select * from emp;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
+-----+-----------+------------+-----+--------+
8 rows in set (0.00 sec)

mysql> insert into emp(id, name, occupation, age, salary) values(108, 'sathish', 'developer', 30, 10000);
Query OK, 1 row affected (0.01 sec)

mysql> select * from emp
    -> ;
+-----+-----------+------------+-----+--------+
| id  | name      | occupation | age | salary |
+-----+-----------+------------+-----+--------+
| 101 | peter     | engineer   |  25 |  25000 |
| 102 | joseph    | developer  |  30 |  20000 |
| 103 | mike      | developer  |  28 |  23000 |
| 104 | stephen   | scientist  |  45 |  30000 |
| 105 | mark      | engineer   |  25 |  33000 |
| 106 | suzi      | scientist  |  30 |  39000 |
| 107 | michael   | engineer   |  25 |  45000 |
| 108 | alexander | developer  |  29 |  15000 |
| 108 | sathish   | developer  |  30 |  10000 |
+-----+-----------+------------+-----+--------+
9 rows in set (0.00 sec)

mysql> insert into emp(id, name, occupation, age, salary) values(108, 'sathish', 'scientist', 30, 20000);
ERROR 1062 (23000): Duplicate entry '108-sathish' for key 'emp.PRIMARY'
