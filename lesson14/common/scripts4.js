$(document).ready(function(){
    $("#HTML").click(function(){
        $("#HTML").css("background-color","red");
        $("#content").text("html viết tắt Hyper Text Markup Language");
        $("#PHP,#Css,#Jquery").css("backgorund","#ccc");
    })
    $("#Css").click(function(){
        $("#Css").css("background-color","green");
        $("#content").text("thay đổi hiển thị thẻ html");
        $("#PHP,#HTML,#Jquery").css("backgorund","blue");
    })
    $("#Jquery").click(function(){
        $("#Jquery").css("background-color","yellow");
        $("#content").text("thư viện của js");
        $("#PHP,#Css,#HTML").css("backgorund","blue");
    })
    $("#PHP").click(function(){
        $("#PHP").css("background-color","orange");
        $("#content").text("ngôn ngữ PHP");
        $("#HTML,#Css,#Jquery").css("backgorund","blue");
    })
})