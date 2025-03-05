function onButtonClick(letter) {
    let textField = document.getElementById("textField"); 
    newValue = textField.value += letter;
    textField.value = newValue;
}

function onButtonClickResult(btn) {
    let textField = document.getElementById("textField"); 
    let newValue = textField.value;
    textField.value = eval(newValue);
}
