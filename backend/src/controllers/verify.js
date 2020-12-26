var User = require('../models/user');
var jwt = require('jsonwebtoken')
const { welcomeEmail, forgetPassMail } = require('../config/mailTemplate')
const { validationResult } = require('express-validator')

exports.userVerification = (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty())
        return res.status(422).json({err: errors.array()[0].msg})

    User.findOne({verifyToken: req.params.token}, (err, user) => {
        if(err || !user)
            return res.status(404).json({err: err, success: false})

        user.isVerified = true
        user.verifyToken = undefined
        user.save()
        .then((user) => {
            welcomeEmail(user.email, user.name)
        })
        .catch((err) => {
            return res.status(500).json({err: err, success: false})
        })

        var token = jwt.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: 604800})
        return res.status(200).json({msg: "Verification Success!!", success: true, token: token})
    })
}

exports.userForget = (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty())
        return res.status(422).json({err: errors.array()[0].msg})
    
    User.findOne({ email: req.body.email }, (err, user) => {
        if(err)
            return res.status(500).json({err: err, success: false})
        
        if(!user) {
            next()
            return ;
        }

        user.verifyToken = crypto.randomBytes(30).toString('hex');
        user.tokenExpiry = Date.now() + 3600000                     // Generating A Token With An Expiry Time Of 1 Hour
        user.save()
        .then((user) => {
            forgetPassMail(user.email, `http://localhost:3000/forget/verify/${user.verifyToken}`)
            })
        .catch((err) => {
            return res.status(500).json({ err: err, success: false })
            })
        
        return res.status(200).json({ msg: "Mail Sent!!", success: true})
    })
}

exports.userPassReset = (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty())
        return res.status(422).json({err: errors.array()[0].msg})

        User.findOne({verifyToken: req.params.token}, (err, user) => {
            if(err || !user)
                return res.status(404).json({err: "Invalid Token", success: false})
    
            user.verifyToken = undefined
            user.tokenExpiry = undefined

            if(user.tokenExpiry < Date.now()) {     // Check fot the expiry of the Verification Token
                user.save()
                return res.status(403).json({err: "Token Expired!! Resend the request", success: false})
            }
    
            user.encry_password =  user.securePassword(req.body.newPassword)
            user.save()
            .catch((err) => {
                return res.status(500).json({ err: err, success: false })
            })
            
            return res.status(200).json({err: "Password Reset Success!!", success: true})
        })
}