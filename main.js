//Code for Task1
function dis(val) {
  document.getElementById("result").value += val;
}
function clr() {
  document.getElementById("result").value = "";
}
function solve() {
  let a = document.getElementById("result").value;
  var i = a.includes("√");
  var i1 = a.includes("%");
  var i2 = a.includes("+");
  var i3 = a.includes("-");
  var i4 = a.includes("*");
  var i5 = a.includes("/");
if (i == true){
    sqrt(a);

  }
  if (i2 == true){
    add(a);
  }
  if (i3 == true){
    sub(a);
  }
  if (i4 == true){
    mul(a);
  }
  if (i5 == true){
    div(a);
  }
  if (x < 0){
    abs(a);
  }
  
  if (i1 == true){
    percent(a);
  }
}
function abs(a) {
  let k = document.getElementById("result").value;
  if (k < 0) {
    k = k * -1;
  }
  document.getElementById("result").value = z;
}
function sub(a) {
  var k = document.getElementById("result").value;
  var l = k.split("-");

  var n1 = parseInt(l[0]);
  var n2 = parseInt(l[1]);
  output = n1 - n2;
  output = output.toString();
  document.getElementById("result").value = output;  
}

function add(a) {
  var k = document.getElementById("result").value;
  var l = k.split("+");

  var n1 = parseInt(l[0]);
  var n2 = parseInt(l[1]);
  output = n1 + n2;
  output = output.toString();
  document.getElementById("result").value = output;
}
function mul(a) {
  var z = document.getElementById("result").value;
  var r = z.split("*");

  var n1 = parseInt(r[0]);
  var n2 = parseInt(r[1]);
  output = n1 * n2;
  output = output.toString();
  document.getElementById("result").value = output;
}
function div(a) {
  var z = document.getElementById("result").value;
  var r = z.split("/");

  var n1 = parseInt(r[0]);
  var n2 = parseInt(r[1]);
  output = n1 / n2;
  output = output.toString();
  document.getElementById("result").value = output;
}
function sqrt(a) {
  var k = document.getElementById("result").value;
  var l = Number.isInteger(k);
  
  y = k.replace("√", "");
  output = Math.sqrt(y);
   var n = output.toFixed(3);

  document.getElementById("result").value = n;
}

function percent(a) {
  var z = document.getElementById("result").value;
  var r = z.split("%");

  var n1 = parseInt(r[0]);
  var n2 = parseInt(r[1]);
  output = (n1/100)*n2;
  output = output.toString();
  document.getElementById("result").value = output;
}




//code for Task2

function validate() {
  var num = document.getElementById("num").value;
  var phonenum = /^\d{10}$/;
  if (!num.match(phonenum)) {
  
    alert("Enter a valid Phone Number");
    return false;
  }
  var x = document.getElementById("email").value;

 var email=/^\w+([\.-]?\w+)*@\w*(\.\w{2,3})$/;  
if(!x.match(email))   
{   


alert("Enter a valid email");
}
  var name = document.getElementById("uname").value;
  if (!isNaN(name.charAt(0))) {
    alert("Name should not start with numbers");
  }
}
// code for Task3
function pali() {
  var string = document.getElementById("pali").value;
  var i,
    st = "";
  for (i = string.length - 1; i >= 0; i--) {
    st += string[i];
  }
  var n = st.localeCompare(string);
  if (n == 0) {
    alert("Palindromic String");
    return true;
  } else {
    alert("Not Palindromic String");
    return false;
  }
}
function anagram() {
  var anag1 = document.getElementById("ana1").value;
  var anag2 = document.getElementById("ana2").value;
  var a1 = anag1.toLowerCase();
  var a2 = anag2.toLowerCase();
  var arr = a1.split(" ").join("");
  var sorted = arr.split("").sort();
  var ip1 = sorted.join("");

  var arr = a2.split(" ").join("");
  var sorted = arr.split("").sort();
  var ip2 = sorted.join("");
  var p = ip2.localeCompare(ip1);

  if (p != 0) {
    alert("Not Anagram");
    return false;
  } else {
    alert("Anagram");
    return true;
  }
}

//code for Task4

function random1() {
  document.getElementById("firstinput").value = Math.floor(Math.random() * 1000);
}
function random2() {
  document.getElementById("secondinput").value = Math.floor(Math.random() * 1000);
}

//code for play

function play() {
  var a = document.getElementById("firstinput").value;
  var b = document.getElementById("secondinput").value;
  if (a == "") {
    alert("please generate number:");
    return false;
  }
  var a1 = fun(a);
  var b1 = fun(b);
  if (a == b1) {
    alert("Tie");
    return false;
  }

  if (a1 == 1 && b1 == 2) {
    alert("The Inputs are Human and Cockroach,so Human survives.");
    return false;
  }
  if (a1 == 2 && b1 == 1) {
    alert("The Inputs are  Cockroach and  Human,so Human survives.");
    return false;
  }
  if (a1 == 1 && b1 == 3) {
    alert("The Inputs are   Human and Bomb,so Human dies.");
    return false;
  }
  if (a1 == 3 && b1 == 1) {
    alert("The Inputs are   Bomb and Human,so Human dies.");
    return false;
  }

  if (a1 == 2 && b1 == 3) {
    alert("The Inputs are   Cockroach and Bomb,so Cockroach survives.");
    return false;
  }
  if (a1 == 3 && b1 == 2) {
    alert("The Inputs are   Bomb and Cockroach,so Cockroach survives.");
    return false;
  }
}

function fun(x) {
  if (x >= 0 && x <= 250) {
    return 1;
  }
  else if (x > 250 && x <= 500) {
    return 2;
  }
  else if (x > 500 && x <= 1000) {
    return 3;
  }
}