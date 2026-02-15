const express = require('express');
const bodyParser = require('body-parser');
const mailRoutes = require('./routes/mail');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/mail', mailRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});