/*let enter=9456345645
let number=/^[1-9]\{10}$ /;
if(enter.test(number.toString())){
    console.log("correct")
}
else{
    console.log("wrong pattern")
}*/


/*
let text="hello hai how are you";
let match=/\ba\w+e\b/gi;
console.log(match?text:0);
console.log(text.length);*/


const text="hello hai how are you";
const words=test.match(/\ba\w+e\b/gi);
console.log(words);
