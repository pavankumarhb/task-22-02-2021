//testing objects
var myobj={
    g:"pop",
    a:"oop",
    b:"ysag",
} ;
function my(check){
    if(myobj.hasOwnProperty(check)){
        return myobj[check];
        }else{
            return "not found";
        }
}   
console.log(my("g"));



//manipulating complex objects
var mymusic={
   "var1": {
        "a":"pop",
        "b":"boby",
        100:"pav"
    },
    "var2":{
        "a":5,
        "b":"c",
    }

};
console.log(mymusic["var1"]["a"]);

console.log(mymusic["var2"]["a"]);


// accessing values in nested array
var myplants=[
    {
        type:"flower",
        l:[10,20,30,40]
    },
    {
        type:"plants",
        l1:[50,60,70,80]
    }
];
console.log(myplants[0].l[1]);



//record collection
var i=0;
var myarr=[];
while(i<5){
    myarr.push(i);
} ;
console.log(myarr);


//for loop
var my=[];
for(var i=0;i<6;i++){
    my.push(i);
};
console.log(my);





































































































