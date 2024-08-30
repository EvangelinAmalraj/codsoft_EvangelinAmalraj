function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display').innerText;
    if (display.length > 1) {
        document.getElementById('display').innerText = display.slice(0, -1);
    } else {
        document.getElementById('display').innerText = '0';
    }
}

function appendToDisplay(value) {
    let display = document.getElementById('display').innerText;
    if (display === '0' && value !== '%' && value !== '.') {
        document.getElementById('display').innerText = value;
    } else {
        document.getElementById('display').innerText += value;
    }
}

function calculateResult() {
    let display = document.getElementById('display').innerText;

    // Handle percentage
    if (display.includes('%')) {
        let parts = display.split('%');
        let value = parseFloat(parts[0]);
        let percentage = parseFloat(parts[1]);
        let result = (value * percentage) / 100;
        document.getElementById('display').innerText = result;
        return;
    }

    // Replace ÷ with / for evaluation
    display = display.replace(/÷/g, '/');
    
    try {
        let result = eval(display);
        document.getElementById('display').innerText = result;
    } catch {
        document.getElementById('display').innerText = 'Error';
    }
}
