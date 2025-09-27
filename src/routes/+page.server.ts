// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
//export const prerender = true;

// We will be using the built fetch function in svelte

// +page.server.ts
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
    // Get the token from cookies (set during login

    // Make the API request with Bearer token
    const response = await fetch('http://127.0.0.1:8000/api/driver/current_trip/', {
        method: 'GET',
    });

    if (!response.ok) {
        return {
            trip: null,
            error: `Failed to fetch: ${response.status}`
        };
    }

    const trip = await response.json();
    return { trip };
};
