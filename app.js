// Chapter 35 to 38
// Qustion No 1
// function show(){
//     const date = new Date();
//     document.write(date)
// }
// show()

// Qustion No 2
// var firstName = prompt("Enter your first Name")
// var lastName = prompt("Enter your Last Name");
// var name = firstName + lastName;
// document.write(" Hello " + name)

// Qustion No 3
// var firstNumber = +prompt("Enter your first Number")
// var secondNumber = +prompt("Enter your second Number");
// var add = firstNumber +  secondNumber;
// document.write(add)

// Qustion No 4
// var firstNumber = +prompt("Enter your first Number")
// var secondNumber = +prompt("Enter your second Number");
// var ope = prompt("Enter Operator");
// if (ope=='+'){
//     var cal = firstNumber +  secondNumber;
// }else if (ope=='-'){
//     var cal = firstNumber -  secondNumber;
// }if (ope=='*'){
//     var cal = firstNumber *  secondNumber;
// }if (ope=='/'){
//     var cal = firstNumber /  secondNumber;
// }

// document.write(cal)

// Qustion No 5
// function squares(num1){
//     var Squares = num1**2;
//     document.write(Squares);
// }
// squares(8)

// Qustion No 6    ***********************
// var num = 5
// function factorial(){
//     var fac = num  
// }

// Qustion No 7
// var startNum = +prompt("Enter a starting point");
// var endNum = +prompt("Enter a end point");
// for (var i = startNum; i<=endNum;i++){
//     document.write(i + "<br>")
// }

// Qustion No 8    
// var base = +prompt("Enter a base")
// var perpendicular = +prompt("Enter a perpendicular")
// function calculateHypotenuse(){
//     var sq_base;
//     var sq_perpendicular;
//     function calculateSquare(){
//         sq_base = base**2
//         sq_perpendicular = perpendicular**2
//         return sq_base
//         return sq_perpendicular
//     }
//     var hyp = calculateSquare(base) * calculateSquare(perpendicular)
//     return hyp
// }
// console.log(calculateHypotenuse(base,perpendicular))

// Qustion No 9
// function area(height,width){
//     var a = height*width
//     document.write(a)
// }
// area(34,56)

// Qustion No 10
//palindrome
//var newStr="";
// function palindrome(str){
//     for (var i=str.length-1;i>=0; i--){
//         newStr = newStr +  str[i]
        
//     }
//     if (str==newStr){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(palindrome("mom"))


// Qustion No 11
// var str = "The Quick Brown Fox"
// function capitalLetter(){
//     for (var i=0;i<str.length;i++){
//         if(str[i]==" "){
//             str = str.slice(str[i])
//             str.toLocaleUpperCase
//         }
//     }
//     return str
// }
// console.log(capitalLetter(str))

// Qustion No 12
// var str = "web development tutorial"
// var long_str = []
// function findLong(){
    
//     var split_str = str.split(" ")
//     long_str.push(split_str)
//     for (var i =0; i<str.length;i++){
//         console.log(i)
//     }
// }
// findLong(str)

// var str = "web development tutorial"
// var long = ""
// function fingLong(){
//     str = str.match(/[a-zA-Z0-9]+/gi);
//     for (var i=0;i<str.length;i++){
//         if(str[i].length>long.length){
//             long=str[i]
//         }
    
//     }
//     return long
// }
// console.log(fingLong(str))

// Qustion No 13
// var str = prompt("Enter a sentence");
// var match_letter = prompt("Enter a Letter")
// var count=0
// function findOcu(){
//     for (var i=0;i<str.length;i++){
//         if (str[i]===match_letter){
//             count += 1
            
//         }
//     }
//     return count
// }
// console.log(findOcu(str, match_letter))


// Qustion No 14
// function calcCircumference( radius){
//     var circum = radius * 2 * Math.PI
//     return circum
// }

// function calcArea(radius){
//     var area = Math.PI * radius**2
//     return area
// }
// console.log(calcCircumference(3))
// console.log(calcCircumference(6))
