// Клас людина:
//   поля:
//     вага,зріст
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    return Person;
}());
// Клас депутат(наслідується від людини):
//   поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
//   методи:
//     дати хабаря(зробити відповідні перевірки...
//       якщо депутат не хабарник то щоб він відмовився,
//       або ж якщо сума хабаря надто велика то щоб він вагався
//       чи брати чи ні)
var Say;
(function (Say) {
    Say[Say["NO"] = 0] = "NO";
    Say[Say["YES"] = 1] = "YES";
    Say[Say["I_need_to_think"] = 2] = "I_need_to_think";
})(Say || (Say = {}));
var Deputy = /** @class */ (function (_super) {
    __extends(Deputy, _super);
    function Deputy(weight, height, surname, name, age, extramoney, money) {
        var _this = _super.call(this, weight, height) || this;
        _this.surname = surname;
        _this.name = name;
        _this.age = age;
        _this.extramoney = extramoney;
        _this.money = money;
        return _this;
    }
    Deputy.prototype.give_extramoney = function (sum) {
        if (this.extramoney === false) {
            console.log(Say.NO);
            return Say.NO;
        }
        if (this.money > sum) {
            console.log(Say.I_need_to_think);
            return Say.I_need_to_think;
        }
        console.log(Say.YES);
        return Say.YES;
    };
    return Deputy;
}(Person));
;
var Person1 = new Person(80, 180);
var Person2 = new Deputy(80, 180, 'Frrr', 'Hnd', 40, false, 0);
var Person3 = new Deputy(80, 180, 'sss', 'jjjj', 40, true, 10000);
var Person4 = new Deputy(80, 180, 'sss1', 'jjjj1', 40, false, 0);
var Person5 = new Deputy(80, 180, 'Frrr1', 'Hnd', 40, false, 0);
var Person6 = new Deputy(80, 180, 'sss1', 'jjjj', 40, true, 10000);
var Person7 = new Deputy(80, 180, 'sss2', 'jjjj1', 40, false, 0);
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
var Faction = /** @class */ (function () {
    function Faction(list_of_dep) {
        this.list_of_dep = list_of_dep;
    }
    Faction.prototype.Add_dep = function (Person) {
        this.list_of_dep.push(Person);
        console.log('_______________________');
        console.log(this.list_of_dep, 'Add');
        console.log('_______________________');
    };
    Faction.prototype.Del_dep = function (name) {
        var _this = this;
        this.list_of_dep.forEach(function (element) {
            if (name === element.name) {
                var ind = _this.list_of_dep.indexOf(element);
                console.log('_______________________');
                console.log(element.name, 'Del_name');
                console.log('_______________________');
                _this.list_of_dep.splice(ind, 1);
                console.log('_______________________');
                console.log(_this.list_of_dep, 'Del_name');
                console.log('_______________________');
            }
        });
    };
    Faction.prototype.Del_hav = function () {
        var _this = this;
        this.list_of_dep.forEach(function (element) {
            if (element.extramoney === true) {
                var ind = _this.list_of_dep.indexOf(element);
                console.log('_______________________');
                console.log(element.name, 'Del_hav');
                console.log('_______________________');
                console.log(element, 'Del_h');
                console.log('_______________________');
                console.log(ind, 'Del_ind_h');
                console.log('_______________________');
                _this.list_of_dep.splice(ind, 1);
                console.log('_______________________');
                console.log(_this.list_of_dep, 'Del_hav');
                console.log('_______________________');
            }
        });
    };
    Faction.prototype.Show_hab = function () {
        var arr = [];
        this.list_of_dep.forEach(function (element) {
            arr.push(element.money);
        });
        var maxH = getMaxOfArray(arr);
        this.list_of_dep.forEach(function (element) {
            if (element.money === maxH) {
                console.log('_______________________');
                console.log(maxH);
                console.log('_______________________');
                console.log(element, 'Show_hab');
                console.log('_______________________');
            }
        });
    };
    Faction.prototype.Show_all = function () {
        console.log('_______________________');
        console.log(this.list_of_dep, 'All');
        console.log('_______________________');
    };
    Faction.prototype.Del_all = function () {
        this.list_of_dep = [];
        console.log('_______________________');
        console.log(this.list_of_dep);
        console.log('_______________________');
    };
    Faction.prototype.Show_sum = function () {
        var sum = 0;
        this.list_of_dep.forEach(function (element) {
            sum = sum + element.money;
        });
        console.log('_______________________');
        console.log(sum, 'Sum');
        console.log('_______________________');
    };
    return Faction;
}());
var list1 = new Faction([]);
var list2 = new Faction([]);
console.log(list1);
list1.Add_dep(Person2);
list1.Add_dep(Person3);
list1.Add_dep(Person4);
list2.Add_dep(Person5);
list2.Add_dep(Person6);
list2.Add_dep(Person7);
console.log('_______________________');
console.log(list1, 'List');
console.log('_______________________');
list1.Show_all();
list1.Show_sum();
list1.Show_hab();
//list1.Del_hav();
//list1.Del_dep('Hnd');
//list1.Del_all();
console.log(list1);
var Rada = /** @class */ (function () {
    function Rada(list_of_fr) {
        this.list_of_fr = list_of_fr;
    }
    Rada.prototype.Add_fr = function (list) {
        console.log(list);
        this.list_of_fr.push(list);
        console.log('_______________________');
        console.log(this.list_of_fr, 'Add');
        console.log(this.list_of_fr[0]);
        console.log('_______________________');
    };
    Rada.prototype.Del_fr = function (list) {
        var _this = this;
        this.list_of_fr.forEach(function (list) {
            var ind = _this.list_of_fr.indexOf(list);
            console.log('_______________________');
            _this.list_of_fr.splice(ind, 1);
            console.log('_______________________');
            console.log(ind);
            console.log(_this.list_of_fr, 'Del_name');
            console.log('_______________________');
        });
    };
    ;
    Rada.prototype.Show_fr = function (list) {
        console.log(list, 'Show_fr');
    };
    Rada.prototype.Show_all = function () {
        var _this = this;
        this.list_of_fr.forEach(function (list) {
            _this.Show_fr(list);
        });
    };
    Rada.prototype.Del_dep_fr = function (fr, pers) {
        var _this = this;
        this.list_of_fr.forEach(function (element) {
            if (element === fr) {
                var ind = fr.list_of_dep.indexOf(pers);
                console.log('_______________________');
                console.log(ind);
                console.log('_______________________');
                fr.list_of_dep.splice(ind, 1);
                console.log(_this.list_of_fr);
            }
        });
    };
    Rada.prototype.Add_dep_fr = function (fr, pers) {
        var _this = this;
        this.list_of_fr.forEach(function (element) {
            if (element === fr) {
                fr.list_of_dep.push(pers);
                console.log('_______________________');
                console.log(_this.list_of_fr);
                console.log('_______________________');
            }
        });
    };
    Rada.prototype.Show_hab_fr = function (fr) {
        var arr = [];
        this.list_of_fr.forEach(function (element) {
            if (element === fr) {
                fr.list_of_dep.forEach(function (e) {
                    arr.push(e.money);
                });
                console.log(arr);
            }
        });
        var maxH = getMaxOfArray(arr);
        fr.list_of_dep.forEach(function (element) {
            if (element.money === maxH) {
                console.log('_______________________');
                console.log(element, 'Hab_fr');
                console.log('_______________________');
            }
        });
    };
    Rada.prototype.Show_hab_r = function () {
        var _this = this;
        this.list_of_fr.forEach(function (e) {
            console.log('HAB RADA');
            _this.Show_hab_fr(e);
        });
    };
    return Rada;
}());
var rada = new Rada([]);
console.log(rada);
console.log(list1);
rada.Add_fr(list1);
rada.Add_fr(list2);
rada.Show_fr(list2);
rada.Show_all();
rada.Del_dep_fr(list1, Person2);
rada.Add_dep_fr(list1, Person2);
rada.Show_hab_fr(list1);
rada.Show_hab_r();
//rada.Del_fr(list1);
