// import "./styles.css";
var toogle = document.getElementsByClassName("toogle");
var text = document.getElementById("text");
var toogled = false;

toogle[0].addEventListener("click", function () {
  if (!toogled) {
    document.body.style.backgroundColor = "black";
    text.style.color = "white";
    toogled = true;
  } else {
    document.body.style.backgroundColor = "white";
    text.style.color = "black";
    toogled = false;
  }
});
