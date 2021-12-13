function addingEventListener() {
  const input = document.getElementById("header-image");
  function clickAlert() {
    alert("I was clicked!");
  }
  input.addEventListener("click", clickAlert);
}
addingEventListener();

// const h2 = document.createElement("h2");
// h2.textContent = "Thank you for visiting!";
// document.getAnimations("#resources").appendChild(h2);

document.getElementById("resources-js").innerHTML = "Thanks for visiting (this text created using js)";
