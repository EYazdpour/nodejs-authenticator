const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());

app.use('/api/auth',authRoutes);

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