
/*
Взяти файл template_2.html та працювати в ньому
- Напишіть код, який :
 */

/* -- змінює колір тексту елемнту з ід main_header на будь-який інший*/
// let main_header = document.getElementById('main_header');
// main_header.style.color='red';

/* -- робить шириниу елементу ul 400 пікселів*/
// let ulW=document.getElementsByTagName('ul');
// ulW[0].style.width = '400px';


/* -- робить шириниу всіх елементів з класом linkList шириною 50%*/
// let linkListW=document.getElementsByClassName('linkList');

// for (let i=0;i<linkListW.length;i++) {
//     linkListW[i].style.width = '50%'; 
// }

/* -- отримує текст який зберігається в елементі з класом listElement2*/

// let listEl = document.getElementsByClassName('listElement2');

// for (let i=0;i<listEl.length;i++) {
//     console.log(listEl[i].textContent);    
// }
// ;
/* -- отримує всі елементи li та змінює ім колір фону на сірий*/

// let liE=document.getElementsByTagName('li');

// for (let i=0;i<liE.length;i++) {
//     liE[i].style.backgroundColor ='grey';
// }

/* -- отримує всі елементи 'a' та додає їм клас anchor*/

// let elA=document.getElementsByTagName('a');

// for (let i=0;i<elA.length;i++) {
//     elA[i].classList.add('anchor');
// }

/* -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
 змінює йому розмір тексту на 40 пікселів
*/

// let elA=document.getElementsByTagName('a');

// for (let i=0;i<elA.length;i++) {
//    
//     if (elA[i].textContent==='link3') {
//         elA[i].style.fontSize = '40px';
//     }
  
// }

/* -- отримує всі елементи 'a' та додає їм клас element_XXX. 
Де XXX - текстовий контент елементу a
*/

// let elA=document.getElementsByTagName('a');

// for (let i=0;i<elA.length;i++) {
//     let w=elA[i].textContent;
//     elA[i].classList.add(`element_${w}`);
// }

/* -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()*/

// let subC=document.getElementsByClassName('sub-header');
// let color=prompt('Color');
// for (let i=0;i<subC.length;i++) {    
//     subC[i].style.backgroundColor =color;
// }

/* -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку 
якщо текст елемнту = content 2 segment . Колір отримати з prompt()
*/

// let subC=document.getElementsByClassName('sub-header');
// let color=prompt('Color');
// for (let i=0;i<subC.length;i++) {    
//         if (subC[i].textContent==='content 2 segment') {
//         subC[i].style.color = color;
//     }
  
// }

/* -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
*/
// let subC=document.getElementsByClassName('content_1');

// for (let i=0;i<subC.length;i++) {    
//     subC[i].textContent = prompt('Enter_text') ;
    
//         }
      
/* -- отримати елементи p та змінити їм paddin на довільне значення
*/

// let arrP=document.getElementsByTagName('p');

// for (let i=0;i<arrP.length;i++) {    
//     arrP[i].style.padding='5px'
//         }

/* -- отримати елементи з класом text2 та змінити їм текст на довільне значення
*/

// let subC=document.getElementsByClassName('text2');

// for (let i=0;i<subC.length;i++) {    
//     subC[i].textContent = 'Enter_text' ;
    
//         }