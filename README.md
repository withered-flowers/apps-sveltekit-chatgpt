# Apps SvelteKit OpenAI (Codex)

## Disclaimer
- Aplikasi ini **bukan** menggunakan ChatGPT (GPT-3.5). API untuk ChatGPT belum direlease secara resmi oleh OpenAI secara langsung.
- Aplikasi ini menggunakan Open AI (Codex), yang berdasarkan GPT-3.
- Aplikasi ini dibuat hanya untuk mempelajari bagaimana API dari OpenAI (Codex) ini bekerja.

## Demo Website
https://apps-sveltekit-openai-codex.vercel.app

## Tech Stack
- [SvelteKit] (https://kit.svelte.dev/)
- [TailwindCSS] (https://tailwindcss.com/)
- [OpenAI - Codex] (https://openai.com/blog/openai-codex/)

## How To Use this?
1. Registrasi pada [OpenAI](https://beta.openai.com/account/api-keys) untuk mendapatkan API Key yang dibutuhkan
1. Fork repository ini
1. Deploy di tempat kesayangan sendiri (prefer yang sudah mendukung adapter-auto dari SvelteKit - Vercel / Netlify / Cloudflare Pages)
1. Jangan lupa pada saat deploy sematkan `environment variable` dengan nama `CHAT_GPT_TOKEN` yang isinya adalah API Key dari OpenAI.
1. Dan *voila* tunggu deploymentnya dan siap digunakan !