// index.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Route to fetch a random image
app.get('/api/image/random', async (req, res) => {
    try {
        const response = await axios.get('https://api.unsplash.com/photos/random?client_id=iVF4Jb2YIhP__7x9trEAM3DEoZ_lhP9pVtZBm045cZw', 
        //     {
        //     headers: {
        //         'Authorization': 'Client-ID teqqF8nPnwqL1HwUNoC7PZpea1lS28It8ZnRV4Lswqc' 
        //     }
        // }
    );

        // Log the image URL for debugging
        console.log('Image URL:', response.data.urls.full);

        // Redirect to the image URL
        res.redirect(response.data.urls.full);
    } catch (error) {
        console.error('Error fetching random image:', error.message);
        res.status(500).send('Error fetching random image');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
