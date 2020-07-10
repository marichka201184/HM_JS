/*- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
(Т.е поле name  должно присутствовать только 1 раз в одном объекте )
*/
// let arr1={
//     name:'Ira',
//     weidth: 50,
//     height:180
// };
// let arr2={
//     price:20.3,
//     store:10,
//     disc:true
// };

// let arr3={
//     color:'red',
//     size:'M',
//     list_flaf:'Y'
// };

// let arr4={
//     top:'20px',
//     buttom:'5px',
//     left:'30px'
// };

// let  arr5={
//     img:'Y',
//     link:'Y',
//     folder:'hm'
// };

/*- создать 5 объектов с полностью разным набором полей. 
В каждом объекте должен присутсвовать массив и внутренний объект.
 Опишите что угодно, машину, картину, болт... 
 Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
 */

// let objHouse={
//     owners: ['Ivan','Sveta'],
//     parameters:{
//        height:200,
//        floor:2,
//        square:400
//     },
//     kitchen:true,
//     bathroom:true,
//     garden:'Y'
// };

// let objDriver={
//     owners:['Tina','Ivan'],
//     parameters:{
//         speed:300,
//         energe:'gas'
//     },
//     color:'red',
//     plases:5,
//     height:100

// };

// let objToy={
//     color:'red',
//     store_number:[1,2,3,4,5],
//     parameters:{
//         price:100,
//         age:'3+'       
//     },
//     instruction:true,
//     promo_flag:'Y'

// };

// let objTable={
//     parameters:{
//         height:100,
//         weight:100
//     },
//     color:['red','black'],
//     store_number:[1,2,3,4,5],
//     promo_flag:true,
//     price:200

// };

// let objBag={
//     color:['red','green'],
//     size:100,
//     furniture:{
//         lock:true,
//         pocket:2
//     },
//     store_number:[1,2,3,4,5],
//     price:{
//         regular:2.4,
//         promo:1.2
//     }

// };
// console.log(objBag);
/* - При помощи for in вывести все ключи всех объектов из задания 1 и 2*/

// for (let keys in arr1) {
//     console.log(keys);
//       };
//       for (let keys in arr2) {
//         console.log(keys);
//           };
//           for (let keys in arr3) {
//             console.log(keys);
//               };
//               for (let keys in arr4) {
//                 console.log(keys);
//                   };
//                   for (let keys in arr5) {
//                     console.log(keys);
//                       };
//  for (let keys in objHouse) {
//       console.log(keys);
//       };  
//       for (let keys in objDriver) {
//         console.log(keys);
//         };   
//         for (let keys in objToy) {
//             console.log(keys);
//             };   
//             for (let keys in objTable) {
//                 console.log(keys);
//                 };   
//                 for (let keys in objBag) {
//                     console.log(keys);
//                     };   
 
/*- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2 */
//  let keys1 = Object.keys(arr1);
//  console.log(keys1);
//  let keys2 = Object.keys(arr2);
//  console.log(keys2);
//  let keys3 = Object.keys(arr3);
//  console.log(keys3);
//  let keys4 = Object.keys(arr4);
//  console.log(keys4);
//  let keys5 = Object.keys(arr5);
//  console.log(keys5);

//  let keysH = Object.keys(objHouse);
//  console.log(keysH);
//  let keysD = Object.keys(objDriver);
//  console.log(keysD);
//  let keysT = Object.keys(objToy);
//  console.log(keysT);
//  let keysTl = Object.keys(objTable);
//  console.log(keysTl);
//  let keysB = Object.keys(objBag);
//  console.log(keysB);

 /*- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, 
год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
- проитерировать каждый массив из задания 5,6,7 при помощи while.
- проитерировать каждый массив из задания 5,6,7 при помощи for .
- проитерировать каждый массив из задания 5,6,7 при помощи  for of. */
// let car1={
//     model:'opel',
//     year:2020,
//     power:200,
//     color:'red'
// };
// let car2={
//     model:'opel',
//     year:2010,
//     power:100,
//     color:'blue'
// };
// let car3={
//     model:'opel',
//     year:2000,
//     power:2000,
//     color:'green'
// };
// let car4={
//     model:'opel',
//     year:2008,
//     power:2000,
//     color:'green'
// };
// let car5={
//     model:'opel',
//     year:2007,
//     power:2000,
//     color:'green'
// };
// let car6={
//     model:'opel',
//     year:2006,
//     power:2000,
//     color:'green'
// };
// let car7={
//     model:'opel',
//     year:2004,
//     power:2000,
//     color:'green'
// };
// let car8={
//     model:'opel',
//     year:2003,
//     power:2000,
//     color:'green'
// };
// let car9={
//     model:'opel',
//     year:2002,
//     power:2000,
//     color:'green'
// };
// let car10={
//     model:'opel',
//     year:2001,
//     power:2000,
//     color:'green'
// };
// let arrCar=[car1,car2,car3,car4,car5,car6,car7,car8,car9,car10];

// console.log(arrCar);

// let i=0;
// while (i<arrCar.length) {
//     console.log(arrCar[i]);
//     i++
// }

// for (let i=0;i<arrCar.length;i++) {
//     console.log(arrCar[i]);
// }

// for (let CR of arrCar)
// {
//     console.log(CR)
// }


/* - Создать массив объектов cities и заполнить 
его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными) 
- проитерировать каждый массив из задания 5,6,7 при помощи while.
- проитерировать каждый массив из задания 5,6,7 при помощи for .
- проитерировать каждый массив из задания 5,6,7 при помощи  for of.*/

// let city1={
//     name:'Toronto',
//     population:'7 bilion',
//     country:'Canada',
//     region: 'CA'
// };
// let city2={
//     name:'Kiev',
//     population:'2 bilion',
//     country:'Ukraine',
//     region: 'UA'
// };
// let city3={
//     name:'Odessa',
//     population:'2 bilion',
//     country:'Ukraine',
//     region: 'UA'
// };

// let cities=[city1,city2,city3];

// console.log(cities);

// let i=0;
// while (i<cities.length) {
//     console.log(cities[i]);
//     i++
// }

// for (let i=0;i<cities.length;i++) {
//     console.log(cities[i]);
// }

// for (let CR of cities)
// {
//     console.log(CR)
// }

/*- Создать массив объектов cars и заполнить его машинами с полями модель, 
год выпуска, мощность, цвет, водитель. 
Водитель является отдельным объектом с полями имя, возраст, пол, стаж. 
- проитерировать каждый массив из задания 5,6,7 при помощи while.
- проитерировать каждый массив из задания 5,6,7 при помощи for .
- проитерировать каждый массив из задания 5,6,7 при помощи  for of.*/
// let cars1={
//     model:'opel',
//     year:2020,
//     power:200,
//     color:'red',
//     owner:{
//         name:'Ivan',
//         age:33,
//         gender:'M',
//         exp:3
//     }
// };
// let cars2={
//     model:'opel',
//     year:2010,
//     power:100,
//     color:'blue',
//     owner:{
//         name:'Sveta',
//         age:40,
//         gender:'F',
//         exp:10
//     }
// };
// let cars3={
//     model:'opel',
//     year:2000,
//     power:2000,
//     color:'green',
//     owner:{
//         name:'Luda',
//         age:25,
//         gender:'F',
//         exp:5
//     }
// };
// let cars=[cars1,cars2,cars3];
// let i=0;
// while (i<cars.length) {
//     console.log(cars[i]);
//     i++
// }

// for (let i=0;i<cars.length;i++) {
//     console.log(cars[i]);
// }

// for (let CR of cars)
// {
//     console.log(CR)
// }

/* - взять объекты из задания 1 и превратить каждый в json.*/
// let arr1={
//     name:'Ira',
//     weidth: 50,
//     height:180
// };
// let arr2={
//         price:20.3,
//         store:10,
//         disc:true
//     };
    
// let arr3={
//         color:'red',
//         size:'M',
//         list_flaf:'Y'
//     };
    
// let arr4={
//         top:'20px',
//         buttom:'5px',
//         left:'30px'
//     };
    
// let  arr5={
//         img:'Y',
//         link:'Y',
//         folder:'hm'
//     };
// let jsonUser1 = JSON.stringify(arr1);
// console.log(jsonUser1);
// let jsonUser2 = JSON.stringify(arr2);
// console.log(jsonUser2);
// let jsonUser3 = JSON.stringify(arr3);
// console.log(jsonUser3);
// let jsonUser4 = JSON.stringify(arr4);
// console.log(jsonUser4);
// let jsonUser5 = JSON.stringify(arr5);
// console.log(jsonUser5);

// /* - взять json из задания 11 и превратить их обратно в объекты.*/

// let parsedUser1 = JSON.parse(jsonUser1);
// console.log(parsedUser1);
// let parsedUser2 = JSON.parse(jsonUser2);
// console.log(parsedUser2);
// let parsedUser3 = JSON.parse(jsonUser3);
// console.log(parsedUser3);
// let parsedUser4 = JSON.parse(jsonUser4);
// console.log(parsedUser4);
// let parsedUser5 = JSON.parse(jsonUser5);
// console.log(parsedUser5);

/* - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .*/

// let car1={
//     model:'opel',
//     year:2020,
//     power:200,
//     color:'red'
// };
// let car2={
//     model:'opel',
//     year:2010,
//     power:100,
//     color:'blue'
// };
// let car3={
//     model:'opel',
//     year:2000,
//     power:2000,
//     color:'green'
// };
// let car4={
//     model:'opel',
//     year:2008,
//     power:2000,
//     color:'green'
// };
// let car5={
//     model:'opel',
//     year:2007,
//     power:2000,
//     color:'green'
// };
// let car6={
//     model:'opel',
//     year:2006,
//     power:2000,
//     color:'green'
// };
// let car7={
//     model:'opel',
//     year:2004,
//     power:2000,
//     color:'green'
// };
// let car8={
//     model:'opel',
//     year:2003,
//     power:2000,
//     color:'green'
// };
// let car9={
//     model:'opel',
//     year:2002,
//     power:2000,
//     color:'green'
// };
// let car10={
//     model:'opel',
//     year:2001,
//     power:2000,
//     color:'green'
// };
// let arrCar=[car1,car2,car3,car4,car5,car6,car7,car8,car9,car10];

// console.log(arrCar);

// for (let i=0;i<arrCar.length;i++) {
//     let jsonUser = JSON.stringify(arrCar);
//        console.log(jsonUser);
// }

/* - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .*/
// let city1={
//     name:'Toronto',
//     population:'7 bilion',
//     country:'Canada',
//     region: 'CA'
// };
// let city2={
//     name:'Kiev',
//     population:'2 bilion',
//     country:'Ukraine',
//     region: 'UA'
// };
// let city3={
//     name:'Odessa',
//     population:'2 bilion',
//     country:'Ukraine',
//     region: 'UA'
// };

// let cities=[city1,city2,city3];

// console.log(cities);

// for (let i=0;i<cities.length;i++) {
//     let jsonUser = JSON.stringify(cities);
//        console.log(jsonUser);
// }
/* - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать 
в новый массив.
*/
// let cars1={
//     model:'opel',
//     year:2020,
//     power:200,
//     color:'red',
//     owner:{
//         name:'Ivan',
//         age:33,
//         gender:'M',
//         exp:3
//     }
// };
// let cars2={
//     model:'opel',
//     year:2010,
//     power:100,
//     color:'blue',
//     owner:{
//         name:'Sveta',
//         age:40,
//         gender:'F',
//         exp:10
//     }
// };
// let cars3={
//     model:'opel',
//     year:2000,
//     power:2000,
//     color:'green',
//     owner:{
//         name:'Luda',
//         age:25,
//         gender:'F',
//         exp:5
//     }
// };
// let cars=[cars1,cars2,cars3];

// for (let i=0;i<cars.length;i++) {
//     let jsonUser = JSON.stringify(cars);
//        console.log(jsonUser);
// }

/*- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills 
которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать 
его массив skills
 */

//  let users=[
//      {
//      name:'Ivan',
//      age:30,
//      skills:['run','cook','clean']
//      },
//      {
//      name:'Ira',
//      age:28,
//      skills:['cook','jump']    
//      }
//  ];

//  console.log(users);

//  for (let i=0;i<users.length;i++) {
//      console.log(users[i]);
//      for (let j=0;j<users[i].skills.length;j++) {
//          console.log(users[i].skills[j]);
//      }
//            }

/*Создать массив пользователей. У каждого пользователя обязательно должено быть
 поле skills которое является массивом. Проитерировать массив пользователей и в
  каждом пользователе проитерировать его массив skills. Скопировать все skills всех
   пользователей в отедльный массив */

// let users=[
//          {
//          name:'Ivan',
//          age:30,
//          skills:['run','cook','clean']
//          },
//          {
//          name:'Ira',
//          age:28,
//          skills:['cook','jump']    
//          }
//      ];
    
//      let newSkills=[];
//     // console.log(users);
    
//      for (let i=0;i<users.length;i++) {
//          console.log(users[i]);
//          for (let j=0;j<users[i].skills.length;j++) {
//              console.log(users[i].skills[j]);
//              let skill=users[i].skills[j];
//              newSkills.push(skill);
//          }
//                }
//       console.log(newSkills);         

/* - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
 let users = [{name: 'vasya', age: 31, status: false,
  skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
   {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
   {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
   {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];*/
//    let users = [
//     {name: 'vasya', age: 31, status: false,skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//     ]
//     ;
    
//      for (let i=0;i<users.length;i++) {
//      console.log(users[i]);
//      for (let j=0;j<users[i].skills.length;j++) {
//          console.log(users[i].skills[j]);
//      }
//            }

 /* - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати)
  їх в інший порожній масив.*/
//   let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// let addressArr=[];

    
//      for (let i=0;i<users.length;i++) {
//          console.log(users[i].address);
//          addressArr.push(users[i].address);
//          }
         
//       console.log(addressArr);    
 /* - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок 
 за допомоги document.createElement. Всі данні в одному блоці.*/  

// for (let i in users) {
//     let newElement = document.createElement('div');
//     newElement.id = users[i]; 
//     newElement.className = "users";
//     let jsonUser = JSON.stringify(users[i]);
//     newElement.innerHTML = jsonUser;
//     document.body.appendChild(newElement);
// } 

/* - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок 
за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)*/
// let newAdd=[];
// for (let i in users) {
//     console.log(users[i].address);
//     newAdd=users[i].address;
//         let newElementName = document.createElement('div');
//                 let jsonUserName = JSON.stringify(users[i].name);
//         newElementName.innerHTML = jsonUserName;
//         document.body.appendChild(newElementName);

//         let newElementAge = document.createElement('div');
//                 let jsonUserAge = JSON.stringify(users[i].age);
//         newElementAge.innerHTML = jsonUserAge;
//         document.body.appendChild(newElementAge);
        
//         let newElementStatus = document.createElement('div');
//                let jsonUserStatus = JSON.stringify(users[i].status);
//         newElementStatus.innerHTML = jsonUserStatus;
//         document.body.appendChild(newElementStatus);

//         let newElementAdress = document.createElement('div');
//                 let jsonUserAdress = JSON.stringify(newAdd);
//         newElementAdress.innerHTML = jsonUserAdress;
//         document.body.appendChild(newElementAdress);
//     } 

   /*- За допомоги циклу проітерувати  масив users, 
   записати кожного юзера в сівй блок за допомоги document.createElement, 
   розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, 
   з блоками для кожної властивості*/
//    let newAdd=[];
//    for (let i=0;i<users.length;i++) {
           //      let newElementName = document.createElement('div');
        //             let jsonUserName = JSON.stringify(users[i].name);
        //     newElementName.innerHTML = jsonUserName;
        //     document.body.appendChild(newElementName);
    
        //     let newElementAge = document.createElement('div');
        //             let jsonUserAge = JSON.stringify(users[i].age);
        //     newElementAge.innerHTML = jsonUserAge;
        //     document.body.appendChild(newElementAge);
            
        //     let newElementStatus = document.createElement('div');
        //            let jsonUserStatus = JSON.stringify(users[i].status);
        //     newElementStatus.innerHTML = jsonUserStatus;
        //     document.body.appendChild(newElementStatus); 

       
        //             let newElementCity = document.createElement('div');
        //             let jsonUserCity = JSON.stringify(users[i].address.city);
        //             newElementCity.innerHTML = jsonUserCity;
        //             document.body.appendChild(newElementCity); 

        //             let newElementCountry = document.createElement('div');
        //             let jsonUserCountry = JSON.stringify(users[i].address.country);
        //             newElementCountry.innerHTML = jsonUserCountry;
        //             document.body.appendChild(newElementCountry); 

        //             let newElementStreet = document.createElement('div');
        //             let jsonUserStreet = JSON.stringify(users[i].address.street);
        //             newElementStreet.innerHTML = jsonUserStreet;
        //             document.body.appendChild(newElementStreet); 

        //             let newElementHouse = document.createElement('div');
        //             let jsonUserHouse = JSON.stringify(users[i].address.houseNumber);
        //             newElementHouse.innerHTML = jsonUserHouse;
        //             document.body.appendChild(newElementHouse); 
        // }
  /*- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, 
            {id: 2, name: 'petya', age: 30, status: true}, 
            {id: 3, name: 'kolya', age: 29, status: true},
             {id: 4, name: 'olya', age: 28, status: false},];
            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, 
            {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
            {user_id: 2, country: 'Poland', city: 'Krakow'}, 
            {user_id: 4, country: 'USA', city: 'Miami'},];			

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Частковий приклад реультату:
let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: 
{user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]*/

let usersWithId = [
{id: 1, name: 'vasya', age: 31, status: false}, 
{id: 2, name: 'petya', age: 30, status: true}, 
{id: 3, name: 'kolya', age: 29, status: true},
{id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
{user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
{user_id: 2, country: 'Poland', city: 'Krakow'}, 
{user_id: 3, country: 'USA', city: 'Portland'}, 
{user_id: 4, country: 'USA', city: 'Miami'}
];		

for (let i=0;i<usersWithId.length;i++) {
    for (let j=0;j<citiesWithId.length;j++) {

        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].address=citiesWithId[j]
        }
    }
}

console.log(usersWithId);


/*
- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
- змінити цей текст використовуючи селектори id, class,  tag
- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
 - знайти всі елементі, які мають class
 - знайти всі параграфи ,та змінити текст на hello oktenweb!
 - знайти всі div та змінити ім колір на червоний

============
====class===
============

- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];




*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
*/