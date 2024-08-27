const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Serve the main page
app.get('/', (req, res) => {
    res.render('index', { data: require('./iplData.json') });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
