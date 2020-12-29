require('dotenv').config()

const mongoose = require('mongoose');
var uri = process.env.MONGO_URL;
mongoose.connect(uri, {
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

