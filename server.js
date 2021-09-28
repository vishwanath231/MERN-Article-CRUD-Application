const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const colors = require('colors');
const path = require('path');

// db
const connectDB = require('./config/db');


// config
dotenv.config({ path: './config/config.env' });


// App init
const app = express();


// db connection
connectDB();


// Middleware
app.use(cors());
app.use(express.json());


// Route
app.use('/api/article', require('./routes/router'));


// server static 
if (process.env.NODE_ENV === "production") {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


// App port
const PORT = process.env.PORT || 5000;

// App listen
app.listen(PORT, (req, res) => {
    console.log(`Sever running a ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.bgYellow.bold);
})