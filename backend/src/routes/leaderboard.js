require('../config/db')

const express = require("express");
const router = express.Router();
const User = require("../models/user.js")

router.get("/global", async (res, req) => {
    let mysort = { points: 1 }
    User.find({}).
        then(docs => {
            res.send(docs.sort(mysort));
        })
        .catch(err => status(400).json('Error: ' + err))

})


module.exports = router;