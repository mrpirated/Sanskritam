//require('dotenv').config()
//require('./config/db')
const express = require("express");
const router = express.Router();
const WordModel = require("../models/words.js")
const SentModel = require("../models/sentence.js")

function randomword(difficulty) {

    var size;
    var word;
    var rand = Math.random();
    if (difficulty == 0) {

        WordModel.find({ "split.2": { "$exists": false } }, function (err, docs) {
            
            size = docs.length;
            var index = Math.floor(rand * size);
            word = new WordModel(docs[index]);
            console.log(word);
        })
    }
    else if (difficulty == 1) {

        WordModel.find({ "split.4": { "$exists": false } } && { "split.2": { "$exists": true } }, function (err, docs) {
            size = docs.length;
            var index = Math.floor(rand * size);
            word = new WordModel(docs[index]);
            console.log(word);

        })
    }
    else if (difficulty == 2) {

        WordModel.find({ "split.4": { "$exists": true } }, function (err, docs) {
            size = docs.length;
            var index = Math.floor(rand * size);
            word = new WordModel(docs[index]);
            console.log(word);
        })
    }

    return word;
}
function randomsentence(difficulty) {
    var size;
    var sentence;
    var rand = Math.random();
    if (difficulty == 0) {

        SentModel.find({ "split.2": { "$exists": false } }, function (err, docs) {
            size = docs.length;
            var index = Math.floor(rand * size);
            sentence = new SentModel(docs[index]);
            console.log(sentence);
        })
    }
    else if (difficulty == 1) {

        SentModel.find({ "split.4": { "$exists": false } } && { "split.2": { "$exists": true } }, function (err, docs) {
            size = docs.length;
            var index = Math.floor(rand * size);
            sentence = new SentModel(docs[index]);
            console.log(sentence);
        })
    }
    else if (difficulty == 2) {

        SentModel.find({ "split.4": { "$exists": true } }, function (err, docs) {
            size = docs.length;
            var index = Math.floor(rand * size);
            sentence = new SentModel(docs[index]);
            console.log(sentence);
        })
    }
    return sentence;
}

module.exports.randomword = randomword;
module.exports.randomsentence = randomsentence;

