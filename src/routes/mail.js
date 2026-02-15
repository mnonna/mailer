const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const mailOptions = {
            from: 'webcode.kontakt@gmail.com',
            to: 'webcode.kontakt@gmail.com',
            subject: `Wiadomość od: ${email}`,
            text: `
Imię: ${name}
Email: ${email}

Wiadomość:
${message}
            `
        };

        const info = await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: 'Wiadomość została wysłana.',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('Błąd wysyłania maila:', error);

        return res.status(500).json({
            success: false,
            message: 'Wystąpił błąd podczas wysyłania wiadomości.'
        });
    }
});

module.exports = router;