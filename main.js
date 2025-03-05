function onButtonClick(btn) {
    let textField = document.getElementById("textField"); 
    let newValue = textField.value + btn.innerText;
    textField.value = newValue;
}
