"use strict";
const nodemailer = require("nodemailer");
const sendMail = async function (email, message) {
    try {
        // let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: '',
                pass: '',
            },
        });
        
        // send mail with defined transport object
        await transporter.sendMail({
            from: '',
            to: email,
            subject: message.subject,
            text: message.text,
        });
        return 
    } catch {
        throw error;
    }
}
   
module.exports = {
    sendMail
}
