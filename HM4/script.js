/* - створити функцію яка виводить масив*/
// function arroutput(arr=[]){
//     console.log(arr);   
// };
/* - створити функцію яка заповнює масив рандомними числами та виводить його.*/
// function Random_arr(){
//     let max=+prompt('Enter max');
//     let min=+prompt('Enter min');
//     let n=+prompt('Enter i');
//     let arr=[];
//     for (let i=0;i<n;i++) {
//              arr[i]=Math.round(Math.random() * (max - min) + min) ;
//          }
//     arroutput(arr)
// };

//  Random_arr();

/*  Для виведення використати попвередню функцію.
- створити функцію яка приймає три числа та виводить та повертає найменьше.*/

// function numbers() {
//     let a=+prompt('Enter first number');
//     let b=+prompt('Enter second number');
//     let c=+prompt('Enter third number');

//     let min=0;
    

//     let arr=[a,b,c];
//     arroutput(arr);
    
//     if (a<b&&a<c) {
//         min=a
//     }

//     else if (b<a&&b<c) {
//         min=b
//     }

//     else min=c;
//     console.log(min);
//     return min;


// }

// numbers();

/* - створити функцію яка приймає три числа та виводить та повертає найбільше.*/

// function numbers() {
//         let a=+prompt('Enter first number');
//         let b=+prompt('Enter second number');
//         let c=+prompt('Enter third number');
//         let max=0;
  
//         let arr=[a,b,c];
//         arroutput(arr);
        
//         if (a>b&&a>c) {
//             max=a     }
    
//         else if (b>a&&b>c) {
//             max=b        }
    
//         else max=c;
//         console.log(max);
//         return max;
//     }
    
//     numbers();

/* - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
*/

// function min_max() {
//     max=arguments[0];
//     min=arguments[0];

//     for (let i of arguments) {
//         if(i>=max){
//                  max= i;
//                }
//                if(i<=min){
//                  min = i;
//                }
//              }
//              console.log(max);
//              return min;
//             }  
// console.log(min_max(108,2,-500,67,1,609));

/* - створити функцію яка виводить масив*/
// function arroutput(arr=[]){
//     console.log(arr);   
// };

/*- створити функцію яка повертає найбільше число з масиву */
//  function max(arr=[]) {
//      let max=arr[0];
//      for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//      }
//      return max;   
//  }

//  console.log(max(arr=[2,5,9,43,677,98,-200]));

/*- створити функцію яка повертає найменьше число з масиву */

//  function min(arr=[]) {
//      let min=arr[0];
//      for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i];
//         }
//      }
//      return min;   
//  }

//  console.log(min(arr=[2,5,9,43,677,98,-200]));

/*- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його. */
//  function sum(arr=[]) {
//      let sum=0;
//      for(let i=0;i<arr.length;i++){
//        sum=sum+arr[i] 
//      }
//      return sum;   
//  }

//  console.log(sum(arr=[2,5,9,1]));

/* - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/
//  function avg(arr=[]) {
//      let sum=0;
//      for(let i=0;i<arr.length;i++){
//        sum=sum+arr[i] 
//      }
//      return sum/arr.length;   
//  }

//  console.log(avg(arr=[2,5,9,1]));

/* - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві*/
//  function count(arr=[]) {
//      let cnt=arr.length;
//      return cnt;   
//  }

//  console.log(count(arr=[2,5,9,1]));

/*- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них */
//   function count(arr=[]) {
//      let sum=0;
//      let arr_new=[];
//      for (let i=0;i<arr.length;i++){
//         arr_new=Object.values(arr[i]);  
                  
//            sum=sum+arr_new.length       }
//      return sum;   
//  }

//  console.log(count(
//      arr=[ {name:'Dog1',age:2,color:'black'},
//            {name:'Dog2',age:1,color:'blue'},
//            {name:'Dog3',age:5,color:'brown'},
//            {name:'Dog4',age:4,color:'red'},
//            {name:'Dog5',age:3,color:'green'}]
//         )
//         );

/* - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  Приклад
  [1,2,3,4]
  [2,3,4,5]
  результат
  [3,5,7,9]*/

// function sum_arr(arr=[],arr1=[]) {
//      let arr_new=[];
// for (let i=0;i<arr1.length;i++){
//     let n=parseInt(arr[i])+parseInt(arr1[i]);
//      arr_new.push(n);    
// }
//     console.log(arr_new);
// //return arr_new;

// }

// console.log(sum_arr([1,2,3,4],[2,3,4,5]));


/*- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1" */
// function replace(arr=[],n){
//     let k=arr[n]
//     arr[n]=arr[n+1]
//     arr[n+1]=k
//     return arr;
// }

// console.log(replace(arr=[1,2,3,4,65,99],n=4));

/**** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. 
Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
Приклад
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0] */

// function zero(arr=[]){
//     let arr_new=[];
//     let arr_new1=[];
//     for (let i=0;i<arr.length;i++){
//         if (arr[i]===0) {
//         arr_new.push(arr[i]);
//         //delete arr[i];
//         }
//         else arr_new1.push(arr[i])
//     }
//        for (let j=0;j<arr_new.length;j++) {
//         arr_new1.push(arr_new[j])
//     }    
//     return arr_new1;
// }

// console.log(zero([2,4,4,0,5,0]));

/*Створити функцію яка :
- Додає в боді блок з текстом "Hello owu" */

// function add_div(){
//     let newElement = document.createElement('div');
//     newElement.innerText = 'Hello owu';
//     document.body.appendChild(newElement);
// }

// add_div();

/* - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи*/

// function newDiv(type,text) {
//     let newElement = document.createElement(type);
//     newElement.innerText = text;
//     document.body.appendChild(newElement);
// }


// newDiv('p','Hello!!!')

/* Створити функцію яка :
- приймає масив автомобілів (можна взяти з попередніх дз ),
та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
Для кожного автомобіля створити свій блок, та додати його в елемент,
 індентифікатор якого ви отримали. Всі властивості авто в обному блоці
*/


// function car(arr=[],id){
//     let newElement = document.createElement('div');
//     newElement.id = id; 
    
     
//     for (const car of arr){   
//       //  const content = document.getElementById(id);
//              let newElement1 = document.createElement('div'); 
//              newElement1.innerHTML= JSON.stringify(car);
//              newElement.appendChild(newElement1)
       
//    }

//     document.body.appendChild(newElement);
 
// }

// car(car=[ {name:'Car1',year:2008},{name:'Car2',year:2010},{name:'Car3',year:2020},{name:'Car4',year:1998},
// {name:'Car5',year:1984}],'car')

/* Створити функцію яка :
- приймає масив автомобілів (можна взяти з попередніх дз ),та 
 індентифікатор елемнту в який потрібно додати список цих автомобілів.
Для кожного автомобіля створити свій блок, та додати його в елемент, 
індентифікатор якого ви отримали.
Для кожної властивості створити всередені блока автомоблія свій блок*/
// function car(arr=[],id){
//     let newElement = document.createElement('div');
//     newElement.id = id; 
    
     
//     for (let i=0;i<arr.length;i++){   
//              let newElement1 = document.createElement('div'); 
//             let arr_new=Object.values(arr[i]);
//          for (let j=0;j<arr_new.length;j++){
//             let newElement2 = document.createElement('div'); 
//             newElement1.appendChild(newElement2) 
//               newElement2.innerText=arr_new[j];
//                 }
//              newElement.appendChild(newElement1)
       
//    }

//     document.body.appendChild(newElement);
 
// }

// car(car=[ {name:'Car1',year:2008},{name:'Car2',year:2010},{name:'Car3',year:2020},{name:'Car4',year:1998},
// {name:'Car5',year:1984}],'car');

/*(на основі минулого ДЗ)
**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача 
та місто з відповідними "id" та "user_id",
та повертає масив цих з'єднаних об'єктів.
Приклад масивів:
            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
Частковий приклад реультату: */

// let usersWithId = [
// {id: 1, name: 'vasya', age: 31, status: false}, 
// {id: 2, name: 'petya', age: 30, status: true}, 
// {id: 3, name: 'kolya', age: 29, status: true},
// {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
// {user_id: 2, country: 'Poland', city: 'Krakow'}, 
// {user_id: 3, country: 'USA', city: 'Portland'}, 
// {user_id: 4, country: 'USA', city: 'Miami'}
// ];		

// function add_arr(arr=[],arr1=[]) {
//  for (let i=0;i<arr.length;i++) {
//     for (let j=0;j<arr1.length;j++) {

//         if (arr[i].id === arr1[j].user_id) {
//             arr[i].address=arr1[j]
//         }
//     }
// }

// return arr;
// }
//  console.log(add_arr(
//      usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false}, 
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
//     ],
//     citiesWithId = [
//         {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//         {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//         {user_id: 3, country: 'USA', city: 'Portland'}, 
//         {user_id: 4, country: 'USA', city: 'Miami'}
//         ]
//         ));

/*
***- беремо завдання з правилами з укроку №3 :
Та робимо це функцією.При цьому правила отримувати через аргумент.
"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, 
та робить з кожне правило в окремому блоці.
При цому в блоці, номер правила записати в свій блок, 
текст правила записати в свій окремий блок.
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
"
*/
function create_rules(arr=[] ) {
    const wrap = document.getElementById('wrap');
    for (let i=0;i<arr.length;i++) {
    const div = document.createElement('div');
    let arr_new=Object.values(arr[i]);
    for (let j=0;j<arr_new.length;j++){
                    let newElement2 = document.createElement('div'); 
                    div.appendChild(newElement2) 
                      newElement2.innerText=arr_new[j];
    }

    wrap.appendChild(div);
    }
}

console.log(create_rules(
   rules = [
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
    
    ]
));