const hours = new Date().getHours();
let gretting;
if(hours<18){
    gretting ="GoodDay";
}else {
    gretting ="GoodEvenning";
}
document.getElementById("demo").innerHTML=gretting