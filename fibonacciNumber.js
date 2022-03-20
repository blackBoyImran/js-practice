/////////=========>>>>>>>>>>> fibonacci number  <<<<<<<<<<<+============////////////
/////////=========>>>>>>>>>>> fibonacci number  <<<<<<<<<<<+============////////////
/////////=========>>>>>>>>>>> fibonacci number  <<<<<<<<<<<+============////////////






/////////=========>>>>>>>>>>> fibonacci number using for loop  <<<<<<<<<<<+============////////////

let fiboArray = [0,1];
let userIN = 50;

for(let i = 2; i<=userIN;i++){
    fiboArray[i] = fiboArray[i-1] + fiboArray[i-2];
}
console.log("Using just for loop : ");
console.log(fiboArray+"\n\n");






/////////=========>>>>>>>>>>> fibonacci number with while loop <<<<<<<<<<<+============///////////

let inputOfUser = 30;
let fiboX = [0,1];
let initial = 2;

while(initial <= inputOfUser){
    fiboX[initial] = fiboX[initial -1] + fiboX[initial -2];
    initial++;

} 
console.log("While loop : "+fiboX+"\n\n");






/////////=========>>>>>>>>>>> fibonacci number using for loop and function  <<<<<<<<<<<+============////////////

console.log("Using function and for loop : ");
function fibonacciNumber(userInput){
    let initial = [0,1];
    for(let i = 2; i<=userInput;i++){
        initial[i] = initial[i-1] + initial[i-2];
    }
    return initial;
}

let outputFibo = fibonacciNumber(25);
console.log("Fibonacci method \'Number of fibo 20\': "+outputFibo);

let outputFibo1 = fibonacciNumber(20);
console.log("Fibonacci method \'Number of fibo 10\': "+outputFibo1+"\n\n");








/////////=========>>>>>>>>>>> fibonacci number with function and while loop <<<<<<<<<<<+============///////////

function whileAndFunciton(inputW){
    let userW = [0,1];
    let fiexdValue = 2;
    while(fiexdValue <= inputW){
        userW[fiexdValue] = userW[fiexdValue-1] + userW[fiexdValue-2];
        fiexdValue++;
    }
    return userW;
}


let userWOutput = whileAndFunciton(50);
console.log("While loop and function output : "+userWOutput+"\n\n");





/////////=========>>>>>>>>>>> fibonacci number with recursive method <<<<<<<<<<<+============////////////

function fiboNacci(userINPUT){
    if(userINPUT == 0){
        return 0;
    }
    if(userINPUT == 1){
        return 1;
    }
    else{
        return userINPUT = fiboNacci(userINPUT-1) + fiboNacci(userINPUT-2);
    }
   
}

let outputMehod = fiboNacci(30);
console.log("FOBONACCI NUMBER PRINT WITH RECURSIVE METHOD : "+outputMehod+"\n\n");









/////////=========>>>>>>>>>>> fibonacci number using for loop  <<<<<<<<<<<+============////////////
// program to generate fibonacci series up to n terms
let number = 40;
let n1 = 0, n2 = 1, nextTerm;
console.log("Using just for loop but others way : ");
for (let i = 1; i <= number; i++) {
    console.log(nextTerm)
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log("\n\n");







/////////=========>>>>>>>>>>> fibonacci number using for loop  <<<<<<<<<<<+============////////////
let fibo = [0,1];
let user = 30;
for(let i = 2; i<=user; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];

}   
console.log("Using just for loop : ");
console.log(fibo+"\n\n")





















