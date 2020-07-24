// - Создать произвольный елемент с id = text.  
//Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let newElement = document.createElement('div');
//     newElement.id='text'
//     newElement.innerText = 'Hello owu';
// document.body.appendChild(newElement);


// let hiddenId = document.getElementById('text');

// hiddenId.onclick = (ev) => {
//     hiddenId.style.visibility = 'hidden';

// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// let but = document.createElement('button');
//     but.innerText = 'click me';
// document.body.appendChild(but);

//  but.onclick = (ev) => {
//           but.style.visibility = 'hidden';
//  }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let inp = document.createElement('input');    
// document.body.appendChild(inp);
// inp.setAttribute('id', 'myId');

// let but = document.createElement('button');
//     but.innerText = 'Перевірка віка';
// document.body.appendChild(but);

//   but.onclick = (ev) => {
//       let age=parseInt(document.getElementById('myId').value);
//      if (age<18) {
//           document.write('Ви не можете користуватись цим сайтом')
         
//       }
//      else {document.write('Усе гуд')}
//  }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.createElement('div');   

// document.body.appendChild(menu);

// let but = document.createElement('button');
// but.innerText='Our menu'
// menu.appendChild(but);

// let ul = document.createElement('ul');
// ul.id='MyId' 
// ul.style.visibility = 'hidden'
// for (let i=0;i<5;i++) {
//     let li = document.createElement('li');
//     li.innerHTML = `Number ${i}`;
//     ul.appendChild(li);
// }
// menu.appendChild(ul);


// let newUl=document.getElementById('MyId')

//  but.onclick = (ev) => {
//      if (newUl.style.visibility === 'visible') {
//         newUl.style.visibility = 'hidden'
//      }
//      else {newUl.style.visibility = 'visible'};

//          
//  }



// - Создать список комментариев , 
//пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

//let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];

// for (let i=0;i<rules.length;i++) {
// const div = document.createElement('div');
// div.innerText=rules[i].title
// console.log(div)
// document.body.appendChild(div);

// let but = document.createElement('button');
// but.innerText='Свернуть'
// div.appendChild(but);

// const p = document.createElement('p');
// p.innerText=rules[i].body
// p.style.display = 'block'
// console.log(p)
// div.appendChild(p);

// but.onclick = (ev) => {
//     if (p.style.display === 'block') {
//         p.style.display = 'none'
//     }
//     else {p.style.display = 'block'};
//      }
// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується 
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1=document.createElement('form');
// form1.name='Form1'
// let input1=document.createElement('input');
// input1.name='Input1'
// let input2=document.createElement('input');
// input2.name='Input2'
// document.body.appendChild(form1);
// form1.appendChild(input1);
// form1.appendChild(input2);


// let form2=document.createElement('form');
// form2.name='Form2'
// let input3=document.createElement('input');
// input3.name='Input3'
// let input4=document.createElement('input');
// input4.name='Input4'
// document.body.appendChild(form2);
// form2.appendChild(input3);
// form2.appendChild(input4);

// let but = document.createElement('button');
// but.innerText='Consol'
// document.body.appendChild(but);

//  but.onclick = (ev) => {
//     let fon1=document.forms.Form1;
//     let inp1=fon1.Input1.value;
//     let inp2=fon1.Input2.value;
//     let fon2=document.forms.Form2;
//     let inp3=fon2.Input3.value;
//     let inp4=fon2.Input4.value;
//     console.log(inp1)
//     console.log(inp2)
//     console.log(inp3)
//     console.log(inp4)
//  }


// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.


// let newTable=function(n,m,el) {
// let newEl=document.createElement(el)  
// let newElement = document.createElement('table');
//   newElement.id = 'tablearea';
//   let TabId=document.getElementById('tablearea')
//   for (let i = 1; i <= n; i++) {
//   	let tr = document.createElement('tr'); // создаем tr-ку
	
// 	// Заполняем tr-ку td-шками:
// 	for (let j = 1; j <= m; j++) {
// 		let td = document.createElement('td'); // создаем td-шку
// 		td.innerHTML = j; // пишем в нее текст
		
// 		tr.appendChild(td); // добавляем созданную td-шку в конец tr-ки
// 	}
	
//     newElement.appendChild(tr); // добавляем созданную tr-ку в конец таблицы
// }
//     newEl.appendChild(newElement);
//     document.body.appendChild(newEl)

// }

// newTable(10,5,'div');


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, 
//другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// let inp1 = document.createElement('input');    
// document.body.appendChild(inp1);
// inp1.setAttribute('id', 'myId1');

// let inp2 = document.createElement('input');    
// document.body.appendChild(inp2);
// inp2.setAttribute('id', 'myId2');

// let inp3 = document.createElement('input');    
// document.body.appendChild(inp3);
// inp3.setAttribute('id', 'myId3');

// let but = document.createElement('button');
//     but.innerText = 'Table';
// document.body.appendChild(but);

//   but.onclick = (ev) => {
//       let n=parseInt(document.getElementById('myId1').value);
//       let m=parseInt(document.getElementById('myId2').value);
//       let text=document.getElementById('myId3').value;
//       let newEl=document.createElement('div')  
//       let newElement = document.createElement('table');
//         newElement.id = 'tablearea';
//         let TabId=document.getElementById('tablearea')
//         for (let i = 1; i <= n; i++) {
//             let tr = document.createElement('tr'); // создаем tr-ку
          
//           // Заполняем tr-ку td-шками:
//           for (let j = 1; j <= m; j++) {
//               let td = document.createElement('td'); // создаем td-шку
//               td.innerHTML = text; // пишем в нее текст
              
//               tr.appendChild(td); // добавляем созданную td-шку в конец tr-ки
//           }
          
//           newElement.appendChild(tr); // добавляем созданную tr-ку в конец таблицы
//       }
//           newEl.appendChild(newElement);
//           document.body.appendChild(newEl)
//  }


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// let arr=['a','b','c'];

// let inp1 = document.createElement('input');    
// document.body.appendChild(inp1);
// inp1.setAttribute('id', 'myId1');



// let but = document.createElement('button');
//     but.innerText = 'Check';
// document.body.appendChild(but);

// but.onclick = (ev) => {
//     let text=document.getElementById('myId1').value
// for (let i=0;i<arr.length;i++) {
//     if (arr[i]===text) {
//         alert('Попередження')
//     }
    
// }

// }
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let arr=['abc','bac','cab'];

// let inp1 = document.createElement('input');    
// document.body.appendChild(inp1);
// inp1.setAttribute('id', 'myId1');



// let but = document.createElement('button');
//     but.innerText = 'Check';
// document.body.appendChild(but);

// but.onclick = (ev) => {

// let text=document.getElementById('myId1').value

// for (let i=0;i<arr.length;i++) {
//         let ch=text.includes(arr[i]); 
//         if (ch===true) {
//                             alert('Попередження')
//                             break
//                         }   
//     } 


// }


// -- создать скрипт, который берет считывает на странице (rules.html) текст
// и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// const wrap = document.getElementById('wrap');

// const h2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const ul = document.createElement('ul');
// let i=1
// for (const item of h2) {    
//     const li = document.createElement('li');
//     li.id='Id'+i
//     item.id='I'+i
//     li.innerText = item.innerText;
//     ul.appendChild(li);
//     i++
// }
// content.appendChild(ul);

// Id1.onclick = (ev) => {
//     window.location.hash='I1';
//     }
// Id2.onclick = (ev) => {
//     window.location.hash='I2';
//     }
//     Id3.onclick = (ev) => {
//         window.location.hash='I3';
//         }
//     Id4.onclick = (ev) => {
//         window.location.hash='I4';
//         }
//     Id5.onclick = (ev) => {
//         window.location.hash='I5';
//         }    
//         Id6.onclick = (ev) => {
//             window.location.hash='I6';
//             }   
//             Id7.onclick = (ev) => {
//                 window.location.hash='I7';
//                 }         
// Id8.onclick = (ev) => {
//     window.location.hash='I8';
//     }
// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let inp1 = document.createElement('input');  
// inp1.type='checkbox' 
// inp1.name= 'check1'
// document.body.appendChild(inp1);

// let inp2 = document.createElement('input');  
// inp2.type='checkbox' 
// inp2.name= 'check1'
// document.body.appendChild(inp2);

// let inp3 = document.createElement('input');  
// inp3.type='checkbox' 
// inp3.name= 'check1'
// document.body.appendChild(inp3);

// let but = document.createElement('button');
// but.innerText='Фильтровать'
// document.body.appendChild(but); 

// but.onclick = (ev) => {
    
//     if (inp1.checked===true&&inp2.checked===true&&inp3.checked===true) {
       
//         let arr_fltr1 = usersWithAddress.filter((value) => {
//                 return value.status===false&&value.address.city==='Kyiv'&&value.age>28;
//               });
//               console.log(arr_fltr1)                
//         }
//     else if (inp1.checked===true&&inp2.checked===false&&inp3.checked===false) {
//         let arr_fltr1 = usersWithAddress.filter((value) => {
//             return value.status===false;
//           });
//           console.log(arr_fltr1)                
//     }
    
//     else if (inp1.checked===false&&inp2.checked===false&&inp3.checked===true) {
//         let arr_fltr1 = usersWithAddress.filter((value) => {
//             return value.age>28;
//           });
//           console.log(arr_fltr1)               
//     }
//     else if (inp1.checked===false&&inp2.checked===true&&inp3.checked===false) {
//         let arr_fltr1 = usersWithAddress.filter((value) => {
//             return value.address.city==='Kyiv';
//           });
//           console.log(arr_fltr1)               
//     }
//     else if (inp1.checked===true&&inp2.checked===true&&inp3.checked===false) {
//         let arr_fltr1 = usersWithAddress.filter((value) => {
//             return value.status===false&&value.address.city==='Kyiv';
//           });
//           console.log(arr_fltr1)               
//     }
//     else if (inp1.checked===true&&inp2.checked===false&&inp3.checked===true) {
//         let arr_fltr1 = usersWithAddress.filter((value) => {
//             return value.status===false&&value.age>28;
//           });
//           console.log(arr_fltr1)               
//     }
//     else if (inp1.checked===false&&inp2.checked===true&&inp3.checked===true) {
//         let arr_fltr1 = usersWithAddress.filter((value) => {
//             return value.address.city==='Kyiv'&&value.age>28;
//           });
//           console.log(arr_fltr1)               
//     }
// }



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
//Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, 
//при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет 
//нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим
// к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось 
//іншим способом змінює свій стан