require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailRoutes = require('./routes/mail');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://webcode.com.pl',
        'http://webcode.com.pl',
        'https://www.webcode.com.pl',
        'http://www.webcode.com.pl',
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/mail', mailRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});