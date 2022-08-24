const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://prabh:prabh@test.2b2iwoj.mongodb.net/?retryWrites=true&w=majority', (error) => {
    if (error) {
        console.log('Error connecting database', error);
    } else {
        console.log('database connected');
    }
})

app.use('/user', userRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})