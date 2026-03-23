//variables: var, let, const

// var username = 'ajay';
// let password = "pass@1234"
// password = "pass@5464"
// const profileid = 53534
// profileid = 57654

// console.log(profileid)

//JavaScript Data Types: 8 type, 2 category - primitive(String, Number, Booloean, undefined, null) and non primitive(Array, object)

// let testerName = "Ajay Kumar"; 
// let role = 'QA Engineer'; 
// console.log(testerName.toUpperCase())
// console.log(testerName+role)

// let maths = 30, english = 60;
// let responseTime = 2.45; 
// console.log(maths+english)


// let isLoginSuccessful = true; 
// let isEnabled = false;  

// console.log(!isEnabled)


// if (isLoginSuccessful) { 
//   console.log("Test Passed"); 
// } 

// let maths = 34, physics = 56, checm = 78;

// const marks_aman = [34, 56, 78];
// console.log(marks_aman[2]);
// let total_marks=0;
// for (let i = 0; i < marks_aman.length; i++) {
//     total_marks += marks_aman[i];
// }
// console.log(total_marks)

// let primeNumbers = [2, 3, 5, 7]
// let evenNumbers = [2, 4, 6, 8]

// console.log(primeNumbers.concat(evenNumbers))

// let numbers = [1, 3, 4, 9, 8, "aman", true]

// numbers.forEach(ele=>{
//     console.log(ele**2)
// })
// let user = { 
//   username: "admin", 
//   password: "secret", 
//   active: true 
// };
// console.log(user.password)

// let student = {
//     name: 'aman',
//     grade: 8,
//     sections_allowed: ['A', "B"],
//     marks: {
//         maths: 59,
//         phy: 60,
//         che: 50
//     }
// }

// console.log(student.marks.maths);

// let sec = student.sections_allowed
// for (let ele of sec) {
//     console.log(ele)
// }


// let a = 8, b = ' ';
// let c = 1, d = 0;
// 0, 1

// console.log(a + Number(b));
// console.log(Boolean(b));

// if(a==b){
//     console.log(!true)
// }else{
//     console.log(!false)
// }


// if(){
//     if(){

//     }else{

//     }
// }else if(){

// }

// for (num of rep), while, do while

// let click_count = 2;
// for(let i= 0; i<click_count; i++){
//     //click
// }

// let arr = [[2, 3, 5, 7], [2, 4, 6, 8]]


//  for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr[i].length; j++) {

//         if(arr[i][j]==4){
//             break;
//         }
//         console.log(arr[i][j])
//     }
// }

// for (let i = 1; i <= 5; i++) {
//     // skip the iteration if i is even
//     if (i == 2 || i==4) {
//         continue;
//     }
//     console.log(i);
// }

// let trafficLight = "green";
// let message = ""

// if (trafficLight == "red") {
//     message = "Stop immediately.";
// } else if (trafficLight == "yellow") {
//     message = "Yellow Prepare to stop.";
// } else if (trafficLight == "green") {
//     message = "Green Proceed or continue driving.";
// } else {
//     message = "Invalid traffic light color.";
// }

// console.log(message)


// switch (trafficLight) {
//     case "red":
//         message = "Stop immediately.";
//         break;
//     case "yellow":
//         message = "Prepare to stop.";
//         break;
//     case "green":
//         message = "Proceed or continue driving.";
//         break;
//     default:
//         message = "Invalid traffic light color.";
// }

// console.log(message)

// let a = 10, b = 20;
// if(a>b){
//     console.log("a is greater than b")
// }

// let a = 10, b = 20;
// let sum = a + b;
// console.log(sum)

// function add(num1, num2) {
//     return num1 + num2;
// }

// let sum = add(10, 20);
// console.log(add(100, 200))
// console.log(add(1.5, 2.5))

// function multipy(a, b){
//     return a*b;
// }

// let mux = multipy(8, 9);
// console.log(mux)


// const sum = (a, b)=>{
//     return a+b;
// }
// console.log(sum(4, 6))

// function divide(a=4, b=1){
//     return a/b;
// }

// console.log(divide(6, 2))
// console.log(divide())


// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }

// greet("ajay"); 

// Output: Hello, Guest!

// let message = "Hi";
// function greet() {
//     // local variable
//     // let message = "Hello";
//     console.log(`Local: ${message}`);
// }
// greet();
// console.log(message)

// try to access message variable
// outside the greet() function
// console.log(`Global: ${message}`);
// let message = "Hi";
// {
//   console.log(message)  
// }
// console.log(message)  

// constructor function
// function Person (a, b) {
//     this.name = a,
//     this.age = b,

//      this.greet = function () {
//         console.log("hello");
//     }
// }

// // create objects
// const person1 = new Person("Manoj", 37);
// // const person2 = new Person();

// // access properties
// console.log(person1.age);  // John
// // console.log(person2.name);  // John

