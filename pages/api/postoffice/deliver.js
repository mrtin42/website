import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import rateLimit from '@/utils/rate-limit';

const rateLimiter = rateLimit({
    interval: 12*60*60*1000, // 12 hours
    uniqueTokenPerInterval: 1, // 1 requests per interval 
})

export default async function deliver(req, res) {
    try {
        await rateLimiter.check(res, 1, 'CACHE_KEY_POSTOFFICE_DELIVER'); // 1 request per 12 hours
        const { name, email, subject, message } = req.body;
        const { POSTOFFICE_PASSWORD } = process.env;

        if (!name || !email || !subject || !message) {
            let file = path.join(process.cwd(), 'private', 'mailerror', 'empty.html');
            let html = fs.readFileSync(file, 'utf8');
            res.status(400).send(html);
            return;
        };

        if (!email.includes('@') || !email.includes('.')) {
            let file = path.join(process.cwd(), 'private', 'mailerror', 'falsemail.html');
            let html = fs.readFileSync(file, 'utf8');
            res.status(400).send(html);
            return;
        };

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
                let file = path.join(process.cwd(), 'private', 'mailerror', 'server.html');
                let html = fs.readFileSync(file, 'utf8');
                res.status(500).send(html);
            } else {
                console.log(`postman pat delivered the mail!`);
                console.log(info);
                let file = path.join(process.cwd(), 'private', 'mailsuccess', 'sent.html');
                let html = fs.readFileSync(file, 'utf8');
                res.status(200).send(html);
            }
        });
    } catch {
        let file = path.join(process.cwd(), 'private', 'mailerror', 'limit.html');
        let html = fs.readFileSync(file, 'utf8');
        res.status(429).send(html);
    }
}