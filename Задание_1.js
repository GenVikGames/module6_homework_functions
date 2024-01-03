//Задание 1
function array(){
    const num = prompt("Введите значение","");
    
    if (typeof num==="number"){
        alert("Это число");
        }
        else if(isNaN(num)){
            alert("Упс, кажется, вы ошиблись");
            }
            else if(num%2==0){
                alert("Число" + " " + num + " " + "чётное");
                }
                else{
                    alert("Число"+" " + num + " "+ "нечётное");
             }
             
            }
     array();
