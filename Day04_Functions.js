console.clear();


function calculator(a,b){

    var num1=a;
    var num2=b;
    var result = a+b;

    console.log(result);
    return result;

}


var result02 = calculator(5,8) + 5;

console.log(result02);

function square(s){
    return s*s;

}
 //using the function
console.log (square(8));//64
    
//using the function
    console.log (square());//NaN
//
console.log(square(3,4,true, 'javascript'));//s=3, Result = 9
const result1=square (8)-1; 
console.log(result1);//63
//We can assign DEFAULT values in the function parameter
function addNumbers (num1=2, num2=3, num3=4) {
return num1+num2+num3;
}
console.log(addNumbers()); //Using default values 2+3+4=9 
console.log(addNumbers (5,6,7));//Overwriting 5+6+7|
