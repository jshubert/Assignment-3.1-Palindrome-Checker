function strings()
{
var str1 = document.getElementById("initstring").value;
//var str2 = document.getElementById("secondstring").value;

// this is for length
//document.getElementById("updatestring").innerHTML = str1.length;

// concatenate means to add together.
//var cat = str1 + str2;
//document.getElementById("updatestring").innerHTML = "concatenated str = " + cat;

//document.getElementById("updatestring").innerHTML = cat.length;

// string
//document.getElementById("updatestring").innerHTML =str1.substring(0,3)

//var repJC = str1.replace(/do/, "asd");
//document.getElementById("updatestring").innerHTML =repJC;

//repJC = repJC.toLowerCase();
//document.getElementById("updatestring").innerHTML =repJC;

//var repJC = str1.replace(/do/g, "asd");  //g= repeat for all ocurances
//document.getElementById("updatestring").innerHTML =repJC;

//var repJC = str1.replace(/do/i, "asd"); //i = insensitive to case
//document.getElementById("updatestring").innerHTML =repJC;

// for case insensitive and repeat:
//repJC = repJC.toLowerCase();

//var repJC = str1.replace(/do/g, "asd");
//document.getElementById("updatestring").innerHTML =repJC;

//Reverse strings
//1 split the string, 2 reverse the string, 3 join the string.
//
//

str1 = str1.toLowerCase();

var rep = str1.replace(/ /g, "");
//alert("replace " + rep)

var splitStr = rep.split("");
//alert("split " + splitStr)

var revStr = splitStr.reverse("");
//alert("reversed " + revStr);

var joinStr = revStr.join("");
//alert("backward String " + joinStr)

//document.getElementById("updatestring").innerHTML = joinStr;

var pal 

if (rep == joinStr){
alert("palindrome")
document.getElementById("updatestring").innerHTML = "Your entry is a Palindrome";}


else if (str1 != joinStr){
alert("not a palindrome")
document.getElementById("updatestring").innerHTML = "Your entry is absolutley not a Palindrome";} 

}

