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

<section>
	<Header />
	<Disclaimer />

	<form method="POST" class="flex flex-col gap-2" use:enhance={formSubmitEnhanceHandler}>
		<div>
			<textarea
				name="the-code"
				id="theCode"
				placeholder="Your wish? (e.g.: Buatlah sebuah fungsi rekursif dengan javascript dengan nama isPalindrome untuk mengecek apakah sebuah string palindrome atau tidak)"
				class="h-64 w-full rounded-lg border border-gray-300 bg-gray-100 p-4 text-xl text-gray-800 focus:border-gray-500 focus:bg-white focus:outline-none"
			/>
		</div>
		<div>
			<button
				type="submit"
				class="rounded-lg bg-sky-200 py-2 px-4 transition-all duration-500 hover:bg-sky-400 hover:text-slate-100"
				>Submit</button
			>
		</div>
	</form>

	<section class="py-4">
		{#if isLoading}
			<code class="animate-pulse">
				<pre>Hasil Kodenya akan terlihat di sini nanti ...</pre>
			</code>
		{/if}

		{#if form?.success && !isLoading}
			<Highlight language={javascript} code={form.data?.choices[0]?.text} />
		{/if}
	</section>
</section>
