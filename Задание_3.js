//Задание 3

function sum(x) {
    return function(y) {
        return x + y;
    };
}
console.log(sum(10)(15));