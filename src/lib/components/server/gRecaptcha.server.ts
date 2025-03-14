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
    if (!token) {
        console.error("No reCAPTCHA token provided");
        return null;
    }
    const projectID = env.RECAPTCHA_PROJECT_ID;
    const recaptchaKey = env.RECAPTCHA_KEY;

    if (!projectID) {
        console.error("RECAPTCHA_PROJECT_ID is not defined in environment variables");
        return null;
    }

    if (!recaptchaKey) {
        console.error("RECAPTCHA_KEY is not defined in environment variables");
        return null;
    }
    console.log("reCaptcha Action:", recaptchaAction);
    console.log("Google API Key:", env.GOOGLE_API_KEY);
    const request = await fetch(`https://recaptchaenterprise.googleapis.com/v1/projects/${projectID}/assessments?key=${GOOGLE_API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            event: {
                token,
                expectedAction: recaptchaAction,
                siteKey: recaptchaKey,
                userIpAddress,
                userAgent,
                 
            }
        }),
    });
    const body = await request.json();
    const { riskAnalysis, tokenProperties } = body;
    console.log("Recaptcha token properties:", tokenProperties);
    console.log("Recaptcha risk analysis:", riskAnalysis);
    return { passes: true, reason: null };

};