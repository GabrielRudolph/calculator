
function executeOperation(operation) {
    let calculation = document.getElementById('resultArea');

    calculation.innerHTML += operation;
}

function calculateResult() {
    let calculation = document.getElementById('resultArea');
    let result = eval(calculation.innerHTML);
    
    calculation.innerHTML += ' = ' + result;
}

function deleteEntries() {
    let calculation = document.getElementById('resultArea');

    calculation.innerHTML = '';
}

function saveInput() {
    let calculation = document.getElementById('resultArea');

    
}

function calculatePercentage() {
    document.getElementById("resultArea")
    .addEventListener("click", function (e) {
    e.preventDefault();
    const numX = document.getElementById("resultArea").value;
    const numY = document.getElementById("resultArea").value;
    const percentage = (numX / 100) * numY;
    document.getElementById("resultAreas").value = percentage;
    });
}