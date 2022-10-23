// import "./styles.css";
var colorarr = new Array("red", "green", "blue", "violet", "yellow");
var changecolor = document.getElementById("color-btn");
var changeshape = document.getElementById("shape-btn");
var circle = document.getElementById("circle");
var square = document.getElementById("square");

changecolor.addEventListener("click", function () {
  let maxVal = 5;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  console.log(colorarr[randomNumber]);
  circle.style.backgroundColor = colorarr[randomNumber];
});
var shape = false;
changeshape.addEventListener("click", function () {
  if (!shape) {
    square.style.display = "none";
    shape = true;
  } else {
    square.style.display = "block";
    shape = false;
  }
});
