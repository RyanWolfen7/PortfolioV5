import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {

}

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const headers = await request.headers
        console.log('book action called:\n', data);
        return {success: true}
    }
} satisfies Actions;