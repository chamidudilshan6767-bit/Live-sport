const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Public folder එක හෝ current folder එක static විදිහට set කිරීම
app.use(express.static(path.join(__dirname)));

// Root route එක මගින් index.html පෙන්වීම
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
