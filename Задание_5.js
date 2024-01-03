//Задание 5

const x = prompt('Введите число:');
const n = prompt('Введите степень числа:');

const sum = (x,n) => {
    res = x**n;
    return res;
}
console.log(sum(x,n))