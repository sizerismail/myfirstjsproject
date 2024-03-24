console.clear();
/*
Primitive Data Type in JS
string, number, boolean, null, undefined  
*/

var myName= "javascript";
console.log(typeof(myName));

var myName="Java";
console.log(typeof(myName));

/*
Number Literal:
we only have number data type. No int, double, byte,... 
*/

var myNum=20;
console.log(typeof(myNum));
var myNum=20.9;
console.log(typeof(myNum));

var myNum=20/0;
console.log(myNum);//Infinity
console.log(typeof(myNum))//"number"


//    num + string
var num1= 20+'a';
console.log(num1);
console.log(typeof(num1));
//    string + num
var num2= 'a'+20;
console.log(num2);
console.log(typeof(num2));


/*
boolean:
True or False
*/

var isExist=true;
console.log(isExist);
console.log(typeof(isExist));


var isExist=false;
console.log(isExist);
console.log(typeof(isExist));

/*
null
*/

var pickedColor = null;
console.log(pickedColor);
console.log(typeof(pickedColor));

/*
undefined
*/

var selectedCar;
console.log(selectedCar);
console.log(typeof(selectedCar));

var selectedCar=undefined;
console.log(selectedCar);
console.log(typeof(selectedCar));





