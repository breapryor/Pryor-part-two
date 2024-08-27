let userName = prompt("Welcome to GC mini golf! What is your name?");
console.log(`Hi, ${userName}!`);

let numberOfHoles = prompt("Hi, " + userName + "! Would you like to play 3 or 6 holes?");
console.log("Number of holes chosen: " + numberOfHoles);

while (numberOfHoles !=3 && numberOfHoles !=6){
    numberOfHoles = Number(prompt ("do you want to play 3 or 6 holes?"));
}

let totalPutts = 0;

for (let i = 1; i <= numberOfHoles; i++) {
    let putts =  Number(prompt("How many putts for hole " + i + "? (par is 3)"));
    totalPutts += putts;
    console.log("Total putts after hole " + i + ": " + totalPutts);
}

let coursePar = numberOfHoles * 3;
let totalPar = totalPutts - coursePar;

if (totalPar > 0) {
    console.log("Nice try, " + userName + "... Your total par was: +" + totalPar + ".");
} else if (totalPar < 0) {
    console.log("Great job, " + userName + "! Your total par was: " + totalPar + ".");
} else {
    console.log("Good game, " + userName + ". Your total par was: 0.");
}