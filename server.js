const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// චැනල් ලැයිස්තුව සහ ස්ට්‍රීම් ලින්ක් ලබා දෙන API endpoint එක
app.get('/api/channels', (req, res) => {
    const channels = [
        {
            id: 1,
            name: "Sky Sports Cricket",
            category: "Cricket",
            streamUrl: "YOUR_STREAM_URL_HERE"
        },
        {
            id: 2,
            name: "Peo Sports",
            category: "Sports",
            streamUrl: "YOUR_STREAM_URL_HERE"
        },
        {
            id: 3,
            name: "Willow Cricket",
            category: "Cricket",
            streamUrl: "YOUR_STREAM_URL_HERE"
        }
    ];
    res.json(channels);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
