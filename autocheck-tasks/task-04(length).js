/* Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств 
объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта. */

function countProps(object) {
  let propCount = 0;
  
for (const key in object){
	if(object.hasOwnProperty(key)){
    propCount += 1;
    }
}
 
  return propCount;
};
console.log(countProps({}));  // возвращает 0.
console.log(countProps({ name: 'Mango', age: 2 }));  // возвращает 2.
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));  // возвращает 3.