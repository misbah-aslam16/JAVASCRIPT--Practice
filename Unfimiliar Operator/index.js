
//------------------ Question 01--------------//

var num1 = 4  //3  //4  //5
var num2 = 3  //4  //3
        //     3   +   3   +    3   +   3   +     4          //16
var result = --num1 +  num2++ + num1++  + --num2 + num1++
console.log(result);

//------------------ Question 02--------------//

var a = 1;  //0  //-1 //-2
var b = 3;  //2  //3
var c = 9;
var d = 33;
var e = 7;
var f = 10;

               0   +  3   +  2  +  0   +   3 -  2  -  2     //    4
var result1 =  --a +  b-- +  b++ +  a-- + b  + --a  + a;

var a = 1;  //2  //1
var b = 3;  
var c = 9;   //8  //7  //8 

              1   +  9  +   1   +  3  +  8  +  1  + 7        //  30
var result2 = a++  + c--  + --a  + b  + c--  + a  +  c++;

var a = 1;  //0 
var b = 3;  //4 
var c = 9;  //10
var d = 33;  //32  //31
var e = 7;
var f = 10;  //9  //10 

              33  +  10 +  0  + 3  +  9  +  9 + 32         //96
var result3 = d-- + f-- + --a + b++ + f++ + c++ + d--;

var a = 1;  //2
var b = 3;  //2 
var c = 9;  //8
var d = 33; //32  //33
var e = 7;
var f = 10;

              1  +  3  +  8  +  10  + 32 +  8 + 32           // 94
var result4 = a++ + b-- + --c + f + --d + c + d++;

var a = 1;   //2
var b = 3;   //4
var c = 9;   //10
var d = 33;  //34
var e = 7;   //8
var f = 10;  //11

             1  +  3  +  9  +  33  +  8  +  11               //65
var result5 = a++ + b++ + c++ + d++ + ++e + ++f;

var a = 1;  //0
var b = 3;  //2 
var c = 9;   //10
var d = 33;  //32
var e = 7;   //6
var f = 10;  //9

              0  +  3  -  10  +  33  +  6  +  10            //42
var result6 = --a + b-- - ++c + d-- + --e + f--;

var a = 1;  //0
var b = 3;  //2 
var c = 9;  //10
var d = 33;  //34
var e = 7;  //8
var f = 10;  //11

              0  +  3  +  10  +  33  +  8  + 10             // 64
var result7 = --a + b-- + ++c + d++ + ++e  + f++;


//---------------Results----------------//


console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);