import nodemailer from 'nodemailer';

export default async function handler(req: any, res:any) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const appPassword = process.env.APPPASSWORD;
        const fromEmail = process.env.EMAIL;
        const toEmail = process.env.TOEMAIL;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: fromEmail,
                pass: appPassword,
            },
        });

        const mailOptions = {
            from: fromEmail,
            to: toEmail,
            subject: `Contact form submission from ${name}`,
            text: `You have received a new message from ${name} (${email}):\n\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.writeHead(302, { Location: '/contact' });
            res.end();
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}
