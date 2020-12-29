require('../config/db')
const express = require("express");
const router = express.Router();
const WordModel = require("../models/words.js")
const SentModel = require("../models/sentence.js")

function insertword(){
  var word = new WordModel({
        word:"वयम्",
        split: ["व","य","म्"],
        hint:"We"
  })
  word.save()
}
function insertsent(){
  const newSent = new SentModel({
        sentence:"अहं वदामि",
        split:["अहं","वदामि"],
        meaning:"I say"
    })
    newSent.save()
}
insertword()