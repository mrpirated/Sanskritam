//require('dotenv').config()
//require('./config/db')
const express = require("express");
const router = express.Router();
const WordModel = require("../models/words.js") 
const SentModel = require("../models/sentence.js") 
const User = require("../models/user.js")
function randomword(difficulty){
    
    var size;
    var word;
    var rand = Math.random();
    // const newWord = new WordModel({
    //     word:"त्वम्",
    //     split: ["त्व","म्"],
    //     hint:"Myself"
    // })
    // newWord.save()

    // const newSent = new SentModel({
    //     sentence:"अहं वदामि",
    //     split:["अहं","वदामि"],
    //     meaning:"I say"
    // })
    // newSent.save()
 
    // WordModel.find(function(err, Library) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(Library);
    //     }
    // });
    if (difficulty == 0) {

        WordModel.find({ "split.2": { "$exists": false } }, function (err, docs) {
            //console.log(docs);
            size = docs.length;
            var index = Math.floor(rand*size);
            word = docs[index];
            console.log(word);
        })
    }
    else if (difficulty == 1) {

        WordModel.find({ "split.4": { "$exists": false } }&&{ "split.2": { "$exists": true }}, function (err, docs) {
            size = docs.length;
            var index = Math.floor(rand*size);
            word = docs[index];
            console.log(word);
        })
    }
    else if (difficulty == 2) {

        WordModel.find({ "split.4": { "$exists": true }}, function (err, docs) {
            size = docs.length;
            var index = Math.floor(rand*size);
            word = docs[index];
            console.log(word);
        })
    }

    return word;

    
    
   
    

}
function randomsentence(difficulty){
    if (difficulty == 0) {

        SentModel.find({ "split.2": { "$exists": false } }, function (err, docs) {
            console.log(docs);
        })
    }
    else if (difficulty == 1) {

        SentModel.find({ "split.4": { "$exists": false } }&&{ "split.2": { "$exists": true }}, function (err, docs) {
            console.log(docs);
        })
    }
    else if (difficulty == 2) {

        SentModel.find({ "split.4": { "$exists": true }}, function (err, docs) {
            console.log(docs);
        })
    }
}
word = randomword(0);
console.log(word);
//randomsentence(0);