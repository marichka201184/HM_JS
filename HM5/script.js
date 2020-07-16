// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }

// function Tags(titleOfTag, action,attrs) {
//       this.titleOfTag = titleOfTag;
//       this.action = action;
//       this.attrs = attrs;

//        }
    
//     let a = new Tags('Тег <a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',
//      [{titleOfAttr:'rel',
//       actionOfAttr:'Отношения между ссылаемым и текущим документами.'},
//       {titleOfAttr:'rev',
//       actionOfAttr:'Отношения между текущим и ссылаемым документами.'},
//       {titleOfAttr:'shape',
//       actionOfAttr:'Задает форму активной области ссылки для изображений'}]);
//     let div = new Tags('Тег <div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
//     [{titleOfAttr:'align',
//     actionOfAttr:'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr:'title',
//     actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}
//     ]);
//     let h1 = new Tags('Тег <h1>', 'Показывают относительную важность секции, расположенной после заголовка',
//     [{titleOfAttr:'align',
//     actionOfAttr:'Определяет выравнивание заголовка.'}]);
//     let span = new Tags('Тег <span>', 'Предназначен для определения строчных элементов документа. ',
//     [{titleOfAttr:'dir',
//     actionOfAttr:'Задает направление и отображение текста — слева направо или справа налево'},
//     {titleOfAttr:'id',
//     actionOfAttr:'Указывает имя стилевого идентификатора.'},
//     {titleOfAttr:'style',
//     actionOfAttr:'Применяется для определения стиля элемента с помощью правил CSS'}]);
//     let input = new Tags('Тег <input>', 'Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [{titleOfAttr:'align',
//     actionOfAttr:'Определяет выравнивание изображения.'},
//     {titleOfAttr:'alt',
//     actionOfAttr:'Альтернативный текст для кнопки с изображением'},
//     {titleOfAttr:'form',
//     actionOfAttr:'Связывает поле с формой по её идентификатору.'}]);
//     let form = new Tags('Тег <form>', 'Устанавливает форму на веб-странице.',
//     [{titleOfAttr:'action',
//     actionOfAttr:'Адрес программы или документа, который обрабатывает данные формы.'},
//     {titleOfAttr:'name',
//     actionOfAttr:'Имя формы.'},
//     {titleOfAttr:'target',
//     actionOfAttr:'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'}]);
//     let option = new Tags('Тег <option>', 'Oпределяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//     [{titleOfAttr:'label',
//     actionOfAttr:'Указание метки пункта списка.'},
//     {titleOfAttr:'value',
//     actionOfAttr:'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}]);
//     let select = new Tags('Тег <select>', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка',
//     [{titleOfAttr:'form',
//     actionOfAttr:'Связывает список с формой.'},
//     {titleOfAttr:'size',
//     actionOfAttr:'Количество отображаемых строк списка.'}]);

//     console.log(div);
//     console.log(h1);
//     console.log(span);
//     console.log(input);
//     console.log(form);
//     console.log(option);
//     console.log(select);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і доавляет його в поточний об'єкт car
// ==============================================

// let Car = {
//       model :'vaz',
//       producer : 'vaz',
//       year : 2008,
//       speed : 100,
//       power : 100,

//     drive:function() {
//       console.log(`їдемо зі швидкістю ${this.speed} на годину`)
//     },
  
//     info:function() {
//       console.log(this);
//     },
  
//     increaseMaxSpeed:function(newSpeed) {
//         this.speed+=newSpeed;
//     },

//     changeYear:function(newValue) {
//         this.year=newValue;
//     },
//     addDriver:function(driver) {
//        this.driver=driver
//        }
//     };

// Car.drive();
// Car.info();
// Car.increaseMaxSpeed(100);
// Car.changeYear(2010);
// Car.addDriver(['Ivan',1987]);


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, 
//виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car (model,producer,year,speed,power) {
//       this.model = model;
//       this.producer = producer;
//       this.year = year;
//       this.speed = speed;
//       this.power = power;
    
  
//     this.drive=function() {
//       console.log(`їдемо зі швидкістю ${this.speed} на годину`)
//     }
  
//     this.info=function() {
//       console.log(this);
//     }
  
//     this.increaseMaxSpeed=function(newSpeed) {
//         this.speed+=newSpeed;
//     }

//     this.changeYear=function(newValue) {
//         this.year=newValue;
//     }
//     this.addDriver=function(driver) {
//        this.driver=driver
//        };
//     };
  


// let vaz=new Car('vaz','vaz',2008,100,200);
// let mazda=new Car('mazda','mazda',2020,200,300);

// console.log(vaz);
// console.log(mazda);

// vaz.drive();
// vaz.info();
// vaz.increaseMaxSpeed(100);
// vaz.changeYear(2010);
// vaz.addDriver(['Ivan',1987]);

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor(model,producer,year,speed,power) {
//       this.model = model;
//       this.producer = producer;
//       this.year = year;
//       this.speed = speed;
//       this.power = power;
//     }
  
//     drive() {
//       console.log(`їдемо зі швидкістю ${this.speed} на годину`)
//     }
  
//     info() {
//       console.log(this);
//     }
  
//     increaseMaxSpeed (newSpeed) {
//         this.speed+=newSpeed;
//     }

//     changeYear (newValue) {
//         this.year=newValue;
//     }
//     addDriver (driver) {
//        this.driver=driver
//        };
//     };
  


// let vaz=new Car('vaz','vaz',2008,100,200);
// let mazda=new Car('mazda','mazda',2020,200,300);

// console.log(vaz);
// console.log(mazda);

// vaz.drive();
// vaz.info();
// vaz.increaseMaxSpeed(100);
// vaz.changeYear(2010);
// vaz.addDriver(['Ivan',1987]);

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella {
//         constructor(name,year,foot_size) {
//           this.name = name;
//           this.year = year;
//           this.foot_size = foot_size;
          
//         }
//           }

// let Num1=new Cinderella('Ira',1999,37);
// let Num2=new Cinderella('Olya',1990,38);
// let Num3=new Cinderella('Masha',1989,37);
// let Num4=new Cinderella('Natasha',1991,39);
// let Num5=new Cinderella('Sveta',1992,36);
// let Num6=new Cinderella('Inna',1988,35);
// let Num7=new Cinderella('Sofia',1987,40);
// let Num8=new Cinderella('Katya',1989,38);
// let Num9=new Cinderella('Luda',1993,39);
// let Num10=new Cinderella('Galya',1994,36.5); 

// let arr=[Num1,Num2,Num3,Num4,Num5,Num6,Num7,Num8,Num9,Num10];
// console.log(arr);

// class Prince extends Cinderella {
//     constructor(name,year,foot_size) {
//       super(name,year,foot_size);
//           }
//         };
// let prince=new Prince('Katya',1989,38);
// console.log(prince);

// for (let i=0;i<arr.length;i++) {
//     if (arr[i].name===prince.name&&arr[i].year===prince.year&&arr[i].foot_size===prince.foot_size)
//         {
//             console.log(`${Object.values(arr[i])}  це моя наречена`);
//             break;
    
//         }
//     }



// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік,
// туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// */

function Cinderella (name,year,foot_size) {
      this.name = name;
      this.year = year;
      this.foot_size = foot_size;
      
    }      ;

let Num1=new Cinderella('Ira',1999,37);
let Num2=new Cinderella('Olya',1990,38);
let Num3=new Cinderella('Masha',1989,37);
let Num4=new Cinderella('Natasha',1991,39);
let Num5=new Cinderella('Sveta',1992,36);
let Num6=new Cinderella('Inna',1988,35);
let Num7=new Cinderella('Sofia',1987,40);
let Num8=new Cinderella('Katya',1989,38);
let Num9=new Cinderella('Luda',1993,39);
let Num10=new Cinderella('Galya',1994,36.5); 

let arr=[Num1,Num2,Num3,Num4,Num5,Num6,Num7,Num8,Num9,Num10];
console.log(arr);

function Prince (name,year,foot_size) {
    this.name = name;
    this.year = year;
    this.foot_size = foot_size;
    this.poisk=function(arr) {
        for (let i=0;i<arr.length;i++) {
            if (arr[i].name===this.name&&arr[i].year===this.year&&arr[i].foot_size===this.foot_size)
                {
                    console.log(`${Object.values(arr[i])}  це моя наречена`);
                    break;
            
                }
            }
    }
}
let prince=new Prince('Katya',1989,38);
console.log(prince);

prince.poisk(arr);
