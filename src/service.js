const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Simulated database (in-memory)
let savedContent = null;

// Save content to "database"
app.post('/save', (req, res) => {
    savedContent = req.body.content;
    res.json({ message: 'Content saved.' });
});

// Load content from "database"
app.get('/load', (req, res) => {
    res.json({ content: savedContent });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
