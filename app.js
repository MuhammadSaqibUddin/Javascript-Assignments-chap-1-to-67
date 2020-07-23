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
// var modal = document.getElementById("myModal");
// function openModel() {
//   modal.style.display = "block";
// }
// function closeModel() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

//Q:3 .Ans
// var tableHead = ["Index", "Name", "Class"];
// var arr = ["Ali", "9", "Ahmed", "10", "Tahir", "6", "Ghous", "10", "Basit", "10", "Johne", "10", "Doe", "9", "Mark", "8", "John", "7", "James", "9"];
// var arrCount = 0;
// var stuTable = document.getElementById("stutabl")
// for (r = 0; r < 10; r++) {
//     var row = stuTable.insertRow(-1);
//     for (c = 0; c < 4; c++) {
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
//             btn.setAttribute('onclick', 'deleteRow(this)')
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
//     for(c = rNum; c < 10; c++){
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

//===========================chapter 49-52 end =========================================







