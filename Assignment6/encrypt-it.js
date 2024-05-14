(function() {
  "use strict";
  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");

    var encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", encryptText); // Updated to call encryptText

    var resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  function encryptText() {
    var inputText = document.getElementById("input-text").value;
    var encryptedText = shiftCipher(inputText);
    document.getElementById("result").textContent = encryptedText; // Corrected to target 'result' ID
  }

  function shiftCipher(text) {
    var result = '';
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (char >= 'a' && char <= 'z') {
        result += String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + 1) % 26 + 'a'.charCodeAt(0));
      } else if (char >= 'A' && char <= 'Z') {
        result += String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + 1) % 26 + 'A'.charCodeAt(0));
      } else {
        result += char;
      }
    }
    return result;
  }

  function handleReset() {
    var inputText = document.getElementById("input-text");
    inputText.value = ""; 
    console.log("Input cleared!");
    document.getElementById("result").textContent = ""; // Ensure this clears the correct paragraph
  }

})();


