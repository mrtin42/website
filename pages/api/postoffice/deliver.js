import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import rateLimit from '@/utils/rate-limit';

const rateLimiter = rateLimit({
    interval: 12*60*60*1000, // 12 hours
    uniqueTokenPerInterval: 2, // 1 requests per interval 
})

export default async function deliver(req, res) {
    try {
        await rateLimiter.check(res, 2, 'CACHE_KEY_POSTOFFICE_DELIVER'); // 1 request per 12 hours
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
                user: "postoffice@mbfrias.com",
                pass: POSTOFFICE_PASSWORD,
            }
        });

        let letter = {
            from: 'Postman Pat <postoffice@mbfrias.com>', // who doesnt love a good old kids tv show reference
            to: "martin@mbfrias.co.uk",
            replyTo: `${name} <${email}>`,
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
                // what else can we do here?
                // maybe send a copy to the sender?
                // no that would be annoying
                // maybe send a copy to me?
                // no that already happens LOL
                // maybe send a copy to the sender if the sender is me?
                // well that would still still happen LMFAO
                // maybe send a copy to the sender if the sender is me and the message is a test?
                // no that would be annoying
                // man i really dont know what else to do here
                // maybe i should just leave it as it is
                // yeah i think i will
                // i mean i could send a copy to the sender if the sender is me and the message is a test and the subject is "test"
                // but that would be annoying
                // i mean it would be a good way to test the email system
                // but it would be annoying
                // i mean i could send a copy to the sender if the sender is me and the message is a test and the subject is "test" and the email is "martin@localhost"
                // but that would be annoying
                // okay i think i will just leave it as it is
                // yeah i think i will
                // right then i will
                // okay then
                // bye
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //               
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //                
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //                
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //                
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //                
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                // what are you still doing here?
                // i thought you left
                // well i guess i will just leave you here
                // okay then
                // bye  
            }
        });
    } catch {
        let file = path.join(process.cwd(), 'private', 'mailerror', 'limit.html');
        let html = fs.readFileSync(file, 'utf8');
        res.status(429).send(html);
        // WHAT ARE YOU STILL DOING HERE?
        // man you really are persistent
        // okay then
        // bye
    }
}