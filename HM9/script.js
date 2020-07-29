// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.
//
// function schedule(isGotUp, cb) {
//   setTimeout(() => {
//     if (isGotUp===true) {
//     cb(null, 'Доброе утро соня');
//     } else {
//       cb('Ты еще спишь!', null);
//     }
//   }, 2000)
// }

// function goCheckEat(isCheck, cb) {
//     setTimeout(() => {
//       if (isCheck===true) {
//         cb(null, isCheck)
//       } else {
//          cb('День окончен без еды', null)
//                }
//     }, 1000)
//   }

// function goEat(isFood, cb) {
//   setTimeout(() => {
//     if (isFood===true) {
//       cb(null, '2.Завтракаем')
//     } else {
//        cb('День окончен без еды', null)
//     }
//   }, 2000)
// }

// function goWashUp(isWash, cb) {
//     setTimeout(() => {
//       if (isWash) {
//         cb(null, '3.Чистим зубы')
//       } else {
//          cb('Ладно почищу зубы позже', null)
//       }
//     }, 3000)
//   }
  
// function goDress(isDress, cb) {
//     setTimeout(() => {
//       if (isDress) {
//         cb(null, '4.Одеваемся')
//       } else {
//          cb('И так сойдет', null)
//       }
//     }, 1000)
//   }  

// function goToWork(isWork, cb) {
//     setTimeout(() => {
//       if (isWork) {
//         cb(null, '5.Иду на работу')
//       } else {
//          cb('Да ну его, остаюсь дома', null)
//       }
//     }, 5000)
//   }   

// function goToBed(isSleep, cb) {
//     setTimeout(() => {
//       if (isSleep) {
//         cb(null, '6.Лечь спать дальше')
//       } else {
//          cb('Все таки надо на работу идти', null)
//       }
//     }, 2000)
//   }   

// function goRest(isRest, cb) {
//     setTimeout(() => {
//       if (isRest) {
//         cb(null, '6.Отдохнуть')
//       } else {
//          cb('Надо еще зайти в магазин', null)
//       }
//     }, 2000)
//   }   

// schedule(true,(negative, positive) => {
//     if (negative) {
//         console.log(negative);
//         console.log('Просыпайся скорее')
//     } else {
//         console.log(positive);
//         console.log('1.Начинаем наш день и проверим холодильник')
//         goCheckEat(true, (negative, ok) => {
//             if (negative) {
//               console.error(negative)
//             } else {
//               console.log('Ура!!Есть что кушать!')
//               goEat(ok, (negative, positive) => {
//                 if (negative) {
//                   console.error(negative)
//                 } else {
//                   console.log(positive)
//                   goWashUp(true, (negative, positive) => {
//                     if (negative) {
//                       console.log(negative)
//                     } else {
//                       console.log(positive)
//                       goDress(true, (negative, positive) => {
//                         if (negative) {
//                           console.log(negative)
//                         } else {
//                           console.log(positive)
//                           goToWork(false, (negative, positive) => {
//                             if (negative) {
//                               console.log(negative)
//                               goToBed(false, (negative, positive) => {
//                                 if (negative) {
//                                   console.log(negative)     
//                                   goToWork(true, (negative, positive) => {
//                                     if (negative) {
//                                       console.log(negative)                                                 
//                                     } else {
//                                       console.log(positive)
//                                       goRest(true, (negative, positive) => {
//                                         if (negative) {
//                                           console.log(negative)                                                 
//                                         } else {
//                                           console.log(positive)
//                                                         }
//                                        })      
//                                       }
//                                     })           
//                                 } else {
//                                   console.log(positive)
//                                                 }
//                               })
//                             } else {
//                               console.log(positive)
//                               goRest(true, (negative, positive) => {
//                                 if (negative) {
//                                   console.log(negative)                                                 
//                                 } else {
//                                   console.log(positive)
//                                                 }
//                              })      
//                             }
//                           })
//                         }
//                       })
//                     }
//                   })
//                 }
//               })            
//             }
//           })
//         }
//   } )

/////////////////////////


// function schedule(isGotUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//     if (isGotUp) {
//     resolve('Доброе утро соня');
//     } else {
//     reject('Ты еще спишь!');
//     }
//   }, 2000)
// })
// };

// function goCheckEat(isCheck) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//       if (isCheck) {
//         resolve('1.Проверяем холодильник') ;
//      } else {
//          reject('День окончен без еды');
//                }
//     }, 1000)
// })
// }


// function goEat(isFood) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//     if (isFood) {
//       resolve('2.Завтракаем')
//     } else {
//      reject('Нет времени поесть')
//     }
//   }, 2000)
// })
// }

// function goWashUp(isWash) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//       if (isWash) {
//         resolve('3.Чистим зубы')
//       } else {
//         reject('Ладно почищу зубы позже')
//       }
//     }, 3000)
//   })
// }
  
// function goDress(isDress) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//       if (isDress) {
//         resolve('4.Одеваемся')
//       } else {
//          reject('И так сойдет')
//       }
//     }, 1000)
//   } )
// } 

// function goToWork(isWork) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//       if (isWork) {
//         resolve('5.Иду на работу')
//       } else {
//         reject('Да ну его, остаюсь дома')
        
//       }
//     }, 5000)
//   })
// }    

// function goToBed(isSleep) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//       if (isSleep) {
//         resolve('6.Лечь спать дальше')
//       } else {
//          reject('Все таки надо на работу идти')
//       }
//     }, 2000)
//   })
// }   

// function goRest(isRest) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//       if (isRest) {
//         resolve('6.Отдохнуть')
//       } else {
//         reject('Надо еще зайти в магазин')
//       }
//     }, 2000)
//   })
// }   

// schedule(true) 
// .then(result=>{
//     console.log(result)
//     return goCheckEat(true)
//     .then(result=>{
//         console.log(result)
//         return goEat(true)
//         .then(result=>{
//             console.log(result)
//             return goWashUp(false)
//             .then(result=>{
//                 console.log(result)
//                 return goDress(true)
//                 .then(result=>{
//                     console.log(result)
//                     return goToWork(true)
//                     .then(result=>{
//                         console.log(result)
//                         return goRest(true)
//                         .then(result=>{
//                             console.log(result)
//                         })
//                     })
//                 })
//             }) 
//         })
//     })
// })
   
//     .catch(reason => {
//       console.log(reason)
//     })
//     .finally(() => {
//       console.log('День закончился');
//     })  


////////////////////////

// function schedule(isGotUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//     if (isGotUp) {
//     resolve('Доброе утро соня');
//     } else {
//     reject('Ты еще спишь!');
//     }
//   }, 2000)
// })
// };

// function goCheckEat(isCheck) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//       if (isCheck) {
//         resolve('1.Проверяем холодильник') ;
//      } else {
//          reject('День окончен без еды');
//                }
//     }, 1000)
// })
// }


// function goEat(isFood) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//     if (isFood) {
//       resolve('2.Завтракаем')
//     } else {
//      reject('Нет времени поесть')
//     }
//   }, 2000)
// })
// }

// function goWashUp(isWash) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//       if (isWash) {
//         resolve('3.Чистим зубы')
//       } else {
//         reject('Ладно почищу зубы позже')
//       }
//     }, 3000)
//   })
// }
  
// function goDress(isDress) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//       if (isDress) {
//         resolve('4.Одеваемся')
//       } else {
//          reject('И так сойдет')
//       }
//     }, 1000)
//   } )
// } 

// function goToWork(isWork) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//       if (isWork) {
//         resolve('5.Иду на работу')
//       } else {
//         reject('Да ну его, остаюсь дома')
        
//       }
//     }, 5000)
//   })
// }    

// function goToBed(isSleep) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//       if (isSleep) {
//         resolve('6.Лечь спать дальше')
//       } else {
//          reject('Все таки надо на работу идти')
//       }
//     }, 2000)
//   })
// }   

// function goRest(isRest) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//       if (isRest) {
//         resolve('6.Отдохнуть')
//       } else {
//         reject('Надо еще зайти в магазин')
//       }
//     }, 2000)
//   })
// }   

// async function createSchedule() {
//     try {
//       let res1 = await schedule(true);
//       console.log(res1);
     
//       let res2 = await goCheckEat(true);
//       console.log(res2);

//       let res3 = await goEat(true);
//       console.log(res3);

//       let res4 = await goWashUp(true);
//       console.log(res4);

//       let res5 = await goDress(true);
//       console.log(res5);

//       let res6 = await goToWork(true);
//       console.log(res6);

//       let res7 = await goRest(true);
//       console.log(res7);

//       console.log('День окончен')
//     } catch (err) {
//       console.error(err);
//     }
//   }
  
  
//   createSchedule();
  

// Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію 
//яка буде друкувтаи на строніці то, шо ви ввели по одній букві з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !

let inp=document.createElement('input')
inp.type='text'
inp.setAttribute('id','text')
document.body.appendChild(inp)

let but=document.createElement('button')
but.innerText='Печатать'
document.body.appendChild(but)


function type(isDone) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isDone) {
          resolve(isDone)
        } else {
          reject('ERRROOOOR')
        }
      }, Math.floor(Math.random() * (5000 - 1000 + 1) + 1000))
    })
  }  
  
     
    async function typeM() {
        try {
            let text=document.getElementById('text').value
            console.log(text)
            let arr=text.split('');
            console.log(arr);  
          for (let i=0;i<arr.length;i++) {  
          let result = await type(arr[i]);
          document.write(result);  }       
        } catch (e) {
          console.error(e);
        }
      }
    

but.onclick = () => {
    
    typeM();
}


