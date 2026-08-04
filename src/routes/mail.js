require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const { createAdminEmail, createCustomerEmail } = require('../mail/messages');
const { inlineIconAttachments } = require('../mail/template');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.post('/', upload.single('file'), async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Imię, adres e-mail i wiadomość są wymagane.'
            });
        }

        const sender = process.env.EMAIL_FROM || process.env.EMAIL_USER;
        const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
        const uploadedAttachments = req.file
            ? [{ filename: req.file.originalname, content: req.file.buffer }]
            : [];

        const adminMailOptions = {
            from: sender,
            to: adminEmail,
            replyTo: email,
            subject: `Wiadomość od: ${email}`,
            text: `Imię: ${name}\nE-mail: ${email}\n\nWiadomość:\n${message}`,
            html: createAdminEmail({
                name,
                email,
                message,
                hasAttachment: Boolean(req.file),
            }),
            attachments: [...uploadedAttachments, ...inlineIconAttachments],
        };

        const customerMailOptions = {
            from: sender,
            to: email,
            replyTo: adminEmail,
            subject: 'Dziękuję za kontakt — Webcode',
            text: `Cześć ${name},\n\nDziękuję za wiadomość i zainteresowanie współpracą. Odpowiem najszybciej, jak to możliwe.\n\nWebcode\nhttps://webcode.com.pl/`,
            html: createCustomerEmail({ name }),
            attachments: [...inlineIconAttachments],
        };

        const [adminInfo, customerInfo] = await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(customerMailOptions),
        ]);

        return res.status(200).json({
            success: true,
            message: 'Wiadomość została wysłana.',
            messageIds: {
                admin: adminInfo.messageId,
                customer: customerInfo.messageId,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Błąd wysyłania wiadomości.'
        });
    }
});

module.exports = router;
