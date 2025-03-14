import { env } from '$env/dynamic/private';
import { GOOGLE_API_KEY } from '$env/static/private';
/**
 * Creates a reCAPTCHA assessment to verify the token
 * @param options Configuration options for the assessment
 * @returns The risk score if successful, null otherwise
 */
export const createAssessment = async ({
    token,
    recaptchaAction = "submit",
    userIpAddress,
    userAgent
}: {
    token?: string;
    recaptchaAction?: string;
    userIpAddress?: string;
    userAgent?: string;
}) => {    
    const projectID = env.RECAPTCHA_PROJECT_ID;
    const recaptchaKey = env.RECAPTCHA_KEY;
    if (!projectID) return { passes: false, reason: "RECAPTCHA_PROJECT_ID is not defined in environment variables" };
    if (!recaptchaKey) return { passes: false, reason: "reCAPTCHA_KEY is not defined in environment variables" };
    if (!token) return { passes: false, reason: "No reCAPTCHA token provided" };

    const requestBody = {
        "event": {  // The event to be assessed
            "token": token,
            "siteKey": recaptchaKey,
            "expectedAction": recaptchaAction,
            "userIpAddress": userIpAddress,
            "userAgent": userAgent
        }
    };
    const recaptchaResponse = await fetch(`https://recaptchaenterprise.googleapis.com/v1/projects/${projectID}/assessments?key=${GOOGLE_API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(requestBody),
    });
    const body = await recaptchaResponse.json();
    const { riskAnalysis, tokenProperties } = body;
    if (!tokenProperties.valid) {
        console.error("Invalid reCAPTCHA token", tokenProperties.invalidReason);
        return { passes: false, reason: "Invalid reCAPTCHA token" };
    }
    console.log("reCAPTCHA risk analysis", body);
    if (riskAnalysis.score <= 0.5) {
        console.log("High-risk reCAPTCHA score", riskAnalysis.score);
        return { passes: false, reason: "High-risk reCAPTCHA score" };
    }

    return { passes: true, reason: null };
};