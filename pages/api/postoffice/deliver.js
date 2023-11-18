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
        subject: `New message from ${name} <${email}>: ${subject}`,
        html: `
            <h1>New message from ${name} <${email}></h1>
            <p>${message}</p>
        `
    };

    van.sendMail(letter, (err, info) => {
        if (err) {
            console.error(`oh bother, postman pat's van broke down.`);
            console.error(err);
            let errPage = path.join(process.cwd(), 'private', 'mailerror', 'server.html');
            let html = fs.readFileSync(errPage, 'utf8');
            res.status(500).send(html); // oh no
        } else {
            console.log(`postman pat delivered the mail!`);
            console.log(info);
            let successPage = path.join(process.cwd(), 'private', 'mailsuccess', 'sent.html');
            let html = fs.readFileSync(successPage, 'utf8');
            res.status(200).send(html); // all good
        }
    });
}