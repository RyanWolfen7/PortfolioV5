interface RecaptchaToken {
    projectID: string,
    recaptchaKey: string,
    token: string,
    recaptchaAction: string
}

declare const recaptchaToken: RecaptchaToken;

export { recaptchaToken, RecaptchaToken };