const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT;

(async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('mongoose connection has been established.')
        app.listen(port, console.log(`server is running on port ${port}.`));
    } catch (error) {
        console.log(error);
    }
})()