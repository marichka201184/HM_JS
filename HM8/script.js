// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, 
//введенный текст остался в textarea.

// let text=document.createElement('textarea');
// text.setAttribute('id', 'myId');

// document.body.appendChild(text);

// let but = document.createElement('button');
//     but.innerText = 'SAVE';
// document.body.appendChild(but);

//    but.onclick = (ev) => {
// let hist=document.getElementById('myId').value
// localStorage.setItem('hist',hist);

//    }
// let newValue=localStorage.getItem('hist');
// text.value=newValue;
// console.log(localStorage)

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let forma=document.createElement('form');
// forma.setAttribute('id', 'myId');
// let inp1 = document.createElement('input');    
// inp1.setAttribute('id', 'myId2');
// let inp2 = document.createElement('input');    
// inp2.setAttribute('id', 'myId3');
// let div1=document.createElement('div');
// let text=document.createElement('textarea');
// text.setAttribute('id', 'myId1');
// let div2=document.createElement('div')
// let check1=document.createElement('input')
// check1.type='checkbox' 
// check1.setAttribute('id', 'check1');
// let check2=document.createElement('input')
// check2.type='checkbox' 
// check2.setAttribute('id', 'check2');
// let div3=document.createElement('div')
// let rad1=document.createElement('input')
// rad1.type='radio' 
// let rad2=document.createElement('input')
// rad2.type='radio' 
// let p1=document.createElement('p');
// p1.innerText='Введте имя и фамилию'
// let p2=document.createElement('p');
// p2.innerText='Ваш пол'
// let p3=document.createElement('p');
// p3.innerText=`М/Ж`
// let p4=document.createElement('p');
// p4.innerText='Семья?'
// let p5=document.createElement('p');
// p5.innerText=`ДА/НЕТ`
// let p6=document.createElement('p');
// p6.innerText=`Примечание`

// document.body.appendChild(forma);
// forma.appendChild(p1)
// forma.appendChild(inp1);
// forma.appendChild(inp2);
// forma.appendChild(div2)
// div2.appendChild(p2)
// div2.appendChild(p3)
// div2.appendChild(check1)
// div2.appendChild(check2)
// forma.appendChild(div3)
// div3.appendChild(p4)
// div3.appendChild(p5)
// div3.appendChild(rad1)
// div3.appendChild(rad2)
// forma.appendChild(div1)
// div1.appendChild(p6)
// div1.appendChild(text);

//    forma.onclick = (ev) => {
// let hist_text=document.getElementById('myId1').value
// localStorage.setItem('hist',hist_text);
// let name=document.getElementById('myId2').value
// localStorage.setItem('name',name);
// let surname=document.getElementById('myId3').value
// localStorage.setItem('surname',surname);
// let ch1=check1.checked
// localStorage.setItem('ch1',ch1);
// let ch2=check2.checked
// localStorage.setItem('ch2',ch2);
// let rd1=rad1.checked
// localStorage.setItem('rd1',rd1);
// let rd2=rad2.checked
// localStorage.setItem('rd2',rd2);
//    }

// let newText=localStorage.getItem('hist');
// text.value=newText;   
// let newName=localStorage.getItem('name');
// inp1.value=newName;  
// let newSName=localStorage.getItem('surname');
// inp2.value=newSName; 
// let newCh1=JSON.parse(localStorage.getItem('ch1'));
// check1.checked=newCh1;  
// let newCh2=JSON.parse(localStorage.getItem('ch2'));
// check2.checked=newCh2; 
// let newRd1=JSON.parse(localStorage.getItem('rd1'));
// rad1.checked=newRd1;  
// let newRd2=JSON.parse(localStorage.getItem('rd2'));
// rad2.checked=newRd2; 

// rad1.onclick = (ev) => {
//     rad1.checked=true
//     if (rad1.checked===true) {
//         rad2.checked=false  
//     }
   
// }

// rad2.onclick = (ev) => {
//     rad2.checked=true
//     if (rad2.checked===true) {
//         rad1.checked=false  
//     }
   
// }

// check1.onclick = (ev) => {
//     check1.checked=true
//     if (check1.checked===true) {        
//         check2.checked=false  
//     }
   
// }

// check2.onclick = (ev) => {
//     check2.checked=true
//     if (check2.checked===true) {
//         check1.checked=false  
//     }
   
// }




// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), 
//затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории 
//(не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let div=document.createElement('div')
// document.body.appendChild(div);

// let but2 = document.createElement('button');
//     but2.innerText = 'DOWN';
// div.appendChild(but2);

// let text=document.createElement('textarea');
// text.setAttribute('id', 'myId');
// document.body.appendChild(text);

// let but = document.createElement('button');
//     but.innerText = 'SAVE';
// document.body.appendChild(but);

//     but.onclick = (ev) => {
//     let numberHist=parseInt(localStorage.getItem('i')) ;    
//     let i=numberHist
//     i++  
//     localStorage.setItem(`i`,i)
//     let hist1=document.getElementById('myId').value
//     localStorage.setItem(`hist${i}`,hist1);
//         }

// let newI=localStorage.getItem(`i`);
// let newValue=localStorage.getItem(`hist${newI}`)
// text.value=newValue;

// localStorage.setItem(`g`,newI)
// but2.onclick = (ev) => {
//     let downI=parseInt(localStorage.getItem(`g`)) ;
//     let g=downI
//     g--
//     localStorage.setItem(`g`,g)
//     let newValue=localStorage.getItem(`hist${g}`)
//     text.value=newValue;
//            }


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. 
//При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования,
// которые уже заполнены данными объекта

let CSV=document.createElement('div')
let forma=document.createElement('form');
forma.setAttribute('id', 'myForm');
//FIO
let FIO=document.createElement('div');
let inp1 = document.createElement('input');    
inp1.setAttribute('id', 'name');
let inp2 = document.createElement('input');    
inp2.setAttribute('id', 'surname');
//Mail
let MAIL=document.createElement('div');
let inp3 = document.createElement('input');    
inp3.setAttribute('id', 'mail');
//Company
let COMP=document.createElement('div');
let inp4 = document.createElement('input');    
inp4.setAttribute('id', 'comp');
//Department
let DEPT=document.createElement('div');
let inp5 = document.createElement('input');    
inp5.setAttribute('id', 'dept');
//Birthday
let BRTH=document.createElement('div');
let inp6 = document.createElement('input');    
inp6.setAttribute('id', 'brth');


let p1=document.createElement('p');
p1.innerText='FIO'
let p2=document.createElement('p');
p2.innerText='Mail'
let p3=document.createElement('p');
p3.innerText='Company'
let p4=document.createElement('p');
p4.innerText='Department'
let p5=document.createElement('p');
p5.innerText=`Birthday`




document.body.appendChild(CSV);
CSV.appendChild(forma);


forma.appendChild(FIO);
FIO.appendChild(p1);
FIO.appendChild(inp1);
FIO.appendChild(inp2);

forma.appendChild(MAIL);
MAIL.appendChild(p2);
MAIL.appendChild(inp3);

forma.appendChild(COMP);
COMP.appendChild(p3);
COMP.appendChild(inp4);

forma.appendChild(DEPT);
DEPT.appendChild(p4);
DEPT.appendChild(inp5);

forma.appendChild(BRTH);
BRTH.appendChild(p5);
BRTH.appendChild(inp6);

let list=document.createElement('div')
         CSV.appendChild(list);
         
         

let but = document.createElement('button');
    but.innerText = 'SAVE';
forma.appendChild(but);

let users=[{id:1,name:'TEST'}];
//localStorage.setItem('users',JSON.stringify(users)); 

but.onclick = (ev) => {  
   
   let id=users.length+1
   localStorage.setItem('id',id);       
   let name=document.getElementById('name').value
   localStorage.setItem('name',name);
   let surname=document.getElementById('surname').value
   localStorage.setItem('surname',surname);
   let mail=document.getElementById('mail').value
   localStorage.setItem('mail',mail);
   let comp=document.getElementById('comp').value
   localStorage.setItem('comp',comp);
   let dept=document.getElementById('dept').value
   localStorage.setItem('dept',dept);
   let brth=document.getElementById('brth').value
   localStorage.setItem('brth',brth);
   users.push({id:id,name:`${name}`,surname:`${surname}`,mail:`${mail}`,comp:`${comp}`,
dept:`${dept}`,brth:`${brth}`});
   console.log(users)
   localStorage.setItem('users',JSON.stringify(users));  
   
  }
    
  function sv() {  
    users= []    
    users = JSON.parse(localStorage.getItem("users") || "[]");
  

    for (let i=0;i<users.length;i++) {
             
        const p = document.createElement('p');
        p.innerHTML=`Id:${users[i].id} Name:${users[i].name} Surname:${users[i].surname} Mail:${users[i].mail}
        Company:${users[i].comp} Department:${users[i].dept} Birthday:${users[i].brth}`
        list.appendChild(p)
 
        let but1 = document.createElement('button');
        but1.innerText = 'EDIT';
        but1.id=`but1${i}`
        p.appendChild(but1);
 
        let but2 = document.createElement('button');
        but2.innerText = 'DELETE';
        p.appendChild(but2);
        but2.id=`but2${i}` 
 
        but2.onclick = () => {
            let m=parseInt(users[i].id) -1
            console.log(m)
            users.splice(m, 1);
            localStorage.setItem('users', JSON.stringify(users))
            list.innerHTML=''
            sv()
    
    
                   }

        but1.onclick = () => {
            let forma1=document.createElement('form');
            forma1.setAttribute('id', 'myForm1');
            //forma1.style.display='none'
            CSV.appendChild(forma1);
            
            //FIO
            let FIO0=document.createElement('div');
            let inp10 = document.createElement('input');    
            inp10.setAttribute('id', 'name0');
            let inp20 = document.createElement('input');    
            inp20.setAttribute('id', 'surname0');
            //Mail
            let MAIL0=document.createElement('div');
            let inp30 = document.createElement('input');    
            inp30.setAttribute('id', 'mail0');
            //Company
            let COMP0=document.createElement('div');
            let inp40 = document.createElement('input');    
            inp40.setAttribute('id', 'comp0');
            //Department
            let DEPT0=document.createElement('div');
            let inp50 = document.createElement('input');    
            inp50.setAttribute('id', 'dept0');
            //Birthday
            let BRTH0=document.createElement('div');
            let inp60 = document.createElement('input');    
            inp60.setAttribute('id', 'brth0');
            
            
            let p10=document.createElement('p');
            p10.innerText='FIO'
            let p20=document.createElement('p');
            p20.innerText='Mail'
            let p30=document.createElement('p');
            p30.innerText='Company'
            let p40=document.createElement('p');
            p40.innerText='Department'
            let p50=document.createElement('p');
            p50.innerText=`Birthday`
            
            
                     forma1.appendChild(FIO0);
                     FIO0.appendChild(p10);
                     FIO0.appendChild(inp10);
                     FIO0.appendChild(inp20);
                     
                     forma1.appendChild(MAIL0);
                     MAIL0.appendChild(p20);
                     MAIL0.appendChild(inp30);
                     
                     forma1.appendChild(COMP0);
                     COMP0.appendChild(p30);
                     COMP0.appendChild(inp40);
                     
                     forma1.appendChild(DEPT0);
                     DEPT0.appendChild(p40);
                     DEPT0.appendChild(inp50);
                     
                     forma1.appendChild(BRTH0);
                     BRTH0.appendChild(p50);
                     BRTH0.appendChild(inp60);
         
                     let but10 = document.createElement('button');
                     but10.innerText = 'SAVE';
                     forma1.appendChild(but10);
            forma1.style.display='block';
            inp10.value=users[i].name;
            inp20.value=users[i].surname;
            inp30.value=users[i].mail;
            inp40.value=users[i].comp;
            inp50.value=users[i].dept;
            inp60.value=users[i].brth;

            but10.onclick = () => {
            let nameNew=document.getElementById('name0').value
            let surnameNew=document.getElementById('surname0').value
            let mailNew=document.getElementById('mail0').value
            let compNew=document.getElementById('comp0').value
            let deptNew=document.getElementById('dept0').value
            let brthNew=document.getElementById('brth0').value
            let idNew=parseInt(users[i].id) 

            let m=parseInt(users[i].id) -1
            users.splice(m, 1);

            users.push({id:idNew,name:`${nameNew}`,surname:`${surnameNew}`,mail:`${mailNew}`,comp:`${compNew}`,
            dept:`${deptNew}`,brth:`${brthNew}`});
            
            localStorage.setItem('users', JSON.stringify(users)) 
            
        }
                   
                        
                                    }
                   
 
     }     


   }

   
   sv() 

   