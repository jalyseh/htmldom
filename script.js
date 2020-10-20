
document.getElementById("demo").innerHTML = "Welcomeeeee!";

var x = document.getElementsByTagName("p");
document.getElementById("demo2").innerHTML = 'The text in first paragraph (index 0) is: ' + x[0].innerHTML;

var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo3").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

//ANIMATIONS
function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

// EVENTS
// 1
function changeText(id) {
  id.innerHTML = "This is an event!";
  }
// 3  
function displayDate() {
  document.getElementById("demo4").innerHTML = Date();
}
//4
document.getElementById("myBtn2").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
//5
function mOver(obj) {
  obj.innerHTML = "This is an event"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over"
}


//EVENT LISTNER
// 1
document.getElementById("myBtn3").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo6").innerHTML = Date();
}
//2 -EVENT HANDLER
document.getElementById("myBtn4").addEventListener("click", function() {
  alert("What's up!");
});
//3
var x = document.getElementById("myBtn5");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo7").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo7").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo7").innerHTML += "Moused out!<br>";
}
//4
var p1 = 5;
var p2 = 7;

document.getElementById("myBtn6").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  var result = a * b;
  document.getElementById("demo8").innerHTML = result;
}
//5
document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo9").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}

//NAGIVATION
document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;

alert(document.documentElement.innerHTML);

document.getElementById("id04").innerHTML = document.getElementById("id03").nodeName;
