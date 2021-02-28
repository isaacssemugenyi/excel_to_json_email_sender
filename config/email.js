const nodemailer = require('nodemailer');
require('dotenv').config();
         
exports.emailSending = async function(toSendTo, emailSubject, actualMessage){
    let mailTransporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
            user: process.env.email, 
            pass: process.env.pass
        },
        tls: {
            rejectUnauthorized: false
        } 
    }); 

    let mailDetails = { 
        from: process.env.email, 
        to: toSendTo, 
        subject: emailSubject,
        text: `${actualMessage}
                Please note the balance above we demand you.
                `
    };

    await mailTransporter.sendMail(mailDetails, (err, data)=>{
        if(err){
            return;
        }
        return;
    }) 
}