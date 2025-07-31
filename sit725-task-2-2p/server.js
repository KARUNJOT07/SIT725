const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    
   
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            error: 'Please provide valid numbers',
            example: '/add/5/3'
        });
    }
    
    const result = num1 + num2;
    res.json({
        operation: 'addition',
        num1: num1,
        num2: num2,
        result: result,
        message: `${num1} + ${num2} = ${result}`
    });
});


app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({
            error: 'Please provide valid numbers in request body',
            expected: { num1: 'number', num2: 'number' }
        });
    }
    
    const result = number1 + number2;
    res.json({
        operation: 'addition',
        num1: number1,
        num2: number2,
        result: result,
        message: `${number1} + ${number2} = ${result}`
    });
});


app.get('/subtract/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers' });
    }
    
    const result = num1 - num2;
    res.json({
        operation: 'subtraction',
        num1: num1,
        num2: num2,
        result: result,
        message: `${num1} - ${num2} = ${result}`
    });
});

app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers' });
    }
    
    const result = num1 * num2;
    res.json({
        operation: 'multiplication',
        num1: num1,
        num2: num2,
        result: result,
        message: `${num1} × ${num2} = ${result}`
    });
});

app.get('/divide/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers' });
    }
    
    if (num2 === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    
    const result = num1 / num2;
    res.json({
        operation: 'division',
        num1: num1,
        num2: num2,
        result: result,
        message: `${num1} ÷ ${num2} = ${result}`
    });
});


app.get('/test', (req, res) => {
    res.json({ 
        message: 'Server is working!', 
        timestamp: new Date().toISOString() 
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('- GET /add/5/3 (adds two numbers)');
    console.log('- POST /add (with JSON body: {"num1": 5, "num2": 3})');
    console.log('- GET /subtract/10/4');
    console.log('- GET /multiply/6/7');
    console.log('- GET /divide/20/4');
    console.log('- GET /test');
});