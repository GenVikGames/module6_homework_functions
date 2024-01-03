//Задание 5

const x = prompt('Введите число:');
const n = prompt('Введите степень числа:');

const sum = (x,n) => {
    if(x ==0 || n ==0){
       return 'Не натуральное число';
    } 
    else{
    res = x**n;
    return res;}
}
console.log(sum(x,n))
