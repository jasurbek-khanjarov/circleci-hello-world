"use strict"

function showText() {
  document.getElementById("pText").innerHTML = "Hello World";
}

function testButtonClick() {
  // clear text first, to check this function anytime
  document.getElementById("pText").innerHTML = "";
  // click the button
  document.getElementById("simpleButton").click();
  if(document.getElementById("pText").innerHTML.length > 0) {
    console.log("Function is working");
  } else {
      console.error("Function is not working");
  }
}
 