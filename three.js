//assignment
var sum=9;
function add(){
    sum+=9;
    return sum;
}
console.log(add());

//stand line

function next(arr,item){
    arr.push(item);
    return arr.shift();
}
var testarr=[1,2,3,4,5];
console.log("before :"+JSON.stringify(testarr));
console.log(next(testarr,6));
console.log("after :"+JSON.stringify(testarr));

//switch
function chain(val){
    var an="";
    switch(val){
        case "bob":
            a="mark";
            break;
        case "pop":
            a="oh";
            break;
        default:
            on="hg";
            break;
            
    }

}
console.log(chain("bob"));
















