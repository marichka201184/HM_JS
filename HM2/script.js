/*--створити масив та вивести його в консоль:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. 
Вивести в консоль */

// let numbers = [5,10,-5,0,55];
// console.log(numbers);

// let strs = ['o','t','t','f','f'];
// console.log(strs);

// let comb = ['o',5,true,'f',false];
// console.log(comb);

// let new_m = [];

// new_m[0]=2;
// new_m[1]='str';
// new_m[2]=false;
//  console.log(new_m);

 /* - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині */

// let products=['apple','milk','meat','salmon','fish','orange','water','wine','ice cr','strawberry']
//  for (let i = 0; i < products.length; i++) {
//       document.write(`It is a product ${products[i]}`);
//        document.write('<br>')
//  };

  /* - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині */

//  let productsNum=['apple','milk','meat','salmon','fish','orange','water','wine','ice cr','strawberry']
// for (let i = 0; i < productsNum.length; i++) {
//      document.write(`It is a product number ${i}`);
//       document.write('<br>')
// };

/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
// let names = ['D', 'I', 'V', 'H', 'K', 'S', 'E', 'R','E','W','A','X','C','O','P','F','G','L','S','B'];

// let i = 0;

// while (i < names.length) {
//   document.write(`<h1> ${names[i]} </h1>`)
//   i+=2; 
// };

/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/
// let namesNum = ['D', 'I', 'V', 'H', 'K', 'S', 'E', 'R','E','W','A','X','C','O','P','F','G','L','S','B'];

// let i = 0;

// while (i < namesNum.length) {
//    document.write(`<h1>It is a number of name ${i}</h1>`)
//   i+=1; 
// }

/* Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі. */

// let numbers=[1,3,5,7,9,11,13,15,17,19];

// for (let i=0;i< numbers.length;i++) {
//     console.log(numbers[i]);
// };


/* - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/

// let str=['1','3','5','7','9','11','13','15','17','19'];

// for (let i=0;i< str.length;i++) {
//     console.log(str[i]);
// };


/*Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі. */

// let str=[1,'3','5',true,'9',false,'13',-1,null,'19'];

// for (let i=0;i< str.length;i++) {
//     console.log(str[i]);
// };

/* Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи */

// let str=[1,'3','5',true,'9',false,'13',-1,null,'19'];

// for (let i=0;i<str.length;i++) {
// let t=typeof str[i];
// if (t==='boolean') {
//     console.log(str[i])
// }
// }

/* - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи */

// let str1=[1,'3','5',true,'9',false,'13',-1,null,'19'];

// for (let i=0;i<str1.length;i++) {
// let t=typeof str1[i];
// if (t==='number') {
//     console.log(str1[i])
// }
// }

/* - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи */

// let str2=[1,'3','5',true,'9',false,'13',-1,null,'19'];

// for (let i=0;i<str2.length;i++) {
// let t=typeof str2[i];
// if (t==='string') {
//     console.log(str2[i])
// }
// }


/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі. */

// let arr=[]

// arr[0]=2;
// arr[1]='shd';
// arr[2]=true;
// arr[3]=-66;
// arr[4]=7;
// arr[5]='dseu';
// arr[6]=false;
// arr[7]='erp';
// arr[8]=null;
// arr[9]=undefined;

// let i=0;
// while (i<arr.length) {
// console.log(arr[i]);
// i+=1
// }


/*- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 */



//  for ( let i=0;i<10;i++) {
//      console.log(i);
//      document.write(i);
//      document.write('<br>');
//  }

 /*- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 */



// for ( let i=0;i<100;i++) {
//     console.log(i);
//     document.write(i);
//     document.write('<br>');
// }

/*- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
 */



// for ( let i=0;i<100;i+=2) {
//     console.log(i);
//     document.write(i);
//     document.write('<br>');
// }

/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
 */



// for ( let i=0;i<100;i++) {
//     if (i%2===0) {
//     console.log(i);
//     document.write(i);
//     document.write('<br>');}
// }

/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
 */



// for ( let i=0;i<100;i++) {
//     if (i%2!==0) {
//     console.log(i);
//     document.write(i);
//     document.write('<br>');}
// }

/* Додатково
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
*/

// let arr=['a', 'b', 'c'];

// for (let i=0;i<arr.length;i++) {
// document.write(arr[i]);

// }
// document.write('<br>');

// let arr1=['a', 'b', 'c'];
// let i=0;
// while (i<arr1.length) {
//     document.write(arr1[i]);
   
// i+=1
// }
// document.write('<br>');

// let arr2=['a', 'b', 'c'];
// for (const ar of arr2) {
//   document.write(ar);
  
 
// }

/* - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)*/

// 

//     for (let m=0;m<2;m++) {
//        for (let s=0;s<60;s++) {
       
//         let sm=m.toString();
//         let ss=s.toString();
        
//         if (sm.length===1) {
//             sm='0'+sm
//         }
//         else {
//             sm=m
//         }
//         if (ss.length===1) {
//             ss='0'+ss
//         }
//         else {
//             ss=s
//         }
//         console.log(sm+':'+ss);
//     }
// }
// ;


// for (let h=0;h<3;h++)
// {
//     for (let m=0;m<60;m++) {
//     if (h===2&&m===20) {
//         break;
//     }
//     for (let s=0;s<60;s++) {
//         let sh=h.toString();
//         let sm=m.toString();
//         let ss=s.toString();
//         if (sh.length===1) {
//             sh='0'+sh
//         }
//         else {
//             sh=h
//         }
//         if (sm.length===1) {
//             sm='0'+sm
//         }
//         else {
//             sm=m
//         }
//         if (ss.length===1) {
//             ss='0'+ss
//         }
//         else {
//             ss=s
//         }
//         console.log(sh+':'+sm+':'+ss);
//     }
// }
// };


/*
- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.*/

// let arr=['a', 'b', 'c'];

// for (let j=1;j<4;j++) {
//         arr.push(j);
//         }
       
//         console.log(arr);

/*
- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].*/

// let arr=[1,2,3];
// let new_arr=[];

// while (arr.length) {
    
//      new_arr.unshift(arr.shift());

// }
// console.log(new_arr);     
        
/*
- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.*/

// let arr=[1,2,3];
// let l=arr.length-1;
// let n=arr[l]+1;

// for (let j=n;j<n+3;j++) {
//         arr.push(j);
//         }
       
//         console.log(arr); 

 /*
- - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.*/

// let arr=[1,2,3];
// let arr1=[4,5,6];
// let new_arr=[];


//     while (arr1.length) {
//                 new_arr.unshift(arr1.shift());
//             }
           
//     for (let i=0;i<new_arr.length;i++) {          
//     arr.unshift(new_arr[i]);
// }
//        console.log(arr);


/*
- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()*/

// let arr=['js', 'css', 'jq'];

//        console.log(arr.shift());

/*
- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()*/

// let arr=['js', 'css', 'jq'];

//        console.log(arr.pop());

/*
- - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].*/

// let arr=[1, 2, 3, 4, 5];

//        console.log(arr.slice(3,5));


       /*
Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].*/

// let arr=[1, 2, 3, 4, 5];

// console.log(arr.slice(0,2));

       /*
- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].*/

// let arr=[1, 2, 3, 4, 5];

// console.log(arr.splice(1,2));

// console.log(arr);

/*
- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/

// let arr=[1, 2, 3, 4, 5];

// arr.splice(3,0,'a', 'b', 'c');

// console.log(arr);

/*
- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

// let arr=[1, 2, 3, 4, 5];

// arr.splice(1,0, 'a', 'b');
// arr.splice(6,0, 'c');
// arr.splice(8,0, 'e');

// console.log(arr);

/*
- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.*/

// let arr=[1, 2, 3, 4, 5,11,23,45,66,78];

// for (let i=0;i<arr.length;i++) {
//     if (arr[i]%2===0) {
//         console.log(arr[i]);
//     }
// }

/*
- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший*/

//  let arr=[1, 2, 3, 4, 5,11,23,45,66,78];
//  let new_arr=[];

//  for (let i=0;i<arr.length;i++) {
//      new_arr.push(arr[i]);
//  }
// console.log(new_arr);

/*
- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.*/

// let arr=[1, 2, 3, 4, 5,11,23,45,66,78];
// let new_arr=[];

// for (let i=0;i<arr.length;i++) {
//     let j=i;
//     new_arr[j]=arr[i];
 
//     }
//     console.log(new_arr);


/*
зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
*/

//  let arr=[2,17,13,6,22,31,45,66,100,-18];

//  let new_arr=[];

/*1. перебрати його циклом while*/
//  let i=0
//  while (i<arr.length) {
//     console.log(arr[i]);
//     i++
//  }

/* 2. перебрати його циклом for*/

// for (let i=0;i<arr.length;i++) {
//     console.log(arr[i]);
// }

/* 3. перебрати циклом while та вивести  числа тільки з непарним індексом*/
// while (i<arr.length) {
//     if (i%2!==0) {
//         console.log(arr[i]);
//     }
//         i++
//  }
/*4. перебрати циклом for та вивести  числа тільки з непарним індексом */
// for (let i=0;i<arr.length;i++) {
//     if (i%2!==0) {
//           console.log(arr[i]);
//              }
//             }         
/*5. перебрати циклом while та вивести  числа тільки парні  значення*/
// while (i<arr.length) {
//     if (arr[i]%2===0) {
//         console.log(arr[i]);
//     }
//         i++
//  }
/*6. перебрати циклом for та вивести  числа тільки парні  значення*/
// for (let i=0;i<arr.length;i++) {
//     if (arr[i]%2===0) {
//           console.log(arr[i]);
//              }
//             } 
/*7. замінити кожне число кратне 3 на слово "okten"*/
// for (let i=0;i<arr.length;i++) {
//     if (arr[i]%3===0) {
//           console.log('okten');
//              }
//     else (console.log(arr[i]))         
//             } 
/*8. вивести масив в зворотньому порядку. */
// let new_arr=[];

// while (arr.length) {
    
//      new_arr.unshift(arr.shift());

// }
// console.log(new_arr);     

//********************************************************
//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) 
//  let arr=[2,17,13,6,22,31,45,66,100,-18];
//  let new_arr=[];

/*1*/
// let i=arr.length-1   
//  while (i>=0) {
//         console.log(arr[i]);
//     i--
//  }

/*2*/
// for (let i=arr.length-1 ;i>=0;i--) {
//     console.log(arr[i]);
// }

/*3*/
// let i=arr.length-1  
// while (i>=0) {
//     if (i%2!==0) {
//         console.log(arr[i]);
//     }
//         i--
//  }

/*4*/
// for (let i=arr.length-1;i>=0;i--) {
//     if (i%2!==0) {
//           console.log(arr[i]);
//              }
//             }         

/*5*/
// let i=arr.length-1  
// while (i>=0) {
//     if (arr[i]%2===0) {
//         console.log(arr[i]);
//     }
//         i--
//   }

/*6*/
// for (let i=arr.length-1 ;i>=0;i--) {
//     if (arr[i]%2===0) {
//           console.log(arr[i]);
//              }
//             } 

/*7*/
// for (let i=arr.length-1 ;i>=0;i--) {
//     if (arr[i]%3===0) {
//           console.log('okten');
//              }
//     else (console.log(arr[i]))         
//             } 

/*10
 створити пустий масив та :
- заповнити його 50 парними числами за допомоги циклу.
- заповнити його 50 непарними числами за допомоги циклу.*/

// let arr=[];

// let max=50;
// let min=1;


// for (let i=0;i<50;i++) {
//     arr[i]=Math.round(Math.random() * (max - min) + min) ;
//        if (arr[i]%2===0) {
//         console.log(arr[i]);
//     }
   
// }

// for (let i=0;i<50;i++) {
//     arr[i]=Math.round(Math.random() * (max - min) + min) ;
//        if (arr[i]%2!==0) {
//         console.log(arr[i]);
//     }
   
// }
/*3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
 диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!) */

// let arr=[];

// let max=8;
// let min=732;


// for (let i=0;i<10;i++) {
//     arr[i]=Math.round(Math.random() * (max - min) + min) ;
       
//         console.log(arr[i]);
   
// }

/*
 2. вывести на консоль  каждый третий елемент */
// let arr=[];

// let max=8;
// let min=732;


// for (let i=0;i<10;i++) {
//     arr[i]=Math.round(Math.random() * (max - min) + min) ;
       
//         console.log(arr[i]);
// }

// let new_arr=arr;
// for (let i=2;i<arr.length;i+=2) {
//     console.log(new_arr[i]);  
// }

/* 3. вывести на консоль  каждый третий елемент
 но при условии что его значение является парным.*/

 /*  4. вывести на консоль  каждый третий елемент
 но при условии что он имеет парное значение и
 записать их в другой массив.*/

 // let arr=[];

// let max=8;
// let min=732;


// for (let i=0;i<10;i++) {
//     arr[i]=Math.round(Math.random() * (max - min) + min) ;
       
//         console.log(arr[i]);
// }


// let new_arr1=arr;
// for (let i=2;i<arr.length;i+=2) {
//     if (new_arr1[i]%2===0) {
//     console.log(new_arr1[i]); }
// }

/*  5. Вывести каждый елемент массива у которого соседний с права элемент - парный*/

// let arr=[];

// let max=8;
// let min=732;


// for (let i=0;i<10;i++) {
//     arr[i]=Math.round(Math.random() * (max - min) + min) ;
       
//         console.log(arr[i]);
// }


//  let new_arr2=arr;
//  for (let i=0;i<arr.length;i++) {
//      let j=i+1
//      if (new_arr2[j]%2===0) {
//      console.log(new_arr2[i]); }
     
//  }

/*5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек. */

// let arr=[100,250,50,168,120,345,188];
// let sum=0;
// let avg_sum=0;

// for (let i=0;i<arr.length;i++) {
    
//     sum=sum+arr[i];
// }
// avg_sum=sum/arr.length;
// console.log(avg_sum);

/*3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив. */
// let arr=[];
// let new_arr=[];

// let max=8;
// let min=732;


// for (let i=0;i<10;i++) {
//     arr[i]=Math.round(Math.random() * (max - min) + min) ;
//         new_arr=arr[i]*5;
//         console.log(new_arr);
// }

/*
4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
 додати його в інший масив.
 */

//  let arr=[true,false,5,6,7,'s','ehf'];
//  let new_arr=[];

//  for (let i=0;i<arr.length;i++) {
//      if (typeof arr[i]==='number') {
//        new_arr.unshift(arr[i]);
//      }
     
//  }
//  console.log(new_arr);