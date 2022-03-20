

    // ///////       factorial using for loop //////////
    let userInput = 20;
    let fact = 1;
    console.log('just for loop : ');
    for(var i = 1; i<=userInput;i++){
        fact = fact * i;
        console.log(i+" = "+fact);
    }
    console.log('\n\n')





    /////////    factorial funciton of for loop  //////////
    function factorial(userInput){
        let fact = 1;
        for(let i = 1;i<=userInput;i++){
            fact = fact * i;
        }
        return fact;
    }
    console.log('\n')

    let person1 = factorial(15);
    console.log("function and for loop : "+person1);
    console.log('\n\n')








    /////    while loop using factorila ///////

    let n = 1;
    let userInput1 = 10;
    let fact1 = 1;
    console.log("just while loop : ");
    while(n <= userInput1){
        fact1 = fact1 * n;
        console.log(n+" = "+fact1);
        n++;
    }
    console.log('\n')








    //////////    factorial function of while loop /////////

    function factorial1(userInput5){
        let fact = 1;
        let start = 1;
        while(start<=userInput5){
            fact = fact * start;
            start++;
        }
        return fact;
        
    }
    let person2 = factorial1(15);
    console.log("funciton and while loop : "+person2)
    console.log('\n\n')









    /////////       Recursive factorial with for loop          ///////


    function factorial10(m){
        if(m==0){
            return 1;
        }
        if(m==1){
            return 1;
        }
        else{
            return m*factorial10(m-1);
        }
    }

    let person11 = factorial10(10);
    console.log("using recursive method in factorial "+person11);











    ////////////////       recursive mehod practice second time


    function factorialNumber(input){
        if(input == 0){
            return 0;
        }
        else if ( input == 1 ){
            return 1;
        }

        else{
            return input * factorialNumber(input - 1);
        }
    }

    let factorialNumberCheck = factorialNumber(10);
    console.log("recursive method 2 : "+factorialNumberCheck);


    