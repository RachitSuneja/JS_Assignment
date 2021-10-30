
var a = 7;

function first(){
    console.log("a is defined and initialized globally as 7 and not updated locally in function first therefore the global value of a ie 7 will be printed in funtion first")
    console.log(a);

}

function second(){

    a = 3;
    console.log("a is defined and initialized globally as 7 and also updated locally in function second as 3 therefore the local value of a will be printed in funtion second")
    console.log(a);
}

first();
second();
