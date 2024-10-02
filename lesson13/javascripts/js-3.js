//toán tử , toán hạng, biểu thức, câu lệnh, khối lệnh
//1. toán tử số học: * , / , + , - , %(chia lấy dư),
var num1, num2;
//gán giá trị 
num1=12;
num2=25;
//thực hiên tính toán 
res = num1 * num2;
console.log(num1, "*", num2, "=", res);
res = num1 / num2;
console.log(num1, "/", num2, "=", res);
res = num1 % num2;
console.log(num1, "%", num2, "=", res);

//phép toán so sánh +> trả về giá trị kiểu boolan(true/false)
// >; >=; <;<=;==, ===, !=,!==
res = num1 >num2;
console.log(num1, ">", num2, "=>", res);

res = num1 <num2;
console.log(num1, "<", num2, "=>", res);
res = num1 == num2;
console.log(num1, "==", num2, "=>", res);
res = num1 === num2;
console.log(num1, "===", num2, "=>", res);
res = num1 != num2;
console.log(num1, "!=", num2, "=>", res);
res = num1 !== num2;
console.log(num1, "!==", num2, "=>", res);

num1=12
num2= "12"
res = num1 == num2;
console.log(num1, "==", num2, "=>", res);
res = num1 === num2;
console.log(num1, "===", num2, "=>", res);

// toán tử logic (and &&, or ||; not !)
num1=12;
num2=15;
res=(num1>10)&&(num2<10)
console.log("(num1>10)&&(num2<10)=>",res);
res=(num1>10)|| (num2<10)
console.log("(num1>10)||(num2<10)=>",res);
res=!((num1>10)||(num2<10))
console.log("!((num1>10)||(num2<10))=>",res);
res=!(num1>10)||(num2<10)
console.log("(num1>10)||!(num2<10)=>",res);

//4. toán tử đặc biệt 
res= (num1>10)?"Giá trị lớn hơn":"Nhỏ hơn";
console.log(res);
res= (num2%2==0)?"Số chẵn":"Số lẻ";
console.log(num2,"là",res);

//typeof
res = typeof(num1);//number
console.log("typeof(num1):",res);

num1="123456"
res=typeof(num1);
console.log("typeof(num1):",res);
