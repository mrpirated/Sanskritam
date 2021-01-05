require('../config/db')

const express = require("express");
const router = express.Router();
const User = require("../models/user.js")

router.post("/",(req,res)=>{
    const _id = req.body._id;
    const points = req.body.points;
    const daypoints = req.body.daypoints;

    User.updateOne({_id: _id},{points: points,daypoints: daypoints},(err,result)=>{
        if (err) {
            res.send(err);
          } else {
            res.json(result);
          }
    })
})

module.exports = router;