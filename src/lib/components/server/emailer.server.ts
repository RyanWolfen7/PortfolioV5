import { env } from '$env/dynamic/private';
import nodemailer from "nodemailer"
import type { Email } from '../../../../types/emailer'

console.log(env.EPASS, env.EMAIL)
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: env.EMAIL, 
        pass: env.EPASS
    }
});

const sendMail = async ({
    from = env.EMAIL,
    to = env.EMAIL,
    subject = "test",
    text = "test",
    html = "<h1>test</h1>"
}: Email ) => {
    const info = await transporter.sendMail({ from, to, subject, text, html })
    console.log("Message sent: %s", info.messageId);
    return null
}

export {
    sendMail
}