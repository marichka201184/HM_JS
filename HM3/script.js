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

console.log(users[7].status);
console.log(users[4].status);
console.log(users[users.length-2].name);
console.log(users[2].name);
console.log(users[4].status);
console.log(users[6].age);
console.log(users[3].age);
console.log(`${users[4].name} ${users[4].age}`);
console.log(`${users[5].age} ${users[5].status}`);

