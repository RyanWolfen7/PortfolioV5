import { createAssessment } from '$lib/components/server/gRecaptcha.server';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { sendMail } from '$lib/components/server/emailer.server';

export const load: PageServerLoad = async ({ cookies }) => {

    return {};
};

export const actions: Actions = {
    default: async ({ request, getClientAddress }) => {
        try {
            const data = await request.formData();
            const recaptchaToken = data.get('g-recaptcha-response')?.toString();
            const name = data.get('name')?.toString();
            const email = data.get('email')?.toString();
            const projectDetails = data.get('projectDetails')?.toString();
            if (!name || !email || !projectDetails) fail(400, { error: true, projectDetails: 'Please fill out all required fields', fields: { name, email, projectDetails }});
            if (!recaptchaToken) fail(400, { error: true, projectDetails: 'reCAPTCHA verification is required', fields: { name, email, projectDetails } });
            const { headers } = request
           // add header validation here
            const ip = getClientAddress();
            const assessment = await createAssessment({ 
                token: recaptchaToken,
                recaptchaAction: 'booking_request',
                userAgent: headers.get('user-agent') as string | undefined,
                userIpAddress: ip
            });
            if (!assessment || !assessment.passes) fail(400, { error: true, projectDetails: 'reCAPTCHA verification failed', fields: { name, email, projectDetails }, reason: assessment ? assessment.reason : 'Unknown reason'});
            await sendMail({})
            return {
                success: true,
                projectDetails: 'Thank you for your projectDetails. We\'ll get back to you soon!'
            };
        } catch (error) {
            console.error('Error processing booking request:', error);
            return fail(500, { 
                error: true,
                projectDetails: 'Something went wrong. Please try again later.'
            });
        }
    }
};