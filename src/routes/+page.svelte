<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';

	import Highlight from 'svelte-highlight';
	import javascript from 'svelte-highlight/languages/javascript';
	import solarizedDark from 'svelte-highlight/styles/solarized-dark';

	import Header from '$lib/components/Header.svelte';
	import Disclaimer from '$lib/components/Disclaimer.svelte';

	export let isLoading: boolean = false;
	export let form: ActionData;

	const formSubmitEnhanceHandler: SubmitFunction = async () => {
		isLoading = true;

		return async ({ update }) => {
			isLoading = false;
			update();
		};
	};
</script>

<svelte:head>
	<title>Codex OpenAI for 7Vitkcah</title>
	{@html solarizedDark}
</svelte:head>

<section class="flex max-h-screen flex-col gap-4 p-4">
	<section class="flex flex-col gap-4">
		<Header />
		<Disclaimer />
	</section>

	<section class="min-h-fit overflow-scroll rounded-lg bg-gray-300/40 p-4">
		{#if !isLoading && !form?.success}
			<p class="text-xl font-semibold">Hasil Kodenya akan terlihat di sini nanti ...</p>
		{/if}

		{#if isLoading}
			<code class="animate-pulse">
				<pre>Hasil Kodenya akan terlihat di sini nanti ...</pre>
			</code>
		{/if}

		{#if form?.success && !isLoading}
			<section class="flex flex-col gap-4">
				<p class="text-xl font-semibold">{form.data?.prompt}</p>

				<div class="overflow-hidden rounded-lg">
					<Highlight language={javascript} code={form.data?.response?.choices[0]?.text} />
				</div>
			</section>
		{/if}
	</section>

	<form method="POST" class="flex flex-row gap-2" use:enhance={formSubmitEnhanceHandler}>
		<textarea
			name="the-code"
			id="theCode"
			placeholder="Your wish? (e.g.: Buatlah sebuah fungsi rekursif dengan javascript dengan nama isPalindrome untuk mengecek apakah sebuah string palindrome atau tidak)"
			class="h-24 w-full rounded-lg border border-gray-300 bg-gray-100 p-4 text-xl text-gray-800 focus:border-gray-500 focus:bg-white focus:outline-none"
		/>

		<button
			type="submit"
			class="w-48 rounded-lg bg-sky-200 py-2 px-4 transition-all duration-500 hover:bg-sky-400 hover:text-slate-100"
			>Submit</button
		>
	</form>
</section>
