//require('dotenv').config()
require('../config/db')

const express = require("express");
const router = express.Router();
const WordModel = require("../models/words.js")
const SentModel = require("../models/sentence.js")
const User = require("../models/user.js")



router.get("/getword/easy", async (req, res) => {
    var rand = Math.random();
    WordModel.find({ "split.2": { "$exists": false } })
        .then(docs => {
            size = docs.length;
            var index = Math.floor(rand * size);
            word = new WordModel(docs[index]);
            console.log(word);
            res.json(word)
        })
        .catch(err => status(400).json('Error: ' + err))
})

router.get("/getword/medium", async (req, res) => {
    var rand = Math.random();
    WordModel.find({ "split.4": { "$exists": false } } && { "split.2": { "$exists": true } })
        .then(docs => {
            size = docs.length;
            var index = Math.floor(rand * size);
            word = new WordModel(docs[index]);
            console.log(word);
            res.json(word)
        })
        .catch(err => status(400).json('Error: ' + err))
})

router.get("/getword/hard", async (req, res) => {
    var rand = Math.random();
    WordModel.find({ "split.4": { "$exists": true } })
        .then(docs => {
            size = docs.length;
            var index = Math.floor(rand * size);
            word = new WordModel(docs[index]);
            console.log(word);
            res.json(word)
        })
        .catch(err => status(400).json('Error: ' + err))
})

router.get("/getsentence/easy", async (req, res) => {
    var rand = Math.random();
    SentModel.find({ "split.2": { "$exists": false } })
        .then(docs => {
            size = docs.length;
            var index = Math.floor(rand * size);
            sent = new SentModel(docs[index]);
            console.log(sent);
            res.json(sent)
        })
        .catch(err => status(400).json('Error: ' + err))
})

router.get("/getsentence/medium", async (req, res) => {
    var rand = Math.random();
    SentModel.find({ "split.4": { "$exists": false } } && { "split.2": { "$exists": true } })
        .then(docs => {
            size = docs.length;
            var index = Math.floor(rand * size);
            sent = new SentModel(docs[index]);
            console.log(sent);
            res.json(sent)
        })
        .catch(err => status(400).json('Error: ' + err))
})

router.get("/getsentence/hard", async (req, res) => {
    var rand = Math.random();
    SentModel.find({ "split.4": { "$exists": true } })
        .then(docs => {
            size = docs.length;
            var index = Math.floor(rand * size);
            sent = new SentModel(docs[index]);
            console.log(sent);
            res.json(sent)
        })
        .catch(err => status(400).json('Error: ' + err))
})

router.get("/leaderboard", async (req, res) => {
    var mysort = { points: 1 };
    User.find({})
        .then(docs => {
            res.json(docs.sort(mysort))
        })
        .catch(err => status(400).json('Error: ' + err))
})


module.exports = router;
