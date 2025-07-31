
async function calculate(operation) {
    
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultDiv = document.getElementById('result');
    
    // Validate inputs
    if (!num1 || !num2) {
        showResult('Please enter both numbers', 'error');
        return;
    }
    
    if (isNaN(num1) || isNaN(num2)) {
        showResult('Please enter valid numbers', 'error');
        return;
    }
    
    try {
        // Show loading message
        showResult('Calculating...', '');
        
        // Make API call to the server
        const response = await fetch(`/${operation}/${num1}/${num2}`);
        const data = await response.json();
        
        if (response.ok) {
            // Show successful result
            showResult(`${data.message}`, 'success');
        } else {
            // Show error message
            showResult(`Error: ${data.error}`, 'error');
        }
    } catch (error) {
        // Handle network or other errors
        showResult(`Error: Unable to connect to server`, 'error');
        console.error('Calculation error:', error);
    }
}

// Function to display results with appropriate styling
function showResult(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${message}</p>`;
    
    // Remove existing classes
    resultDiv.classList.remove('success', 'error');
    
    // Add appropriate class based on result type
    if (type) {
        resultDiv.classList.add(type);
    }
}

// Add event listeners for Enter key press
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#num1, #num2');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculate('add'); // Default to addition when Enter is pressed
            }
        });
    });
    
    // Add some helpful text
    showResult('Enter two numbers and choose an operation', '');
});

// Optional: Function to test server connection
async function testServer() {
    try {
        const response = await fetch('/test');
        const data = await response.json();
        console.log('Server test:', data);
        return true;
    } catch (error) {
        console.error('Server connection failed:', error);
        return false;
    }
}

// Test server connection when page loads
document.addEventListener('DOMContentLoaded', async function() {
    const serverOnline = await testServer();
    if (!serverOnline) {
        showResult('Warning: Cannot connect to server. Please check if the server is running.', 'error');
    }
});