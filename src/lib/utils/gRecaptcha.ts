import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise"

export const createAssessment = async ({
    projectID = process.env.RECAPTCHA_PROJECT_ID,
    recaptchaKey = process.env.RECAPTCHA_KEY,
    token = "action-token",
    recaptchaAction = "action-name",
}) => {
    const client = new RecaptchaEnterpriseServiceClient();
    if (!projectID) console.log("RECAPTCHA_PROJECT_ID is not defined");
    if (!projectID) throw new Error("RECAPTCHA_PROJECT_ID is not defined");
    const projectPath = client.projectPath(projectID);

    const request = {
        assessment: {
            event: {
                token: token,
                siteKey: recaptchaKey
            },
        },
        parent: projectPath,
    };

    const [ response ] = await client.createAssessment(request);

    if(!response.tokenProperties || !response.tokenProperties.valid) console.log(`Recaptcha token failed because: ${response.tokenProperties?.invalidReason}`);
    if(response.tokenProperties && response.tokenProperties.action == recaptchaAction) {
        console.log("The score is: ", response.riskAnalysis?.score);
        response.riskAnalysis?.reasons?.forEach(reason => {
            console.log("Reason: ", reason);
        });

        return response.riskAnalysis?.score;
    } else {
        console.log(`Recaptcha token failed because the action didn't match the score`);
        return null;
    }
}