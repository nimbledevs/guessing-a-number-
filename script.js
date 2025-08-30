// // Boolean values

// // let favourite = Number(prompt("enter your favourite number"));
// // console.log(typeof favourite);

// // if (favourite === 10) {
// //   console.log("heyy its my favourite number");
// // } else if (favourite === 7) {
// //   console.log("7 is also my favourite number");
// // } else {
// //   console.log("try something else");
// // }

// // switch statements
// const day = "Wednesday";
// // switch (day) {
// //   case "Monday":
// //     console.log("today is monday");
// //     break;
// //   case "tuesday":
// //     console.log("Today is tuesday");
// //     break;
// //   case "wednesday":
// //     console.log("today is Wednesday");
// //     break;
// //     default:
// //         console.log("not a valid day ")
// // }


// if (day === 'monday'){
//     console.log("Today is Monday ");
// }

// else if (day ===  'Tuesday' || day ==='Wednesday' ){
//     console.log("enjoy the day ");
// }
// // else if (day ===  'Wednesday'){
// //     console.log("Today is Wednesday ");
// // }
// else if (day === 'Thursday'){
//     console.log("Today is Thursday ");
// }
// else{
//     console.log("Day is not valid !!!!");
// }

// // ternary operator or conditional operator 

// const unique = 18 ;
// // unique === 5 ? console.log("ohh 5 is a unique number") : console.log(" the number is not unique"); 
// // console.log( unique === 5 ? "ohh 5 is a unique number":" the number is not unique" );
// const containNumber=  unique === 5 ? "ohh 5 is a unique number":" the number is not unique" ;
// console.log(containNumber);

// // loops :-----------

// const john = [
// 'johnDoe',
// 2025-2000,
// 'Teacher',
// ['peter' ,'jonas','harry','bob'],
// true 
// ] 
// // for (let i= 0 ; i < john.length; i++){
// //     console.log(` the loop in array ${john[i]}`);

// // }
// const types = [];


// for (let i= 0 ; i < john.length; i++){
//     console.log(` the loop in array ${john[i]} ${typeof john[i]}`);
//     types[i] = typeof john[i];

// }

// console.log(types);
// console.log (john.push('hobby'));
// // const type = john[i];
// // console.log(type);


// // coding challenge --------

// /*
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

// TEST DATA: 125, 555 and 44

// HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// GOOD LUCK 😀
// */
// // const tip = [];

// // const calcTip = function (bill) {
// //   return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// // };

// // const billValue = [125, 555, 44];

// // for (let j = 0; j < billValue.length; j++) {
// //   tip[j] = calcTip(billValue[j]);
// // }

// // console.log(tip);

// // console.log(billValue[0]+tip[0]);

// // const tip1 = 15/100 ;
// // const tip2 = 20/100 ;
// // console.log(tip1 ,tip2);

// // console.log(calcTip(billValue[0]),calcTip(billValue[1]),calcTip(billValue[2]));

// // const birthYear = [];
// // const  birthYears = [2000,2003,2005,2008,2009];

// // for(let k = 0; k < birthYears.length; k++){
// //      birthYear.push( 2025 - birthYears[k]);

// // }
// // console.log (birthYear);

// // looping BackWard  

// const employee = [
//     'harry',
//      2025-1997,
//      'teacher',
//      ['steven','peter','jonas']
// ]

// for (let l = employee.length-1; l > 0 ;l--){
//     console.log(l, employee[l] , typeof employee[l]);
// }


// // loops in loop

// for (let exercise = 1 ; exercise  <= 3; exercise++){
//     console.log(`exercise ${exercise}`);


//     for(let rep = 1 ; rep<6; rep ++){
//         console.log(`repetion of exercise  ${rep}`);

//         for(let againrep = 1 ; againrep < 6; againrep ++){
//             console.log(`Again repetion of exercise  ${againrep}`);
    
//         }
//     }
// }

// let rep = 1;
// while (rep<= 10) {
// console.log(`WHILE: Lifting weights repetition ${rep}`)
// rep++;
// }
// let dice = Math.trunc(Math.random () * 6 )+1;
// console.log(dice);


// // billvalue ✔
// // tipvalue ✔



// const calcTip = function(billValue){
//     const tips = billValue<300 && billValue>50? billValue*0.15 : billValue*0.2;
//     return tips;
// }
// const billValue = [125, 555, 44];
// const tip =[];
// const total =[];

// for (let i = 0 ;i< billValue.length; i++){
//  const ourValue =calcTip(billValue[i]);
//  tip.push (ourValue);
//  total.push (ourValue+billValue[i]) ;
 
//  console.log(ourValue);
// }
// console.log(tip);
// console.log(billValue, tip , total);
// x
// console.log (billValue[0]+tip[0]);

// // let totalValue =  ((tip[i])+billValue[i]);

// // console.log(totalValue)

// // Math.ceil(9.66);
// // Math.round(4.55);
// // Math.trunc();
// // Math.floor();
// // Math.sign(); //it gives the result 1 , -1 , 0 .
// // Math.pow(8 ,2); //the result is 8 multiply by 8  for two time the answer is 64 .
// // Math.sqrt(8); // in this the result is 64 because the square root of 8 is 64 .
// // Math.abs(); // return the absolute positive value . if the value is -5.6666 something it gives -5 .
// // Math.sin();


// let ourDice = Math.trunc(Math.random() *6) + 1;
// while (ourDice !== 6){
// console.log (`you rolled a Dice ${ourDice}`);
// ourDice = Math.trunc((Math.random())*6) + 1;
// if (ourDice ===6){
//     console.log ('now the rolled is end because the number is 6' )
// }
// }
// // console.log (ourDice);








// let Number = 15 ;

// const scoreText = document.querySelector ('.scoreText h2').textContent = "correct Number";
// console.log (scoreText);

// const number = document.querySelector ('.Number').textContent = 34;
// const score =  document.querySelector ('.spanTextOne').textContent = 44;

// const againBtn = document.querySelector ('.againBtn');



// const myNumber = Math.trunc(Math.random()*20)+1;
// document.querySelector('.Number').textContent = myNumber;
// const givenInput = document.querySelector ('.guess_num');



// const checkbtn = document.querySelector ('#check');
// const body = document.querySelector ('body');
// checkbtn.addEventListener ('click',()=>{
//     if (givenInput < myNumber){
//         console.log("your number is low !");
//     }
//     else if (givenInput == myNumber){
//         body.style.backgroundColor = 'blue';
       
//         console.log("perfect your numeber is absolutely correct !");
//     }
//     else if (givenInput > myNumber){
//         console.log("your number is high !");
//     }
//     else {
//         console.log("something is wrong")
//     }
// })




const myNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.Number').textContent = myNumber;

const givenInput = document.querySelector('.guess_num');
const checkbtn = document.querySelector('#check');
const body = document.querySelector('body');

checkbtn.addEventListener('click', () => {
    const userGuess = Number(givenInput.value);

    if (userGuess < myNumber) {
        console.log("Your number is low!");
    } else if (userGuess == myNumber) {
        body.style.backgroundColor = 'green';
        console.log("Perfect! Your number is absolutely correct!");
    } else if (userGuess > myNumber) {
        console.log("Your number is high!");
    } else {
        console.log("Something is wrong.");
    }
});
