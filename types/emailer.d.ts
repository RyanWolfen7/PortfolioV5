interface Email {
    from?: string | undefined,
    to?: string | undefined,
    subject?: string | undefined,
    text?: string | undefined,
    html?: string | undefined
}

declare const sendMail: Email

export { sendMail, Email}