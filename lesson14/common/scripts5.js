let day;
switch(new Date().getDay()){
    case 0:
        day ="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day ="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Firiday";
        break;
    case 6:
        day="Satuday";
        break;
}
document.getElementById("demo").innerHTML="Hôm nay là "+day;
