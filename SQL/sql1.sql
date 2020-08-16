/*1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.*/

select * from bank.client
where length(FirstName)<6;

/*2. +Вибрати львівські відділення банку.+*/

select * from bank.department
where DepartmentCity='Lviv';


/*3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.*/

select * from bank.client
where education='high'
order by lastname;

/*4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.*/

select * from bank.application
order by idApplication desc
limit 5;

/*5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.*/

select * from bank.client
where lastname like '%ov' or lastname like '%ova';


/*6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.*/

select t.* from bank.client t
join bank.department d on (d.idDepartment=t.Department_idDepartment)
where d.DepartmentCity='Kyiv';


/*7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.*/

select FirstName,Passport from bank.client
order by FirstName;

/*8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.*/

select  t.idClient,t.FirstName,t.Education,t.Passport,t.City,t.Age,t.Department_idDepartment,
 sum(d.sum) from bank.client t
join bank.application d on (t.idClient=d.Client_idClient)
group by t.idClient,t.FirstName,t.Education,t.Passport,t.City,t.Age,t.Department_idDepartment
having sum(d.sum)>5000;


/*9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.*/

select cnt_all, count(idClient) cnt_lv
from (
select count(idclient) over() cnt_all,
idclient,DepartmentCity 
from bank.client t
join bank.department d on (d.idDepartment=t.Department_idDepartment)
) t
where DepartmentCity='Lviv'
group by cnt_all;


/*10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.*/

select max(sum),Client_idClient
from bank.application
group by Client_idClient;

/*11. Визначити кількість заявок на крдеит для кожного клієнта.*/

select count(1),Client_idClient
from bank.application
group by Client_idClient;

/*12. Визначити найбільший та найменший кредити.*/

select min(sum),max(sum)
from bank.application;

/*13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.*/

select count(1),Client_idClient
from bank.application a
join bank.client c on (a.Client_idClient=c.idClient)
where Education='high'
group by Client_idClient;

/*14. Вивести дані про клієнта, в якого середня сума кредитів найвища.*/

select c.*
from bank.client c
where idClient in ( select Client_idClient from (
                   select max(avg_sum) over() max_sum,avg_sum,Client_idClient
                   from(
                   select avg(sum) avg_sum,Client_idClient
                   from  bank.application a 
                   group by Client_idClient) t ) t
                   where max_sum=avg_sum);

/*15. Вивести відділення, яке видало в кредити найбільше грошей*/
select d.iddepartment,d.DepartmentCity
from (
select d.iddepartment,d.DepartmentCity,cr,max(cr) over() max_cr
from (
select d.iddepartment,d.DepartmentCity,sum(sum) cr
from bank.department d
join bank.client c on (d.iddepartment=c.department_iddepartment)
join bank.application a on (c.idclient=a.client_idclient)
group by d.iddepartment,d.DepartmentCity) d
)d
where cr=max_cr;

/*16. Вивести відділення, яке видало найбільший кредит.*/


select d.iddepartment,d.DepartmentCity
from (
select d.iddepartment,d.DepartmentCity,sum,max(sum) over() cr
from bank.department d
join bank.client c on (d.iddepartment=c.department_iddepartment)
join bank.application a on (c.idclient=a.client_idclient)
) d
where cr=sum
;


/*17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.*/
set sql_safe_updates = 0;

update bank.application
set application.sum=6000
where client_idclient in (select idclient from bank.client
                          where education='high');
                        
/*18. Усіх клієнтів київських відділень пересилити до Києва.*/

update bank.client
set city='Kyiv'
where department_iddepartment in (select iddepartment from bank.department where departmentcity='Kyiv');


/*19. Видалити усі кредити, які є повернені.*/

delete from bank.application
where creditstate='Returned';



/*20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.*/

select * from bank.client
where substr(LastName,2,1) in ('a','e','i','o','u')


/*Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000*/

select d.iddepartment,d.DepartmentCity,sum(sum) 
from bank.department d
join bank.client c on (d.iddepartment=c.department_iddepartment)
join bank.application a on (c.idclient=a.client_idclient)
where DepartmentCity='Lviv'
group by d.iddepartment,d.DepartmentCity
having sum(sum)>5000;



/*Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000*/
INSERT INTO `bank`.`application` (`idApplication`, `Sum`, `CreditState`, `Currency`, `Client_idClient`) VALUES ('1', '4000', 'Returned', 'Dollar', '1');
INSERT INTO `bank`.`application` (`idApplication`, `Sum`, `CreditState`, `Currency`, `Client_idClient`) VALUES ('3', '7500', 'Returned', 'Euro', '6');
INSERT INTO `bank`.`application` (`idApplication`, `Sum`, `CreditState`, `Currency`, `Client_idClient`) VALUES ('5', '3700', 'Returned', 'Gryvnia', '3');
INSERT INTO `bank`.`application` (`idApplication`, `Sum`, `CreditState`, `Currency`, `Client_idClient`) VALUES ('6', '4100', 'Returned', 'Dollar', '1');
INSERT INTO `bank`.`application` (`idApplication`, `Sum`, `CreditState`, `Currency`, `Client_idClient`) VALUES ('10', '9700', 'Returned', 'Dollar', '5');
INSERT INTO `bank`.`application` (`idApplication`, `Sum`, `CreditState`, `Currency`, `Client_idClient`) VALUES ('14', '2700', 'Returned', 'Dollar', '10');

select c.idClient,sum(sum) 
from bank.client c 
join bank.application a on (c.idclient=a.client_idclient)
where creditstate='Returned'
group by c.idClient
having sum(sum)>5000;



/* Знайти максимальний неповернений кредит.*/

select * from bank.application 
where sum in (
select max(sum) from bank.application a 
where creditstate='Not returned')
and creditstate='Not returned';



/*Знайти клієнта, сума кредиту якого найменша*/

select * from 
(
select c.*,sum,min(sum) over() min_sum
from bank.client c 
join bank.application a on (c.idclient=a.client_idclient)
) t
where sum=min_sum;



/*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/

select * from bank.application
where sum>(Select avg(sum) avg_sum from bank.application);

/*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/

select * from bank.client
where city in (
select city from (
select c.idclient,city,cnt,max(cnt) over() max_cnt
from (
select c.idclient,city,count(sum) cnt
from bank.client c 
join bank.application a on (c.idclient=a.client_idclient)
group by c.idclient,city) c
) c
where cnt=max_cnt)


#місто чувака який набрав найбільше кредитів

select city from (
select c.idclient,city,sum,max(sum) over() max_sum
from (
select c.idclient,city,sum(sum) sum
from bank.client c 
join bank.application a on (c.idclient=a.client_idclient)
group by c.idclient,city) c
) c
where sum=max_sum;


set sql_safe_updates = 0;
set sql_safe_updates = 1;