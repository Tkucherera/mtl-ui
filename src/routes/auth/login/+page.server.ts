import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ cookies, request }) => {
        const formData = await request.formData();

        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            body: formData
        });

        if (response.status === 200) {
            const resp = await response.json();
            if (resp['access_token'] && resp['token_type']) {
                // Save the token in the cookie
                cookies.set('session', resp['access_token'], {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'strict',
                    secure: import.meta.env.MODE === 'production',
                    maxAge: 60 * 60 * 24 // 1 day
                });
                throw redirect(303, '/');
            } else {
                return fail(401, {
                    error: 'Invalid credentials'
                });
            }
        } else {
            return fail(response.status, {
                error: 'Login failed'
            });
        }
    }
} satisfies Actions;