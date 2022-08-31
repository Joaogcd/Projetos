function displaynum(n1){
    calculator.text1.value = calculator.text1.value + n1;
}

function backspace() {
    let input = document.getElementById('num');
    let inputText = input.value;
    input.value = inputText.substring(0,inputText.length-1);
}