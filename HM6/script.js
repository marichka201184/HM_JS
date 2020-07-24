// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.

//let arr=[3,7,90,67,45,2,6,0,-3,-7,3.5,23,45,98,78,65,-20,6.7,9.1,32];

// let arr_sort = arr.sort((a, b) => {
//     return a-b
// }  );

// console.log(arr_sort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let arr_sort = arr.sort((a, b) => {
//     return b-a
// }  );

// console.log(arr_sort);

// -- при помощи filter получить числа кратные 3

// let arr_filtr = arr.filter((value) => {
//   return value % 3 === 0;
// });

// console.log(arr_filtr);

// -- при помощи filter получить числа кратные 10

// let arr_filtr = arr.filter((value) => {
//       return value % 10 === 0;
//     });
    
//     console.log(arr_filtr);

// -- перебрать (проитерировать) массив при помощи foreach()


//   arr.forEach( value => console.log(value));



// console.log(arr);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let arr_map = arr.map((value) => {
  
//     return value * 3
 
// });

// console.log(arr_map);

// - создать массив со словами на 15-20 элементов.

//let arr_str=['В','этот','день','почитается','память','мученика','Ермия','прежних',
 //'времен','дошла','традиция','Ермия','варить','варенье','из','черной','смородины'];


// -- отсортировать его по алфавиту в восходящем порядке.

// let arr_sort = arr_str.sort() ;

// console.log(arr_sort);

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let arr_sort  = arr_str.sort((a, b) => {
//   if (a < b) {
//     return 1
//   } 
  
//     return -1

// });

// console.log(arr_sort);

// -- отфильтровать слова длиной менее 4х символов

// let arr_fltr = arr_str.filter((value) => {
//   return value.length>4;
// });
// console.log(arr_fltr)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком 
//"!" в конце

//    let arr_map = arr_str.map((value) => {
  
//          return value+'!'
     
//      });
    
//      console.log(arr_map);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true},
// {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false},
// {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false},
// {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, 
//{name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false},
// {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

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
    {name: 'max', age: 31, status: true} ];


    // let users_sort = users.sort((a, b) => {
    //       return a.age - b.age
    //     });
        
    //     console.log(users_sort);  

    //  let users_sort = users.sort((a, b) => {
    //         return b.age - a.age
    //       });
          
    //       console.log(users_sort);     

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

//    let users_sort = users.sort((a, b) => {
//           return a.name.length - b.name.length 
//         });
        
//         console.log(users_sort);  

        // let users_sort = users.sort((a, b) => {
        //     return b.name.length - a.name.length 
        //   });
          
        //   console.log(users_sort);  


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), 
//та зберегти це в новий масив (первинний масив залишиться без змін)

// let usersWithId = users.map((users,index) => {
//   users.id=index+1
//   return users
// });

// console.log(usersWithId);
// console.log(users);

// - відсортувати його за індентифікатором

//  let users_sort = usersWithId.sort((a, b) => {
//             return b.id - a.id
//           });
          
//           console.log(users_sort);     


// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком


//  let cars = [ 
// {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//  ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let arr_fltr = cars.filter((value) => {
//   return value.volume>3;
// });
// console.log(arr_fltr);

// - двигун = 2л

// let arr_fltr = cars.filter((value) => {
//     return value.volume===2;
//   });
//   console.log(arr_fltr);

// - виробник мерс
// let arr_fltr = cars.filter((value) => {
//         return value.producer==="mercedes";
//       });
//       console.log(arr_fltr);

// - двигун більше 3х літрів + виробник мерседес
// let arr_fltr = cars.filter((value) => {
//         return value.volume>3&&value.producer==="mercedes";
//       });
//       console.log(arr_fltr);

// - двигун більше 3х літрів + виробник субару

// let arr_fltr = cars.filter((value) => {
//             return value.volume>3&&value.producer==="subaru";
//           });
//           console.log(arr_fltr);

// - сили більше ніж 300

// let arr_fltr = cars.filter((value) => {
//     return value.power>300;
//   });
//   console.log(arr_fltr);

// - сили більше ніж 300 + виробник субару

// let arr_fltr = cars.filter((value) => {
//     return value.power>300&&value.producer==="subaru";
//   });
//   console.log(arr_fltr);

// - мотор серіі ej

// let arr_fltr = cars.filter((value) => {
//     return value.engine.startsWith('ej');
//   });
//   console.log(arr_fltr);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let arr_fltr = cars.filter((value) => {
//         return value.power>300&&value.producer==="subaru"&&value.engine.startsWith('ej');
//       });
//       console.log(arr_fltr);

// - двигун меньше 3х літрів + виробник мерседес

// let arr_fltr = cars.filter((value) => {
//         return value.volume<3&&value.producer==="mercedes";
//       });
//       console.log(arr_fltr);

// - двигун більше 2л + сили більше 250

// let arr_fltr = cars.filter((value) => {
//             return value.volume>2&&value.power>250;
//           });
//           console.log(arr_fltr);

// - сили більше 250  + виробник бмв

// let arr_fltr = cars.filter((value) => {
//                 return value.power>250&&value.producer==="bmw";
//               });
//               console.log(arr_fltr);


// - взять слдующий массив
 let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, 
 address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
  {id: 2, name: 'petya', age: 30, status: true, 
  address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
  {id: 3, name: 'kolya', age: 29, status: true, 
  address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
  {id: 4, name: 'olya', age: 28, status: false,
   address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, 
    address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
    {id: 6, name: 'anya', age: 31, status: false, 
    address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
    {id: 7, name: 'oleg', age: 28, status: false,
     address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
      {id: 8, name: 'andrey', age: 29, status: true, 
      address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
       {id: 9, name: 'masha', age: 30, status: true, 
       address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
       {id: 10, name: 'olya', age: 31, status: false, 
       address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
       {id: 11, name: 'max', age: 31, status: true, 
       address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей

//  let users_sort = usersWithAddress.sort((a, b) => {
//             return a.id - b.id
//           });
          
//           console.log(users_sort);   
// -- отсортировать его по id пользователей в обратном опрядке

// let users_sort = usersWithAddress.sort((a, b) => {
//     return b.id - a.id
//   });
  
//   console.log(users_sort);

// -- отсортировать его по возрасту пользователей

//  let users_sort = usersWithAddress.sort((a, b) => {
//             return a.age - b.age
//           });
          
//           console.log(users_sort);   

// -- отсортировать его по возрасту пользователей в обратном порядке

// let users_sort = usersWithAddress.sort((a, b) => {
//     return b.age - a.age
//   });
  
//   console.log(users_sort); 

// -- отсортировать его по имени пользователей

// let users_sort = usersWithAddress.sort((a, b) => {
//           if (a.name < b.name) {
//     return -1
//   } 
  
//     return 1

//     });
      
//       console.log(users_sort); 

// -- отсортировать его по имени пользователей в обратном порядке

// let users_sort = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
// return -1
// } 

// return 1

// });

// console.log(users_sort); 

// -- отсортировать его по названию улицы  в алфавитном порядке

// let users_sort = usersWithAddress.sort((a, b) => {
//           if (a.address.street < b.address.street) {
//     return -1
//   } 
  
//     return 1

//     });
      
//       console.log(users_sort);

// -- отсортировать его по номеру дома по возрастанию

// let users_sort = usersWithAddress.sort((a, b) => {
//     if (a.address.number < b.address.number) {
//             return -1
//           } 
          
//             return 1
        
//             });
              
//               console.log(users_sort);
        

// -- отфильтровать (оставить) тех кто младше 30

// let users_fltr = usersWithAddress.filter((value) => {
//         return value.age<30;
//       });
//       console.log(users_fltr);


// -- отфильтровать (оставить) тех у кого отрицательный статус

// let users_fltr = usersWithAddress.filter((value) => {
//     return value.status===false;
//   });
//   console.log(users_fltr);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет


// let users_fltr = usersWithAddress.filter((value) => {
//     return value.status===false&&value.age<30;
//   });
//   console.log(users_fltr);

// -- отфильтровать (оставить) тех у кого номер дома четный

// let users_fltr = usersWithAddress.filter((value) => {
//         return value.address.number%2===0;
//       });
//       console.log(users_fltr);


// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10%
// (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), 
//та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
// але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, 
//що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

 let Car1 = {
      model :'vaz',
      power : 60,
      owner : {name:'Ivan',age:33,exp:15},
      price : 1000,
      year: 1972,

    };

 let Car2 = {
      model :'lada kalina',
      power : 80,
      owner : {name:'Igor',age:23,exp:5},
      price : 2500,
      year: 2010,

    }; 
    let Car3 = {
        model :'tavria',
        power : 40,
        owner : {name:'mihsail',age:30,exp:10},
        price : 500,
        year: 1990,
  
      };
  
   let Car4 = {
        model :'daewoo',
        power : 80,
        owner : {name:'georgiy',age:19,exp:1},
        price : 100,
        year: 100,
  
      }; 
 
      let Car5 = {
        model :'subaru',
        power : 200,
        owner : {name:'maria',age:35,exp:2},
        price : 10000,
        year: 2010,
  
      };
  
   let Car6 = {
        model :'hyundai',
        power : 120,
        owner : {name:'valentin',age:23,exp:8},
        price : 25000,
        year: 2015,
  
      }; 
      let Car7 = {
          model :'kia',
          power : 100,
          owner : {name:'boris',age:20,exp:4},
          price : 5000,
          year: 2000,
    
        };
    
     let Car8 = {
          model :'mazda',
          power : 80,
          owner : {name:'sergey',age:19,exp:2},
          price : 1900,
          year: 2007,
    
        }; 

//console.log(Car1)
// console.log(Car2)
// console.log(Car3)
// console.log(Car4)
// console.log(Car5)
// console.log(Car6)
// console.log(Car7)
// console.log(Car8)

// Для початку вкладіть всі наші створені автомобілі в масив cars.
let cars=[Car1,Car2,Car3,Car4,Car5,Car6,Car7,Car8];
//console.log(cars)
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), 
//та робити їй підвищення потужності двигуна на 10% та ціну на 5%

// for (let i=0;i<cars.length;i+=2) {
//     cars[i].power=cars[i].power+cars[i].power*0.1
//     cars[i].price=cars[i].price+cars[i].price*0.05
// }

// console.log(cars);


// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
// але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, 
//що збільшить йому досвід на 1 рік.
let sum=0;

for (let j=0;j<cars.length;j++) {
    if (cars[j].owner.exp<5&&cars[j].owner.age>25) {
        console.log('Йди на курси');
        cars[j].owner.exp=cars[j].owner.exp+1
        
    }
 sum=sum+cars[j].price;  
console.log(cars[j])
    };

console.log(sum)
// Задача: дан отсортированный по возрастанию массив целых чисел. 
//Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. 
//Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента.
// Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]

// function find(number,arr) {
//     let minId=arr.indexOf(number);
//     let maxId=arr.lastIndexOf(number);

//     console.log('MinIndex ='+ minId +','+' MaxIndex='+maxId);
   
// }

// find(1,arr)
// find(4,arr)