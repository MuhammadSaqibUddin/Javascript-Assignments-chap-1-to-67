//===================Chapter:1 Assignment start==================================
//Q:1 .Ans
//alert("Assalam-u-alaikum, How are you.?\nWelcome to example.com");

//Q:2 .Ans
//alert("Eror! Please enter a valid password");

//Q:3 .Ans
//alert("Welcome to JS Land...\nHappy Coding!");

//Q:4 .Ans
// alert("Welcome to JS Land...");
// alert("Happy Coding!\n\u25A2 Prevent this page from creating additional dialogs");

//Q:5 .Ans
// console.log("Hello... I can run JS through my web browser's console");

//==============================Chapter:1 end ====================================


//===================Chapter:2 Assignment start==================================
// Q:1 .Ans
//var username;

// Q:2 .Ans
// var myName = "Muhammad Saqib";

// Q:3 .Ans
// 3(a) var message;
// 3(b) message = "Hello World";
// 3(c) alert(message);

// Q:4 .Ans
// var studentName = "Johne Doe", studentAge = "15 years old", studentCourse = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

// Q:5 .Ans
// var pizza = "PIZZA";
// alert(pizza+"\n"+pizza.slice(0,4)+"\n"+pizza.slice(0,3)+"\n"+pizza.slice(0,2)+"\n"+pizza.slice(0,1));

// Q:6 .Ans
// var email;
// email = "saqibuddin083@gmail.com";
// alert("My email address is "+email);

// Q:7 .Ans
// var book;
// book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+book);

// Q:8 .Ans
// document.write("Yah! I can write HTML content through Javascript");

// Q:9 .Ans
// var s = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(s);
// document.write(s);

//==============================Chapter:2 end ====================================


//==============================Chapter:3 Assignment start ==============================
// Q:1 .Ans
// var age;
// age = "22";
// alert("I am "+age+" years old");

// Q:2 .Ans 
// let n = 0;
// document.write("You have visited this site "+ ++n +" times");

// Q:3 .Ans
// var birthYear;
// birthYear = 1994;
// document.write("My birth year is "+ birthYear+ "<br>Data type of my declared variable is "+typeof(birthYear));

// Q:4 .Ans
// var visitorName = "John Doe", productTitle = "T-shirts(s)", quantity = 5;
// document.write(visitorName+" ordered "+ quantity+" "+productTitle+ " on XYZ Clothing store");

//==============================Chapter:3 end ==========================================


//==============================Chapter:4 Assignment start ==============================
// Q:1 .Ans
// var name, age, gender;

// Q:2 .Ans
// Legal variable declaration
// 1: var userName;
// 2: var first_Name;
// 3: var name1;
// 4: var $name;
// 5: var _name;

// Illegal variable declaration
// 1: var user name;
// 2: var 1name;
// 3: var #name;
// 4: var var;
// 5: var name%;

// Q:3 .Ans
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain, numbers, $, and _. For example: $my_1stVariable<br>");
// document.write("Variables must begin with a, letters, $, or _. For example: $name, _name or name<br>"); 
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keywords");

//==============================Chapter:4 end ==========================================


//==============================Chapter:5 Assignment start ==============================
// Q:1 .Ans
// var num1 = +prompt("Enter 1st number : ","enter any number");
// var num2 = +prompt("Enter 2nd number : ","enter any number");
// var result = num1 + num2;
// document.write("Sum of "+num1 +" and "+num2 +" is "+result);

// Q:2 .Ans
// var num1 = +prompt("Enter 1st number : ","enter any number");
// var num2 = +prompt("Enter 2nd number : ","enter any number");
// var subtract = num1 - num2;
// var multiply = num1 * num2;
// var divide = num1 / num2;
// var modulus = num1 % num2;
// document.write("Subtraction of "+num1 +" and "+num2 +" is "+subtract+"<br>");
// document.write("Multiplication of "+num1 +" and "+num2 +" is "+multiply+"<br>");
// document.write("Division of "+num1 +" and "+num2 +" is "+divide+"<br>");
// document.write("Modulus of "+num1 +" and "+num2 +" is "+modulus);

// Q:3 .Ans
// var num;
// document.write("Value after variable declaration is "+num+"<br>");
// num = 5;
// document.write("Initial value: "+num+"<br>");
// num++;
// document.write("Value after increment: "+num+"<br>");
// num = num + 7;
// document.write("Value after addition is: "+num+"<br>"); 
// num--;
// document.write("Value after decrement is: "+num+"<br>");
// num = num % 3;
// document.write("The remainder is: "+num);

// Q:4 .Ans
// var ticket_Price = 600;
// var buying_Tickets = 5;
// var cost = ticket_Price * buying_Tickets;
// document.write("Total cost to buy "+buying_Tickets+" tickets to a movie is "+cost+"PKR");

// Q:5 .Ans
// document.write("Table of 5 <br>");
// for(var i = 1; i<=10; i++){
//     document.write("5 x "+i+" = "+ 5*i+"<br>");
// }

// Q:6 .Ans
// var celsius = 25;
// var fahrenheit = (celsius * (9/5))+ 32;
// document.write(celsius+"<sup>o</sup>C is "+fahrenheit+"<sup>o</sup>F<br>");
// var fahrenheit = 70;
// var celsius = (fahrenheit -32) * (5/9);
// document.write(fahrenheit+"<sup>o</sup>F is "+celsius+"<sup>o</sup>C");

// Q:7 .Ans
// var item1_Price = 650, item2_Price = 100, quantity_Item1 = 3,quantity_Item2 = 7, shipping_Charges = 100, cost;
// cost = (item1_Price * quantity_Item1) + (item2_Price * quantity_Item2) + shipping_Charges;
// document.write("<h1>Shopping Cart</h1><br><br><br>");
// document.write("Price of Item 1 is "+item1_Price +"<br>");
// document.write("Quantity of Item 1 is "+quantity_Item1 +"<br>");
// document.write("Price of Item 2 is "+item2_Price +"<br>");
// document.write("Quantity of Item 2 is "+quantity_Item2 +"<br>");
// document.write("Shipping Charges "+shipping_Charges +"<br><br>");
// document.write("Total cost of your order is "+cost);

// Q:8 .Ans
// var total_Marks = 980, obt_Marks = 804, percentage;
// percentage = (obt_Marks/total_Marks) * 100;
// document.write("<h1>Marks Sheet</h1><br><br><br>");
// document.write("Total marks: "+total_Marks+"<br>");
// document.write("Marks obtained: "+obt_Marks+"<br>");
// document.write("Percentage: "+percentage+"%");

// Q:9 Ans
// var dollar = 10, riyal = 25,pkr;
// pkr = (dollar * 104.80)+ (riyal * 28);
// document.write("<h1>Currency in PKR</h1><br><br><br>");
// document.write("Total currency in PKR: "+pkr);

// Q:10 .Ans
// var num = 10;
// var result = (num + 5 * 10) / 2;
// document.write(result);

// Q:11 .Ans
// var today = new Date();
// var current_Year = today.getFullYear();
// var birth_Year = 1996;
// document.write("<h1>Age Calculator</h1><br><br><br>");
// document.write("Current Year: "+current_Year+"<br>");
// document.write("Birth Year: "+birth_Year+"<br>");
// document.write("Your age is: "+(current_Year - birth_Year));

// Q:12 .Ans
// var radius = 20;
// document.write("<h1>The Geometrizer</h1><br><br><br>");
// document.write("Radius of a circle: "+ radius+"<br>");
// document.write("The circumference is: "+(2 * Math.PI * radius)+"<br>");
// document.write("The area is: "+(Math.PI * Math.pow(radius,2)).toFixed(1) );

// Q:13 .Ans
// var snack = "Chocolate chip";
// var age = 20;
// var max_age = 60;
// var amount = 3;
// document.write("<h1>The Lifetime Supply Calculator</h1><br><br><br>");
// document.write("Favourite Snack: "+snack+"<br>");
// document.write("Current Age: "+age+"<br>");
// document.write("Estimated Maximum Age: "+max_age+"<br>");
// document.write("Amount of snacks per day: "+amount+"<br>");
// document.write("You will need "+((max_age - age) * 3) +" chocolate chip to last you until the ripe old age of "+max_age);

//==============================Chapter:5 end ==========================================



//==============================Chapter:6-9 Assignment start ==============================
// Q:1 .Ans
// var num = +prompt("Enter a number","your number");
// document.write("Result:<br>The value of num is: "+num+"<br>............................................<br><br>");
// document.write("The value of ++num is: "+ (++num)+"<br>Now the value of num is: "+num+"<br><br><br>");
// document.write("The value of num++ is: "+ (num++)+"<br>Now the value of num is: "+num+"<br><br><br>");
// document.write("The value of --num is: "+ (--num)+"<br>Now the value of num is: "+num+"<br><br><br>");
// document.write("The value of num-- is: "+ (num--)+"<br>Now the value of num is: "+num);

// Q:2 .Ans
// document.write("--a;    This is pre-decrement means it decrement the value first then print, so the value of a is 1<br><br>");
// document.write("--a - --b;     value of --a is 1 and --b is 0, so the output will be: 1 - 0 = 1 <br><br>");
// document.write("--a - --b + ++b;     value of --a is 1 and --b is 0 and ++b is 1,then: 1 - 0 + 1 = 2 <br><br>");
// document.write("--a - --b + ++b + b--;   value of --a is 1 and --b is 0 and ++b is 1 and b-- is 1 because it is post-decrement,so : 1 - 0 + 1 + 1= 3<br><br>");
// document.write("The output is: 3");

// Q:3 .Ans
// var name = prompt("Enter your Name: ","your name");
// document.write("<h1>"+name+"</h1> <br><h2>Assalam-u-alaikum. How are you.?</h2><br><h2>Welcome to Javascript Programming</h2>");

// Q:4 .Ans
// var num = +prompt("Enter a number for print table","your number");
// if(!num){
//     num = 5;
// }
// for(var i = 1; i<=10; i++){
//     document.write(num+" x "+i+" = "+num*i+"<br>");
// }

// Q:5 .Ans
// var subject_1 = prompt("Enter name of 1st subject","subject name");
// var subject_2 = prompt("Enter name of 2nd subject","subject name");
// var subject_3 = prompt("Enter name of 3rd subject","subject name");
// var totalMarks = 100;
// var obtMarks_1 = +prompt("Enter obtained marks for "+ subject_1 ,"obtained marks");
// var obtMarks_2 = +prompt("Enter obtained marks for "+ subject_2 ,"obtained marks");
// var obtMarks_3 = +prompt("Enter obtained marks for "+ subject_3 ,"obtained marks");
// var total_Obtained = obtMarks_1 + obtMarks_2 + obtMarks_3;
// document.write("<table>"+
//                   "<tr>"+ 
//                      "<th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th>"+ 
//                   "</tr>"+

//                   "<tr>"+
//                      "<td>"+ subject_1 +"</td> <td>"+ totalMarks +"</td> <td>"+ obtMarks_1 +"</td> <td>"+ Math.round((obtMarks_1/totalMarks)* 100) +"%</td>"+                  
//                   "</tr>"+

//                   "<tr>"+
//                      "<td>"+ subject_2 +"</td> <td>"+ totalMarks +"</td> <td>"+ obtMarks_2 +"</td> <td>"+ Math.round((obtMarks_2/totalMarks)* 100) +"%</td>"+                  
//                   "</tr>"+

//                   "<tr>"+
//                      "<td>"+ subject_3 +"</td> <td>"+ totalMarks +"</td> <td>"+ obtMarks_3 +"</td> <td>"+ Math.round((obtMarks_3/totalMarks)* 100) +"%</td>"+                  
//                   "</tr>"+

//                   "<tr style="+" text-align: center; \">"+
//                      "<th> </th> <th>"+ (totalMarks*3) +"</th> <th>"+ total_Obtained +"</th> <th>"+  Math.round((total_Obtained/(totalMarks*3))* 100).toFixed(1) +"%</th>"+                  
//                   "</tr>"+

//                 "</table>");

//==============================Chapter:6-9 end ==========================================


//==============================Chapter:9-11 Assignment start ==============================
// Q:1 .Ans
// var city = prompt("Enter city name","city name");
// if(city.toLowerCase()==="karachi"){
//     alert("Welcome to city of lights");
// }

//Q:2 .Ans 
// var gender = prompt("Enter your gender","gender");
// if(gender.toLowerCase()==="male"){
//     alert("Good Morning Sir.");
// }
// else if(gender.toLowerCase()==="female"){
//     alert("Good Morning Ma'am");
// }

// Q:3 .Ans
// var color1 = prompt("Enter 1st color name of traffic signal","color name");
// var color2 = prompt("Enter 2nd color name of traffic signal","color name");
// var color3 = prompt("Enter 3rd color name of traffic signal","color name");
// var redMsg= "Must Stop", yellowMsg = "Ready to move", greenMsg = "Move now",redColor = "Red",yellowColor = "Yellow",greenColor = "Green",color1Msg,color2Msg,color3Msg;
// if(color1.toLowerCase()===redColor.toLowerCase()){
//    color1 = redColor;
//    color1Msg = redMsg;
// }
// else if(color1.toLowerCase()===yellowColor.toLowerCase()){
//    color1 = yellowColor
//    color1Msg = yellowMsg;
// }
// else if(color1.toLowerCase()===greenColor.toLowerCase()){
//    color1 = greenColor;
//    color1Msg = greenMsg;
// }
// if(color2.toLowerCase()===redColor.toLowerCase()){
//    color2 = redColor;
//    color2Msg = redMsg;
// }
// else if(color2.toLowerCase()===yellowColor.toLowerCase()){
//    color2 = yellowColor;
//    color2Msg = yellowMsg;
// }
// else if(color2.toLowerCase()===greenColor.toLowerCase()){
//    color2 = greenColor;
//    color2Msg = greenMsg;
// }
// if(color3.toLowerCase()===redColor.toLowerCase()){
//    color3 = redColor;
//    color3Msg = redMsg;
// }
// else if(color3.toLowerCase()===yellowColor.toLowerCase()){
//    color3 = yellowColor;
//    color3Msg = yellowMsg;
// }
// else if(color3.toLowerCase()===greenColor.toLowerCase()){
//    color3 = greenColor;
//    color3Msg = greenMsg;
// }
// document.write("<table class="+" color-table \" "+ ">"+
//                   "<tr>"+ 
//                      "<th> Signal color </th> <th> Message </th>"+ 
//                   "</tr>"+

//                   "<tr>"+
//                      "<td><b>"+ color1 +"</b></td> <td>"+ color1Msg +"</td>"+                  
//                   "</tr>"+

//                   "<tr>"+
//                      "<td><b>"+ color2 +"</b></td> <td> "+ color2Msg +"</td>"+                  
//                   "</tr>"+

//                   "<tr>"+
//                      "<td><b>"+ color3 +"</b></td> <td> "+ color3Msg +" </td>"+                  
//                   "</tr>"+

//                   "<tr><td> <br> </td> <td> <br> </td> </tr>"+

//                 "</table>");

// Q:4 .Ans
// var fuel = +prompt("Enter remaining fuel(in litres)","fuel litres");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car.")
// }

// Q:5 .Ans
// a.  output: Alert message displayed
// b.  output: Alert message not displayed
// c.  output: condition 2 and 4 displayed
// d.  output: Alert message displayed
// e.  output: only True message displayed
// f.  output: Alert message displayed 

// Q:6 .Ans
// var obtMarks_1 = +prompt("Enter obtained marks for 1st subject","obtained marks");
// var total_Marks_1 = +prompt("Enter total marks for 1st subject","total marks");
// var obtMarks_2 = +prompt("Enter obtained marks for 2nd subject","obtained marks");
// var total_Marks_2 = +prompt("Enter total marks for 2nd subject","total marks");
// var obtMarks_3 = +prompt("Enter obtained marks for 3rd subject","obtained marks");
// var total_Marks_3 = +prompt("Enter total marks for 3rd subject","total marks");
// var total_Marks = total_Marks_1 + total_Marks_2 + total_Marks_3;
// var obt_Marks = obtMarks_1 + obtMarks_2 + obtMarks_3;
// var percentage = Math.round( (obt_Marks/total_Marks) * 100 );
// var remarks,grade;
// if(percentage >= 80){
//     remarks = "Excellent";
//     grade = "A-one";
// }
// else if(percentage >= 70){
//     remarks = "Good";
//     grade = "A";
// }
// else if(percentage >= 60){
//     remarks = "You need to improve";
//     grade = "B";
// }
// else{
//     remarks = "Sorry";
//     grade = "Fail";
// }
// document.write("<h1>Marks Sheet</h1><br><br><br>Total marks: "+total_Marks+"<br>"
//                  +"Marks obtained : "+obt_Marks+"<br>"+"Percentage : "+percentage+"%<br>"
//                  +"Grade : "+grade+"<br>"+"Remarks: "+remarks);

// Q:7 .Ans
// var num = 7;
// var guess = +prompt("Guess a secret number from 1 to 10","enter a number");
// if(guess===num){
//     alert("Bingo! Correct Answer.");
// }
// else if(++guess===num){
//     alert("Close enough to the correct answer.");
// }

// Q:8 .Ans
// var num = +prompt("Enter a number","enter number");
// if((num % 3)===0){
//     alert("Given number is divisible by 3");
// }
// else{
//     alert("Given number is not divisible by 3");
// }

// Q:9 .Ans
// var num = +prompt("Enter a number to check even or odd","enter number");
// if((num % 2)===0){
//     alert(num+" is an even number");
// }
// else{
//     alert(num+" is an odd number");
// }

// Q:10 .Ans
// var temperature = +prompt("Enter temperature","temperature");
// if(temperature > 40){
//     alert("It is too hot outside.");
// }
// else if(temperature > 30){
//     alert("The Weather today is Normal.");
// }
// else if(temperature > 20){
//     alert("Today's Weather is cool.");
// }
// else if(temperature > 10){
//     alert("OMG! Today's Weather is so Cool.");
// }

// Q:11 .Ans
// var num1 = +prompt("Enter 1st number","1st number");
// var num2 = +prompt("Enter 2nd number","2nd number");
// var operation = prompt("Enter operation(+, - , *, /, %)","operation");
// var result;
// if(operation==="+"){
//     result = num1 + num2;
// }
// else if(operation==="-"){
//     result = num1 - num2;
// }
// else if(operation==="*"){
//     result = num1 * num2;
// }
// else if(operation==="/"){
//     result = num1 / num2;
// }
// else if(operation==="%"){
//     result = num1 % num2;
// }
// document.write("<h3>1st Number : "+num1+"<br>"+"2nd Number : "+num2
//                +"<br>"+"Operation : <span style="+"font-size:30px;\" >"+operation+"</span><br>"+"Result : "+result+"</h3>");


//==============================Chapter:9-11 end ==========================================


//==============================Chapter:12-13 Assignment start ==============================
// Q:1 .Ans
// var character = prompt("Enter any character");
// if((character.charCodeAt() >= 65 && character.charCodeAt() <= 90)){
//     alert("Given input is an uppercase letter.");
// }
// else if((character.charCodeAt() >= 97 && character.charCodeAt() <= 122)){
//     alert("Given input is lowercase letter.");
// }
// else if((character.charCodeAt() >= 48 && character.charCodeAt() <= 57)){
//     alert("Given input is number");
// }

// Q:2 .Ans
// var num1 = +prompt("Enter 1st number","number");
// var num2 = +prompt("Enter 2nd number","number");
// if(num1 > num2){
//     alert(num1+" is larger than "+ num2);
// }
// else if(num2 > num1){
//     alert(num2+" is larger than "+ num1);
// }
// else{
//     alert(num1+" and "+ num2+" are equal");
// }

// Q:3 .Ans
// var num = +prompt("Enter any number","any number");
// if(num > 0){
//     alert( num+" is positive number");
// }
// else if(num < 0){
//     alert( num+" is negative number");
// }
// else{
//     alert( "given number is zero");
// }

// Q:4 .Ans
// var character = prompt("Enter a character for checking vowels","character");
// if(character.charAt(0).toLocaleLowerCase()==="a" || character.charAt(0).toLocaleLowerCase()==="e" || character.charAt(0).toLocaleLowerCase()==="i" || character.charAt(0).toLocaleLowerCase()==="o" || character.charAt(0).toLocaleLowerCase()==="u"){
//     alert("true");
// }
// else{
//     alert("false");
// }

// Q:5 .Ans
// var originalPass = "javascript";
// var givenPass = prompt("Enter your password");
// if (givenPass === "") {
//     alert("Please enter your password");
// }
// else if(givenPass===originalPass){
//     alert("Correct! The password you entered matches the original password.");
// }
// else{
//     alert("Incorrect password");
// }

// Q:6 .Ans
// var greeting;
// var hour = 13;
// if(hour < 18){
//     greeting = "Good day";
//     alert(greeting);
// }
// else{
//     greeting = "Good evening";
//     alert(greeting);
// }

// Q:7 .Ans
// var time = +prompt("Enter time in 24 hour clock (ex: 1900 = 7pm)","time");
// if(time >= 0000 && time < 1200){
//     alert("Good morning!");
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good afternoon!");
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good evening!");
// }
// else if(time >= 2100 && time <= 2359){
//     alert("Good night!");    
// }
// else{
//     alert("please give the time in this format like: 1300 and within a range 0000 to 2359");
// }

//==============================Chapter:12-13 end ==========================================


//==============================Chapter:14-16 Assignment start ==============================
// Q:1 .Ans
// var student = [];

// Q:2 .Ans
// var student = new Array();

// Q:3 .Ans
// var student = [];
// student[0] = "Muhammad Ali";
// student[1] = "Talha";
// student[2] = "Muhammad Saqib";

// Q:4 .Ans
// var number = [];
// number[0] = 232;
// number[1] = 543;
// number[2] = 466;

// Q:5 .Ans
// var boolean = [];
// boolean[0] = true;
// boolean[1] = false;

// Q:6 .Ans
// var mixedArry = [];
// mixedArry[0] = "Muhammad Ali";
// mixedArry[1] = 47456;
// mixedArry[2] = true;
// alert(mixedArry);

// Q:7 .Ans
// var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M .Phil.","PhD"];
// document.writeln("<h1>Qualifications:</h1>"
//                  +"<h3> 1) "+qualification[0]+"<br>"
//                  +"2) "+qualification[1]+"<br>"
//                  +"3) "+qualification[2]+"<br>"
//                  +"4) "+qualification[3]+"<br>"
//                  +"5) "+qualification[4]+"<br>"
//                  +"6) "+qualification[5]+"<br>"
//                  +"7) "+qualification[6]+"<br>"
//                  +"8) "+qualification[7]+"</h3>");

// Q:8 .Ans
// var students = ["Michael","John","Tony"];
// var scores = [320,230,480];
// document.write("Score of "+students[0]+" is "+scores[0]+". Percentage : "
// +(scores[0]/500)*100+"%<br>"
// +"Score of "+students[1]+" is "+scores[1]+". Percentage : "
// +(scores[1]/500)*100+"%<br>"
// +"Score of "+students[2]+" is "+scores[2]+". Percentage : "
// +(scores[2]/500)*100+"%<br>");

// Q:9 .Ans
// var colorArry = ["green","red","yellow","blue"];
// document.writeln("<h2>Colors</h2>");
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (a)
// var addColor = prompt("Which color you want to add to the beginning enter the name","color name");
// colorArry.unshift(addColor);
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (b)
// var addColor = prompt("Which color you want to add to the end enter the name","color name");
// colorArry.push(addColor);
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (c)
// colorArry.unshift("white","black");
// for(var i= 0; i < colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (d)
// colorArry.shift();
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (e)
// colorArry.pop();
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (f)
// var index = +prompt("At which index you wants to add a color enter index number","index number");
// var colorName = prompt("Enter color name which you want to add","color name");
// if(index > -1 && index!= -0 && index < colorArry.length){
//     colorArry.splice(index,0,colorName);
// }
// else{
//     alert("Invalid index");
// }
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// 9: (g)
// var index = +prompt("Which index you wants to delete the color enter index number","index number");
// var num = +prompt("How many colors you want to delete enter number","enter number");
// if(index > -1 && num > -1 && num!= -0 && index!= -0 && num < colorArry.length  && index < colorArry.length){
//     colorArry.splice(index,num);
// }
// else{
//     alert("Invalid index or number");
// }
// for(var i= 0; i< colorArry.length; i++){ 
//     document.writeln((i+1)+". "+colorArry[i]+"<br>");
// }

// Q:10 .Ans
// var scores = [320,230,480,120];
// document.writeln("Scores of Students : "+scores[0]+","+scores[1]+","+scores[2]+","+scores[3]
//                  +"<br>Ordered Scores of Students : "+scores.sort());


//Q:11 .Ans
// var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var copy = city.slice(2,4);
// document.writeln("Cities list:<br>");
// for(var i=0; i < city.length; i++){
//     document.writeln(city[i]+",");
// }
// document.writeln("<br><br>Selected cities list:<br>"+copy[0]+","+copy[1]);

//Q:12 .Ans
// var arr = ["This", "is", "my", "cat"];
// var join = arr.join(" ");
// document.writeln("<h1>Array:<br>"
// +arr[0]+","+arr[1]+","+arr[2]+","+arr[3]+"<br><br>"
// +"String:<br>"+join +"</h1>");

//Q:13 .Ans
// var devices = ["keyboard","mouse","printer","monitor"];
// document.writeln("Devices:<br>"
// +devices[0]+","+devices[1]+","+devices[2]+","+devices[3]+"<br><br>"
// +"Out:<br>"+devices.shift()+"<br>"+"Out:<br>"+devices.shift()+"<br>"
// +"Out:<br>"+devices.shift()+"<br>"+"Out:<br>"+devices.shift()+"<br>");

//Q:14 .Ans
// var devices = ["keyboard","mouse","printer","monitor"];
// document.writeln("Devices:<br>"
// +devices[0]+","+devices[1]+","+devices[2]+","+devices[3]+"<br><br>"
// +"Out:<br>"+devices.pop()+"<br>"+"Out:<br>"+devices.pop()+"<br>"
// +"Out:<br>"+devices.pop()+"<br>"+"Out:<br>"+devices.pop()+"<br>");

//Q:15 .Ans
// var manufacturer = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<select>"
// +"<option value="+manufacturer[0]+"\">"+manufacturer[0]+"</option>"
// +"<option value="+manufacturer[1]+"\">"+manufacturer[1]+"</option>"
// +"<option value="+manufacturer[2]+"\">"+manufacturer[2]+"</option>"
// +"<option value="+manufacturer[3]+"\">"+manufacturer[3]+"</option>"
// +"<option value="+manufacturer[4]+"\">"+manufacturer[4]+"</option>"
// +"<option value="+manufacturer[5]+"\">"+manufacturer[5]+"</option>"
// +"</select>");


//==============================Chapter:14-16 end ==========================================


//==============================Chapter:17-20 Assignment start ===========================
// Q:1 .Ans
// var arr = [[],[]];

//Q:2 .Ans
// var arr = [[],[],[]];
// arr[0] = [0,1,2,3];
// arr[1] = [1,0,1,2];
// arr[2] = [2,1,0,1];

//Q:3 .Ans
// for(var i = 1; i<=10; i++){
//     document.write(i+"<br>");
// }

//Q:4 .Ans
// var table = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");
// document.write("Multiplication table of "+table+"<br>Length "+length+"<br><br>");
// for(var i = 1; i <= length; i++){
//     document.write(table+" x "+i+" = "+(table*i)+"<br>");
// }

//Q:5 .Ans
// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i]+"<br>");
// }
// document.write("<br><br>");
// for(var i = 0; i < fruits.length; i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }

//Q:6 .Ans
// 6: (a)
// document.write("<h3>Counting:</h3>");
// for(var i = 1; i <= 15; i++){
//     document.write(i+",");
// }

// 6: (b)
// document.write("<h3>Reverse counting:</h3>");
// for(var i = 10; i >= 1; i--){
//     document.write(i+",");
// }

// 6: (c)
// document.write("<h3>Even:</h3>");
// for(var i = 0; i <= 20; i++){
//     if(i%2==0){
//         document.write(i+",");
//     }
// }

// 6: (d)
// document.write("<h3>Odd:</h3>");
// for(var i = 0; i < 20; i++){
//     if(i%2==1){
//         document.write(i+",");
//     }
// }

// 6: (e)
// document.write("<h3>Series:</h3>");
// for(var i = 2; i <= 20; i += 2){
//     document.writeln(i+"k,");
// }

//Q:7 .Ans
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var index = -1; 
// for(var i=0; i < A.length; i++){
//     if(input.toLowerCase() === A[i]){
//         index = i;
//         break;
//     }
// }
// if(index > -1){
//     document.write(input.toLowerCase()+" is <b>available</b> at index "+index+" in our bakery");
// }
// else{
//     document.write("We are sorry."+ input.toLowerCase() +" is <b>not available</b> in our bakery");
// }

//Q:8 .Ans
// var A = [24, 53, 78, 91, 12];
// var large = A[0];
// document.write("Array items: ");
// for(var i = 0; i < A.length; i++){
//     document.write(A[i]+",");
//     if(A[i+1] > large){
//         large = A[i+1];
//     }
// }
// document.write("<br>The largest number is "+large);

//Q:9 .Ans
// var A = [24, 53, 78, 91, 12];
// var small = A[0];
// document.write("Array items: ");
// for(var i = 0; i < A.length; i++){
//     document.write(A[i]+",");
//     if(A[i+1] < small){
//         small = A[i+1];
//     }
// }
// document.write("<br>The smallest number is "+small);

//Q:10 .Ans
// for(var i = 1; i<=20; i++){
//     document.write(i*5+",");
// }

//==============================Chapter:17-20 end =======================================

//==================== Chapter: 21-25 Assignment start =======================
//Q:1 .Ans
// var firstName = prompt("Enter your first name","first name");
// var lastName = prompt("Enter your last name","last name");
// var fullName = firstName +" "+ lastName;
// alert("Hi, "+fullName +"\nWelcome to javascript.");

// Q:2 .Ans
// var mobileName = prompt("Enter the name of your favorite mobile phone model");
// document.write("My favorite phone is: "+mobileName
// +"<br>Length of string: "+mobileName.length);

//Q:3 .Ans
// var a = "Pakistani";
// document.write("String: "+a+"<br>Index of 'n': "+a.indexOf('n'));

// Q:4 .Ans
// var a = "Hello World";
// document.write("String: "+a+"<br>Last Index of 'l': "+a.lastIndexOf('l'));

//Q:5 .Ans
// var a = "Pakistani";
// document.write("String: "+a+"<br>Character at index 3: "+a[3]);

//Q:6 .Ans
// var firstName = prompt("Enter your first name","first name");
// var lastName = prompt("Enter your last name","last name");
// var fullName = firstName.concat(" "+lastName);
// alert("Hi, "+fullName +"\nWelcome to javascript.");

//Q:7 .Ans
// var city = "Hyderabad";
// document.write("City: "+city+"<br>After replacement: "+city.replace("Hyder","Islam"));

//Q:8 .Ans
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceMsg = message.replace("and","&").replace("and","&");
// document.write("String: "+message+"<br>After replacement: "+replaceMsg);

//Q:9 .Ans
// var num = "472";
// var n = parseInt(num);
// document.write("Value: "+num+"<br>Type: "+typeof(num)+"<br>"+"Value: "+n+"<br>Type: "+typeof(n));

//Q:10 .Ans
// var input = prompt("Enter any string");
// document.write("User input: "+input
// +"<br>Upper case: "+input.toUpperCase());

//Q:11 .Ans
// var input = prompt("Enter any string");
// var txtSplit, finalTxt = "", firstChar, otherChars;
// if (input.search(" ") && input != "") {
//     txtSplit = input.split(" ");
//     for (var i = 0; i < txtSplit.length; i++) {
//         firstChar = txtSplit[i].slice(0, 1);
//         otherChars = txtSplit[i].slice(1);
//         txtSplit[i] = firstChar.toUpperCase() + otherChars.toLowerCase();
//         finalTxt += txtSplit[i] + " ";
//     }
//     document.write("User input: " + input + "<br>Title case: " + finalTxt);
// }
// else {
//     if (input != "") {
//         firstChar = input.slice(0, 1);
//         otherChars = input.slice(1);
//         finalTxt = firstChar.toUpperCase() + otherChars.toLowerCase();
//         document.write("User input: " + input + "<br>Title case: " + finalTxt);
//     }
// }

//Q:12 .Ans
// var num = 35.36;
// var s = num.toString().split('.').join("");
// document.write("Number: "+num+"<br>Result: "+s);

//Q:13 .Ans
// var name = prompt("Enter your username");
// for(var i = 0; i < name.length; i++){
//     if((name[i].charCodeAt(0) >= 33 && name[i].charCodeAt(0) <= 47) || (name[i].charCodeAt(0) >= 58 && name[i].charCodeAt(0) <= 64) || (name[i].charCodeAt(0) >= 91 && name[i].charCodeAt(0) <= 96) || (name[i].charCodeAt(0) >=123 && name[i].charCodeAt(0) <= 126)){
//         alert("\u26A0 Please enter a valid username\n\n\u25A2 Prevent this page from creating additional dialog");
//     }
// }

//Q:14 .Ans
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = window.prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var index = -1;
// for(var i = 0; i < items.length; i++){
//     if(items[i] === input.toLowerCase()){
//         index = i;
//     }
// }
// if(input){
//     if(index > -1){
//         document.write(input.toLowerCase()+" is <b>available</b> at index "+index+" in our bakery");
//     }
//     else{
//         document.write("We are sorry. "+input.toLowerCase()+" is <b>not available</b> in our bakery");
//     }
// }
// else{
//     alert("Please enter item name you want.");
// }

//Q:15 .Ans
// var alphanumeric = /^[0-9a-zA-Z]+$/;
// var password = prompt("Enter your password");
// document.write("Entered password: "+password+"<br>");

// if(password.match(alphanumeric)){
//     if((password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57)){
//         document.write("Password can not begin with a number<br>Please enter a valid password");
//     }
//     else if(password.length < 6){
//         document.write("Password must be at least 6 characters long");
//     }
//     else{
//         document.write("Correct!. Password is valid");
//     }
// }
// else{
//     document.write("Password should contain alphabets and numbers<br>Please enter a valid password");
// }

//Q:16 .Ans
// var university = "University of Karachi";
// var arr = university.split('');
// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i]+"<br>");
// }

//Q:17 .Ans
// var input = prompt("Enter any string");
// document.write("User input: "+input+"<br>"+"Last character of input: "+input.charAt(input.length - 1));

//Q:18 .Ans
// var txt = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var arr = txt.split(" ");
// for(var i = 0; i < arr.length; i++){
//     if(arr[i].toLowerCase() === "the"){
//         count++;
//     }
// } 
// document.write("Text: "+txt+"<br>There are "+count+" occurrence(s) of word 'the'");

//======================= Chapter: 21-25 end =======================================

//==================== Chapter: 26-30 Assignment start =============================
//Q:1 .Ans
// var num = +prompt("Enter a positive integer");
// document.write("number: "+num+"<br>round off value: "+Math.round(num)
// +"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num));

//Q:2 .Ans
// var num = +prompt("Enter negative floating point number");
// document.write("number: "+num+"<br>round off value: "+Math.round(num)
// +"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num));

//Q:3 .Ans
// var num = +prompt("Enter any number");
// document.write("The absolute value of "+num+" is "+Math.abs(num));

//Q:4 .Ans
// var num = Math.random();
// var range = (num * 6) + 1;
// var diceNum = Math.floor(range);
// document.write("random dice value: "+diceNum);

//Q:5 .Ans
// var num = Math.floor((Math.random() * 2) + 1);
// if(num > 1){
//     document.write(num+"<br>random coin value: Heads");
// }
// else{
//     document.write(num+"<br>random coin value: Tails");
// }

//Q:6 .Ans
// var num = Math.floor((Math.random() * 100) + 1);
// document.write("random number between 1 and 100: "+num)

//Q:7 .Ans
// var weight = prompt("Enter your weight in kilograms");
// var unit = "",num = "";
// for(var i = 0; i < weight.length; i++){
//     if((weight.charCodeAt(i) >= 48 && weight.charCodeAt(i) <= 57) || weight.charCodeAt(i) == 46){
//         num += weight.charAt(i);  
//     }
//     else{
//         unit += weight.charAt(i);
//     }
// }
// if((unit == "" || unit.charCodeAt(0) == 32 || unit.toLowerCase() === "kgs" || unit.toLowerCase() === "kilograms") && num!=""){
//     document.write("The weight of user is "+num+" kilograms");
// }
// else{
//     alert("wrong input");
// }

//Q:8 .Ans
// var secret = Math.floor((Math.random() * 10) + 1);
// var input = +prompt("Enter a number between 1 and 10");
// if(secret === input){
//     alert("Congratulate! You win");
// }
// else{
//     alert("Try again!");
// }

//======================= Chapter: 26-30 end =======================================


//==================== Chapter: 31-34 Assignment start =============================
//Q:1 .Ans
// document.write(new Date());

//Q:2 .Ans
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert("Current month: "+ month[new Date().getMonth()] );

//Q:3 .Ans
// alert("Today is "+ new Date().toString().slice(0,3));

//Q:4 .Ans
// var day = new Date().toString().slice(0,3);
// if(day === "Sat" || day === "Sun"){
//     document.write("It's Fun day");
// }

//Q:5 .Ans
// var date = new Date().getDate();
// if(date < 16){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }

//Q:6 .Ans
// var date = new Date();
// document.write("Current Date: "+date+"<br>"
// +"Elapsed milliseconds since January 1, 1970: "+date.getTime()+"<br>"
// +"Elapsed minutes since January 1, 1970: "+ date.getTime()/(1000 * 60) );

//Q:7 .Ans
// var hour = new Date().getHours();
// if(hour < 12){
//     alert(hour+" It's AM");
// }
// else{
//     alert(hour+" It's PM");
// }

//Q:8 .Ans
// var laterDate = new Date("December 31, 2020");
// alert(laterDate);

//Q:9 .Ans
// var d = new Date().getTime() - new Date("April 24, 2020").getTime();
// alert(Math.floor(d/(1000 * 60 * 60 * 24))+" days have passed since 1st Ramadan, 2020");

//Q:10 .Ans
// var current = new Date();
// var d = new Date().getTime() - new Date("January, 2020").getTime();
// document.write("On reference date "+current
// +",<br>"+Math.round( (d/ 1000) )+" seconds had passed since beginning of "+current.getFullYear() );

//Q:11 .Ans
// var d = new Date();
// d.setHours(d.getHours() - 1);
// document.write("current date: "+new Date() +"<br> 1 hour ago, it was "+d);

//Q:12 .Ans
// var d = new Date();
// d.setFullYear((d.getFullYear() - 100));
// document.write("current date: "+new Date() +"<br> 100 years back, it was "+d);

//Q:13 .Ans
// var age = prompt("Enter your age");
// var year = new Date().getFullYear() - age;
// document.write("Your age is "+age+"<br>Your birth year is "+year);

//Q:14 .Ans
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var name = prompt("Enter Customer Name: ");
// var units = +prompt("Enter No. of units");
// var chargesPerUnit = 16, latePay = 350;
// var netAmount = Math.round(units * chargesPerUnit);

// document.write("<div id = "+ " bill \" >"
// +"<h1>K-Electric Bill</h1>"
// +"Customer Name: <b>"+name+"</b><br>"
// +"Month: <b>"+month[new Date().getMonth()]+"</b><br>"
// +"Number of units: <b>"+units+"</b><br>"
// +"Charges per unit: <b>"+chargesPerUnit+"</b><br><br>"
// +"Net Amount Payable (within Due Date): <b>"+netAmount+"</b><br>"
// +"Late payment surcharge: <b>"+latePay+"</b><br>"
// +"Gross Amount Payable (after Due Date): <b>"+Math.round(netAmount + latePay)+"</b><br>"
// +"</div>");

//======================= Chapter: 31-34 end =======================================


//==================== Chapter: 35-38 Assignment start =============================
//Q:1 .Ans
// function dateTime(){
//     document.write(new Date());
// }
// dateTime();

//Q:2 .Ans
// function greet(firstName,lastName){
//     alert("Assalam-u-alaikum, "+firstName+" "+lastName+"\nWelcome to Javascript");
// }
// greet("Muhammad","Ali");

//Q:3 .Ans
// function add(num1,num2){
//     return (num1 + num2);
// }
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// var sum = add(num1,num2);
// alert(sum);

//Q:4 .Ans
// function calculator(num1,num2,operation){
//     var result;
//     if(operation ==='+'){
//         result = num1 + num2;
//     }
//     else if(operation ==='-'){
//         result = num1 - num2
//     }
//     else if(operation ==='*'){
//         result = num1 * num2
//     }
//     else if(operation ==='/'){
//         result = num1 / num2
//     }
//     else if(operation ==='%'){
//         result = num1 % num2
//     }
//     else{
//         result = "";
//     }
//     return result;
// }
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// var op = prompt("Enter operation (+, - , * , / , %) ");
// var ans = calculator(num1,num2,op);
// if( ans !== ""){
//     document.write("1st Number: "+num1
//     +"<br>2nd Number: "+num2+"<br>Operation: <b>"+op+"</b><br>"
//     +"Result: "+ ans);
// }
// else{
//     alert("Invalid Input.")
// }

//Q:5 .Ans
// function square(num){
//     alert(Math.pow(num,2));
// }
// square(5);

//Q:6 .Ans
// function factorial(num){
//     var fact = 1;
//     if(num > 1){
//         fact = num;
//         for(var i = num-1; i > 1; i--){
//             fact = fact * i;
//         }
//         alert("Factorial of "+num+" is "+fact);
//     }
//     else if(num === 0 || num === 1){
//         alert("Factorial of "+num+" is "+fact);
//     }
//     else{
//         alert("Invalid input or number");
//     }
// }
// factorial(10);

//Q:7 .Ans
// function counting(start,end){
//     if(end > start){
//         for(var i = start; i <= end; i++){
//             document.write(i+"<br>");
//         }
//     }
//     else{
//         for(var i = start; i >= end; i--){
//             document.write(i+"<br>");
//         }
//     }
// }
// var start = +prompt("Enter starting number");
// var end = +prompt("Enter ending number");
// counting(start,end);

//Q:8 .Ans
// function calculateHypotenuse(base,perpendicular){
//     var result = calculateSquare(base) + calculateSquare(perpendicular);
//     document.write("Base: "+base+"<br>Perpendicular: "+perpendicular
//     +"<br>Hypotenuse: "+ Math.sqrt(result).toFixed(1) );

//     function calculateSquare(num){
//         return Math.pow(num,2);
//     }
// }
// var base = +prompt("Enter base: ");
// var perp = +prompt("Enter perpendicular: ");
// calculateHypotenuse(base,perp);

//Q:9 .Ans
// function area(width,height){
//     alert("area: "+ (width * height));
// }
// area(20,40);
// var width = 25,height = 50;
// area(width,height);

//Q:10 .Ans
// function palindrom(word){
//     if(word !=""){
//         var reverse = "";
//         for(var i = word.length-1; i >= 0; i--){
//             reverse += word[i];
//         }
//         if(word.toLowerCase() === reverse.toLowerCase()){
//             alert("Given string is palindrom");
//         }
//         else{
//             alert("Given string is not palindrom");
//         }
//     }
//     else{
//         alert("Please enter any string")
//     }
// }
// palindrom("Madam");

//Q:11 .Ans
// function titleCase(input){
//     var arr = input.split(' ');
//     var output = "";
//     for(var i = 0; i < arr.length; i++){
//         var firstLetter = arr[i].slice(0,1).toUpperCase();
//         var otherLetter = arr[i].slice(1);
//         output += firstLetter + otherLetter +" ";
//     }
//     document.write("Input string: "+input+"<br>"
//     +"Output string: "+output);
// }
// titleCase("the quick brown fox");

//Q:12 .Ans
// function longestWord(input) {
//     var arr = input.split(' ');
//     var output = arr[0];
//     for (var i = 0; i < arr.length - 1; i++) {
//         if(arr[i+1].length > output.length){
//             output = arr[i+1];
//         }
//     }
//     document.write("Input string: " + input + "<br>"
//         + "Longest word: " + output);
// }
// longestWord("web development tutorial");

//Q:13 .Ans
// function letterOccurr(word,letter){
//     var count = 0;
//     for(var i = 0; i < word.length; i++){
//         if(word[i].toLowerCase() === letter.toLowerCase()){
//             count++;
//         }
//     }
//     document.write("String: "+word+", Letter: "+letter
//     +"<br>letter '"+letter+"' "+count+" times occurr in the string");
// }
// letterOccurr("JSResourceS.com",'o');

//Q:14 .Ans
// function calcCircumference(radius){
//     document.writeln("The circumference is "+(2 * Math.PI * radius ).toFixed(2) );
// }
// function calcArea(radius){
//     document.writeln("The area is "+(Math.PI * Math.pow(radius,2) ).toFixed(2) );
// }
// calcCircumference(3.55);
// calcArea(3.44);

//======================= Chapter: 35-38 end =======================================

//===========================chapter 38-42 start =======================================
//Q:1. Ans

// function power(a,b){
//     return Math.pow(a,b);
// }
// console.log(power(2,4));

//Q:2. Ans

// function checkLeapYear(year) {
//     if (year % 4 == 0) {
//         if (year % 100 == 0) {
//             if (year % 400 == 0) {
//                 alert(year + " is a Leap Year.");
//             }
//             else {
//                 alert(year + " is not a Leap Year.");
//             }
//         }
//         else {
//             alert(year + " is a Leap Year.");
//         }
//     }
//     else {
//         alert(year + " is not a Leap Year.");
//     }
// }
// var year = +prompt("Enter any year","year");
// checkLeapYear(year);

//Q:3. Ans

// function sides(a,b,c){
//     return (a+b+c)/2;
// }

// function area(a,b,c){
//     var s = sides(a,b,c);
//     alert("Area of triangle: "+ s*((s-a)*(s-b)*(s-c)));
// }

// area(5,5,3);

//Q:4. Ans

// function avg(a,b,c){
//     return (a+b+c)/3;
// }
// function percentage(a,b,c,total_Marks){
//     return ((a+b+c)/total_Marks)*100;
// }
// function main(){
//     var sub1 = 56, sub2 = 78, sub3 = 95,total_Marks = 300;
//     var average = avg(sub1,sub2,sub3);
//     var per = percentage(sub1,sub2,sub3,total_Marks);
//     document.write("1st Subject Marks: ",sub1+"<br>"
//     +"2nd Subject Marks: ",sub2+"<br>"+"3rd Subject Marks: ",sub3
//     +"<br>"+"Average: ",average+"<br>"+"Percentage: ",per+"%");
// }
// main();

//Q:5. Ans
// function myIndexOf(str,search){
//     for(var i = 0; i < str.length; i++){
//         if(str[i] === search){
//             return i;
//         }
//     }
//     return -1;
// }
// var s = "Saylani";
// console.log(myIndexOf(s,"a"));
// console.log(myIndexOf(s,"d"));

//Q:6 .Ans
// function removeVowels(sentence){
//     var s = "";
//     for(var a = 0; a < sentence.length; a++){
//         if(sentence[a].toLowerCase() != "a" && sentence[a].toLowerCase() != "e" && sentence[a].toLowerCase() != "i" && sentence[a].toLowerCase() != "o" && sentence[a].toLowerCase() != "u"){
//             s += sentence[a];
//         }
//     }
//     return s;
// }
// var sentence = "LorEm ipsum dolOr sit.";
// alert("Sentence: "+sentence+"\nRemove Vowels: "+removeVowels(sentence));

//Q:7 .Ans
// function vowelsCount(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if ((str[i] != "" || str[i + 1] != "") && (str[i] != " " || str[i + 1] != " ")) {
//             var occur = str[i] + str[i + 1];
//             switch (occur.toLowerCase()) {
//                 case "aa":
//                     count++;
//                     break;
//                 case "ae":
//                     count++;
//                     break;
//                 case "ai":
//                     count++;
//                     break;
//                 case "ao":
//                     count++;
//                     break;
//                 case "au":
//                     count++;
//                     break;
//                 case "ea":
//                     count++;
//                     break;
//                 case "ee":
//                     count++;
//                     break;
//                 case "ei":
//                     count++;
//                     break;
//                 case "eo":
//                     count++;
//                     break;
//                 case "eu":
//                     count++;
//                     break;
//                 case "ia":
//                     count++;
//                     break;
//                 case "ie":
//                     count++;
//                     break;
//                 case "ii":
//                     count++;
//                     break;
//                 case "io":
//                     count++;
//                     break;
//                 case "iu":
//                     count++;
//                     break;
//                 case "oa":
//                     count++;
//                     break;
//                 case "oe":
//                     count++;
//                     break;
//                 case "oi":
//                     count++;
//                     break;
//                 case "oo":
//                     count++;
//                     break;
//                 case "ou":
//                     count++;
//                     break;
//                 case "ua":
//                     count++;
//                     break;
//                 case "ue":
//                     count++;
//                     break;
//                 case "ui":
//                     count++;
//                     break;
//                 case "uo":
//                     count++;
//                     break;
//                 case "uu":
//                     count++;
//                     break;
//             }
//         }
//     }
//     return count;
// }
// var str = "Pleases read this application and give me gratuity";
// alert("String : "+str+"\nNumber of occurrences of two vowels: "+vowelsCount(str));

//Q:8 .Ans
// function meter(num){
//     return num * 1000;
// }
// function feet(num){
//     return num * 3281;
// }
// function inches(num){
//     return num * 39370;
// }
// function centimeter(num){
//     return num * 100000;
// }
// var city1 = prompt("Enter 1st City name: ","city");
// var city2 = prompt("Enter 2nd City name: ","city");
// var distance = +prompt("Enter the distance between "+city1+" to "+city2+" in km","distance in km");
// document.write("Distance b/w "+city1+" to "+city2+" in kilometer: ",distance+"km"
// +"<br>Distance b/w "+city1+" to "+city2+" in meter: ",meter(distance)+"m"
// +"<br>Distance b/w "+city1+" to "+city2+" in feet: ",feet(distance)+"ft"
// +"<br>Distance b/w "+city1+" to "+city2+" in inches: ",inches(distance)+"inches"
// +"<br>Distance b/w "+city1+" to "+city2+" in centimeter: ",centimeter(distance)+"cm");

//Q:9 .Ans
// function overTimePay(hour){
//     var overTime = 0, payPerHour = 12.00, pay = 0;
//     if(hour > 40){
//         overTime = hour - 40;
//         pay = overTime * payPerHour;
//         document.write("The employee has total "+hour+" hour worked"
//         +"<br>OverTime: "+overTime+" hour"
//         +"<br>OverTime Rs: "+pay);
//     }
//     else{
//         alert("Employee has not worked overtime")
//     }
// }
// var hour = +prompt("Enter total hour the employee has worked: ","hour")
// overTimePay(hour);

//Q:10 .Ans
// var amount,ten = 0,fifty = 0,hundred = 0,remain = 0;

// function printNotes(ten,fifty,hundred,remain){
//     var hundredNote = "",hundredNotes = "",tenNote = "",tenNotes = "";
//     if(hundred > 1){
//         hundredNotes = "hundred notes";
//     }
//     else if(hundred == 1){
//         hundredNote = "hundred note";
//     }
//     if(ten > 1){
//         tenNotes = "ten notes";
//     }
//     else if(ten == 1){
//         tenNote = "ten note";
//     }
//     if(hundredNote != "" && tenNote != ""){
//         alert("You will have "+hundred+ " "+hundredNote+", "+fifty+" fifty note, "+ten+" "+tenNote+"\nRemaining rupees: "+remain);
//     }
//     else if(hundredNotes != "" && tenNotes != ""){
//         alert("You will have "+hundred+ " "+hundredNotes+", "+fifty+" fifty note, "+ten+" "+tenNotes+"\nRemaining rupees: "+remain);
//     }
//     else if(hundredNotes != "" && tenNote != ""){
//         alert("You will have "+hundred+ " "+hundredNotes+", "+fifty+" fifty note, "+ten+" "+tenNote+"\nRemaining rupees: "+remain);
//     }
//     else if(hundredNote != "" && tenNotes != ""){
//         alert("You will have "+hundred+ " "+hundredNote+", "+fifty+" fifty note, "+ten+" "+tenNotes+"\nRemaining rupees: "+remain);
//     }
//     else if(hundredNotes != "" && tenNote == "" && tenNotes == ""){
//         alert("You will have "+hundred+ " "+hundredNotes+", "+fifty+" fifty note\nRemaining rupees: "+remain);
//     }
//     else if(hundredNote != "" && tenNote == "" && tenNotes == ""){
//         alert("You will have "+hundred+ " "+hundredNote+", "+fifty+" fifty note\nRemaining rupees: "+remain);
//     } 

// }
// amount = +prompt("Enter the amount to withdraw!");
// if(amount >= 100){
//     hundred = amount / 100;
//     remain = amount - (parseInt(hundred) * 100);
//     if(remain >= 50){
//         fifty = remain / 50;
//         remain = remain - (parseInt(fifty) * 50);
//         if(remain >= 10){
//             ten = remain / 10;
//             remain = remain - (parseInt(ten) * 10);
//             printNotes(parseInt(ten),parseInt(fifty),parseInt(hundred),remain);
//         }
//         else{
//             printNotes(parseInt(ten),parseInt(fifty),parseInt(hundred),remain);
//         }

//     }
//     else if(remain >= 10){
//         ten = remain / 10;
//         remain = remain - (parseInt(ten) * 10);
//         printNotes(parseInt(ten),parseInt(fifty),parseInt(hundred),remain);
//     }
//     else{
//         printNotes(parseInt(ten),parseInt(fifty),parseInt(hundred),remain);
//     }
// }
// else{
//     alert("You can withdraw at least 100 rupees.")
// }

//===========================chapter 38-42 end =========================================

//===========================chapter 43-48 start =========================================

//Q:1 .Ans
// function showAlert(){
//     alert("You clicked the link");
// }

//Q:2 .Ans
// function openModel(img) {
//     img.setAttribute('data-toggle','modal');
//     img.setAttribute('data-target','#exampleModalCenter');
// }

//Q:3 .Ans
// var arr = ["Ali", "9", "Ahmed", "10", "Tahir", "6", "Ghous", "10", "Basit", "10", "Johne", "10", "Doe", "9", "Mark", "8", "John", "7", "James", "9"];
// var arrCount = 0;
// var stuTable = document.getElementById("stutabl");
// for (var r = 0; r < 10; r++) {
//     var row = stuTable.insertRow(-1);
//     for (var c = 0; c < 4; c++) {
//         var cell = row.insertCell(c);
//         if (c == 0) {
//             cell.appendChild(document.createTextNode(r));
//         }
//         else if (c == 1 || c == 2) {
//             cell.appendChild(document.createTextNode(arr[arrCount]));
//             arrCount++;
//         }
//         else {
//             var btn = document.createElement("button");
//             var txt = document.createTextNode("Delete");
//             btn.setAttribute('onclick', 'deleteRow(this)');
//             btn.appendChild(txt);
//             cell.appendChild(btn);
//         }
//     }
// }
// function deleteRow(btn) {
//     var tbl = document.getElementById("stutabl");
//     var rNum = btn.parentNode.parentNode.rowIndex;
//     var r;
//     tbl.deleteRow(btn.parentNode.parentNode.rowIndex);
//     var tableLength = tbl.rows.length;
//     // for update Index number
//     for(var c = rNum; c < tableLength; c++){
//         r = tbl.rows[c].cells;
//         r[0].innerHTML = c - 1;
//     }
// }

//Q:4 .Ans
// function changeImg(s){
//     var img = document.getElementById('img');
//     img.src = s;
// }

//Q:5 .Ans
// var count = 0;
// var num = document.getElementById('num');
// num.innerHTML = count;
// function increase(){
//     count++;
//     num.innerHTML = count;
// }
// function decrease(){
//     count--;
//     num.innerHTML = count;
// }

//===========================chapter 43-48 end =========================================

//===========================chapter 49-52 start =========================================

//Q:1 .Ans
// function signUp(){
//     var fullname = document.getElementById('fullname').value;
//     var email = document.getElementById('email').value;
//     var psw = document.getElementById('psw').value;
//     document.write("<h1>Form Data</h1>");
//     document.write("Full Name: "+fullname+"<br><br>"
//     +"Email : "+email+"<br><br>"
//     +"Password : "+psw);
// }

//Q:2 .Ans
// function readMore() {
//     var txt = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum maiores corporis voluptates temporibus fugiat commodi, consequuntur sapiente, quia in ad modi deleniti magnam delectus voluptatum fuga, asperiores nesciunt quasi ea.";
//     var paragraph = document.getElementById("pera");
//     paragraph.innerHTML = txt;
// }

//Q:3 .Ans
// var count = 0;
// var stuArray = [];
// var stuInfo = [];
// function addStudent() { // store student data in 2d stuArray
//     var fname = document.getElementById('fname').value;
//     var lname = document.getElementById('lname').value;
//     var email = document.getElementById('email').value;
//     var mobile = document.getElementById('mobile').value;
//     var gender = "", className = "";
//     if (document.getElementById('male').checked) {
//         gender = document.getElementById('male').value;
//     }
//     else if (document.getElementById('female').checked) {
//         gender = document.getElementById('female').value;
//     }
//     if (document.getElementById('8th').checked) {
//         className = document.getElementById('8th').value;
//     }
//     else if (document.getElementById('9th').checked) {
//         className = document.getElementById('9th').value;
//     }
//     else if (document.getElementById('10th').checked) {
//         className = document.getElementById('10th').value;
//     }
//     else if (document.getElementById('11th').checked) {
//         className = document.getElementById('11th').value;
//     }
//     else if (document.getElementById('12th').checked) {
//         className = document.getElementById('12th').value;
//     }
//     if (fname != "" && lname != "" && email != "" && mobile != "" && gender != "" && className != "") {
//         stuArray[count] = new Array(6); // for create 2d stuArray 
//         stuInfo = [fname, lname, email, mobile, gender, className];
//         for (var a = 0; a < stuInfo.length; a++) {
//             stuArray[count][a] = stuInfo[a];
//         }
//         document.getElementById('fname').value = "";
//         document.getElementById('lname').value = "";
//         document.getElementById('email').value = "";
//         document.getElementById('mobile').value = "";
//         document.getElementById(gender).checked = false;
//         document.getElementById(className).checked = false;
//         count++;
//         alert("Successfully added.");
//     }
//     else {
//         alert("Please fill out all the fields..");
//     }

// }
// var tableHead = ["First Name", "Last Name", "Email", "Contact", "Gender", "Class"];
// function viewData() { // create table and insert all student data of 2D stuArray
//     var d = document.createElement('div');
//     var stuTable = document.createElement('table');
//     stuTable.setAttribute('id', 'studenttable');
//     stuTable.style.margin = "auto";
//     stuTable.style.padding = "10px";
//     stuTable.style.border = "1px solid #808080";
//     stuTable.style.borderCollapse = "Collapse";
//     var headRow = stuTable.insertRow(-1); // create row to end of the table
//     var th;

//     //create table header
//     for (var a = 0; a < tableHead.length; a++) {
//         th = document.createElement('th');
//         th.style.padding = "10px";
//         th.style.border = "1px solid #808080";
//         th.style.borderCollapse = "Collapse";
//         th.innerHTML = tableHead[a];
//         headRow.appendChild(th);
//     }
//     // create cells and insert student data from stuArray
//     for (var r = 0; r < stuArray.length; r++) {
//         var row = stuTable.insertRow(-1);
//         for (var c = 0; c < 8; c++) {
//             var cell = row.insertCell(c);
//             cell.style.padding = "10px";
//             cell.style.border = "1px solid #808080";
//             cell.style.textAlign = "center";
//             if (c != 6 && c != 7) {
//                 cell.appendChild(document.createTextNode(stuArray[r][c]));
//             }
//             else {
//                 if (c == 6) {
//                     var editBtn = document.createElement("button");
//                     var editTxt = document.createTextNode("Edit");
//                     editBtn.setAttribute('onclick', 'editRow(this)');
//                     editBtn.setAttribute('class', 'editbtn');
//                     editBtn.appendChild(editTxt);
//                     cell.appendChild(editBtn);
//                 }
//                 else {
//                     var deleteBtn = document.createElement("button");
//                     var deleteTxt = document.createTextNode("Delete");
//                     deleteBtn.setAttribute('onclick', 'deleteRow(this)');
//                     deleteBtn.setAttribute('class', 'deletebtn');
//                     deleteBtn.appendChild(deleteTxt);
//                     cell.appendChild(deleteBtn);
//                 }
//             }
//         }
//     }
//     d.appendChild(stuTable);
//     document.write(d.innerHTML);
// }
// var hiddenform = document.getElementById("hiddenform");
// var formdiv = document.getElementById('formdiv');
// var rowNum = -1;
// function editRow(btn) {
//     var tbl = document.getElementById("studenttable");
//     rowNum = btn.parentNode.parentNode.rowIndex;
//     formdiv.childNodes[1].innerHTML = "For Row Index : " + btn.parentNode.parentNode.rowIndex;

//     formdiv.style.border = "1px solid #808080";
//     formdiv.style.width = "50%";
//     formdiv.style.marginTop = "20px";
//     formdiv.style.padding = "20px";

//     // disable all buttons
//     var editbtn = document.getElementsByClassName('editbtn');
//     var deletebtn = document.getElementsByClassName('deletebtn');
//     for (var a = 0; a < editbtn.length; a++) {
//         editbtn[a].disabled = true;
//         deletebtn[a].disabled = true;
//     }

//     // show hiddenform on document
//     document.write(hiddenform.innerHTML);

//     //fill hiddenform
//     var checkinput = document.getElementsByClassName('checkinput');
//     var tableCell = tbl.rows[rowNum].cells; // get cells of selected row
//     for (var c = 0; c < 6; c++) {
//         if (c < 4) { // this check for first 4 text field, fname lname email contact
//             checkinput[c].value = tableCell[c].innerHTML;
//         }
//         else if(c == 4){
//             if (tableCell[c].innerHTML == "male") { // check for male or female
//                 checkinput[c].checked = true;  //fill for male radio btn
//             }
//             else if(tableCell[c].innerHTML == "female"){
//                 checkinput[c + 1].value = true; //fill for female radio btn
//             }
//         }
//         else{
//             if (tableCell[c].innerHTML == "8th") { // check for class names
//                 checkinput[6].checked = true;  //fill for 8th class radio btn
//             }
//             else if(tableCell[c].innerHTML == "9th"){
//                 checkinput[7].value = true; //fill for 9th class radio btn
//             }
//             else if(tableCell[c].innerHTML == "10th"){
//                 checkinput[8].value = true; //fill for 10th class radio btn
//             }
//             else if(tableCell[c].innerHTML == "11th"){
//                 checkinput[9].value = true; //fill for 11th class radio btn
//             }
//             else{
//                 checkinput[10].value = true; //fill for 12th class radio btn
//             }
//         }
//     }
// }

// function deleteRow(btn) {
//     var tbl = document.getElementById("studenttable");
//     tbl.deleteRow(btn.parentNode.parentNode.rowIndex);
// }

// function updateForm() {
//     var checkinput = document.getElementsByClassName('checkinput');
//     stuInfo = []; // already decleared above
//     var arrCount = 0;
//     var check = false;
//     var gender = "", className = "";
//     // check one by one input text field and radio btns 
//     for (var a = 0; a < checkinput.length; a++) {
//         if (a < 4) { // this check for first 4 text field
//             if (checkinput.item(a).value != "") { // fname lname email contact
//                 check = true;
//                 stuInfo[arrCount] = checkinput[a].value;
//                 arrCount++;
//             }
//             else {
//                 check = false;
//                 arrCount = 0;
//                 break;
//             }
//         }
//         else {
//             if (checkinput[a].checked) { // this check for radio buttons
//                 if (checkinput[a].value == "male" || checkinput[a].value == "female") { // check for male or female
//                     gender = checkinput[a].value;
//                     stuInfo[arrCount] = gender;
//                     arrCount++;
//                 }
//                 else {
//                     className = checkinput[a].value;
//                     stuInfo[arrCount] = className;
//                     arrCount++;
//                 }
//             }
//         }
//     }

//     // check all the requirements is filled or not
//     if (check && gender != "" && className != "") {

//         // enable all buttons
//         var editbtn = document.getElementsByClassName('editbtn');
//         var deletebtn = document.getElementsByClassName('deletebtn');
//         for (var a = 0; a < editbtn.length; a++) {
//             editbtn[a].disabled = false;
//             deletebtn[a].disabled = false;
//         }

//         //update for all cells values
//         var tbl = document.getElementById('studenttable');
//         if (rowNum != -1) {
//             for (var c = 0; c < stuInfo.length; c++) {
//                 var tableCell = tbl.rows[rowNum].cells;
//                 tableCell[c].innerHTML = stuInfo[c];
//             }
//         }

//         // remove formdiv element
//         document.body.childNodes[2].remove();
    
//         arrCount = 0;
//         alert("Successfully updated");
//     }
//     else {
//         alert("Please fill out all the fields..");
//     }
// }
// function closeForm(){
//     // remove formdiv element
//     document.body.childNodes[2].remove();

//     // enable all buttons
//     var editbtn = document.getElementsByClassName('editbtn');
//     var deletebtn = document.getElementsByClassName('deletebtn');
//     for (var a = 0; a < editbtn.length; a++) {
//         editbtn[a].disabled = false;
//         deletebtn[a].disabled = false;
//     }
// }

//===========================chapter 49-52 end =========================================


//===========================chapter 58-67 start =========================================

//Q:1 .Ans
// var mainContent = document.getElementById('main-content');

// for(var a = 0; a < mainContent.childNodes.length; a++){
//     console.log(mainContent.childNodes[a]);
// }

// var renderClassElements = document.getElementsByClassName('render');
// for(var a = 0; a < renderClassElements.length; a++){
//     document.writeln(renderClassElements[a].innerHTML +"<br>");
// }

// var fname = document.getElementById('first-name');
// fname.value = "Saqib";

// var lname = document.getElementById('last-name');
// lname.value = "Uddin";

// var email = document.getElementById('email');
// email.value = "saqibuddin083@gmail.com";

//Q:2 .Ans
// var formContent = document.getElementById('form-content');
// document.write("node type of element having id 'form-content': "+formContent.nodeType);

// var p = document.getElementById('lastName');
// document.write("node type of element having id 'lastName': "+p.nodeType+"<br>");
// for(var a = 0; a < p.childNodes.length; a++){
//    document.write("node type of "+(a+1)+" child element having id 'lastName': "+p.childNodes[a].nodeType+"<br>");
// }

// var p = document.getElementById('lastName');
// p.innerHTML = "Last Name: John";
// document.write(p.innerHTML);

// var mainContent = document.getElementById('main-content');
// document.write("First Child of id 'mainContent': "+mainContent.firstChild.innerHTML
// +"<br>"+"Last Child of id 'mainContent': "+mainContent.lastChild.innerHTML);

// var p = document.getElementById('lastName');
// document.write("Next Sibling of id 'lastName': "+p.nextSibling.innerHTML
// +"<br>"+"Previous Sibling of id 'lastName': "+p.previousSibling.innerHTML);

// var email = document.getElementById('email');
// document.write("<h3>Get parent node and node type of element having id “email”</h3><br>"+email.parentNode.innerHTML+"<br>Node type: "+email.nodeType)

//===========================chapter 58-67 end =========================================
