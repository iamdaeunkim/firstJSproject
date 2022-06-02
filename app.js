// 0601 
// const daysOfweek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(daysOfweek);

// daysOfweek.push("sun");

// console.log(daysOfweek);

// 0602 
//<Objects>
// const playerName = "DE";
// const playerPoints = 11111;
// const playerHandsome = true;
// const playerFat = "little bit"; //비효율적

// const player = ["DE", 11111, true, "little bit"]; //array를 사용했을 경우 각각의 것들이 무엇인지 알 수 없음, 주석르오 알려줄 수 있지만 역시 비효율적

// const player = {
//     name: "DE",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name); //console.log(player["name"]);과 결과 같음

// const player = {
//     name: "DE",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// player.lastName = "potato"; //추가 가능
// player.points = 15; // 업데이트 가능
// console.log(player);

//<Functions>
// function sayHello() {
//     console.log("Hello");
// }

// sayHello();
// sayHello();
// sayHello(); //function 기본

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age );

// }

// sayHello("DE", 10);
// sayHello("dal", 22);
// sayHello("lynn", 33); //function 입출력

// function plus(a, b) {
//     console.log(a + b);
// }
// function divide(firstN, secondN){
//     console.log(firstN / secondN);
// }

// plus(2, 3);
// divide(10, 5); //function 순서

// const player = {
//     name: "DE",
//     sayHello: function(otherPersonName) {
//         console.log("hello " + otherPersonName + " nice to meet you");
//     },
// };

// console.log(player.name);
// player.sayHello("lynn");

// Recap
// 항상 const 사용, var 사용x, 가끔 let(업데이트할 때)  

const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    multiply: function (a, b) {
        console.log(a * b);
    },
    square: function (a, b) {
        console.log(a ** b);
    }

};
calculator.add(5, 1);
calculator.minus(2, 1);
calculator.multiply(3, 5);
calculator.square(2, 5);
