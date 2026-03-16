
// for(let i = 0; i<5; i++){
//     console.log(i)
// }
// let a = 1;
// if (a = 1) {
//     let x = 10;
// }
// console.log(x); // 10

// var a = 10;
// var a ='ajay';
// console.log(a);

// for (let i = 0; i < 3; i++) { 
//   setTimeout(() => { 
//     console.log(i); 
//   }, 1000); 
// } 


// let age =37;

// function print(){
//     age = 50;
//     console.log(age);

// }
// print();
// console.log(age);
// let a;
// a = 9;

// console.log(a)

//string using single quote, double quote, bacttick

// let testerName1 = "Ajay"; 
// let testerName2 = "Vijay"; 
// let role = 'QA Engineer'; 
// //Hi Ajay , welcome to online class
// //Hi Vijay , welcome to online class
// let elcomemsg = `Hi ${testerName1}, welcome to online class`
// let msg =`Hi ${testerName2}, welcome to online class`

// console.log(testerName1.concat(" Kumar"))
// console.log(msg)


// let a = '30', b=50;

// console.log(a+b)

// let flag = false;


//JS array
// int[] num = new int[4]

// let browsers = ['chrome', 4, true, undefined];
// console.log(browsers[1])

// let student=['manav', 'GAV', 4]

// let city = ["California", "Barcelona", "Paris", "Kathmandu"];
// city.push("nepal")
// city.reverse();


// let newarray = city.pop();
// console.log(city)
// console.log(city)
// for(value of city){
//     console.log(value)
// }
// city.forEach(ele => {
//     console.log(ele)
// });

// console.log(city.indexOf("Paris"));
// if(city.includes("Paris") ){
//     console.log(true)
// }




let users = [
    { uasername: "first", password: "firstPass" },
    { uasername: "2", password: "2Pass" },
    { uasername: "3", password: "3Pass" },
    { uasername: "4", password: "4Pass" },
    { uasername: "5", password: "5Pass" }
]
users.forEach(ele=>{
    //steps
    console.log(ele.uasername)
    console.log(ele.password)
})

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].uasername, users[i].password)
// }

// let {data} = './deta.json'
// console.log(data)