//Задание 2 

const num = prompt('Введите любое число до 1000:')  
  
function tausend(num){
    if(num <= 1){
     return 'Число не простое';}

    if(num === 2){
     return true;}
    if(num > 1000){
        return 'Данные неверны';}

    for (let i=2; i<num; i++) {
        if (num%i === 0) 
        return 'Число не простое';
      }
      return 'Число простое';
}
console.log(tausend(num))


