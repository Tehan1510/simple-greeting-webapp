
const express = require('express');
const app = express();
const port = 3001;


app.use(express.json());
app.use(express.static('public'));


const name = "Tehan";
const userId = "34000";


app.get('/api/hi', (req, res) => {
    res.json({ message: "HELLO FROM SERVER" });
});


app.get('/api/greet/:name', (req, res) => {
    const username = req.params.name;
    res.json({
        greeting: `Welcome, ${username}!`
    });
});


app.get('/', (req, res) => {
    res.send(`
        <h2>Server Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>User ID:</strong> ${userId}</p>
        <p>Open the UI at: http://localhost:${port}/index.html</p>
    `);
});


app.listen(port, () => {
    console.log("Server Started Successfully");
    console.log("Name:", name);
    console.log("User ID:", userId);
    console.log(`Server running at http://localhost:${port}`);
});