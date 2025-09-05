// EXERCISE: 3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
// const DolphinsScore = (96 + 108 + 89)/3;
// const KoalasScore = (88 + 91 +110)/3; 
// console.log(DolphinsScore,KoalasScore);
// if (DolphinsScore > KoalasScore){
//     console.log( "dolphins score is higher than the koalas Score");
// }
// else if (DolphinsScore < KoalasScore){
//     console.log( "koalas score is higher than the dolphins Score");
// }
// else if (DolphinsScore == KoalasScore){
//     console.log( "both teams have same score!!!");
// }
const DolphinsScore = (97 + 112 + 101)/3;
const KoalasScore = (109 + 95 +106)/3; 
console.log(DolphinsScore,KoalasScore);
if (DolphinsScore > KoalasScore && DolphinsScore >=100){
    console.log( "dolphins score is higher than the koalas Score");
}
else if (DolphinsScore < KoalasScore && KoalasScore>=100 ){
    console.log( "koalas score is higher than the dolphins Score");
}
else if (DolphinsScore == KoalasScore ){
    console.log( "both teams have same score!!!");
}
else{
    console.log( "dont have enough score!!!");
}

// EXERCISE: 4
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const billValue = 275;
// const calculateTip= 15 /100 ;
// const AnothercalculateTip= 15 /100;
// const tip = billValue >= 50 && billValue <=300 ? calculateTip*billValue  : AnothercalculateTip *billValue ;  
// console.log(`the billvalue is ${billValue} and the tip is ${tip} and the total amount is ${billValue+ tip}` );


let billvalue =430;
const  tipCalculator = 15/100;
const anotherCAlculate = 15/100;
const tip = billvalue <=430 && billvalue <=50 ? billvalue*tipCalculator : billvalue* anotherCAlculate;
console.log(`the billvelue is ${billvalue} and the tip is ${tip} and the total amount is ${billvalue + tip}`);


