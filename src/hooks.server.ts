/* hook to see if l can always intercept client request and mangle is in ways l like

The main goal is to be able to handle requests to the api this should be
running on local machine
*/

import type { HandleFetch } from '@sveltejs/kit';

export const handleFetch: HandleFetch = async ({ event, request, fetch }) => {
    const token = event.cookies.get('session');

    if (!token) {
        return new Response(
            JSON.stringify({ trip: null, error: 'Not authenticated' }),
            {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
    if (request.url.startsWith('http://127.0.0.1:8000/api')) {

        request = new Request(request, {
            headers: {
                ...Object.fromEntries(request.headers),
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    }

    return fetch(request);
}