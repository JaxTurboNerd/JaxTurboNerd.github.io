console.log(document.title);
const swiftElement = document.getElementById("swift");
const jsElement = document.getElementById("javascript");
let liElements = document.getElementById("skillsList").children;
console.log(liElements);
let liElements2 = document.getElementById("skillsList2").children;

// swiftElement.addEventListener("mouseover", (e) => {
//   e.target.style.color = "red";
// });

function changeColor(event) {
  event.target.style.color = "red";
}

function resetColor(event) {
  event.target.style.color = "black";
}

for (let i = 0; i < liElements.length; i++) {
  liElements[i].onmouseover = changeColor;
  liElements[i].onmouseleave = resetColor;
}

for (let i = 0; i < liElements2.length; i++) {
  liElements2[i].onmouseover = changeColor;
  liElements2[i].onmouseleave = resetColor;
}

// liElements[0].onmouseover = changeColor;
// liElements[0].onmouseleave = resetColor;
// liElements[3].onmouseover = changeColor;

// swiftElement.onmouseover = changeColor;
// swiftElement.onmouseleave = resetColor;
// jsElement.onmouseover = changeColor;
// jsElement.onmouseleave = resetColor;
