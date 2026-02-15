require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.post('/', upload.single('file'), async (req, res) => {
    try {
        console.log('BODY:', req.body);
        console.log('FILE:', req.file);

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
            `,
            attachments: req.file ? [
                {
                    filename: req.file.originalname,
                    content: req.file.buffer
                }
            ] : []
        };

        const info = await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: 'Wiadomość została wysłana.',
            messageId: info.messageId
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