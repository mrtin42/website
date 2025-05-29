'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function formSubmit(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    throw new Error('All fields are required');
  }

  try {
    await resend.emails.send({
      from: 'mbfrias.com webform <onboarding@resend.dev>',
      to: 'martin@mbfrias.co.uk',
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    });
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}