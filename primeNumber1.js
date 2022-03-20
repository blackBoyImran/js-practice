
//////////          prime number check  //////////////////
let user = 123;

for(let i = 2; i< user;i++){
    if(user%i==0){
        console.log(user+' is not a prime number');
        break;
    }
    else{
        console.log(user+' is a prime number ');
        break;
    }
}





///////////////          prime number with function ////////////////////////
console.log("\n\nPrime number with function : ")
function primeNumberCheck(userIN){
    for(let i = 2; i<userIN; i++){
        if(userIN%i==0){
            return userIN + " is a prime Number";
            break;
        }
        else{
            return userIN + " is not a prime number";
        }


    }
}

let primeNumber = primeNumberCheck(19);
console.log(primeNumber);






//////////////     recursive tryed but fail

// function primeNumberR(userINPUT){

//     if(userINPUT == 0){
//         return 0;
//     }
//     else if(userINPUT == 1){
//         return 1;
//     }
//     else{
//         let divide =  primeNumber(userINPUT-1);
//         if(userINPUT % divide ==0){
//             return "prime";
//         }
//         else{
//             return "not prime";
//         }
//     }

// }



// let prim = primeNumberR(20);
// console.log(prim);

