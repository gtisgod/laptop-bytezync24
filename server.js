const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

// Dummy user database
const users = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'admin@value.com', password: 'adminpass' }
];

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful', user: email });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
