//require('dotenv').config()
//require('./config/db')
const express = require("express");
const router = express.Router();
const WordModel = require("../models/words.js") 
const User = require("../models/user.js")
async function main(){

    /*const newWord = new WordModel({
        word:"सुर्य",
        split: ["सु","र्य"],
        hint:"A name for the Sun"
    })
    newWord.save()*/
 
    WordModel.find(function(err, Library) {
        if (err) {
            console.log(err);
        } else {
            console.log(Library);
        }
    });
    User.find(function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
        }
    });

}

main().catch(console.error);