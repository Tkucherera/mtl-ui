import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {

    
    const response = await fetch('http://127.0.0.1:8000/api/driver/me', {
        method: 'GET',
    });

    if (!response.ok) {
        return {
            trip: null,
            error: `Failed to fetch: ${response.status}`
        };
    }

    const user = await response.json();
    return { user};
};
