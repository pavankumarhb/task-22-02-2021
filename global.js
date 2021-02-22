/*var myglobal=10;
function func1(){
    oops=5;
}
function fun2(){
    var out=" ";
    if(typeof myglobal!="undefined"){
        out+="myglobal"+myglobal;
    }
    if(typeof oops!="undefined"){
        out+="oops"+oops;

    }
    console.log(out)

}
func1();
fun2();

function mylocalscope(){
    var arr="pavan";
    console.log(arr);
}
mylocalscope();
console.log(arr);*/

var outer="t-shirt";
function myout(){
    var outer="weet";
    return outer;
}
console.log(myout());
console.log(outer);



