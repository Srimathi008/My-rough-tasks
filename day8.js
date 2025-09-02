/*let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours);
let minits=currenttime.getMinutes();
console.log(minits);
let day=currenttime.getDay();
console.log(day);*/
class Exam{
    constructor(personName){
    this.personName=personName;
    console.log(personName);

   }
}
let result=newExam("walter")

class Bank{
    constructor(initialamount=0){
        this._balance=initialamount;
    }
    get balance(){
        return this._balance;
    }
set balance(amountdeposit){
    if(amountdeposit>0){
        this.balance+=amountdeposit;
        console.log(this._balance)

    }

}
}
let add=new Bank(10);
console.log(add);
class Addition{
    static Math(a,b)
{
    return a+b
}}
