require('dotenv').config()
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dbuser:dbuser@cluster0.o8x9w.mongodb.net/DB?retryWrites=true&w=majority", {
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

const wordSchema = new mongoose.Schema(
    {
        sentence: {
            type: String,
            required: true

        },
        split:{
            type: Array,
            required: true
        },
        meaning: {
            type: String,
            required: true
        }
    }
    
);

module.exports = mongoose.model("Sentence Library",wordSchema);