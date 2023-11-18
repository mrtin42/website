import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import path from 'path';

export default async function deliver(req, res) {
    const { name, email, subject, message } = req.body;
    const { POSTOFFICE_PASSWORD } = process.env;

    // rate limiter was already applied in server.js - bye bye

    let van = nodemailer.createTransport({
        host: "smtp.spacemail.com",
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
            return res.status(500).json({
                code: 500,
                message: "Internal Server Error",
                userMessage: "Oh bother, something went wrong. Please try again later.",
                error: err
            }) // using json response over html to check if that fixes the vercel timeout issue
        } else {
            console.log(`postman pat delivered the mail!`);
            console.log(info);
            return res.status(200).json({
                code: 200,
                message: "OK",
                userMessage: "Thanks! Your message has been sent.", 
                info: info
            }) // using json response over html to check if that fixes the vercel timeout issue
        }
    });
}