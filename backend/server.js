const express = require('express');
const app = express();

app.post('/api/recipes', (req, res) => {
    // Handle incoming POST request (e.g., process ingredient data, find recipes)
    // Send response back to frontend
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});