const sgMail = require('@sendgrid/mail')
const dotenv = require("dotenv");

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'sajal02gupta@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app ${name}. Let me know how you get along with the app.`
    })
}

const sendCancetionlaEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'sajal02gupta@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}! We wish to see you sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancetionlaEmail
}