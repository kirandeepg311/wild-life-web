// let name ='kiran';
// console.log(name);

// const usn = '23DS023';
// console.log(typeof usn);
// let student ={
//     name :'kiran',
//     no:11
// };

// const num1 = 10;
// const num2 = 20;
// console.log(num1>num2);

// let age =22;
// let cit = true;
// console.log(age>=18 && cit);


// let city = prompt('enter the city');
// console.log(city)

// document.write('this is write method!')

// let name = prompt('Enter name');

// let birthyear = Number(prompt('Enter birth year (e.g. 2000)'));

// let age = 2026 - birthyear;

// document.write(`<h3>Name: ${name}</h3>`);
// document.write(`<p>Current age: ${age}</p>`);

// // 
// function greet(){
//     console.log('hii');
// }
// greet();


//function declaration
// function add(a,b){
//     return a + b;
// }
// console.log(add(2,4));


// //function expression
// const multiply = function(c,d){
//     return c*d;
// }
// console.log(multiply(2,4));

// //arrow function   donot use any key word

// const greet = (name)=>{
//     return'hii' + name;

// }
// console.log(greet('kiran'));


//anonymous function it is used to booking ride 
// setTimeout(function() {
//    console.log('this is timeout function');
// },2000);  


// document.getElementById('h2').// it is feach the id element
// textContent='javascript class updated!';

// document.querySelector('#para').
// innerHTML = <i></i> 

// function changebg(){
//     let r = Math.random{} * 255;
//     let r = Math.random{} * 255;
//     let r = Math.random{} * 255;
//     let body_bg = document.querySelector('body');
//     body_bg.style.cssText  //used to text content;  
//             =`background color: rgb(${r} ${g} ${b})`

// } 
function changebg() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    let body_bg = document.querySelector('body');

    body_bg.style.cssText = `background-color: rgb(${r}, ${g}, ${b})`;

let h3_bg = document.getElementById("h3");

h3_bg.innerHTML = `RGB: ${r} ${g} ${b}`;
}
