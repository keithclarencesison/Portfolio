const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

console.log("MAIL_USER from .env:", process.env.MAIL_USER);
    
    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.MAIL_USER,
            subject: "New Contact Form Message",
            html: `<p><strong>From:</strong> ${name} (${email}) </p> <p>${message}</p>`,

        });

        res.status(200).json({ success: true, message: "Email Sent!"});
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;