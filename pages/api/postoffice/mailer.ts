import nodemailer from "nodemailer";
import { promises as fs } from 'fs';
import path from 'path';
import { NextApiRequest as NextApiRequestBase, NextApiResponse } from "next";

type Data = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    error?: string;
}

interface NextApiRequest extends NextApiRequestBase {
    body: Data;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | string>
) {
    // send options when method is OPTIONS
    if (req.method === 'OPTIONS') {
        res.status(200).appendHeader('Access-Control-Allow-Origin', '*').appendHeader('Access-Control-Allow-Methods', 'POST, OPTIONS').appendHeader('Access-Control-Allow-Headers', 'Content-Type').end();
        return;
    }

    // data validation
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        const filePath = path.join(process.cwd(), 'private', 'empty.html');
        const fileContents = await fs.readFile(filePath, 'utf8');
        res.status(400).send(fileContents);
        return;
    }
    if (email.includes('@') === false || email.includes('.') === false) {
        const filePath = path.join(process.cwd(), 'private', 'nomail.html');
        const fileContents = await fs.readFile(filePath, 'utf8');
        res.status(400).send(fileContents);
        return;
    }
    if (req.body.subject) {
        var subject = req.body.subject;
    } else {
        var subject = 'No subject';
    }
    
    // okay les go
    const transporter = nodemailer.createTransport({
        host: 'mail.spacemail.com',
        port: 465,
        secure: true,
        auth: { user: 'postoffice@mbfrias.me.uk', pass: process.env.POSTOFFICE_PASS }
    });
    const mailOptions = {
        from: 'postoffice@mbfrias.me.uk', // automated email
        to: 'martin@mbfrias.co.uk', // my email
        subject: `New message from ${name}: ${subject}`, // subject line
        replyTo: email, // reply to the sender
        text: message, // plain text body - will be updated to html later
    }

    // vwoosh
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.status(500).send('Something went wrong. Please try again.');
        } else {
            console.log(info);
            res.status(200).send('Message sent successfully!');
        }
    });
}