function showAlert() {
    alert("Hello, world!");
}

function bigger() {
    var textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt"; 
}

function changeStyle(radio) {
    var textArea = document.getElementById("textInput");
    if (radio.id === "fancyShmancy" && radio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (radio.id === "boringBetty" && radio.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooFunction() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    var sentences = text.toUpperCase().split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] += "-MOO";
        }
    }
    textArea.value = sentences.join(". ").trim();
}


