

// var isMarried = false    //naming convention boolean
// 2 == 2  true   comparison operator    //Equality operator
 // 2 === "2"  value, dataType        //Strict equality operator
//  5 != "5"  flase                 // Inequality operator
// 5 !== "5" true                  //Strict inequality operator.
// 10 < 9  false    // Less than operator
// 9> 3 true        // Greater than operator
// 10 <= 11  true   //Less than or equal operator
// 3>=1  true       //Greater than or equal operator


//------------------------------------------------------------------------


/*var userInp =+ prompt()

var modulus = userInp % 2 


if(modulus === 0){
    console.log("number is even");
}else{
    console.log("odd number");
}*/




//--------------------------------------------------------------------------



var  passengerAge = +prompt("Please Enter your age.........")


 if(passengerAge <= 5){
     console.log("We will not charge" );
 }else if( passengerAge >= 6 && passengerAge <= 15 ){
    console.log("You are an adult now you have to pay 20 rs");
 }else if (  passengerAge >= 16 && passengerAge <= 50  ){
     console.log(" You have to pay 50rs");
 }else if (  passengerAge >= 50 && passengerAge <= 85 ){
    console.log(" You have to pay 30rs");
 }
 else{
    console.log("You have to pay");
 }