require('dotenv').config()

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log("DB CONNECTED!");
})
.catch((err) => {
    console.log("CONNECTION FAILED!");
    console.log(err);
})