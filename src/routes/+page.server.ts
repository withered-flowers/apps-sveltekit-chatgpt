import { CHAT_GPT_TOKEN } from '$env/static/private';
import { fail } from '@sveltejs/kit';

import type { Actions } from './$types';
import type { ReturnOpenAI } from 'src/global';

type ResponseData = {
	prompt: string;
	response: ReturnOpenAI;
};

type ResponseSuccess = {
	success?: boolean;
	error?: boolean;
	data: ResponseData;
};

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const requestData = await request.formData();

		const prompt = requestData.get('the-code')?.toString() ?? '';

		const response = await fetch('https://api.openai.com/v1/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${CHAT_GPT_TOKEN}`
			},
			body: JSON.stringify({
				model: 'code-davinci-002',
				prompt: `/* ${prompt} (javascript) */`,
				temperature: 0,
				max_tokens: 1024,
				top_p: 1,
				frequency_penalty: 0,
				presence_penalty: 0,
				stop: ['/*']
			})
		});
		const responseJson: ReturnOpenAI = await response.json();

		if (response.ok) {
			const responseData: ResponseSuccess = {
				success: true,
				data: {
					prompt,
					response: responseJson
				}
			};

			return responseData;
		} else {
			return fail(400, {
				error: true,
				data: responseJson
			});
		}
	}
};
