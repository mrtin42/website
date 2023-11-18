import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import rateLimit from '@/utils/rate-limit';

const rateLimiter = rateLimit({
    interval: 12*60*60*1000, // 12 hours
    uniqueTokenPerInterval: 1, // 1 requests per interval 
})

export default async function deliver(req, res) {
    const { name, email, subject, message } = req.body;
    const { POSTOFFICE_PASSWORD } = process.env;

    // rate limiter 

    let van = nodemailer.createTransport({
        host: "mail.spacemail.com",
        port: 465,
        secure: true, // because privacy
        auth: {
            user: "postoffice@mbfrias.me.uk",
            pass: POSTOFFICE_PASSWORD,
        }
    });

    let letter = {
        from: 'Postman Pat <postoffice@mbfrias.me.uk>', // who doesnt love a good old kids tv show reference
        to: "martin@mbfrias.co.uk",
        subject: `New message from ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
    };

    van.sendMail(letter, (err, info) => {
        if (err) {
            console.error(`oh bother, postman pat's van broke down.`);
            console.error(err);
            res.status(500).json({
                code: 500,
                message: "Internal Server Error",
                userMessage: "Oh bother, something went wrong. Please try again later.",
                error: err
            }); // using json response over html to check if that fixes the vercel timeout issue
        } else {
            console.log(`postman pat delivered the mail!`);
            console.log(info);
            res.status(200).json({
                code: 200,
                message: "OK",
                userMessage: "Thanks! Your message has been sent.", 
                info: info
            }); // using json response over html to check if that fixes the vercel timeout issue
        }
    });
}