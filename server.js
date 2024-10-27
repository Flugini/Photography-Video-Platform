require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Eine einfache Route für die Root-URL
app.get('/', (req, res) => {
    res.send('Welcome to the Photography and Video Platform!');
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});