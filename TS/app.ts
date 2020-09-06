// Клас людина:
//   поля:
//     вага,зріст

class Person {
    public weight: number;
    public height: number;
  
    constructor(weight: number, height: number) {
      this.weight = weight;
      this.height = height;
    }
  }
// Клас депутат(наслідується від людини):
//   поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
//   методи:
//     дати хабаря(зробити відповідні перевірки...
//       якщо депутат не хабарник то щоб він відмовився,
//       або ж якщо сума хабаря надто велика то щоб він вагався
//       чи брати чи ні)

enum Say {
    NO,
    YES,
    I_need_to_think,
}

class Deputy extends Person {
    surname: string;
    name: string;
    age:number;
    extramoney:boolean;
    money:number ;
  
    constructor(weight: number,  height: number, surname: string,
        name:string,age:number,extramoney:boolean,money:number) {
      super(weight, height);
      this.surname = surname;
      this.name = name;
      this.age = age;
      this.extramoney = extramoney;
      this.money = money;
    }

    give_extramoney(sum:number) {
     if (this.extramoney===false) {
         console.log(Say.NO)
         return Say.NO
     }
      if (this.money>sum) {
          console.log(Say.I_need_to_think)
          return Say.I_need_to_think

      }
      console.log(Say.YES)
      return Say.YES
    }
  };
  

let Person1 = new Person(80,180);
let Person2 = new Deputy(80, 180, 'Frrr','Hnd',40,false,0);
let Person3 = new Deputy(80, 180, 'sss','jjjj',40,true,10000);
let Person4 = new Deputy(80, 180, 'sss1','jjjj1',40,false,0);
let Person5 = new Deputy(80, 180, 'Frrr1','Hnd',40,false,0);
let Person6 = new Deputy(80, 180, 'sss1','jjjj',40,true,10000);
let Person7 = new Deputy(80, 180, 'sss2','jjjj1',40,false,0);

console.log(Person1);
console.log(Person2);
console.log(Person3);
console.log(Person4);

Person3.give_extramoney(3000);

// Клас фракція
//   поля:
//     список депутатів
//   методи:
//     додати депутата (вводимо з клави)
//     видалити депутата(теж з клави)
//     видалити всіх негідників які брали хабаря
//     вивести найбільшого хабарника
//     вивести всіх депутатів
//     видалити всіх депутатів
//     вивести загальну суму хабарів для фракції
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

interface IDep {
    weight:number,
    height:number,
    surname:string,
    name: string,
    age: number,
    extramoney: boolean,
    money:number

  }

class Faction {
    list_of_dep: IDep[];
    constructor(list_of_dep: IDep[]) {
      this.list_of_dep= list_of_dep;
      
    }

Add_dep(Person) {
    
    this.list_of_dep.push(Person);
    console.log('_______________________');
    console.log(this.list_of_dep,'Add')
    console.log('_______________________');
}

Del_dep(name) {
    this.list_of_dep.forEach(element => {
      if (name===element.name) {
        let ind=this.list_of_dep.indexOf(element);
        console.log('_______________________');
        console.log(element.name,'Del_name')
        console.log('_______________________');
        this.list_of_dep.splice(ind,1)
        console.log('_______________________');
        console.log(this.list_of_dep,'Del_name')
        console.log('_______________________');
      }

  });
}

Del_hav() {
   
    this.list_of_dep.forEach(element => {
      if (element.extramoney===true) {
        let ind=this.list_of_dep.indexOf(element);
        console.log('_______________________');
        console.log(element.name,'Del_hav')
        console.log('_______________________');
        console.log(element,'Del_h');
        console.log('_______________________');
        console.log(ind,'Del_ind_h');
        console.log('_______________________');

       this.list_of_dep.splice(ind,1)
       console.log('_______________________');
       console.log(this.list_of_dep,'Del_hav')
       console.log('_______________________');
      }

  });
}

Show_hab(){
    let arr=[];
    this.list_of_dep.forEach(element => {
    arr.push(element.money)   
    }
       );
  let maxH=getMaxOfArray(arr) 
  this.list_of_dep.forEach(element => {
    if (element.money===maxH) {
        console.log('_______________________');
        console.log(maxH);
        console.log('_______________________');
        console.log(element,'Show_hab');
        console.log('_______________________');
    }   
    }
       );
  
}

Show_all(){
console.log('_______________________');
console.log(this.list_of_dep,'All')
console.log('_______________________');
}

Del_all(){
    this.list_of_dep=[];
    console.log('_______________________');
    console.log(this.list_of_dep);
    console.log('_______________________');
}

Show_sum(){
    let sum=0;
    this.list_of_dep.forEach(element => {
        sum=sum+element.money  
        }
           );
console.log('_______________________');
console.log(sum,'Sum');
console.log('_______________________');
}
  }

 

 
// клас Верховна рада
//   поля:
//     мапа фракцій
//   методи:
//     додати\видалити фракцію
//     вивести всі фракції
//     вивести конкретну фракцію
//     додати\видалити депутата з фракції
//     вивести всіх хабарників фракції
//     вивести найбільшого хабарника у фрації
//     вивести найбільшого хабарника верховної ради



interface Ifr {
  
  list_of_dep: {

        weight:number,
        height:number,
        surname:string,
        name: string,
        age: number,
        extramoney: boolean,
        money:number
    }
      }

class Rada {
    list_of_fr: Ifr[]
    constructor(list_of_fr: Ifr[]) {      
    this.list_of_fr= list_of_fr;
    
      
    }

Add_fr(list) {
    console.log(list)
    this.list_of_fr.push(list);
    console.log('_______________________');
    console.log(this.list_of_fr,'Add')
    console.log(this.list_of_fr[0])
    console.log('_______________________');
}

Del_fr(list) {
    this.list_of_fr.forEach(list => {
        let ind=this.list_of_fr.indexOf(list);
        console.log('_______________________');
        this.list_of_fr.splice(ind,1)
        console.log('_______________________');
        console.log(ind)
        console.log(this.list_of_fr,'Del_name')
        console.log('_______________________');
      })

  };

Show_fr(list){
    console.log(list,'Show_fr')
  
}

Show_all(){
this.list_of_fr.forEach(list => {    
    this.Show_fr(list)
 })
}

Del_dep_fr(fr,pers) {

    this.list_of_fr.forEach(element => {
        if (element===fr) {

          let ind=fr.list_of_dep.indexOf(pers);
          console.log('_______________________');
          console.log(ind)
          console.log('_______________________');
          fr.list_of_dep.splice(ind,1)
          console.log(this.list_of_fr)
       
      }
       
})
}

Add_dep_fr(fr,pers) {
    this.list_of_fr.forEach(element => {
        if (element===fr) {

          fr.list_of_dep.push(pers)
          console.log('_______________________');
          console.log(this.list_of_fr)
          console.log('_______________________');
       
      }
       
})
}

Show_hab_fr(fr){
    let arr=[];
    this.list_of_fr.forEach(element => {
        if (element===fr) {
        fr.list_of_dep.forEach(e => {
         arr.push(e.money)  })
        console.log(arr)
        }  
      

    } )    
    let maxH=getMaxOfArray(arr) 
    fr.list_of_dep.forEach(element => {
        if (element.money===maxH) {
            console.log('_______________________');
            console.log(element,'Hab_fr');
            console.log('_______________________');
        }

    }); 
  }

  Show_hab_r() {
   
    this.list_of_fr.forEach(e=> {
        console.log('HAB RADA')
        this.Show_hab_fr(e);
       
    })
    
  }
           
    
    }
 
    let list1=new Faction([]);
    let list2=new Faction([]);
    console.log(list1);
    list1.Add_dep(Person2);
    list1.Add_dep(Person3);
    list1.Add_dep(Person4);
    list2.Add_dep(Person5);
    list2.Add_dep(Person6);
    list2.Add_dep(Person7);
    console.log('_______________________');
    console.log(list1,'List');
    console.log('_______________________');
    list1.Show_all();
    list1.Show_sum();
    list1.Show_hab(); 
    list1.Del_hav();
    list1.Del_dep('Hnd');
    list1.Del_all();
    console.log(list1);

  let rada=new Rada([]);

  console.log(rada);
  console.log(list1);
  rada.Add_fr(list1);
  rada.Add_fr(list2);
  rada.Show_fr(list2);
  rada.Show_all();
  rada.Del_dep_fr(list1,Person2);
  rada.Add_dep_fr(list1,Person2);
  rada.Show_hab_fr(list1);
  rada.Show_hab_r();
  rada.Del_fr(list1);


