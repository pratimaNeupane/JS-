let markBodyWeight = 95;
let markHeight = 1.88;
let johnBodyWeight = 85;
let johnHeight = 1.76;

let markBMI = markBodyWeight/markHeight**2 ;
let johnBMI = johnBodyWeight/johnHeight**2 ;

let markHigherBMI = markBMI > johnBMI ;

if(markHigherBMI) {
    console.log(`Mark BMI ${markBMI} is higher than John ${johnBMI} BMI`);
}
else {
    console.log(`John BMI ${johnBMI} is higher than Mark ${markBMI} BMI`);
}

//Gymnast//

let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;
let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

let avgDolphinScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3 ;
let avgKoalasScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3 ;

if (avgDolphinScore>avgKoalasScore) {
    console.log(`The winner is Dolphins`);
}
else if(avgKoalasScore>avgDolphinScore) {
    console.log(`The Winner is Koalas`);
}
else {
    console.log(`It's a DRAW !!!`);
} ;

//Bills//


