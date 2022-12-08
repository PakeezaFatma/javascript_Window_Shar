// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// var a = 2;
// var c = 2;
// function b(){
//     var x =2;
//     var c =4;
//     console.log(c);
// }
// console.log(a);
// console.log(this.a);
// console.log(this.c);
// console.log(this.x);
// console.log(window.a);
// console.log(window.x);
// console.log(b());


// f

// function outerfunction() {

//     console.log(a);
    
//     var c = 10;
    
    
    
//     innerfunction();
    
    
    
//     function innerfunction() {
    
//     console.log(b);
    
//     console.log(c);
    
//     }
    
//     }
    
    
    
//     var a = 7;
    
//     var b =3
    
    
    
//     outerfunction();
    
    

//     function outerfunction() {

//         console.log(a);
        
//         var a = 10;
        
        
        
//         innerfunction();
        
        
        
//         function innerfunction() {
        
//         console.log(a);
        
//         console.log(window.a);
        
//         console.log(this.a)
        
//         }
        
//         }
        
        
        
//         var a = 7;
        
//         var b =3
        
        
        
//         outerfunction();

// console.log(c)
// console.log(a);
// console.log(b)
// let a = 5;
// var b = 6;
// console.log(b)

let a = 5;

var b = 6;



// console.log(this.b);

// console.log(window.b)

// console.log(window.a)

// console.log(this.a);

// let a =5;

// let a = 6;

// var obj1 = {
//     "key1" : "value1",
//     "key2" : "value2",
//     "key3" : "value3",
//     "key4" : "value4",

// }
// //var arr = ["value1" , "value2"]
// var arrofkeys = Object.keys(obj1);
// arrofkeys .forEach(key => {
//     console.log(obj1[key])
// })

// console.log('a');
// console.log('b');
// setTimeout(()=>
//     console.log('c'),1000
// );
// setTimeout(()=>console.log('c'));
// console.log('d');
// var person ={
//     fisrstName: "harshit",
//     age : "12"
// }
// console.log(person.fisrstName);
// console.log(person.age);

// var person = new Map();
// person.set('fName','Harshit');
// person.set('age','45');
// person.set(1,'one');
// console.log(person);
// console.log(person.get(1));
// const sample = [1,2,3];
// const mapresult = sample.map(function(val,index,array)
// {
//     console.log('val :' , val,'index :' , index,'array :' ,array);
//    // return(val * 2);
// });
// var arr = [4, 5, 10, 3, 8, 6];
//         var result = [];
//         let i;
  
//         //square function returns square of a number
//         const square = function(num){  
//             return num*num;
//         }
  
//         for(i=0; i< arr.length; i++){
//             result.push(square(arr[i]));
//         }
  
//         console.log(result);
//         //Expected output: [16 ,25, 100, 9, 64, 36]

// var a = 50;



// function fun(){

// var a =30;

// let b = 20;

// let c = 30;

// }

// fun();

// console.log(a)




// function x(){

//     let a = 10;
    
//     function y(){
    
//     console.log(a);
    
//     }
    
//     a= 50;
    
//     return y;
    
//     }
    
    
    
//     const z = x()
    
//     console.log(z());

    
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// function ispalindrome(string)
// {
//     const len = string.length;
//     for(let i = 0; i < len / 2 ; i++)
//     {
//         if(string[i] !== string[len -1 -i])
//         {
//             return 'its not palindrome';
//         }
//         return 'its palindrome';
//     }
// }
// const string = prompt('Enter a string : ');
// const value = ispalindrome(string);
// console.log(value);


//call ,Apply &  bind

var obj ={num : 2};

var obj1 ={num :5};


var addToThis = function(a , b , c){
    return this.num + a + b + c;
};

console.log(addToThis.call(obj,3 , 5, 6)); // functionname.call(obj,functionArrgument)


var arr =[1,2,3];
console.log(addToThis.apply(obj,arr)); // apply use in array

console.log(addToThis.apply(obj1,arr));


//bind

var obj2 ={num : 8};
var addToThiss = function(a,b,c){
    return this.num + a + b + c;
};
//var arr = [1,2,3];
var bound = addToThiss.bind(obj2);
console.log(bound(1,2,3));

//Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.

var student = {age : 20};
var printAge = function()
{
    return this.age;
};
var bound1 =printAge.bind(student);

console.log("Age :" +bound1());

//Understand currying now from this 
 //using bind
let multiply = function(x,y)
{
    console.log(x * y);
}
let multiplytwo = multiply.bind(this , 2);
multiplytwo(3);

let multiplyThree = multiply.bind(this,3);
multiplyThree(5);


//using closure

let multiplyC = function(x)
{
    return function(y)
    {
        console.log(x * y);
    }
}
let multiplycBytWo = multiplyC(2);
multiplycBytWo(2);

let multiplycByThree = multiplyC(3);
multiplycByThree(4);