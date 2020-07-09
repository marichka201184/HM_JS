/*-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName 
або document.getElementsByTagName :*/

/* - отримує текст з параграфа з id "content"*/
// let contentP = document.getElementById('content').textContent;
// console.log(contentP);

/* - отримує текст з блоку з id "rules"*/
// let rulesD = document.getElementById('rules').textContent;
// console.log(rulesD);

/* - замініть текст параграфа з id 'content' на будь-який інший*/
// let contentP = document.getElementById('content');
// contentP.innerText =`blablabla`;
//  console.log(contentP.textContent);

/* - замініть текст параграфа з id 'rules' на будь-який інший*/
//  let rulesD = document.getElementById('rules');
//  rulesD.innerText =`blablabla`;
//  console.log(rulesD.textContent);

/* - змініть кожному елементу колір фону на червоний
- змініть кожному елементу колір тексту на синій*/
//  let contentP = document.getElementsByTagName('div');
//  let rulesD= document.getElementsByTagName('p');
//  let fcRules = document.getElementsByClassName('fc_rules');

//  let arr=[contentP,rulesD,fcRules];
//  console.log(arr);

//  for (j=0;j<arr.length;j++) {
//     let t=arr[j];
//     for (let i=0;i<t.length;i++) {
//         t[i].style.backgroundColor ='red';
//         t[i].style.color ='white';    
//     }
//  }


/* - отримати весь список класів елемента з id=rules і вивести їх в console.log*/ 
// let rulesD = document.getElementById('rules');
// console.log(rulesD.classList);

/* - отримати всі елементи з класом fc_rules*/ 
// let fcClass = document.getElementsByClassName('fc_rules')
// console.log(fcClass);

/* - поміняти колір тексту у всіх елементів fc_rules на червоний*/ 
// let fcClass = document.getElementsByClassName('fc_rules')
// for (let i=0;i<fcClass.length;i++) {
//      fcClass[i].style.color ='red';    
// }
