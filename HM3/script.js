/*-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу*/

let  objDog = {
    color: 'black',
    age: 2,
    height: 3,
    gender: 'M',  
    graft: true } ;

 let objPerson = {
    name: 'Irina',
    age: 28,
    height: 170,
    weight: 60,  
    gender: 'F' };

 let objCar= {
    color: 'red',
    year: 2008,
    type: 'sport',    
    mileage: 10000,
    owner:'Ivan'  };

let  objFlat= {
    owner: 'Sveta',
    room : 2, 
    floor: 10,
    location :'center',
    kitchen: true   };
    
 let objBook={
    name: '10 stepts to sucсess',
    color: 'grenn',
    pages: 200,
    author: 'Ivanov V.V',
    price: 300 }  ;
console.log(objDog);
/* -- Створити масив та вивести його в консоль:
- з 5 собак
- 3 5 людей
- з 5 автомобілів*/

let Dog=[ 'Dog1','Dog2','Dog3','Dog4','Dog5'];
console.log(Dog);

let Person=[ 'Person1','Person2','Person3','Person4','Person5'];
console.log(Person);

let Car=[ 'Car1','Car2','Car3','Car4','Car5'];
console.log(Car);

/*-- створити об'єкт (не меньше 5ти властивостей) який описує, 
одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка */

let objHouse={
    owners: ['Ivan','Sveta'],
    parameters:{
       height:200,
       floor:2,
       square:400
    },
    kitchen:true,
    bathroom:true,
    garden:'Y'
};

let objDriver={
    owners:['Tina','Ivan'],
    parameters:{
        speed:300,
        energe:'gas'
    },
    color:'red',
    plases:5,
    height:100

};

let objToy={
    color:'red',
    store_number:[1,2,3,4,5],
    parameters:{
        price:100,
        age:'3+'       
    },
    instruction:true,
    promo_flag:'Y'

};

let objTable={
    parameters:{
        height:100,
        weight:100
    },
    color:['red','black'],
    store_number:[1,2,3,4,5],
    promo_flag:true,
    price:200

};

let objBag={
    color:['red','green'],
    size:100,
    furniture:{
        lock:true,
        pocket:2
    },
    store_number:[1,2,3,4,5],
    price:{
        regular:2.4,
        promo:1.2
    }

};
console.log(objBag);
/*Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
- статус Андрія
- статус Максима
- ім'я передостаннього об'єкту
- ім'я третього об'єкта
- вік Олега
- вік Олі
- вік + ім'я 5го об'єкта
- вік + сатус Анни
Приклад: вивести ім'я 1го об'єкта.
 Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3! */

 let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

if (users.name==='andrey') {
    let n=users.key;
    console.log(users[n].status);
}
// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[users.length-2].name);
// console.log(users[2].name);
// console.log(users[4].status);

/*


-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
- отримує текст з параграфа з id "content"
- отримує текст з блоку з id "rules"
- замініть текст параграфа з id 'content' на будь-який інший
- замініть текст параграфа з id 'rules' на будь-який інший
- змініть кожному елементу колір фону на червоний
- змініть кожному елементу колір тексту на синій
- отримати весь список класів елемента з id=rules і вивести їх в console.log
- отримати всі елементи з класом fc_rules
- поміняти колір тексту у всіх елементів fc_rules на червоний

====================
====================
====================

=================
=====class=======
=================
Взяти файл template_2.html та працювати в ньому
- Напишіть код, який :
-- змінює колір тексту елемнту з ід main_header на будь-який інший
-- робить шириниу елементу ul 400 пікселів
-- робить шириниу всіх елементів з класом linkList шириною 50%
-- отримує текст який зберігається в елементі з класом listElement2
-- отримує всі елементи li та змінює ім колір фону на сірий
-- отримує всі елементи 'a' та додає їм клас anchor
-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
-- отримати елементи p та змінити їм paddin на довільне значення
-- отримати елементи з класом text2 та змінити їм текст на довільне значення */