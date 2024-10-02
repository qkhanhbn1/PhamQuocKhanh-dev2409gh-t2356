// cấu trúc điều khiển if
//dạng 1: if đơn

/* 
Cú pháp:
    if(condition-expression){
    block statement;
    }
*/
//vd:cho số num kiểm tra số num là số dương ?

num =10;
if(num>0){
    console.log(num,"là số dương");   
}
//nếu num >0 thì gán lại giá trị num = -100
if(num>0){
    num=-100;
    console.log(num);
    
}
//dạng 2: if ...else
num=12
//kiểm tra num là số chẵn hay lẻ
if(num %2 ==0){
    console.log(num,"là số chẵn");
    
}else{
    console.log(num,"là số lẻ");
    
}
//dang 3: if bậc thang if..else if....
//kiểm tra số num là số dương, âm là số 0 
num=-11
if(num>0){
    console.log(num,"là số dương");
    
}else if(num<0){
    console.log(num, "là số âm");
    
}else{
    console.log(num,"là số không");
    
}
//dạng 4: nested if
num1=12;
num2=15;
//nếu num1 là chẵn, ktra num2 là số lẻ
//thì tính: res = num1+num2
if(num1 % 2 == 0){
    if(num2 %2 == 1){
        res = num1 + num2;
        console.log(res);
        
    }
}else {
    if(num2 % 2 == 1){
        res = num1 - num2;
        console.log(res);
    }   
}

//bài 1:giải phương trình bậc 1:ax+b=0
function giaiPhuongTrinhBacNhat(a, b) {
    if (a === 0) {
        if (b === 0) {
            return "Phương trình có vô số nghiệm";
        } else {
            return "Phương trình vô nghiệm";
        }
    } else {
        return "Nghiệm của phương trình là x = " + (-b / a);
    }
}
var a = 0;
var b = 4;
console.log(giaiPhuongTrinhBacNhat(a, b));

//bài 2: giải phương trình bậc 2: ax^2+bx+c=0
function giaiPhuongTrinhBacHai(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            return c === 0 ? "Phương trình có vô số nghiệm." : "Phương trình vô nghiệm.";
        } else {
            return "Phương trình bậc nhất có nghiệm x = " + (-c / b);
        }
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            return "Phương trình vô nghiệm.";
        } else if (delta === 0) {
            let x = -b / (2 * a);
            return "Phương trình có nghiệm kép x = " + x;
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return "Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2;
        }
    }
}
var a = 2;
var b = 4;
var c = -6;
console.log(giaiPhuongTrinhBacHai(a, b, c));
