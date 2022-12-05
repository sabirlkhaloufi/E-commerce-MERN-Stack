const nodemailer = require('nodemailer')
require('dotenv').config();

// generate transporter nodemailler for send email verification
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user : process.env.EMAIL,
        pass : process.env.PASS_EMAIL,
        
    },
    tls: {
        rejectUnauthorized: false
    }
})


//function for reset password arguments(user:)

const sendEmailForResetPass = (req,user,res) =>{

    //send email verification
    mailOption =  {
        from: '"reset your password " <<sabirkhalloufi@gmail.com>>',
        to: user.email,
        subject: 'reset your password',
        html : `<h2> ${user.name}</h2>
                <h4>Click for lien for reset your password</h4>
                <a href="${process.env.PORT_SERVER}api/auth/resetpassword/${user.token}">Reset Password</a>`
    }

transporter.sendMail(mailOption, function(error, info){
    if(error){
        throw new Error(error)
    }
    else{
        res.json({message : "verification email is send to your email account"})
    }
})

}

module.exports = sendEmailForResetPass